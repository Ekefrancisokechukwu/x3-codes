import React from 'react';
import vector from '../../img/SVG/_.svg';

const Story = () => {
  return (
    <section className='section-story story'>
      <StoryHeading />
      <StoryInfo/>
    </section>
  )
}

const StoryHeading = () => {
  
  return (
    <div className="story_heading">
      <h1 className="heading-primary">
        why you should join <span>X3codes</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
         At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada 
      </p>
    </div>
  )
}

const StoryInfo = () => {
  
  return (
    <div className="story_container">
      
      
      <article className='story_info'>
        <span></span>
        <h5 className='heading-tertiary'>experienced devs</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
         At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada 
      </p>
      </article>


      <article className='story_info'>
        <span></span>
        <h5 className='heading-tertiary'>experienced devs</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
         At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada 
      </p>
      </article>

      <article className='story_info'>
        <span></span>
        <h5 className='heading-tertiary'>experienced devs</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
         At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada 
      </p>
      </article>

      <article className='story_info'>
        <span></span>
        <h5 className='heading-tertiary'>experienced devs</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
         At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada 
      </p>
      </article>
      <div className="story_vector-icon">
        <img src={vector} alt="vector" />
      </div>
    </div>
  )
}

export default Story
