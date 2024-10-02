"use client";

import classnames from "classnames";

import Image from "next/image";
import { useState } from "react";
import { Play } from "react-feather";
import YouTube from "react-youtube";

interface VideoProps {
  height: number | string;
  width: number | string;
  src: string;
  title: string;
  video_id: string;
  video_height: string;
  video_width: string;
}

export default function Video({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width,
}: VideoProps) {
  const [play, setPlay] = useState(false);
  const videoOptions = { borderRadius: "16px", playerVars: { autoplay: 1 } };

  return (
    <>
      {!play ? (
        <div className="relative text-center">
          <button className="video-play-btn" onClick={() => setPlay(true)}>
            <Play />
          </button>
          <Image
            width={parseInt(String(width || "640px"))}
            height={parseInt(String(height || "480px"))}
            style={{ objectFit: "contain" }}
            src={src}
            alt={title || "Video Thumbnail"}
            className="inline h-auto max-w-full rounded-2xl"
          />
        </div>
      ) : (
        <div className="youtube mx-auto text-center">
          <YouTube
            videoId={video_id}
            opts={videoOptions}
            iframeClassName={classnames(
              "aspect-video max-w-full bg-transparent rounded-2xl",
              video_height,
              video_width
            )}
          />
        </div>
      )}
    </>
  );
}
