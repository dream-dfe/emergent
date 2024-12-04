import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Mail, Globe } from 'lucide-react'
import { generateUsers, User } from "./generateUsers";
import { RiProfileFill } from "react-icons/ri";


export function UserGrid() {
  const users: User[] = generateUsers(20);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Meet the 2024 Cohort</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                </div>
              </div>
              <div className="space-y-2">
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-violet-600 hover:underline">
                  <RiProfileFill className="h-4 w-4" />
                  <span>Profile </span>
                </a>
                <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-blue-600 hover:underline">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn </span>
                </a>
                <a href={`mailto:${user.email}`} className="flex items-center space-x-2 text-sm text-gray-600 hover:underline">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </a>
                <a href={user.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-green-600 hover:underline">
                  <Globe className="h-4 w-4" />
                  <span>Website</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

