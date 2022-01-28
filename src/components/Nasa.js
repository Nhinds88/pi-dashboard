import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Nasa = props => {
    
    return (
        <div>
            <div className="k-mb-4">
                <div className="centerContent">
                    <div className="selfCenter spaceBetween standardWidth">
                        <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="NASA"
                        theme="dark"
                        options={{height: 400}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nasa;