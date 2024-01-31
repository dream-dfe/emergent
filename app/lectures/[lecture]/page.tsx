import Container from "@/components/common/Container";
import YoutubeVid from "./YoutubeVid";


export default async function StorePage({
    params,
    searchParams,
  }: {
    params: { lecture: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    

  
    return (
      <Container>
        <div className="flex flex-col p-4">
        
        <p className=" font-semibold">Module: {searchParams.lecture}</p>
        <p className=" font-semibold">Facilitator: {searchParams.facilitator}</p>
        <p className=" font-semibold">Topic: {searchParams.module}</p>
      </div>
       <YoutubeVid videoId={"5WrIADX8Zs4"}/>
      </Container>
    );
  }