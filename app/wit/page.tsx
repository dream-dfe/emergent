import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function WIT() {
  return (
    <>
      <section className="relative flex h-[50vh] w-full flex-col items-start justify-start md:items-center md:justify-center">
        <div className="absolute -z-10 h-full w-full overflow-hidden">
          <Image
            src="/img/wit.jpg"
            className="h-full w-full object-cover"
            width={1280}
            height={853}
            alt="hero-img"
          />
        </div>
        <div className="absolute inset-0 bg-violet-700 opacity-50"></div>
      </section>
      <section className="mx-auto my-8 px-4 max-w-screen-xl">
        <h2 className="my-8 bg-clip-text text-center text-4xl font-bold leading-tight md:text-6xl">
          Standard Chartered Women in Tech Accelerator Programme
        </h2>
        <Separator className="my-4" />
        <div className="grid gap-4">
          <p className="lead">
            Standard Chartered, a leading international banking group, with a
            presence in 59 of the world’s most dynamic markets is proud to
            announce the launch of its Women in Tech (WiT) Accelerator Programme
            in Botswana. Women in Tech is part of the Bank’s commitment to
            addressing gender disparity in the technology sector and using
            technology to tackle social challenges faced by communities. WIT is
            also an important part of the Bank’s entrepreneurship pillar within
            Futuremakers by Standard Chartered, a global initiative to tackle
            inequality and promote economic inclusion.
          </p>
          <p>
            Standard Chartered is proud to partner with Dream Factory Foundation
            on this initiative to provide a platform for women entrepreneurs in
            Botswana who are pushing innovative boundaries by developing
            innovative or tech-enabled solutions or demonstrate intention to
            become more tech-enabled; and desire to accelerate their solutions
            to the next level of growth.
          </p>
          <p>
            By strengthening female owned enterprises, our goal is to close the
            financial access gap for the scale of innovative or tech enabled
            women-led small and growing businesses that have the potential to
            better the livelihoods of low-income and rural communities.{" "}
          </p>
          <p>
            The initiative also supports women entrepreneurs whose businesses
            are making an impact beyond themselves.{" "}
          </p>
          <p>
            This programme will offer a bespoke range of resources, including
            coaching, training, networking opportunities, access to funding, the
            opportunity to pay-it-forward. The WiT aims to cultivate a
            supportive ecosystem of female entrepreneurs who are resourceful,
            impactful and advance female entrepreneurship in various sectors.
          </p>
        </div>
        <Separator className="my-4" />
        <h2 className="my-4 text-xl font-semibold">What’s in it for you?</h2>
        <h2 className="my-4 text-xl">Programme Benefits:</h2>
        <ul className="list-disc space-y-2 px-4">
          <li>
            The 20 selected participants will undergo a 5-month incubator
            programme designed to accelerate their business growth through
            skills-based workshops which include financial readiness and
            management, compliance, business models, marketing and
            communication.
          </li>
          <li>
            Focused one on one coaching sessions to improve personal growth,
            leadership and financial skills, empowering participants to lead
            their ventures successfully.
          </li>
          <li>
            Participants will have the chance to network with potential
            investors and partners, providing valuable opportunities to secure
            funding and scale their businesses.
          </li>
          <li>
            An exciting pitch competition where the top winners will share up to
            US$ 50,000 equity-free seed funding.
          </li>
          <li>
            Participants will receive 12-month access for free to the Meeticks
            digital marketplace, where they will be able to create online stores
            increasing their access to market, and be trained on the use of
            digital technology for growing their businesses.
          </li>
          <li>An opportunity to join the WiT alumni global network. </li>
        </ul>
        <Separator className="my-4" />
        <h2 className="my-4 text-xl font-semibold">Who are we looking for?</h2>
        <p className="my-4 text-lg">
          We are seeking to select women entrepreneurs with a growth and impact
          mindset; a demonstrated interest to innovate and use technology as a
          tool for scale and sustainability; with a track record that shows a
          commitment to their businesses and a vision that advances female
          entrepreneurship in Botswana.:
        </p>
        <h2 className="my-4 text-xl">Eligibility criteria:</h2>
        <ul className="list-disc space-y-2 px-4">
          <li>Women entrepreneurs aged between 18 & 40 years old</li>
          <li>
            Business must be a registered entity (co-operatives are also
            encouraged to apply) in Botswana
          </li>
          <li>
            Be based in and operating in Botswana between a minimum of 1 year
            and a maximum of 10 years{" "}
          </li>
          <li>At least 50% Botswana-owned </li>
          <li>At least 50% women-led and/or women-owned </li>
          <li>
            Business has an annual revenue of P1 million or less than P1 million{" "}
          </li>
          <li>Have 10 or less full-time paid employees </li>
          <li>
            Business solution must be innovation driven or tech-enabled or the
            entrepreneur should demonstrate the interest and intention to become
            more tech enabled{" "}
          </li>
          <li>
            Applicants must be available to undertake the 5 month virtual and
            in-person incubation programme from September to January 2025{" "}
          </li>
          <li>
            Female entrepreneurs with a disability are encouraged to apply
          </li>
        </ul>
        <Button asChild className="my-5">
          <Link href="/#">Apply Now</Link>
        </Button>

        <div>
          <h3 className="my-4 font-semibold text-xl">Powered By:</h3>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="max-h-48 max-w-md overflow-hidden rounded-md">
              <Image
                src="/img/partners/futuremakers.png"
                alt=""
                width={1280}
                height={853}
                className={cn(
                  "-z-10 aspect-square h-full w-full object-cover transition-all hover:scale-105",
                )}
              />
            </div>
            <div className="max-h-48 max-w-md overflow-hidden rounded-md">
              <Image
                src="/img/dflogo.png"
                alt=""
                width={1280}
                height={853}
                className={cn(
                  "-z-10 aspect-square h-full w-full object-cover transition-all hover:scale-105",
                )}
              />
            </div>
            <div className="max-h-48 max-w-md overflow-hidden rounded-md">
              <Image
                src="/img/partners/standard.png"
                alt=""
                width={1280}
                height={853}
                className={cn(
                  "-z-10 aspect-square h-full w-full object-cover transition-all hover:scale-105",
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
