interface ResponseOption {
  data: any,
  result: 0 | 1,
  exception?: string,
  msg?: string,
}

type Response = ResponseOption & {
  timestamp: number,
};

export const response: (obj: ResponseOption) => Response = (obj: ResponseOption) => {
  const defaultResponse = {
    data: obj.data,
    exception: obj.exception || '',
    msg: obj.msg || '',
    result: obj.result,
    timestamp: +new Date().valueOf(),
  } as Response;

  return defaultResponse;
};
