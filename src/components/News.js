import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = props => {
    const [newsHeadline, getNewsHeadline] = useState({ articles: [] });
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios (
                'https://newsapi.org/v2/top-headlines?country=us&apiKey=8c9e92723c4e42a6876dc527424bd005'
            );
            getNewsHeadline(result.data);
        };
        fetchData();
    }, []);
    const i = 0;
    return (
        <div>
            <div className="">
                <ul className="newsGrid">
                    {newsHeadline.articles.slice(0, 4).map(headline => (
                        <li className="newsBlock" key={headline.publishedAt.toString()}>
                            <h4>{ headline.source.name }</h4>
                            <p>{ headline.title }</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default News;