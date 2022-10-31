import React from 'react'
import Helmet from "react-helmet"
import { firestore } from "../config/FirebaseConfig"
import { collection, getDocs } from "firebase/firestore"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {

    // inisialisasi state
    const [blogData, setBlogData] = useState([])

    // function get collection data dari firebase
    const getBlogDataCollection = async () => {
        let result = []
        let blogColRef = collection(firestore, "blog")
        await getDocs(blogColRef)
            .then((res) => {
                res.forEach((e) => {
                    result.push(e.data())
                })
            })
            .catch((err) => {
                console.error(err)
            })

        return result
    }

    // component life cycle
    useEffect(() => {
        getBlogDataCollection()
            .then((res) => {
                // console.info(res)
                setBlogData(res)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Halaman Blog</title>
                <meta name='title' content='Halaman Blog' />
                <meta name='deskripsi' content='Halaman Utama Blog' />
            </Helmet>
            <h1>Halaman Blog</h1>

            <div className='flex flex-wrap gap-5 justify-center mt-40'>
                {/* menampilkan data */}
                {blogData.map((i) => {
                    return (
                        <div className='' key={i.id}>
                            <h3>{i.title}</h3>
                            <img src={i.banner} alt={i.title} />
                            <p>{i.deskripsi}</p>
                            <small>{i.author} | {Date(i.createdAt).toString()}</small>
                            <div>
                                <Link to={`/blog/detail/${i.id}`}>Detail</Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div >
    )
}
