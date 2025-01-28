import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProgramsPlaceHolder({category}: {category: string}) {
  return (
    <div className="text-center py-16">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">No {category} Programmes Available</h2>
    <p className="text-xl text-gray-600 mb-8">
      We&apos;re constantly working on new initiatives. Check back soon for updates!
    </p>
    <Link href="/active-programmes">
      <Button className="bg-violet-600 hover:bg-violet-700">Explore Current Programmes</Button>
    </Link>
  </div>
  )
}
