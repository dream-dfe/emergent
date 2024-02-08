export type lectureType = {
    id: number;
    title: string;
    img: string
    module: number;
    lecture: string;
    url: string;
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