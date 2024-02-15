import Container from "@/components/common/Container";
import YoutubeVid from "./YoutubeVid";
import { VoicesList } from "@/lib/data";

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
    <Container>
      {filteredVoices.map((voice) => (
        <>
          <div className="flex flex-col p-4" key={voice.id}>
            <p className=" font-semibold">Title: {voice.title}</p>
            <p className=" font-semibold">Speaker: {voice.facilitator}</p>
            <p className=" font-semibold">Event: {voice.event}</p>
            <p className=" font-semibold">Date: {voice.date}</p>
          </div>
          <YoutubeVid videoId={voice.videoId} />
        </>
      ))}
    </Container>
  );
}
