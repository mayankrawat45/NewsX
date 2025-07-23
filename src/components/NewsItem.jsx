import React from 'react'

 const NewsItem=(props)=>{ 
    
    
        let {title,description,imageUrl,newsUrl,author,date,source}=props;
        return (
            <div>
                <div className="card h-100 my-3" style={{ width: "18rem" }}>
                    <div style={{width:"18rem"}}><img style={{width:"100%"}} src={imageUrl} className="card-img-top" alt="..." /></div>
                    <div className="card-body">
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "90% "}}>
                        {source}
                        
                    </span>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">
                        </p>
                        <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {date}</small></p>
                        {description}...
                        <a href={newsUrl} target="_blank" className="btn btn-primary">
                            Read More
                        </a>
                    </div>
                </div>

            </div>
        )
    
}

export default NewsItem
