import React from 'react'

const Feature = () => {
  return (
    <section className='section-feature feature'>
      <FeatureHeading />
      <FeatureInfo />
    </section>
  )
}

const FeatureHeading = () => {

  return (
    <div className="feature_heading">
      <h1 className='heading-primary '>
        become a software <span>engineer</span> in three steps
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
        At faucibus aliquam facilisi mi consequat consectetur lobortis Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
      </p>
    </div>
  )
}

const FeatureInfo = () => {

  return (
    <div className="feature_container">
      <article className="feature_info">
        <h5 className='heading-tertiary'>experienced devs</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
           At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada 
        </p>
      </article>
      <article className="feature_info">
        <h5 className='heading-tertiary'>experienced devs</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
           At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada 
        </p>
      </article>
      <article className="feature_info">
        <h5 className='heading-tertiary'>experienced devs</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
           At faucibus aliquam facilisi mi consequat consectetur lobortis massa a. Iaculis faucibus sed eget velit malesuada 
        </p>
      </article>
    </div>
  )
}

export default Feature
