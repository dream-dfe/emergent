"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { mentorsList } from "../mentors/mentors-list-data"

type MentorType = {
  image: string
  name: string
  jobTitle?: string
  organization?: string
  biography: string
  category?: string
  calendlyUrl?: string
}

export default function BookingsCards() {
    const [selectedMentor, setSelectedMentor] = useState<MentorType | null>(null)
  return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold text-center mb-8">Our Mentors</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mentorsList.map((mentor, index) => (
        <Card key={index} className="flex flex-col h-full">
          <CardHeader className="flex-grow">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={mentor.image} alt={mentor.name} />
                <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{mentor.name}</CardTitle>
                <CardDescription>{mentor.jobTitle}</CardDescription>
                {mentor.organization && (
                  <CardDescription>{mentor.organization}</CardDescription>
                )}
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-2 capitalize">
              {mentor.category}
            </div>
            <div className="text-sm line-clamp-3">{mentor.biography}</div>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setSelectedMentor(mentor)}>Read More</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{selectedMentor?.name}</DialogTitle>
                  <DialogDescription>{selectedMentor?.jobTitle}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                  <p>{selectedMentor?.biography}</p>
                </ScrollArea>
              </DialogContent>
            </Dialog>
            <Button asChild>
              <a href={mentor.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book a Session
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
  )
}
