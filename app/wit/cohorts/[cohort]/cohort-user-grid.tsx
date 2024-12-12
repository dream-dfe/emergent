"use client";

import { Globe } from "lucide-react";
import { cohort2024Data } from "./cohort-data";
import { RiProfileFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface User {
  id: string;
  name: string;
  business_name: string;
  sector: string;
  products: string;
  business_profile: string;
  avatar: string;
}

export function CohortUserGrid() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Meet the 2024 Cohort
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cohort2024Data.map((user) => (
          <Card key={user.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="mb-4 flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                </div>
              </div>
              <div className="space-y-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-violet-600"
                    >
                      <RiProfileFill className="mr-2 h-4 w-4" />
                      View Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="overflow-hidden p-0 sm:max-w-[425px]">
                  <div className="w-full h-64 bg-gray-100">
                      <img
                        src={user.avatar}
                        alt={user.name}
                         className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <DialogHeader>
                        <DialogTitle>{user.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div>
                          <h3 className="font-semibold">
                            {user.business_name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {user.sector}
                          </p>
                        </div>
                        <div>
                          <h4 className="mb-2 font-semibold">Products</h4>
                          <p>{user.products}</p>
                        </div>
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Business Profile
                          </h4>
                          <p className="text-sm">{user.business_profile}</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <p className="flex items-center space-x-2 text-sm text-green-600">
                  <Globe className="h-4 w-4" />
                  <span>Sector: {user.sector}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
