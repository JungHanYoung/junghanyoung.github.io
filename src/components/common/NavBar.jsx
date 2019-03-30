import React from 'react'
import { Link } from 'gatsby';
import cx from 'classnames'

import Search from './Search'

const NavBar = ({ allPosts = [], active = "" }) => {
    return (
        <header className="header">
            <div className="container">
                <Link className="logo" to="/">
                    DevLog
                </Link>
                <ul className="list list--nav" style={{
                    position: "relative"
                }}>
                    <li className={cx("item", "item--nav", { "item--current": active === "home" })}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={cx("item", "item--nav", { "item--current": active === "about" })}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={cx("item", "item--nav", { "item--current": active === "category" })}>
                        <Link to="/category">Category</Link>
                    </li>
                    <li className={cx("item", "item--nav", { "item--current": active === "tags" })}>
                        <Link to="/tags">Tags</Link>
                    </li>
                    <li className="item item--nav">
                        <a href="/TIL">TIL</a>
                    </li>
                    <li className="item  item--nav">
                        <Search
                            allPosts={allPosts}
                        />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar