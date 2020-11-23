import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact"></SEO>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xaylbenl" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                className="form-control"
                name="message"
                rows="5"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                Send Message
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
