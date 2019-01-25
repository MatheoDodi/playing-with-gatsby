import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <small>{markdownRemark.frontmatter.date}</small>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
