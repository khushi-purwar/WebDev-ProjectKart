import React, { useRef } from 'react'
import "../css/Hero.css"
import SearchIcon from '@material-ui/icons/Search'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'

import { useHistory } from "react-router-dom"

function Hero() {
    const history = useHistory()
    const inputRef = useRef()

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const search = inputRef.current.value
        if (search)
            history.push(`/s/${search}`)
    }

    return (
        <div className="hero">
            <img src="https://images.unsplash.com/photo-1606055854326-12a2fdcac6c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" className="hero__image" />

            <div className="hero__content">
                <div className="hero__contentWrapper">
                    <h1 className="hero__contentTitle">Unsplash</h1>
                    <br />
                    <h3 className="hero__contentSubtitle">The internet’s source of freely-usable images.</h3>
                    <h3 className="hero__contentSubtitle">Powered by creators everywhere.</h3>
                    <br />
                    <form onSubmit={handleSearchSubmit} className="hero__contentInput">
                        <SearchIcon className="header__icon" />
                        <input ref={inputRef} type="text" className="hero__contentInputField" placeholder="Search free high-resolution photos" />
                        <ImageSearchIcon className="header__icon" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Hero
