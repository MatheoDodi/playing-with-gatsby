import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

export const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={data => (
      <div style={{ marginTop: 'auto' }}>
        <aside>
          <h3> Archive </h3>
          {data.allMarkdownRemark.edges.map(edge => (
            <h4 key={edge.node.frontmatter.slug}>
              <Link to={`${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </h4>
          ))}
        </aside>
      </div>
    )}
  />
);

export default Archive;
