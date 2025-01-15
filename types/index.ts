import { programmes } from "@/db/schema";

export type VoiceType = {
  id: string;
  title: string;
  img: string;
  event: string;
  date: string;
  videoId: string;
  slug: string;
  facilitator: string;
  hashtags: string[];
};

export type ProgramDataType = {
  id: string;
  title: string;
  imageSrc: string;
  descr: string;
  status: string;
  url?: string;
  slug?: string;
  pathUrl?: string;
  btnTitle: string;
};

export type ProgramesType = typeof programmes.$inferInsert;

export type Roles = "admin" | "user" | "student" | "manager";

export type AuthUser = {
  id: string;
  banned: boolean;
  createdAt: number;
  updatedAt: number;
  imageUrl: string;
  hasImage: boolean;
  lastSignInAt: number;
  firstName: string;
  lastName: string;
  publicMetadata: {
    role: string;
  };
  emailAddresses: EmailAddress[];
  phoneNumbers: PhoneNumber[];
  lastActiveAt: number;
};

interface EmailAddress {
  id: string;
  emailAddress: string;
}

interface PhoneNumber {
  object: string;
  phone_number: string;
}


export type CourseType = {
  id: string,
  title: string
  videoUrl: string
  description: string
}

export type VideoType = {
  id: string,
  title: string
  slug: string
  videoId: string
  banner: string
  description: string
  hashtags: string[],
}