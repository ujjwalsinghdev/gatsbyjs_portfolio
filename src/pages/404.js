import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>welcome to the world that does not exist 😎 </h1>
          <Link to="/" className="btn">
            back to the real world
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
