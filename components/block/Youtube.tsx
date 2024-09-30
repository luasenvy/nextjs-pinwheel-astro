"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YoutubeProps {
  id: string;
  title: string;
}

export default function Youtube({ id, title, ...rest }: YoutubeProps) {
  return <LiteYouTubeEmbed id={id} title={title} {...rest} wrapperClass="yt-lite rounded-md" />;
}
