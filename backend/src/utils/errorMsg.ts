export class AuthenticationError extends Error {
  constructor(message = "Invalid username or password") {
    super(message);
    this.name = "AuthenticationError";
  }
}

export class UserNotFoundError extends Error {
  constructor(message = "No account found with this email") {
    super(message);
    this.name = "UserNotFoundError";
  }
}
