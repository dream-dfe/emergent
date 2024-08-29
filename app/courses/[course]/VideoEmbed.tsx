import React from "react";

type VideoEmbedProps = {
  videoUrl: string;
  title: string;
  width?: string;
  height?: string;
};

export default function VideoEmbed({
  videoUrl,
  title,
  width = "640px",
  height = "360px",
}: VideoEmbedProps) {
  return (
    <div className="my-4 flex justify-center">
      <iframe
        src={videoUrl}
        title={title}
        width={width}
        height={height}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg border border-gray-300 shadow-lg"
      />
    </div>
  );
}
