import express from "express";
const router = express.Router();

router.get("/create-tokens", (req, res) => {
	try {
		res.json({ message: "create tokens" });
	} catch (error) {
		console.error(error);
	}
});

export default router;
