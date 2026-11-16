import type { Express, Request, Response } from "express";

export default function PathParameters(app: Express) {
  // Path parameters arrive as strings in req.params, so we parse them.
  // We send results with .toString() because res.send(number) would be
  // treated as an HTTP status code.
  const add = (req: Request, res: Response) => {
    const { a, b } = req.params as Record<string, string>;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
  };
  const subtract = (req: Request, res: Response) => {
    const { a, b } = req.params as Record<string, string>;
    const difference = parseInt(a) - parseInt(b);
    res.send(difference.toString());
  };
  const multiply = (req: Request, res: Response) => {
    const { a, b } = req.params as Record<string, string>;
    const product = parseInt(a) * parseInt(b);
    res.send(product.toString());
  };
  const divide = (req: Request, res: Response) => {
    const { a, b } = req.params as Record<string, string>;
    const quotient = parseInt(a) / parseInt(b);
    res.send(quotient.toString());
  };
  app.get("/lab5/add/:a/:b", add);
  app.get("/lab5/subtract/:a/:b", subtract);
  app.get("/lab5/multiply/:a/:b", multiply);
  app.get("/lab5/divide/:a/:b", divide);
}
