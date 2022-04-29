import React from 'react'

function Card(prop){
    console.log(prop);
    return(
        <>
            <div className="card">
                <h1 className="heading">{prop.title}</h1>
                <img className="image" src = {prop.img} alt = {'Image'}/>
                <a className="link" href={prop.link} target = {'_blank'}>
                    <button className="btn">Click here</button>
                </a>
            </div>
        </>
    );
}

export default Card;