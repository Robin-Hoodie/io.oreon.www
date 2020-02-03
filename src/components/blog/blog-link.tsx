import React from "react";
import { Link } from "gatsby";

import classes from "./blog-link.module.sass";

export interface BlogLinkProps {
  link: string;
  title: string;
  truncatedText: string;
  date: string;
  author: string;
}

const BlogLink = ({ link, title, date, truncatedText, author }: BlogLinkProps): JSX.Element => (
  <li className={classes.blog}>
    <Link
      className={classes.blogLink}
      to={link}>
      <h2 className={classes.blogTitle}>{title}</h2>
      <p className={classes.blogPreview}>
        {truncatedText}
      </p>
      <span className={classes.blogAuthor}>
        Written by {author}
      </span>
      <span className={classes.blogDate}>{date}</span>
    </Link>
  </li>
);

export default BlogLink;
