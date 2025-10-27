import React from 'react'
import OurTeamHero from '../components/OurTeamHero'
import FooterContactForm from '../components/FooterContactForm'
import OurTeamLeadership from '../components/OurTeamLeadership'
import OurTeamCTA from '../components/OurTeamCTA'

export default function OurTeam() {
  return (
    <div>
        <OurTeamHero />
        <OurTeamLeadership />
        <OurTeamCTA />
        <FooterContactForm />
    </div>
  )
}
