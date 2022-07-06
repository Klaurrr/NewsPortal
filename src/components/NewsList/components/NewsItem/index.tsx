import React from "react";

import { NavLink } from "react-router-dom";

import DateView from "components/DateView";

import {routeMain as routeNewsDetail} from "pages/NewsDetail";

import INewsDetail from 'types/INewsDetail'

import './styles.scss';


interface INewsItemParams {
    item: INewsDetail
}

const NewsItem: React.FC<INewsItemParams> = ({item}) => (
    <NavLink className="newsItem" to={routeNewsDetail(item._id)}>
        <div className="title">
            {item.title}
        </div>
        <div className="bottomWrapper">
            <p className="source">{item.clean_url}</p>
            <DateView value={item.published_date}/>
        </div>
    </NavLink>
)


export default NewsItem;