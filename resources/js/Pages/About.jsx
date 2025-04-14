import React from 'react'
import Navbar from "@/components/Layout/Navbar"
import AboutSection from '@/components/About/about'
import Layout from '@/components/Layout/Layout'

function About({meta}) {
  return (
    <Layout>
      <AboutSection meta={meta}/>
    </Layout>
  )
}

export default About
