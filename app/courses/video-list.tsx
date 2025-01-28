"use client";

import { VideoType } from "@/types";
import VideoCard from "./video-card";
import { useEffect, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";

export default function VideoList({ videos }: { videos: VideoType[] }) {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(
    new Set(videos.flatMap((video) => video.hashtags || [])),
  );

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filterVideos = useCallback(() => {
    if (selectedTags.length === 0) {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(
        videos.filter((video) =>
          selectedTags.every((tag) => video.hashtags?.includes(tag)),
        ),
      );
    }
  }, [selectedTags, videos]);

  useEffect(() => {
    filterVideos();
  }, [filterVideos]);

  return (
    <section className="mx-auto max-w-screen-xl flex-1 space-y-10 px-4">
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Filter by Tags:</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))
        ) : (
          <div className="col-span-full">
            <h2 className="text-center text-2xl">No Videos Found!</h2>
          </div>
        )}
      </div>
    </section>
  );
}
