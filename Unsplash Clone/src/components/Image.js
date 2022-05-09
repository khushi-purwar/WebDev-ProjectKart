import React from 'react'
import "../css/Image.css"
import { Button, Avatar } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite'
import AddIcon from '@material-ui/icons/Add'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

function Image({ data }) {

    const downloadImage = async () => {
        try {
            const response = await fetch(data.downloadUrl)
            const blob = await response.blob()

            // convert the blob to Data String Url
            let url = window.URL.createObjectURL(blob)

            let a = document.createElement("a")
            a.style = "display: none"
            document.body.appendChild(a)
            a.href = url
            a.download = data.id
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url)
        }
        catch (error) {
            alert('Something Went Wrong... Unable to Download Image')
        }
    }

    return (
        <div className="image">
            <div className="image__header">
                <Button variant="contained" size="small" disableElevation className="image__button">
                    <FavoriteIcon fontSize="small" />
                </Button>
                &nbsp; &nbsp; &nbsp;
                <Button variant="contained" size="small" disableElevation className="image__button">
                    <AddIcon fontSize="small" />
                </Button>
            </div>

            <img src={data.imageUrl} alt="" className="image__img" />

            <div className="image__footer">
                <a href={data.profileUrl} target="_blank" className="image__footerLeft">
                    <Avatar src={data.userImageUrl}>{data.username[0]}</Avatar>
                    <h4 className="image__footerLeftName">
                        {data.username}
                    </h4>
                </a>
                <Button onClick={downloadImage} variant="contained" size="small" disableElevation
                    className="image__button" title="Download Photo">
                    <ArrowDownwardIcon fontSize="small" />
                </Button>
            </div>
        </div>
    )
}

export default Image
