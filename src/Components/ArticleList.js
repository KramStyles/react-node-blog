import React from "react";
import { useParams } from "react-router-dom";

export default function ArticleList(){
    const {endpoint} = useParams();
    console.log('Name is: ' + endpoint);
    return(
        <>
            <div className="container">
                <h2>This is the {endpoint}  page</h2>
            </div>
        </>
    )
}