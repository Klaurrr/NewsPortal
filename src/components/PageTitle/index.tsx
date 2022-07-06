import React from "react";

import "./styles.scss";


interface IPageTitleParams {
    title: JSX.Element | string
}

const PageTitle: React.FC<IPageTitleParams> = ({title}) => <div className="pageTitle">{title}</div>


export default PageTitle;
