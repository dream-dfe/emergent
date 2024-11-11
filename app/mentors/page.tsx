import Footer from "@/components/common/Footer";
import { MentorCard } from "./mentor-card";
import Header from "@/components/common/Header";
import { mentorsList } from "./mentors-list-data";

export default function MentorsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="mb-8 text-center text-3xl font-bold">Our Mentors</h1>
        <div className="space-y-6">
          {mentorsList.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
