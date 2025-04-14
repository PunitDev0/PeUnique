import EducationAPIServicesPage from '@/components/Education/education'
import Layout from '@/components/Layout/Layout'
import React from 'react'

function Education({meta}) {
  return (
    <Layout>
      <EducationAPIServicesPage meta={meta}/>
    </Layout>
  )
}

export default Education
