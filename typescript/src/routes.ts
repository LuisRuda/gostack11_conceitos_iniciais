import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: "Luis",
    email: "luispauloruda@gmail.com",
    password: "123456",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      { title: "JavaScript", experience: 100 },
    ],
  });

  return res.json({ message: "Hello World" });
}
