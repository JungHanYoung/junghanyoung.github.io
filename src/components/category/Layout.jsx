import React from 'react'

import NavBar from '../common/NavBar'
import Index from './Index'
import Footer from '../footer'

const Layout = ({ children, categories }) => {
    return (
        <>
            <NavBar
                active="category"
            />
            <main className="main container">
                <Index
                    categories={categories}
                />
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout