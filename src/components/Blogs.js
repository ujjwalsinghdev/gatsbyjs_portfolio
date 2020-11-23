import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title}></Title>
      <div className="section-center blog-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog}></Blog>
        })}
      </div>

      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}



export default Blogs
