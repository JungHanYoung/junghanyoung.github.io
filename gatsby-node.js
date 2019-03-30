const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const postsPerPage = 4

let categoryInfo = {
    general: {
        posts: []
    }
}

let tagInfo = {

}

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

    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    title
                                    category
                                    date
                                    tags
                                }
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }

                const posts = result.data.allMarkdownRemark.edges

                // 카테고리 페이지
                posts.forEach(post => {
                    const categoryInPost = post.node.frontmatter.category
                    if (!categoryInPost) {
                        categoryInfo.general.posts.push(post)
                        // categories.general.posts.push(post)
                    } else {
                        if (!categoryInfo[categoryInPost]) {
                            categoryInfo[categoryInPost] = {
                                posts: [post.node]
                            }
                        } else {
                            categoryInfo[categoryInPost].posts.push(post.node)
                        }
                    }
                })

                // 태그 페이지
                posts.forEach(post => {
                    const tagsInPost = post.node.frontmatter.tags
                    tagsInPost.forEach(tag => {
                        if (tagInfo[tag]) {
                            tagInfo[tag].posts.push(post.node)
                        } else {
                            tagInfo[tag] = {
                                posts: [post.node]
                            }
                        }
                    })
                })
                // console.log(JSON.stringify(tagInfo, null, 4))

                // console.log(JSON.stringify(categories, null, 4))

                createCategoryPages(createPage)
                createTagPages(createPage);

                // 메인 페이지 및 페이지네이션
                const numPages = Math.ceil(posts.length / postsPerPage);

                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path: i === 0 ? `/` : `/${i + 1}`,
                        component: path.resolve('./src/templates/main-template.js'),
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            categories: Object.keys(categoryInfo),
                            numPages,
                            currentPage: i + 1
                        }
                    })
                })

                // 포스트 페이지 
                posts.forEach(({ node }, index, array) => {

                    // console.log(index)
                    const previous = index === 0 ? null : array[index + 1]
                    const next = index === posts.length - 1 ? null : array[index - 1]



                    // console.log(JSON.stringify(posts, null, 4))
                    // console.log(previous)
                    // console.log(next)
                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/post-template.js`),
                        context: {
                            slug: node.fields.slug,
                            previous,
                            next
                        }
                    })
                })
            })
        )
    })
}

function createCategoryPages(createPage) {
    Object.keys(categoryInfo).forEach(category => {
        if (category === "general") {
            const numPages = Math.ceil(categoryInfo['general'].posts.length / postsPerPage);
            Array.from({ length: numPages }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `/category` : `/category/${i + 1}`,
                    component: path.resolve('./src/templates/category-template.js'),
                    context: {
                        categories: Object.keys(categoryInfo),
                        category: null,
                        limit: postsPerPage,
                        skip: i * postsPerPage,
                        numPages,
                        currentPage: i + 1
                    }
                })
            })
        } else {
            const numPages = Math.ceil(categoryInfo[category].posts.length / postsPerPage)

            Array.from({ length: numPages }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `/category/${category}` : `/category/${category}/${i + 1}`,
                    component: path.resolve('./src/templates/category-template.js'),
                    context: {
                        categories: Object.keys(categoryInfo),
                        category,
                        limit: postsPerPage,
                        skip: i * postsPerPage,
                        numPages,
                        currentPage: i + 1
                    }
                })
            })
        }
    })
}

function createTagPages(createPage) {

    const tags = Object.keys(tagInfo)

    tags.forEach((tag) => {

        const numPages = Math.ceil(tagInfo[tag].posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/tags/${tag}` : `/tags/${tag}/${i + 1}`,
                component: path.resolve('./src/templates/tags-template.js'),
                context: {
                    tag,
                    categories: Object.keys(categoryInfo),
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })
    })
}