import Footer from "@/components/common/Footer";
import { MentorCard } from "./mentor-card";
import Header from "@/components/common/Header";

const mentors = [
  {
    image: "/img/mentors/psk.png",
    name: "Karen Victor ministers",
    jobTitle: "Pastor",
    organization: "Karen Victor Ministers",
    biography:
      "Karen Victor ministers on various platforms in South Africa and abroad. She has ministered in more than 35 nations. She runs and facilitates workshops and seminars for companies, organisations and families focusing on personal development and transformation journeys, leadership development, wellness, time management, etc. She loves people and finds great joy in bringing kingdom solutions to companies, families and individuals. Years of experience in various businesses and ministry has proved to be very beneficial. She is an engaging speaker who has addressed groups varying in size from 20 to tens of thousands. Karen has a BComm degree from UCT.",
  },
  {
    image: "/img/mentors/basha.png",
    name: "Bashanganyi Magwape",
    jobTitle: "Co-founder",
    organization: "Meeticks.",
    biography:
      "Bashanganyi Magwape is a digital entrepreneur, based in Botswana, whose expertise lies where innovation, communication and technology meet.He is the co-founder of Meeticks, an e-commerce platform delivered over WhatsApp that enables micro-vendors access to the digital economy.Bashanganyi contributes to the innovation ecosystem by consulting on digital marketing, digital technologies and digital commerce; providing advisory & technical solutions for digital transformation for SME’s across Southern Africa.He is an entrepreneur driven by the vision of seeing a prosperous, self-sufficient Africa, creating solutions relevant to her people.",
  },
];

export default function MentorsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="mb-8 text-center text-3xl font-bold">Our Mentors</h1>
        <div className="space-y-6">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
