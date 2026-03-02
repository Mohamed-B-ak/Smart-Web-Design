import { contactRequests, type InsertContactRequest, type ContactRequest } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactRequest(contactRequest: InsertContactRequest): Promise<ContactRequest>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(insertContactRequest: InsertContactRequest): Promise<ContactRequest> {
    if (!db) {
      throw new Error("Database is not configured. Set DATABASE_URL to enable this feature.");
    }
    const [contactRequest] = await db
      .insert(contactRequests)
      .values(insertContactRequest)
      .returning();
    return contactRequest;
  }
}

export const storage = new DatabaseStorage();
