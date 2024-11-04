import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

// Define the Mentor type
type Mentor = {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  calendlyUrl: string;
};

// Sample data for mentors
const mentors: Mentor[] = [
  {
    id: 1,
    name: "Karen Victor",
    category: "Personal Development",
    imageUrl: "/img/mentors/psk.png",
    calendlyUrl: "https://calendly.com/psk",
  },
  {
    id: 2,
    name: "Bashanganyi Magwape",
    category: "Digital",
    imageUrl: "/img/mentors/basha.png",
    calendlyUrl: "https://calendly.com/john-smith",
  },

  // Add more mentors as needed
];

export default function Bookings() {
  const { sessionClaims } = auth();

  const allowedRoles = ["admin", "student", "manager"];

  if (!allowedRoles.includes(sessionClaims?.metadata.role)) {
    redirect("/");
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Book a Mentor</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="flex flex-col">
              <CardContent className="">
                <div className="relative mb-4 aspect-square">
                  <Image
                    src={mentor.imageUrl}
                    alt={`${mentor.name}'s profile picture`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h2 className="mb-2 text-xl font-semibold">{mentor.name}</h2>
                <p className="text-muted-foreground">
                  Sessions: {mentor.category}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full" asChild>
                  <a
                    href={mentor.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Session
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
