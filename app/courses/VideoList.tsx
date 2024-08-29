
import { VideoType } from '@/types'
import VideoCard from './VideoCard'

export default function VideoList({videos} : {videos: VideoType[]}) {
  return (
    <section className="mx-auto max-w-screen-xl flex-1 space-y-10 px-4">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        { videos.length > 0 ? videos.map((video) => (
         <VideoCard video={video} key={video.id} />
        )) : (
          <div>
            <h2 className="text-center text-2xl">No Products Found!</h2>
          </div>
        ) }
      </div>
    </section>
  )
}
