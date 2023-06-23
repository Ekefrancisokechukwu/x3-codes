
import React,{useState} from 'react'

const SlideShowItem = ({ img,title },position) => {
  


  return (
    <article className={`career_carousel--img ${position}`} >
      <a href="">
        <img src={img} alt="" />
        <div className="career_carousel--img__Overlay">
          <h2>{title}</h2>
        </div>
      </a>
    </article>
  )
}

export default SlideShowItem
