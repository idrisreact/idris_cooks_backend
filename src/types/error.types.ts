export interface ErrorStatus extends Error {
  error: number;
}

export class AppError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
