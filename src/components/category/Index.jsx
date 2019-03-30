import React from 'react'
import { Link } from 'gatsby';

const Index = ({ categories = ["TIL"] }) => {
    return (
        <aside className="aside typeset aside--left" style={{ borderRight: "1px solid #a8adac" }}>
            <section className="section section--category-index">
                <h3>Index</h3>
                <nav className="nav  nav--categories">
                    <ul className="list  list--categories">
                        {categories.map(category =>
                            category === "general" ?
                                <li key={`category__link-${category}`} className="item  item--category">
                                    <Link to={`/category`}>{category}</Link>
                                </li> :
                                <li key={`category__link-${category}`} className="item  item--category">
                                    <Link to={`/category/${category}`}>{category}</Link>
                                </li>
                        )}
                    </ul>
                </nav>
            </section>
        </aside>
    )
}

export default Index