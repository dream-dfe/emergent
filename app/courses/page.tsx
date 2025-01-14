import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import VideoSearch from "./video-search";
import { Separator } from "@/components/ui/separator";
import MySearches from "./video-searches";
import VideoList from "./video-list";
import { videoList } from "@/lib/data";
import { FloatingMessage } from "./floating-msg";

const CoursesPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Emergent Courses
          </h1>
          <VideoSearch />
          <MySearches />
          <Separator className="my-8" />
          <VideoList videos={videoList} />
        </div>
      </main>
      <Footer />
      <FloatingMessage />
    </div>
  );
};

export default CoursesPage;
