import type { Express, Request, Response } from "express";

export default function QueryParameters(app: Express) {
  // e.g. /lab5/calculator?operation=add&a=34&b=23
  const calculator = (req: Request, res: Response) => {
    const { a, b, operation } = req.query;
    const x = parseInt(a as string);
    const y = parseInt(b as string);
    let result: number | string = 0;
    switch (operation) {
      case "add":
        result = x + y;
        break;
      case "subtract":
        result = x - y;
        break;
      case "multiply":
        result = x * y;
        break;
      case "divide":
        result = x / y;
        break;
      default:
        result = "Invalid operation";
    }
    res.send(result.toString());
  };
  app.get("/lab5/calculator", calculator);
}
