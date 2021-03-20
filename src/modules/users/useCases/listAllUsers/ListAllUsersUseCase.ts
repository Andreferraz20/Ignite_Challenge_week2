import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdmin = this.usersRepository.findById(user_id);
    if (userAdmin.admin === true) {
      const users = this.usersRepository.list();
      console.log("ADMIN");
      return users;
    }

    throw new Error("Mensagem do erro");
  }
}

export { ListAllUsersUseCase };
