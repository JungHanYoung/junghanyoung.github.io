const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
        {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            category
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {

        console.log(JSON.stringify(result, null, 4))
        const posts = result.data.allMarkdownRemark.edges

        createPage({
            path: '/',
            component: path.resolve('./src/templates/main-template.js'),
            context: {

            }
        })

        posts.forEach(({ node }, index) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/post-template.js`),
                context: {
                    slug: node.fields.slug
                }
            })
        })

    })
}