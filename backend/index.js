import express from "express";
import "dotenv/config";
import cors from "cors";
import apiRoutes from "./routes/api.route.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
	return res.json("server is running...");
});

app.use("/api", apiRoutes);

app.listen(PORT, () => console.log("server is running on PORT", PORT));
