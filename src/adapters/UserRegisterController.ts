import Elysia from "elysia";
import UserRegister from "../user/service/UserRegister";

export default class UserRegisterController {
	constructor(readonly server: Elysia, readonly UseCase: UserRegister) {
		server.post("/users", async ({ body }) => {
			const { name, email, password } = body as any;

			await UseCase.execute({ name, email, password });

			// return {
			// 	status: 201,
			// 	body: {
			// 		message: "User created successfully!"
			// 	}
			// };
		});
	}
}
