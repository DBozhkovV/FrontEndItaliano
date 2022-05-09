import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./News";
import "./app.css";

const NewsBackground = () => (
    <div className='NewsBackground'>
        <NewsContextProvider>
            <News />
        </NewsContextProvider>
    </div>
);

export default NewsBackground;