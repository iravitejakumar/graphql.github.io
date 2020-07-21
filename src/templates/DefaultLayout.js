import React from 'react'
import { graphql, Link } from 'gatsby'
import { shape } from 'prop-types'

import Layout from '../components/Layout'

const DefaultLayout = ( { data: {
  markdownRemark: {
    html,
    frontmatter: { title, next },
  },
} } ) => (
  <Layout section="docs" title={title}>
    <section>
      <div className="documentationContent">
        <div className="inner-content">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {next
            && (
            <Link className="read-next" to={next}>
              <span className="read-next-continue">Continue Reading &rarr;</span>
              {/* <span className="read-next-title">{nextPage.frontmatter.title}</span> */}
            </Link>
            )}
        </div>
      </div>
    </section>

  </Layout>
)

DefaultLayout.propTypes = {
  data: shape( { markdownRemark: shape( {} ).isRequired } ).isRequired,
}

export const query = graphql`
  query DefaultPagesLayout($id: String ) {
    markdownRemark(id: { eq: $id }, frontmatter: { layout: { eq:"DefaultLayout" } }) {
      html
      frontmatter {
        title
        next
      }
    }
  }
`
export default DefaultLayout