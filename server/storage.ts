import {
  contactRequests,
  articles,
  type InsertContactRequest,
  type ContactRequest,
  type Article,
  type InsertArticle,
} from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactRequest(
    contactRequest: InsertContactRequest,
  ): Promise<ContactRequest>;
  createArticle(article: InsertArticle): Promise<Article>;
  getArticles(): Promise<Article[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(
    insertContactRequest: InsertContactRequest,
  ): Promise<ContactRequest> {
    if (!db) throw new Error("Database not configured");
    const [contactRequest] = await db
      .insert(contactRequests)
      .values(insertContactRequest)
      .returning();
    return contactRequest;
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    if (!db) throw new Error("Database not configured");
    const [article] = await db
      .insert(articles)
      .values(insertArticle)
      .returning();
    return article;
  }

  async getArticles(): Promise<Article[]> {
    if (!db) throw new Error("Database not configured");
    return await db.select().from(articles).orderBy(articles.createdAt);
  }
}

export const storage = new DatabaseStorage();
