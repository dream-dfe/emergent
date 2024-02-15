export type VoiceType = {
    id: string;
    title: string;
    img: string
    event: string;
    date: string;
    videoId: string;
    slug: string
    facilitator: string
}




export type ProgramDataType =  {
    id: string;
    title: string;
    imageSrc: string;
    descr: string;
    status: string;
    url?: string;
    slug?: string;
    pathUrl?: string;
    btnTitle: string;
  }