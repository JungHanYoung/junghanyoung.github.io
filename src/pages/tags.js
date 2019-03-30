import React from 'react';
import PropTypes from 'prop-types';

// component
// import Layout from '../components/layout'
import Layout from '../components/common/Layout'
import TagList from '../components/tags/TagList'
import { graphql } from 'gatsby';
import { LocationContext } from '../context';

const propTypes = {
    data: PropTypes.shape({}).isRequired,
    pageContext: PropTypes.shape({}),
    location: PropTypes.shape({})
};


const TagPage = ({ data, location }) => {

    // const allTags = data.allMarkdownRemark.edges.map(edge => ({
    //     tag: edge.node.frontmatter.tags
    // }))

    const allTagsInfo = {}
    data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.tags)
        .forEach(edge => {
            edge.node.frontmatter.tags.forEach(tag => {
                // console.log(allTagsInfo[tag])
                if (Object.keys(allTagsInfo).includes(tag)) {
                    allTagsInfo[tag] += 1
                } else {
                    allTagsInfo[tag] = 1
                }
            })
        })

    return (
        <LocationContext.Provider value={location}>
            <Layout>
                <article className="article  article--page  ">
                    <TagList
                        allTagsInfo={allTagsInfo}
                    />
                </article>
            </Layout>
        </LocationContext.Provider>
    );
};

export const query = graphql`
    query allTags {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        tags
                    }
                }
            }
        }
    }
`

TagPage.propTypes = propTypes;


export default TagPage;
