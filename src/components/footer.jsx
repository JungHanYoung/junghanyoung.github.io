import React from 'react'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="copyright typeset">
                    <small className="small">© {new Date().getFullYear()}, Built with</small>
                </div>
                <nav className="nav  nav--footer">
                    <ul className="list list-nav">
                        <li className="item  item--nav">
                            JeongHanYoung
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer