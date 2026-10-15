import cors from "@elysia/cors";
import Elysia from "elysia";

const applyCors = new Elysia().use(cors({
    // 1. Restrict to specific origins (string, array, RegExp, or function)
      origin: ['https://example.com', 'https://admin.example.com'],
      
      // 2. Allowed HTTP methods
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      
      // 3. Allowed request headers
      allowedHeaders: ['Content-Type', 'Authorization'],
      
      // 4. Exposed response headers
      exposeHeaders: ['X-Custom-Header'],
      
      // 5. Allow credentials (cookies, authorization headers, TLS client certificates)
      credentials: true,

      // 6. Preflight cache duration in seconds
      maxAge: 600
}))