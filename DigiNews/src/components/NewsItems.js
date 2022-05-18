import React, { Component } from 'react'

export class NewsItems extends Component {
  
    render() {
        let  {title,description,imageUrl,newsUrl,date,source} = this.props
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVsDU1OuB4wioQoo8pKt1TTeCs0UIC2kK-A&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-info" style={{left:'90%',zIndex:'1'}}> {source} </span>
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">Published on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                     </div>
                </div>
          </div>
        )
    }
}

export default NewsItems
