import React from "react";
import { Link } from "react-router-dom";
import Data from './Data'

const ArticlePage = () => (
    <>
        <div className="container">
            <h2>This is the Article Page</h2>
            <a href="/list">Article List With Reload</a> <br/>
            <Link to="/list">Article List Without Reload</Link> <br/>

            {Data.map(item => (
                // <Link to={'/list/'+item.country}><br/>{item.country}</Link>
                <Link to={`/list/${item.country}`}>
                    <br/>
                    <h3>{item.country}</h3>
                    <p>{item.description.substring(0, 100)}...</p>
                </Link>
            ))}
        </div>
    </>
);

export default ArticlePage;