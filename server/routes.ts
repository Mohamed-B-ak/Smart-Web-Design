import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(httpServer: Server, app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(data);
      res.status(200).json(contactRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res
          .status(400)
          .json({ message: "Invalid input", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });
  // Endpoint pour n8n
  app.post("/api/articles", async (req, res) => {
    try {
      const { blog_text, primary_keyword, secondary_keywords } = req.body;
      const article = await storage.createArticle({
        blogText: blog_text,
        primaryKeyword: primary_keyword,
        secondaryKeywords: JSON.stringify(secondary_keywords),
      });
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Endpoint pour React
  app.get("/api/articles", async (req, res) => {
    try {
      const allArticles = await storage.getArticles();
      res.status(200).json(allArticles);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
