import React, { useState, useEffect } from 'react';

const News = props => {
    const [newsHeadline, getNewsHeadline] = useState([]);

    const news_apiKey = process.env.NEWS_API;
    // const news_apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_apiKey}`
    const news_apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8c9e92723c4e42a6876dc527424bd005'

    useEffect(() => {
          fetch(news_apiUrl)
          .then((res) => res.json())
          .then((data) => getNewsHeadline(data.articles));
      }, [news_apiUrl]);
    
    return (
        <div>
            <div className="">
                <ul className="newsGrid">
                    <li className="newsBlock" >
                        <h4>{ newsHeadline[0].source.name }</h4>
                        <p>{ newsHeadline[0].title }</p>
                    </li>
                    <li className="newsBlock" >
                        <h4>{ newsHeadline[1].source.name }</h4>
                        <p>{ newsHeadline[1].title }</p>
                    </li>
                    <li className="newsBlock" >
                        <h4>{ newsHeadline[2].source.name }</h4>
                        <p>{ newsHeadline[2].title }</p>
                    </li>
                    <li className="newsBlock" >
                        <h4>{ newsHeadline[3].source.name }</h4>
                        <p>{ newsHeadline[3].title }</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default News;