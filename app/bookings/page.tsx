import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import BookingsCards from "./bookings-cards";

export default function Bookings() {
  const { sessionClaims } = auth();

  const allowedRoles = ["admin", "student", "manager"];

  if (!allowedRoles.includes(sessionClaims?.metadata.role)) {
    redirect("/");
  }

  return (
    <>
      <Header />
      <BookingsCards />
      <Footer />
    </>
  );
}
