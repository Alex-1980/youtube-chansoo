import React from "react";
import { useNavigate } from "react-router-dom";
import TimeAgo from "timeago-react";

const VideoCard = ({ video, type }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';

  return (
    <li
      className={`cursor-pointer ${isList ? 'flex gap-1 mx-3 mb-3' : ''}`}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img className={`rounded-xl ${isList ? 'w-60 mr-2' : 'w-full'}`} src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <TimeAgo className="text-sm opacity-80" datetime={publishedAt} />
      </div>
    </li>
  );
};

export default VideoCard;
