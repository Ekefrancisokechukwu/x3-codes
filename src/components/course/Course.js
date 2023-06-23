import React, { useState } from 'react';
import courseData from './courseData';

// icons
import vector from '../../img/SVG/Group.svg'

const Course = () => {
  return (
    <section className='section-course course'>
      <CourseHeading />
      <CourseBox />
    </section>
  )
}


const CourseHeading = () => {

  return (
    <div className="course_heading">
      <h2 className='heading-secondary'>start <span>learning</span> </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget laoreet in.
        At faucibus aliquam facilisi mi consequat consectetur lobortis Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  )
}

const CourseBox = () => {
  const [courses, setCourse] = useState(courseData);

  return (
    <div className="course_container">

      {
        courses.map((cours) => {

          const { course, duration, id } = cours;

          return <article key={id} className="course_info">
            <img src={vector} alt="vector" />
            <a href="#">
              <h6> {course}</h6>
            </a>
            <p>Duration <span>{duration}</span> months</p>
          </article>
        })
      }
     
    </div>
  )
}

export default Course
