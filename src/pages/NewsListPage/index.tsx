import React, {useEffect} from "react";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";

import { useDispatch, useSelector } from "react-redux";
import { selectList } from "store/news/selectors";
import { loadNews } from "store/news/actions";

import routeMain from "./routes";

import "./styles.scss"

const NewsListPage = () => {
    const dispatch = useDispatch();
    const newsList = useSelector(selectList);

    useEffect(() => {
        dispatch<any>(loadNews());
    }, [dispatch])
    return(
        <section className='NewsListPage'>
            <PageTitle
                title={
                    <h2>
                       Быть <br/> в курсе <span>событий</span>
                    </h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList}/>}
        </section>
    )
}


export {routeMain}

export default NewsListPage;