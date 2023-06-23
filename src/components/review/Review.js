import React from 'react';

import SingleReviews from './SingleReviews';
import { BsTwitter } from  'react-icons/bs'

const Review = () => {
  return (
    <section className='section-review review'>
      <h3 className="heading-primary u-center-text">testimonials from other students</h3>
        <Reviews/> 
    </section>
  )
}

const Reviews = () => {
  
  return (
    <div className="review__carousel">

    <div className="review_container">
      <div className='review_card-wrapper'>
        <article className="review__card">
          <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            <span className='review__icon'>
              <BsTwitter className='review__icon' />
                </span>
              </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
          </a>
        </article>

        <article className="review__card">
          <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            <span className='review__icon'>
              <BsTwitter className='review__icon' />
            </span>          </div>
          <p>
           vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
          </a>
        </article>

        <article className="review__card">
          <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>

            <span className='review__icon'>
            <BsTwitter className='review__icon' />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
          </a>
        </article>
      </div>
      <div className='review_card-wrapper'>
        <article className="review__card">
          <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            <span className='review__icon'>
              <BsTwitter className='review__icon' />
            </span>          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias possimus corporis quas ut odio incidunt fugit ipsum. Corrupti, ipsam aperiam!
          </p>
          </a>
        </article>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>

        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>
      </div>

      <div className='review_card-wrapper'>
          <article className="review__card">
            <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>            </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
            </a>
        </article>
        
          <article className="review__card">
            <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>            </div>
          <p>
          proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
            </a>
        </article>

          <article className="review__card">
            <a href="">

          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
            </a>
        </article>
      </div>

      <div className='review_card-wrapper'>
        <article className="review__card">
            <a href="">
              
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
            At faucibus aliquam facilisi mi
          </p>
          </a>
        </article>
          <article className="review__card">
            <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            proin massa eget laoreet in. At faucibus aliquam facilisi mi
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
          </p>
            </a>
        </article>

          <article className="review__card">
            <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>

            </a>
        </article>
      </div>

      <div className='review_card-wrapper'>
          <article className="review__card">
            <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
          </p>
            </a>
        </article>
          <article className="review__card">
            <a href="">

          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            proin massa eget laoreet in. At faucibus aliquam facilisi mi
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet
            Orci vestibulum proin massa eget laoreet in.
             in.
          </p>
            </a>
        </article>

          <article className="review__card">
            <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>

            </a>
        </article>
      </div>

      <div className='review_card-wrapper'>
          <article className="review__card">
            <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
             
          </p>

            </a>
        </article>
          <article className="review__card">
            <a href="">

          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
            proin massa eget laoreet in. At faucibus aliquam facilisi mi
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
          </p>
            </a>
        </article>

          <article className="review__card">
            <a href="">

          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
                <span className='review__icon'>
                  <BsTwitter className='review__icon' />
                </span>              </div>
          <p>
         Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
            </a>
        </article>
      </div>
      </div>
      
    <div className="review_container">
      <div className='review_card-wrapper'>
        <article className="review__card">
          <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            <span className='review__icon'>
              <BsTwitter className='review__icon' />
            </span>          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
          </a>
        </article>

        <article className="review__card">
          <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            <span className='review__icon'>
              <BsTwitter className='review__icon' />
            </span>          </div>
          <p>
           vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
          </a>
        </article>

        <article className="review__card">
          <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>

            <span className='review__icon'>
            <BsTwitter className='review__icon' />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
          </a>
        </article>
      </div>
      <div className='review_card-wrapper'>
        <article className="review__card">
          <a href="">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            <span className='review__icon'>
              <BsTwitter className='review__icon' />
            </span>          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias possimus corporis quas ut odio incidunt fugit ipsum. Corrupti, ipsam aperiam!
          </p>
          </a>
        </article>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>

        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>
      </div>

      <div className='review_card-wrapper'>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
          proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>

        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>
      </div>

      <div className='review_card-wrapper'>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
            At faucibus aliquam facilisi mi
          </p>
        </article>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            proin massa eget laoreet in. At faucibus aliquam facilisi mi
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
          </p>
        </article>

        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>
      </div>

      <div className='review_card-wrapper'>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
          </p>
        </article>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            proin massa eget laoreet in. At faucibus aliquam facilisi mi
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet
            Orci vestibulum proin massa eget laoreet in.
             in.
          </p>
        </article>

        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>
      </div>

      <div className='review_card-wrapper'>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
             
          </p>
        </article>
        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
            proin massa eget laoreet in. At faucibus aliquam facilisi mi
            Lorem ipsum dolor sit amet consectetur.
            Orci vestibulum proin massa eget laoreet in.
          </p>
        </article>

        <article className="review__card">
          <div className="review__card-head">
            <img className='review__profile-pic' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R100048545&ga=GA1.1.1083463234.1681973259&semt=sph" alt="" />
            <h6 className='review__profile-name'>john kester <span>@specter</span></h6>
            {/* <img src={twitter} alt="" className='review__profile-media'/> */}
          </div>
          <p>
         Orci vestibulum proin massa eget laoreet in. At faucibus aliquam facilisi mi
          </p>
        </article>
      </div>
      </div>

    </div>
  )
}

export default Review
