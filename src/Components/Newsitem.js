import React, { Component } from 'react'
import './Newsitem.css'

const NewsItem = (props) => {

  //make use of props
    let {title, description, imageUrl, newsUrl, date}= props;
    return (
      <div>
       <div className="card mystyle">
            <img src={imageUrl} className="card-img-top myimagestyle" alt="..."/>
            <div className="card-body">
            <h5 className="card-title myfont">{title}...</h5>
            <p className="card-text myfont2">{description}...</p>
            <div class="card-text text-muted myclass">Published on {(date= new Date()).getDate() + "/" + ((date= new Date()).getMonth() + 1)+ "/" + (date= new Date()).getFullYear()}</div>
            <a href={newsUrl} target="_blank"className="btn btn-sm btn-success readmore">Read More</a>
            </div>
        </div>
      </div>
    )
  
}
//target = "_blank" se naye tab me khulta hai kuch bhi 

export default NewsItem