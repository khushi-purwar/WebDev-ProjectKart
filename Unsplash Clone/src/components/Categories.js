import React from 'react'
import "../css/Catergories.css"
import { Link } from "react-router-dom"

function Categories() {

    return (
        <div className="categories">

            <Link to="/" className="categories__item categories__item--active">Editorial</Link>
            <Link to="/" className="categories__item">Following</Link>

            <div className="categories__breaker"></div>

            <div className="categories__list">
                <Link to="/s/wallaper" className="categories__item">Wallpaper</Link>
                <Link to="/s/nature" className="categories__item">Nature</Link>
                <Link to="/s/people" className="categories__item">People</Link>
                <Link to="/s/architecture" className="categories__item">Architecture</Link>
                <Link to="/s/Events" className="categories__item">Events</Link>
                <Link to="/s/Business" className="categories__item">Busines</Link>
                <Link to="/s/Experimental" className="categories__item">Experimental</Link>
                <Link to="/s/fashion" className="categories__item">Fashion</Link>
                <Link to="/s/film" className="categories__item">Film</Link>
                <Link to="/s/health" className="categories__item">Health</Link>
                <Link to="/s/technology" className="categories__item">Technology</Link>
                <Link to="/s/travel" className="categories__item">Travel</Link>
                <Link to="/s/textures" className="categories__item">Textures </Link>
                <Link to="/s/animals" className="categories__item">Animals</Link>
                <Link to="/s/food" className="categories__item">Food </Link>
                <Link to="/s/athletics" className="categories__item">Athletics</Link>
                <Link to="/s/spirituality" className="categories__item">Spirituality</Link>
                <Link to="/s/arts" className="categories__item">Arts</Link>
                <Link to="/s/history" className="categories__item">History</Link>
            </div>
        </div>
    )
}

export default Categories
