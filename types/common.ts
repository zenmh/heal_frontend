type TMeta = {
  limit: number;
  page: number;
  total: number;
};

type TGenericSuccessResponse = {
  data: any;
  meta?: TMeta;
};

type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TGenericErrorMessage[];
};

export type { TMeta, TGenericSuccessResponse, TGenericErrorResponse };
