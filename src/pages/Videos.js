import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { PacmanLoader } from "react-spinners";

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });

  return (
    <>
      {isLoading && <PacmanLoader color="#36d7b7" size={50} />}
      {error && <p>Something is wrong 😒</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
