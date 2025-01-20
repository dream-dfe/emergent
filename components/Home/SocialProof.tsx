import { cn } from "@/lib/utils";

const stats = [
  { number: "678", description: "total youth businesses supported since 2018" },
  { number: "80%", description: "survival rate" },
  {
    number: "40+",
    description:
      "businesses enrolled in the Business Accelerator Program annually",
  },
  { number: "3000", description: "businesses trained on digital marketing" },
  {
    number: "R4 999 336",
    description: "Total portfolio revenue (2023 financial year)",
  },
];

export const SocialProof = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-slate-800 transition-all duration-300 ease-in-out hover:scale-105">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "p-6 text-center transition-all duration-300 ease-in-out hover:scale-105",
                index % 2 === 0 ? "bg-violet-50" : "bg-indigo-50",
              )}
            >
              <span className="mb-2 block text-4xl font-extrabold text-slate-700">
                {stat.number}
              </span>
              <p className="text-lg text-slate-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
