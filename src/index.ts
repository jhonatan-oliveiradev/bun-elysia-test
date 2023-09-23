import { Elysia } from "elysia";
import MemoryUserRepository from "./external/memory/MemoryUserRepository";
import UserRegister from "./user/service/UserRegister";
import UserRegisterController from "./adapters/UserRegisterController";

const app = new Elysia();

// Register Routes

const userRepository = new MemoryUserRepository();
const userRegister = new UserRegister(userRepository);
new UserRegisterController(app, userRegister);

app.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
