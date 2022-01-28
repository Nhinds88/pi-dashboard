import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Safemoon = props => {
    
    return (
        <div>
            <div className="k-mb-4">
                <div className="centerContent">
                    <div className="selfCenter spaceBetween standardWidth">
                        <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="safemoon"
                        theme="dark"
                        options={{height: 400}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safemoon;