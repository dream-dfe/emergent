'use client'

import { useEffect, useRef, useState } from 'react';

type Props = {
  videoId: string;
};

const YoutubeVid = ({ videoId }: Props) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    const currentVideoRef = videoRef.current; // Store the current value

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
    <div ref={videoRef}>
      {load ? (
        <iframe
          width="100%"
          height="720"
          src={`https://www.youtube.com/embed/${videoId}`} 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default YoutubeVid;
