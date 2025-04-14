import ContactPage from '@/components/Contact/contact'
import Layout from '@/components/Layout/Layout'
import React from 'react'

function Contact({meta}) {
  return (
    <Layout>
      <ContactPage meta={meta}/>
    </Layout>
  )
}

export default Contact
