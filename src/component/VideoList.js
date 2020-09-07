import React from 'react';
import VideoItems from './VideoItems';

const Videolist = ({ videos, callMeWhenVideoSelected }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItems
                key={video.id.videoId}
                onVideoSelected={callMeWhenVideoSelected}
                video={video}
            />
        );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default Videolist;
