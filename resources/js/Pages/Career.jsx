import CareersPage from '@/components/Career/career'
import Layout from '@/components/Layout/Layout'
import React from 'react'

function Career({meta}) {
  console.log(meta)
  return (
    <Layout>
      <CareersPage meta={meta}/>
    </Layout>
  )
}

export default Career
