import React from "react";

import NewsItem from './components/NewsItem';

import  INewsDetail from "types/INewsDetail";

import './styles.scss';

interface INewsListParams {
    list: INewsDetail[]; 
}

const NewsList: React.FC<INewsListParams> = ({list}) => (
    <div className="newsList">
        {list.slice(0, 15).map((news: INewsDetail) => (
            <NewsItem
            key={news._id}
            item={news}
            />
        ))}
    </div>
)





export default NewsList;