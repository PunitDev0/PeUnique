import BlogPage from '@/components/Blog/blog'
import Layout from '@/components/Layout/Layout'
import Navbar from '@/components/Layout/Navbar'
import React from 'react'

function Blog({meta}) {
  return (
    <Layout>
      <BlogPage meta={meta}/>
    </Layout>
  )
}

export default Blog
