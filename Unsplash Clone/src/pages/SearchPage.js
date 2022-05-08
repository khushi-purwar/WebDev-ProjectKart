import React, { useState, useEffect } from 'react'
import Image from "../components/Image"
import { useParams } from "react-router-dom"

import { searchImages } from "../unsplash"

function SearchPage() {
    const { searchTerm } = useParams()
    const [images, setImages] = useState([])

    useEffect(() => {
        searchImages(searchTerm)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setImages(
                    data.results.map(image => ({
                        id: image.id,
                        imageUrl: image.urls.regular,
                        downloadUrl: image.urls.full,
                        username: image.user.username,
                        userImageUrl: image.user.profile_image.medium,
                        profileUrl: image.user.links.html
                    }))
                )
            })
            .catch(error => alert(error))
    }, [searchTerm])

    return (
        <div className="wrapper">
            <div className="container">

                <h1 className="title">{searchTerm}</h1>

                <div className="images__container">
                    {
                        images.map(image => (
                            <Image key={image.imageUrl} data={image} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
