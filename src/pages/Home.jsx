import React from 'react'
import Helmet from "react-helmet"

export default function Home() {
    return (
        <div className=''>
            <Helmet>
                <title>Halaman Home</title>
                <meta name='title' content='Ini Merupakan Halaman Home' />
                <meta name='deskripsi' content='halaman home merupakan halaman awal ketika membuka sebuah website' />
            </Helmet>
            <h1>Halaman Home</h1>
        </div>
    )
}
