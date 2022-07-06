import React, {useEffect} from "react";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";

import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "store/news/actions";
import { selectList } from "store/news/selectors";

import routeMain from "./routes";

import "./styles.scss";


const MainPage = () => {
    const dispatch = useDispatch();
    const newsList = useSelector(selectList);

    useEffect(() => {
        dispatch<any>(loadNews());
    }, [dispatch])

    return(
        <section className='mainPage'>
            <PageTitle
                title={
                    <h2>
                        Всегда <br/> свежие <span>новости</span>
                    </h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList.slice(0,6)}/>}
        </section>
    )
}


export {routeMain};

export default MainPage;