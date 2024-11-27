import express, { Application } from "express";

import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorhandler";
import notFound from "./app/middleware/notFound";
const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/", router);
app.use(globalErrorHandler);
app.use(notFound);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });

export default app;
