import Container from "@/components/common/Container";
import YoutubeVid from "./YoutubeVid";
import { VoicesList } from "@/lib/data";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default async function VoicePage({
  params,
  searchParams,
}: {
  params: { lecture: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams.id;

  function filterVoicesById(id: string) {
    return VoicesList.filter((voice) => voice.id === id);
  }

  const filteredVoices = filterVoicesById(id as string);

  return (
    <>
      <Header />
      <section className="container">
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
            <YoutubeVid videoId={voice.videoId} />
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
