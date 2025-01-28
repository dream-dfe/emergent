"use client"

import * as React from "react"
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const sectorData = [
    { sector: "Agriculture", count: 4, fill: "#86C232" }, // Light green
    { sector: "Energy", count: 1, fill: "#FF5733" }, // Vibrant orange-red
    { sector: "Water", count: 1, fill: "#3498DB" }, // Bright blue
    { sector: "Media", count: 3, fill: "#9B59B6" }, // Soft purple
    { sector: "Education", count: 2, fill: "#FFC300" }, // Warm yellow
    { sector: "Finance", count: 1, fill: "#2ECC71" }, // Bright green
    { sector: "Tech", count: 3, fill: "#1ABC9C" }, // Turquoise
    { sector: "Industrial", count: 2, fill: "#34495E" }, // Dark steel blue
    { sector: "Health", count: 1, fill: "#E74C3C" }, // Soft red
    { sector: "Clothing", count: 2, fill: "#F39C12" }, // Golden orange
  ];
  
  const chartConfig = {
    count: {
      label: "Count",
    },
    Agriculture: {
      label: "Agriculture",
      color: "#86C232", // Light green
    },
    Energy: {
      label: "Energy",
      color: "#FF5733", // Vibrant orange-red
    },
    Water: {
      label: "Water",
      color: "#3498DB", // Bright blue
    },
    Media: {
      label: "Media",
      color: "#9B59B6", // Soft purple
    },
    Education: {
      label: "Education",
      color: "#FFC300", // Warm yellow
    },
    Finance: {
      label: "Finance",
      color: "#2ECC71", // Bright green
    },
    Tech: {
      label: "Tech",
      color: "#1ABC9C", // Turquoise
    },
    Industrial: {
      label: "Industrial",
      color: "#34495E", // Dark steel blue
    },
    Health: {
      label: "Health",
      color: "#E74C3C", // Soft red
    },
    Clothing: {
      label: "Clothing",
      color: "#F39C12", // Golden orange
    },
  };
  

export default function WomenInTechAccelerator() {
  const totalEntrepreneurs = React.useMemo(() => {
    return sectorData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="w-full border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Program Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside">
              <li>One-on-one coaching</li>
              <li>Dynamic sessions on business and risk management</li>
              <li>Financial management insights</li>
              <li>Funding readiness preparation</li>
              <li>Team building strategies</li>
              <li>Up to $50,000 seed funding for each entrepreneur</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="flex flex-col border-none">
          <CardHeader className="items-center pb-0">
            <CardTitle>Sector Diversity</CardTitle>
            <CardDescription>Women in Tech Accelerator 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={sectorData}
                  dataKey="count"
                  nameKey="sector"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalEntrepreneurs}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Entrepreneurs
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Diverse sectors represented <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showcasing the variety of industries in the program
            </div>
          </CardFooter>
        </Card>
      </div>

      <Card className="w-full border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Impact and Vision</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-semibold">Reshaping the future of entrepreneurship in Botswana</p>
          <p>We believe that when women-led businesses thrive, communities thrive!</p>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            The WiT accelerator program in Botswana aims to be a catalyst for unlocking the boundless potential of Botswana&apos;s women entrepreneurs, paving the way for a future where innovation, technology, and gender equality converge to drive transformative change.
          </blockquote>
        </CardContent>
      </Card>
    </div>
  )
}

