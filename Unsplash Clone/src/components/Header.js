import React, { useState, useRef, useEffect } from 'react'
import "../css/Header.css"
import Catergories from "./Categories"
import { Button, Avatar, Tooltip, Menu, MenuItem } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'

import { useHistory, useLocation } from "react-router-dom"

function Header() {
    const history = useHistory()
    const location = useLocation()
    const [anchorEl, setAnchorEl] = useState(null)
    const [showCategories, setShowCategories] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        if (location.pathname === '/')
            setShowCategories(true)
    }, [location.pathname])

    useEffect(() => {
        let unlisten = history.listen((location, action) => {
            if (location.pathname === '/') {
                inputRef.current.value = ''
                setShowCategories(true)
            }

            const tempArray = location.pathname.split('s/')
            if (tempArray.length === 2) {
                inputRef.current.value = tempArray[1]
                setShowCategories(false)
            }
        })
        return unlisten
    }, [history])


    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const search = inputRef.current.value
        if (search)
            history.push(`/s/${search}`)
    }

    const handleOpen = (e) => setAnchorEl(e.currentTarget)
    const handleClose = () => setAnchorEl(false)

    const goToHomePage = () => history.push('/')

    return (
        <div className={`header__wrapper ${!showCategories && 'border-bottom'}`}>
            <div className="header">

                <img onClick={goToHomePage} src="https://dhwwtar19mmjy.apowersoft.info/lightpdf/wp-content/uploads/2020/02/unsplash-logo-20200225.jpg" alt="" className="header__Logo" />

                <form onSubmit={handleSearchSubmit} className="header__input">
                    <SearchIcon className="header__icon" />
                    <input ref={inputRef} type="text" className="header__inputField" placeholder="Search free high-resolution photos" />
                    <ImageSearchIcon className="header__icon" />
                </form>

                <div className="header__right">
                    <div className="header__rightButtonWrapper">
                        <Button onClick={goToHomePage} size="small" className="header__rightButton" >Home</Button>
                        <Button size="small" className="header__rightButton" >Brands</Button>
                    </div>

                    <div>   {/* Drop Down Menu */}
                        <Tooltip title="More Options" arrow>
                            <MoreHorizIcon className="header__rightIcon header__rightOptionsIcon"
                                onClick={handleOpen} aria-controls="simple-menu" aria-haspopup="true" />
                        </Tooltip>

                        <Menu
                            elevation={2}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <span className="header__rightMenuItem">Blogs</span>
                            </MenuItem>
                            <MenuItem>
                                <span className="header__rightMenuItem">Topics</span>
                            </MenuItem>
                            <MenuItem>
                                <span className="header__rightMenuItem">Collections</span>
                            </MenuItem>
                            <MenuItem>
                                <span className="header__rightMenuItem">Community</span>
                            </MenuItem>
                        </Menu>
                    </div>

                    <Button className="header__rightButton" size="small"
                        disableElevation variant="contained">
                        Submit a photo
                    </Button>

                    <NotificationsActiveIcon className="header__rightIcon header__rightBellIcon" />

                    <Avatar className="header__rightAvatar" />
                </div>

            </div>

            {/* Show Catergories only in Home page */}
            { showCategories && <Catergories />}

        </div>
    )
}

export default Header
