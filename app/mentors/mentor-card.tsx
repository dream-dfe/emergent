'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface MentorProps {
  image: string;
  name: string;
  jobTitle?: string;
  organization?: string;
  biography: string;
}

export function MentorCard({ image, name, jobTitle, organization, biography = '' }: MentorProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const maxLength = 150

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  const truncatedBiography = biography.length > maxLength 
    ? `${biography.slice(0, maxLength)}...` 
    : biography

    const userImg = image || "/img/mentors/placeholder.png"

  return (
    <Card className="w-full border-none">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-32 h-32 mx-auto lg:mx-0 mb-4 lg:mb-0 lg:mr-6 overflow-hidden rounded-full flex-shrink-0">
            <Image
              src={userImg}
              alt={name}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-center lg:text-left">{name}</h2>
            <p className="text-sm text-muted-foreground text-center lg:text-left capitalize">{jobTitle}</p>
            <p className="text-sm text-muted-foreground mb-4 text-center lg:text-left">{organization}</p>
            <div className="text-sm">
              {isExpanded ? biography : truncatedBiography}
              {biography.length > maxLength && (
                <Button
                  variant="link"
                  onClick={toggleReadMore}
                  className="p-0 h-auto font-semibold"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}