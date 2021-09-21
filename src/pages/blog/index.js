import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {/* {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))} */}
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/blog/${node.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: " YYYY-MMMM-D")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
