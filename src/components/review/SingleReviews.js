import React from 'react'


const SingleReviews = () => {

  return (
    <div>
      <article className="review__reviews">
        <div className="review__review-head">
          <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
          <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
          {/* <img src={twitter} alt="" className='review__profile-media'/> */}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
        </p>
      </article>
      
      <article className="review__reviews">
        <div className="review__review-head">
          <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
          <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
          {/* <img src={twitter} alt="" className='review__profile-media'/> */}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
        </p>
      </article>
    </div>
  )
}

export default SingleReviews
