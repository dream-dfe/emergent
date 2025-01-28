import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import YoutubeVid from "@/components/common/YoutubeVid";

interface SearchParams {
  title: string;
  videoId: string;
  banner?: string;
  description?: string;
}

export default async function VideoContentPage(props: {
  searchParams: Promise<SearchParams>;
}) {
  // Await the resolution of the searchParams promise
  const searchParams = await props.searchParams;

  // Destructure the values from searchParams
  const { title, videoId, description } = searchParams;

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