export type ErrorResponse = {
  stack?: string;
  message: string;
};

export type DataResponse<T> = {
  data: T;
};
