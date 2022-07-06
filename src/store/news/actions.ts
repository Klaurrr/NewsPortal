import getNews from "services/getNews";
import { Dispatch } from "redux";
import { IStoreNews } from "store/news/types";

export const setNewsAction = (list: IStoreNews['list']) => {
    return {
        type: 'news/setNews',
        payload: list,
    }
}


export const loadNews = () => async (dispatch: Dispatch) => {
    try {
        const response = await getNews();
        dispatch(setNewsAction(response.data.articles))
    } catch(e) {
        console.log(e, 'произошла ошибка');
    }
}