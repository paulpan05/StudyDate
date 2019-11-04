import React from "react"
import { Link } from "gatsby"

import AuthLayout from "../components/auth-layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <AuthLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </AuthLayout>
)

export default IndexPage
