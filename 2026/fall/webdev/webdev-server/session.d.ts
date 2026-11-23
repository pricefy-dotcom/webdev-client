// Tells TypeScript that our session can hold the signed-in user.
import "express-session";

declare module "express-session" {
  interface SessionData {
    currentUser?: any;
  }
}
