export class ApiError extends Error {
  constructor(msg, statusCode, details) {
    super(msg);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }
}
