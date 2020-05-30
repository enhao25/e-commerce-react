import React from 'react';
import { withRouter } from "react-router";

import './MenuItem.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

// By using withRouter, we now have access to the router's specific props such as history
export default withRouter(MenuItem);