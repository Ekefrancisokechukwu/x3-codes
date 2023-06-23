
import React from 'react'


const ProgramsHandle = () => {
  return (
    <section className='section-programs programs'>
      <h2 className="programs__h1">ongoing events</h2>
      <div className="programs__ongoing">
      <SingleONEvent/>
      <SingleONEvent/>
      <SingleONEvent/>
      <SingleONEvent/>
      </div> 
 
      <div className="programs__upcoming">
      <h2 className="programs__h1">upcoming events</h2>
        <SingleUpEvent/>
        <SingleUpEvent/>
      </div>
    </section>
  )
}


const SingleONEvent = () => {
  
  return (
      <article className="programs__event">
          <div className="programs__ev">
          <h3 className="programs__title">frontend web development masterclass</h3>
          <h6 className="programs__date">12/04/2023</h6>
          </div>
          <div className="programs__text">
            Are you ready to take your skills to the next level and build stunning, user-friendly websites? Join our Frontend Development Master class starting on April 25th and unlock your potential!
          </div>
          <div className="">
          <a href="" className="programs__btn">
            {/* <button> */}
              register
            {/* </button> */}
          </a>
          </div>
        </article>
  )
}


const SingleUpEvent = () => {
  
  return (
    <article className="programs__event">
          <div className="programs__ev">
          <h3 className="programs__title">frontend web development masterclass</h3>
          <h6 className="programs__date">12/04/2023</h6>
          </div>
          <div className="programs__text">
            Are you ready to take your skills to the next level and build stunning, user-friendly websites? Join our Frontend Development Master class starting on April 25th and unlock your potential!
          </div>
          <div className="">
          <a href="" className="programs__btn">
            {/* <button> */}
              register
            {/* </button> */}
          </a>
          </div>
        </article>
  )
}

export default ProgramsHandle
