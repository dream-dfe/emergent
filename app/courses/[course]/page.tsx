import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import YoutubeVid from "@/app/voices/[voice]/YoutubeVid";

interface SearchParams {
  title: string;
  videoId: string;
  banner?: string;
  description?: string;
}

export default function VideoContentPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { sessionClaims } = auth();
  const { title, videoId, description } = searchParams;

  const allowedRoles = ["admin", "student", "manager"];

  if (!allowedRoles.includes(sessionClaims?.metadata.role)) {
    redirect("/");
  }
  return (
    <>
      <Header />
      <section className="mx-auto my-5 max-w-screen-xl md:my-24">
        <YoutubeVid videoId={videoId} title={title} />
        <div className="space-y-5">
          <h2 className="font-semibold">{title}</h2>
          <p>{description}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
