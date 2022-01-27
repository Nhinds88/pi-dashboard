import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Calendar = props => {
    
    return (
        <div>
            <div className="k-mb-4">
                <div className="centerContent">
                    <div className="selfCenter spaceBetween standardWidth">
                        <TwitterTimelineEmbed
                        sourceType="timeline"
                        id="539487832448843776"
                        theme="dark"
                        options={{height: 400}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;