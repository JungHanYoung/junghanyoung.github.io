import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const Search = ({ allPosts }) => {

    const [keyword, setKeyword] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if (keyword.length > 2) {
            const getPosts = allPosts.filter(post => post.title.includes(keyword))
            setSearchResults(getPosts)
        } else {
            setSearchResults([])
        }
    }, [keyword])

    return (
        <>
            <input
                className="search-input"
                placeholder="Search"
                autoComplete="off"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                onBlur={() => {
                    setKeyword('')
                }}
            />
            <ul className="search--results" >
                {searchResults.map(post =>
                    <li
                        key={post.id}
                        className="search--result"
                    >
                        <Link to={post.link}>
                            <article className="search--result-article">
                                <div className="search--result-article-title">
                                    <h3>{post.title}</h3>
                                    <span className="date">{post.date}</span>
                                </div>
                                <p>{post.excerpt}</p>
                            </article>
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Search