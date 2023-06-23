import React, { useState } from 'react';
import data from './data';

import SingleQuestion from './Question';

const Questions = () => {
  const [Questions, setQuestions] = useState(data);

  return (
    <section className='section-accordion accordion'>
      <h1 className='heading-primary'>
        Frequently asked questions
      </h1>

      <div className="accordion__container">
        {
          Questions.map((question) => {
             
            return <SingleQuestion key={question.id} {...question} />
          })
        }
             
      </div>
    </section>
  )
}

export default Questions
