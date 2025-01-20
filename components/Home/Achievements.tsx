import { cn } from "@/lib/utils"

const achievements = [
  { year: 2019, title: "USAID Young Women Transform Prize" },
  { year: 2022, title: "Google.org Impact Challenge Accelerator: Women and Girls" },
  { year: 2019, title: "Facebook Community Leadership Fellowship" },
  { year: 2021, title: "South Africa Women Entrepreneurs Climate Change Awards" },
]

export const Achievements = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 transition-all duration-300 ease-in-out hover:scale-105">
          Awards and Recognitions
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet-200"></div>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={cn(
                "mb-8 flex justify-between items-center w-full",
                index % 2 === 0 ? "flex-row-reverse" : "flex-row",
              )}
            >
              <div className="w-5/12"></div>
              <div className="z-20">
                <div className="flex items-center justify-center w-8 h-8 bg-violet-600 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div
                className={cn(
                  "w-5/12 p-4 transition-all duration-300 ease-in-out hover:scale-105",
                  index % 2 === 0 ? "bg-violet-50" : "bg-indigo-50",
                )}
              >
                <p className="text-sm font-semibold text-violet-600 mb-1">{achievement.year}</p>
                <h3 className="text-xl font-bold text-slate-800">{achievement.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

