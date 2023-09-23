import User from "../../user/model/User";
import UserRepository from "../../user/service/UserRepository";

export default class MemoryUserRepository implements UserRepository {
	private readonly users: User[] = [];

	async consultByEmail(email: string): Promise<User | null> {
		const user = this.users.find((user) => user.email === email);

		return user || null;
	}

	async create(user: User): Promise<User> {
		const newUser = { ...user, id: Math.random() };

		this.users.push(newUser);

		return newUser;
	}
}
