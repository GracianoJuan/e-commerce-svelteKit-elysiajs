import Elysia, { t } from "elysia";
import { authService } from "./auth.service";
import { loginSchema } from "./auth.model";
import { AuthenticationError, UserNotFoundError } from "../../utils/errorMsg";

export const authRoutes = new Elysia({ prefix: '/auth' })
    .error({
        AUTH_FAILED: AuthenticationError,
        NOT_FOUND: UserNotFoundError
    })
    .onError(({ code, error, set }) => {
        switch (code) {
            case 'AUTH_FAILED':
                set.status = 401; // Unauthorized
                return { success: false, error: error.message };
            case 'NOT_FOUND':
                set.status = 404; // Not Found
                return { success: false, error: error.message };
            default:
                // Unmapped error
                set.status = 500;
                return { success: false, error: "Internal Server Error" };
        }
    })
    .get('/', () => 'Hello Auth')
    .post('/login', async ({ body, set }) => {
        try {
            const result = await authService.Login(body)
            return { success: true, data: result }
        } catch (err: any) {
            // Use Elysia's clean error response helper
            return err(401, { success: false, message: err.message })
        }
    }, {
        body: loginSchema,
        response: {
            200: t.Object({ success: t.Boolean(), data: t.Object({ token: t.String() }) }),
            401: t.Object({ success: t.Boolean(), message: t.String() })
        }
    })
