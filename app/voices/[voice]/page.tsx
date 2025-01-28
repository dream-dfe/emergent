import YoutubeVid from "../../../components/common/YoutubeVid";
import { VoicesList } from "@/lib/data";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default async function VoicePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const id = resolvedSearchParams.id;

  function filterVoicesById(id: string) {
    return VoicesList.filter((voice) => voice.id === id);
  }

  const filteredVoices = filterVoicesById(id as string);

  return (
    <>
      <Header />
      <section className="container my-12">
        {filteredVoices.map((voice) => (
          <div key={voice.id}>
            <div className="flex flex-col p-4">
              <p className="text-2xl font-semibold">Title: {voice.title}</p>
              <p className="text-muted-foreground">
                Speaker: {voice.facilitator}
              </p>
              <p className="text-muted-foreground">Event: {voice.event}</p>
              <p className="text-muted-foreground">Date: {voice.date}</p>
            </div>
            <YoutubeVid videoId={voice.videoId} title={voice.title} />
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
