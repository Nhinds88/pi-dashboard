const news = [
    {
        id: 1, 
        site: "BBC", 
        views: 150,
    },
    {
        id: 2,
        site: "Twitter",
        Views: 25,
    },
    {
        id: 3,
        site: "NPR", 
        views: 69,
    },
    {
        id: 4,
        site: "???",
        views: 45,
    },
];

const News = props => {
    return (
        <div>
            <div className="">
                <ul className="newsGrid">
                    {news.map((site) => {
                        return (
                            <li className="newsBlock" key={site.id}>
                                <span className="newsTitle">{site.site}</span>

                                <div className="newsContainer">
                                    <span className="news">{site.views}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default News;