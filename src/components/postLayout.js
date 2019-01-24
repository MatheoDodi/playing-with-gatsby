import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

class PostLayout extends Component {
  render() {
    const { slug } = this.props.pathContext;
    return (
      <StaticQuery
        query={graphql`
          {
            allMarkdownRemark {
              edges {
                node {
                  excerpt(pruneLength: 100000)
                  frontmatter {
                    slug
                    title
                    date
                  }
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark }) => {
          const node = allMarkdownRemark.edges.find(
            edge => edge.node.frontmatter.slug === slug
          ).node;
          return (
            <Layout>
              <h1>{node.frontmatter.title}</h1>
              <p>{node.excerpt}</p>
              <small>{node.frontmatter.date}</small>
            </Layout>
          );
        }}
      />
    );
  }
}

export default PostLayout;
