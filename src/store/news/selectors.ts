import { IStoreNews } from "store/news/types";

export const selectList = (state: {newsReducer: IStoreNews}): IStoreNews['list'] => state.newsReducer.list; 
