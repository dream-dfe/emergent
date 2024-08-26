import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CoursesPage = () => {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }

  return (
    <>
      <Header />
      <div className="bg-yellow-400 py-12 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
          Emergent Courses Page
        </h2>
        <p className="mb-4 text-xl font-extrabold">Work in progress ⚒</p>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
