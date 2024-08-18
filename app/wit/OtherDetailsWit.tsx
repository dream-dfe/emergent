import { Separator } from '@/components/ui/separator'
import React from 'react'



export default function OtherDetailsWit() {

  return (
    <>
     <h2 className="my-4 text-xl">Programme Benefits:</h2>
        <ul className="list-disc space-y-2 px-4 text-justify">
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
        <p className="my-4  text-justify">
          We are seeking to select women entrepreneurs with a growth and impact
          mindset; a demonstrated interest to innovate and use technology as a
          tool for scale and sustainability; with a track record that shows a
          commitment to their businesses and a vision that advances female
          entrepreneurship in Botswana.:
        </p>
        <h2 className="my-4 text-xl">Eligibility criteria:</h2>
        <ul className="list-disc space-y-2 px-4 text-justify">
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
    </>
  )
}
