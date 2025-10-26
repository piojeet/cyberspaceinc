import React from 'react'
import ClientPertnersHero from '../components/ClientPertnersHero'
import OurClient from '../components/OurClient'
import OurPartner from '../components/OurPartner'
import FooterContactForm from '../components/FooterContactForm'

export default function ClientAndPartners() {
  return (
    <div>
      <ClientPertnersHero />
      <OurClient />
      <OurPartner />
      <FooterContactForm />
    </div>
  )
}
