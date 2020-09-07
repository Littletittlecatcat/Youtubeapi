import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import Videolist from './VideoList';
import VideoDetail from './VideoDetails';

const KEY = 'AIzaSyCqELOgV__N7Ermb6OVUXdnMLm0xntFszE';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('千千');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResult: 5,
                key: KEY,
            },
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    onVideoSelected = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar callMeWhenFormSubmitted={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <Videolist
                                callMeWhenVideoSelected={this.onVideoSelected}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
