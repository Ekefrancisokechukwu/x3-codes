import React, { useState } from 'react';
import { gradutesData } from './data';



const GraduatesHandle = () => {
  const [graduates, setGraduates] = useState(gradutesData);

  return (
    <section className='section-graduate graduate'>
      {
        graduates.map((item) => {

          return   <SingleGradute graduates={item} key={item.id} />

        })
      }
    </section>
  )
  }




const SingleGradute = (props) => {
  const { img, name, profession, linkedin, github, twitter } = props.graduates;


  return (
    <article className='graduate__item'>
      <div className='graduate__img'>
      <img src={img} alt="" />
      </div>
      <h3 className='graduate__name'>{name}</h3>
      <h5 className='graduate__proffesion'>{profession}</h5>
      <div className="graduate__links">
        <a href={linkedin}>linkedin </a>|
        <a href={github}>github </a>|
        <a href={twitter}>Twitter</a>
      </div>
    </article>
  )
}

export default GraduatesHandle;
