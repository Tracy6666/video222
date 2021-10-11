import React, { useState,useEffect } from 'react';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from '../hook/useVideo';

const App = () =>{
    
    const [selectedVideo,setSelectedVideo] = useState(null);
    //setSelectedVideo(response.data.items[4]);
    const [videos,search] = useVideo('Bedroom JJ');

    useEffect(() =>{
        setSelectedVideo(videos[4]);
    },[videos]);

// asdasasd
    return (    
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default App;