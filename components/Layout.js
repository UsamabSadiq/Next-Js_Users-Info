import React, { useState } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Header />
                <div className='max-w-[1440px] mx-auto sm:px-4' >
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
