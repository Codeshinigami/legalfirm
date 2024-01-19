import React from 'react'

export default function Card(props) {
    return (
        <>
            <div className="card">
                <span style={{zIndex:1}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.source}
                </span>
                <img style={{height:'200px'}} src={props.image ? props.image : "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"} className="card-img-top" alt="Not Found" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">by {props.author?props.author:"unknown"} {props.date?"on "+props.date:""}</p>
                    <a href={'https://www.indiatvnews.com/'} target='_blank' className="btn btn-secondary mt-4" rel="noreferrer">Read More</a>
                </div>
            </div>
        </>
    )
}
