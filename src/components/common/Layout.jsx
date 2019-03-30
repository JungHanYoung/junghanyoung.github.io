import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types'

// component 
import NavBar from './NavBar'
import Footer from './Footer'
import Index from '../category/Index';
import Header from '../header';
import { LocationContext } from '../../context';

const Layout = ({ children, requireIndex, isHome, allPosts }) => {

    const location = React.useContext(LocationContext);
    console.log(location)
    const page = location.pathname.split('/')[1]

    if (allPosts) {
        const categories = allPosts.reduce(
            (acc, cur) =>
                acc.includes(cur.category) ? acc : [...acc, cur.category]
            , [])
        return (
            <>
                <NavBar
                    allPosts={allPosts}
                    active={isHome ? "home" : page}
                />
                {isHome && <Header />}
                <main className="main container">
                    {requireIndex &&
                        <Index
                            categories={categories}
                        />}
                    {children}
                </main>
                <Footer />
            </>
        )
    } else {
        return (
            <StaticQuery
                query={graphql`
                query {
                    allMarkdownRemark {
                        edges {
                            node {
                                id
                                frontmatter {
                                    title
                                    category
                                }
                                excerpt(pruneLength: 70)
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }
            `}
                render={data => {

                    const allPosts = data.allMarkdownRemark.edges.map(edge => ({
                        id: edge.node.id,
                        title: edge.node.frontmatter.title,
                        category: edge.node.frontmatter.category,
                        date: edge.node.frontmatter.date,
                        link: edge.node.fields.slug,
                        excerpt: edge.node.excerpt
                    }))
                    const categories = allPosts.reduce(
                        (acc, cur) =>
                            acc.includes(cur.category) ? acc : [...acc, cur.category]
                        , [])
                    return <>
                        <NavBar allPosts={allPosts} />
                        {isHome && <Header />}
                        <main className="main container">
                            {requireIndex &&
                                <Index
                                    categories={categories}
                                />}
                            {children}
                        </main>
                        <Footer />
                    </>
                }}
            />
        )
    }
}

//children, requireIndex, isHome
Layout.propTypes = {
    allPosts: PropTypes.arrayOf(PropTypes.shape({

    })),
    requireIndex: PropTypes.bool,
    isHome: PropTypes.bool,
    children: PropTypes.node
}

export default Layout