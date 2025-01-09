import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

// Endpoint: GET /places
app.get("/places", async (req: Request, res: Response) => {
  try {
    const fileContent = await fs.readFile("./data/places.json", "utf-8");
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } catch (error) {
    res.status(500).json({ message: "Error reading places data" });
  }
});

// Endpoint: GET /user-places
app.get("/user-places", async (req: Request, res: Response) => {
  try {
    const fileContent = await fs.readFile("./data/user-places.json", "utf-8");
    const places = JSON.parse(fileContent);
    res.status(200).json({ places });
  } catch (error) {
    res.status(500).json({ message: "Error reading user places data" });
  }
});

// Endpoint: PUT /user-places
app.put("/user-places", async (req: Request, res: Response): Promise<void> => {
  const places: unknown = req.body.places;

  if (!Array.isArray(places)) {
    res.status(400).json({ message: "Invalid data format" });
    return;
  }

  try {
    await fs.writeFile("./data/user-places.json", JSON.stringify(places));
    res.status(200).json({ message: "User places updated!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating user places" });
  }
});

// 404
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
