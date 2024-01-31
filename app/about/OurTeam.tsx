import React from 'react'
import TeamMember from './TeamMember'
import { teamMembers } from '@/lib/data'
import Container from '../../components/common/Container'

const OurTeam = () => {
  return (
    <Container> 
        <div className="mx-auto max-w-screen-sm text-center my-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Our Team</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">Meet the team which is making a difference is many communities, empowering the youth</p>
      </div> 
    <div className="grid grid-cols-1 gap-8 py-12  mx-auto md:grid-cols-2 lg:grid-cols-4">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
    </Container>
  )
}

export default OurTeam



