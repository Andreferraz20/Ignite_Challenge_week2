import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IHeaders extends IncomingHttpHeaders {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers as IHeaders;
    try {
      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(all);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { ListAllUsersController };
