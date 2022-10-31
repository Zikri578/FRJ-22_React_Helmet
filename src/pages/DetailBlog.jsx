import React from 'react'
import Helmet from "react-helmet"
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { useState } from 'react';
import { useEffect } from 'react';
import { firestore } from '../config/FirebaseConfig';

export default function DetailBlog() {

    // untuk membuat id blog url params 
    const id = useParams();

    // state
    const [detail, setDetail] = useState({
        title: "",
        deskripsi: "",
        banner: "",
        body: "",
        author: "",
        createdAt: ""
    })

    // mendapatkan single document dari firebase
    const getBlog = () => {
        let docRef = doc(firestore, "blog/" + id)
        getDoc(docRef)
            .then((res) => {
                // console.info(res.data())
                setDetail(res.data())
            })
            .catch((err) => {
                console.error(err)
            })
    }

    // component life cycle
    useEffect(() => {
        getBlog()
    }, [id])

    return (
        <div>
            <Helmet>
                <title>{detail?.title}</title>
                <meta name='title' content={detail?.title} />
                <meta name='deskripsi' content={detail?.deskripsi} />
            </Helmet>

            <small>{detail?.author}</small>
            <img src={detail?.banner} alt={detail?.banner} />
            <hr />
            <p>{detail?.body}</p>
            <hr />
            <small>{Date(detail?.createdAt).toString()}</small>
        </div>
    )
}
