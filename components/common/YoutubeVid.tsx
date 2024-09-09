"use client";

import { useEffect, useRef, useState } from "react";

const YoutubeVid = ({ videoId, title }: { videoId: string; title: string }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, [videoRef]);

  return (
    <div ref={videoRef} className="relative h-0 overflow-hidden pb-[56.25%]">
      {load ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&iv_load_policy=3`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default YoutubeVid;
