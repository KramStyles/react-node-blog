import React from "react";
import { useParams } from "react-router-dom";

import Data from './Data'

export default function ArticleList(){
    const {endpoint} = useParams();
    console.log('Name is: ' + endpoint);
    let Details;
    for (const key in Data) {
        if (Data[key]['country'] == endpoint) {
            Details = Data[key]['description'];
        }
    }
    return(
        <>
            <div className="container">
                <h2>This is the {endpoint.toUpperCase()}  page</h2>
                <p>{Details}</p>
            </div>
        </>
    )
}