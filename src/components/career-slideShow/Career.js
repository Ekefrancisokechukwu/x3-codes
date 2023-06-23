import React, { useEffect, useState } from 'react';
import SlideShowItem from './SlideShowItem';
import data from './slideshowData';

const Career = () => {
  return (
    <section className='section-career'>
      <div className="career">
          <h1 className='heading-primary'>choose a <span>career</span> path</h1>
        <div className="career_container">
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
            At faucibus aliquam facilisi mi consequat consectetur lobortis Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
          </p>
        </div>
          <SlideShow />
        </div>
       </div>
    </section>
  )
}



const SlideShow = (props) => {
  const [infos, setInfo] = useState(data);
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    if (index > infos.length - 1) {
      setIndex(0)
    }

    if (index < 0) {
      setIndex(infos.length -1)
    }
  }, [index, infos])


  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return () => clearInterval(slider);
  },[index])
  

  return (
    <div className="career_carousel">
  
      {
        infos.map((info,infoIndex) => {
          const { img, title, id } = info;
          
          let position = 'nextSlide';

          if (infoIndex === index) {
            position = 'active';
          }
          if (infoIndex === index - 1 || (index === 0 && infoIndex === infos.length - 1)) {
            position = 'lastSlide'
          }


          return <article className={`career_carousel--img ${position}`} key={id}>
            <a href="">
            <img src={img} alt="" />
            <div className="career_carousel--img__Overlay">
                <h2>{title}</h2>
            </div>
            </a>
          </article>
        })
      }
      
    </div>
  )
 }

export default Career
