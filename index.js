import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

app.listen(PORT, () => console.log('Server Working!'));