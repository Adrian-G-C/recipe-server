import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, passwrod } = req.body;
    const user = await UserModel.findOne({ username });
    res.json(user);
});

router.post("/login");

export { router as userRouter };