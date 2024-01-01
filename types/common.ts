type IMeta = {
  limit: number;
  page: number;
  total: number;
};

type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type { IMeta, ResponseSuccessType };
