import express from "express";
const router = express.Router();

router.post("/create-tokens", (req, res) => {
	try {
		const body = req.body;

		res.json(body);
	} catch (error) {
		console.error(error);
	}
});

export default router;
