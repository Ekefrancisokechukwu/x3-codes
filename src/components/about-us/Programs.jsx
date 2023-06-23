import React from 'react'

const Programs = () => {
  return (
    <section className="section-about-programs">

      <div className="about-programs">
      <div className="about-programs__head">
      <h1 className="heading-primary">our programs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada Lorem ipsum
         </p>
      </div>

      <div className="about-programs__cardBox">
        <article className="about-programs__card">
          <h3>web development bootcamp</h3>
          <p>Learn front-end and back-end web development to build interactive websites.</p>

          <a href="#" className='about-programs__btn'> register</a>
        </article>
        
        <article className="about-programs__card">
          <h3>Data Science and Machine Learning</h3>
          <p>Gain skills in data analysis, predictive modeling, and machine learning techniques.</p>

          <a href="#" className='about-programs__btn'> register</a>
        </article>
        
        <article className="about-programs__card">
          <h3>UI/UX Design </h3>
          <p> Learn to create intuitive and visually appealing digital interfaces and optimize user experience.ent to build interactive websites.</p>

          <a href="#" className='about-programs__btn'> register</a>
         </article>
      </div>
      </div>
    </section>
  )
}

export default Programs
