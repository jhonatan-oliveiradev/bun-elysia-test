import UseCase from "../../core/shared/UseCase";
import UserRepository from "./UserRepository";

type Input = {
	name: string;
	email: string;
	password: string;
};

export default class UserRegister implements UseCase<Input, void> {
	constructor(private readonly repository: UserRepository) {}

	async execute(data: Input): Promise<void> {
		const { name, email, password } = data;

		const userExists = await this.repository.consultByEmail(email);
		if (userExists) {
			throw new Error("User already exists");
		}

		await this.repository.create({ name, email, password });
	}
}
