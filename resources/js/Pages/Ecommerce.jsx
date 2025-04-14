import EcommercePage from '@/components/Ecommerce/ecommerce'
import Layout from '@/components/Layout/Layout'
import React from 'react'

function Ecommerce({meta}) {
  return (
    <Layout>
      <EcommercePage meta={meta}/>
    </Layout>
  )
}

export default Ecommerce
