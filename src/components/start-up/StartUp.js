import React from 'react'

// icons ///
import { FiChevronRight } from 'react-icons/fi';
import vector1 from '../../img/SVG/Group 101.svg';
import vector2 from '../../img/SVG/Group 102.svg';

const StartUp = () => {
  return (
    <section className='section-startUp startUp'>
      <StartUpContainer/>
    </section>
  )
}

const StartUpContainer = () => {
   
  return (
    <div className="startUp_content">
      <div className="">
        <h2 className="heading-secondary">
          ready to get  <span>started</span> 
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur.
           Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi consequat consectetur lobortis Lorem 
        </p>

          <a href="#">
        <button className="btn btn--main">
            start now 
          <FiChevronRight className='arrow'/>
        </button>
          </a>
      </div>

      <div className="startUp_info">
        <img src={vector1} alt="vector" />
        <h5 className='heading-tertiary'>start now</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
           At faucibus aliquam facilisi mi consequat 
        </p>
      </div>

      <div className="startUp_info">
        <img src={vector2} alt="vector" />
        <h5 className='heading-tertiary'>start now</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
          At faucibus aliquam facilisi mi consequat
        </p>
      </div>
    </div>
  )
}

export default StartUp
