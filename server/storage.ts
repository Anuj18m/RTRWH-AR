import { type UserSubmission, type UserInput, type CalculationResults } from "@shared/schema";
import { randomUUID } from "crypto";

// Storage interface for rainwater harvesting calculations
export interface IStorage {
  saveSubmission(userInputs: UserInput, calculationType: 'rainwater' | 'recharge', results: CalculationResults): Promise<UserSubmission>;
  getSubmission(id: string): Promise<UserSubmission | undefined>;
  getRecentSubmissions(limit?: number): Promise<UserSubmission[]>;
}

// Database storage implementation (disabled for now due to TypeScript config issues)
// TODO: Fix drizzle-neon TypeScript configuration and re-enable
/*
export class DatabaseStorage implements IStorage {
  private db;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    const sql = neon(process.env.DATABASE_URL);
    this.db = drizzle(sql);
  }

  async saveSubmission(userInputs: UserInput, calculationType: 'rainwater' | 'recharge', results: CalculationResults): Promise<UserSubmission> {
    const id = randomUUID();
    const submission: InsertUserSubmission = {
      id,
      userInputs,
      calculationType,
      results,
    };
    
    const [inserted] = await this.db.insert(userSubmissions).values(submission).returning();
    return inserted;
  }

  async getSubmission(id: string): Promise<UserSubmission | undefined> {
    const result = await this.db.select().from(userSubmissions).where(eq(userSubmissions.id, id));
    return result[0];
  }

  async getRecentSubmissions(limit = 10): Promise<UserSubmission[]> {
    const submissions = await this.db
      .select()
      .from(userSubmissions)
      .orderBy(desc(userSubmissions.createdAt))
      .limit(limit);
    return submissions;
  }
}
*/

// Fallback in-memory storage for development
export class MemStorage implements IStorage {
  private submissions: Map<string, UserSubmission>;

  constructor() {
    this.submissions = new Map();
  }

  async saveSubmission(userInputs: UserInput, calculationType: 'rainwater' | 'recharge', results: CalculationResults): Promise<UserSubmission> {
    const id = randomUUID();
    const submission: UserSubmission = {
      id,
      userInputs,
      calculationType,
      results,
      createdAt: new Date()
    };
    this.submissions.set(id, submission);
    return submission;
  }

  async getSubmission(id: string): Promise<UserSubmission | undefined> {
    return this.submissions.get(id);
  }

  async getRecentSubmissions(limit = 10): Promise<UserSubmission[]> {
    const submissions = Array.from(this.submissions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
    return submissions;
  }
}

// Use memory storage for now (database configuration can be improved later)
const storage: IStorage = new MemStorage();
console.log("⚠ Using in-memory storage (development mode)");

export { storage };
