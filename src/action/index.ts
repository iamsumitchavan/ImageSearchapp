export type ActionCreator<T = undefined> = (args: any) => {
  type: string;
  payload: T;
};

export const GETIMAGES = "GETIMAGES";
export const GetAllImages: ActionCreator<[]> = (Images: []) => ({
  type: GETIMAGES,
  payload: Images,
});

export const GETQUERY = "GETQUERY";

export const GetQueryAction: ActionCreator<string> = (query: string) => ({
  type: GETQUERY,
  payload: query,
});
