const jobViews = [
    {
        id: 1, 
        job: "BBC", 
        views: 150,
    },
    {
        id: 2,
        job: "Twitter",
        Views: 25,
    },
    {
        id: 3,
        job: "NPR", 
        views: 69,
    },
    {
        id: 4,
        job: "???",
        views: 45,
    },
];

const TotalJobViews = props => {
    return (
        <div>
            <div className="">
                <ul className="totalJobViewsGrid">
                    {jobViews.map((job) => {
                        return (
                            <li className="jobViewsBlock" key={job.id}>
                                <span className="jobTitle">{job.job}</span>

                                <div className="jobViewsContainer">
                                    <span className="jobsViews">{job.views}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TotalJobViews;