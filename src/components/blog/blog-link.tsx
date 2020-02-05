import React from "react";
import { Link } from "gatsby";
import Img, { FixedObject } from "gatsby-image";

import classes from "./blog-link.module.sass";

export interface BlogLinkProps {
  blog: {
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      author: string;
    };
  };
  blogImage: FixedObject;
}

const BlogLink = ({ blog, blogImage }: BlogLinkProps): JSX.Element => (
  <li className={classes.blog}>
    <Link to={blog.fields.slug} className={classes.blogLink}>
      <h2 className={classes.blogTitle}>{blog.frontmatter.title}</h2>
      <Img
        fixed={blogImage}
        className={classes.blogImage} />
      <p className={classes.blogPreview}>
        {blog.excerpt}
      </p>
      <span className={classes.blogAuthor}>
        Written by {blog.frontmatter.author}
      </span>
      <span className={classes.blogDate}>{blog.frontmatter.date}</span>
    </Link>
  </li>
);

export default BlogLink;
