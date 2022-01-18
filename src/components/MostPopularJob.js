import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartArea,
} from "@progress/kendo-react-charts";

const COLORS = {
    rejected: "#B91C1C",
    applied: "#D97706",
    interviewing: "#2563EB",
};

const getPercentage = (num, total) =>
    Math.round((num / total) * 100).toFixed(2);

const numApplied = 75;
const numInterviewing = 24;
const numRejected = 46;
const totalApplicants = numApplied + numInterviewing + numRejected;

const applicants = [
    {
        status: "Applied",
        value: getPercentage(numApplied, totalApplicants),
        color: COLORS.applied,
    },
    {
        status: "Interviewing",
        value: getPercentage(numInterviewing, totalApplicants),
        color: COLORS.interviewing,
    },
    {
        status: "Rejected",
        value: getPercentage(numRejected, totalApplicants),
        color: COLORS.rejected,
    },
];

const renderTooltip = context => {
    const { category, value } = context.point || context;
    return (
        <div>
            {category}: {value}%
        </div>
    );
};

const MostPopularJob = props => {
    return (
        <div>
            <div className="k-mb-4">
                Your most popular job is "Full-Stack Developer"
            </div>

            <Chart style={{ background: "#000", minHeight: "20rem" }}>
                <ChartTitle text="Application status - this month" />
                <ChartLegend visible={false} />
                <ChartArea 
                    background="#000"
                >
                    <ChartSeries>
                        <ChartSeriesItem
                            type="donut"
                            data={applicants}
                            categoryField="status"
                            fields="value"
                            background="#000"
                        >
                            <ChartSeriesLabels
                                color="#fff"
                                background="none"
                                content={e => e.category}
                            />
                        </ChartSeriesItem>
                    </ChartSeries>
                </ChartArea>
            </Chart>
        </div>
    );
};

export default MostPopularJob;