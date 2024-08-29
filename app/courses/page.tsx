import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SearchComponent from "./SearchComponent";
import { Separator } from "@/components/ui/separator";
import MySearches from "./MySearches";
import VideoList from "./VideoList";
import { videoList } from "@/lib/data";

const CoursesPage = () => {
  const { sessionClaims } = auth();

  const allowedRoles = ["admin", "student", "manager"];

  if (!allowedRoles.includes(sessionClaims?.metadata.role)) {
    redirect("/");
  }

  return (
    <>
      <Header />
      <SearchComponent />
      <MySearches />

      <VideoList videos={videoList} />
      <Separator className="my-5" />
      <Footer />
    </>
  );
};

export default CoursesPage;
