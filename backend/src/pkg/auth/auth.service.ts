import { loginDto, registerDto } from "./auth.model";
import { AuthenticationError } from "../../utils/errorMsg";

export class AuthService {
    async Login(body: { email: string; password: string; }) {
        // Find user account
        let user = { email: '', password: '' }

        if (!user || (await Bun.password.verify(body.password, user.password, "bcrypt"))) {
            throw new AuthenticationError()
        }
    }

    async Register(body: { username: string, email: string, password: string }) {
        const passwordHash = await Bun.password.hash(body.password, "bcrypt")

        // Insert new user to database
    }
    async ChangePassword() { }

    async CheckSession() { }
}
export const authService = new AuthService