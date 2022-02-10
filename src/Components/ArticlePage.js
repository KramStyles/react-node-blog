import React from "react";
import { Link } from "react-router-dom";

const ArticlePage = () => (
    <>
        <div className="container">
            <h2>This is the Article Page</h2>
            <a href="/list">Article List With Reload</a> <br/>
            <Link to="/list">Article List Without Reload</Link>
        </div>
    </>
);

export default ArticlePage;