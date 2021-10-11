import React, { useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideo = ({defaultSearchTerm}) =>{
    const [videos,setVideo] = useState([]);

    useEffect(() =>{
        search(defaultSearchTerm);
    },[]);

    const search = async (term) => {
        //response object return information about the request such as data,headers, config
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideo(response.data.items);
        
    };
    return [videos,search];
};
export default useVideo;