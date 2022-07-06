import { AnyAction } from "redux";
import { IStoreNews } from "store/news/types";


const initialState = {
    list: [],
}

const newsReducer = (state: IStoreNews = initialState, action: AnyAction) => {
    switch(action.type) {
        case "news/setNews" :
            return {...state, list: [...action.payload]}
        default :
            return state;
    }
}

export default newsReducer;