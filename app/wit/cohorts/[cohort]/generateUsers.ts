import { faker } from '@faker-js/faker';

export interface User {
  id: string;
  name: string;
  avatar: string;
  profileLink: string;
  linkedin: string;
  email: string;
  website: string;
}

export function generateUsers(count: number): User[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    profileLink: faker.internet.url(),
    linkedin: `https://www.linkedin.com/in/${faker.internet.userName()}`,
    email: faker.internet.email(),
    website: faker.internet.url(),
  }));
}

