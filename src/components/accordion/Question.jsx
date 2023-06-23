import React, { useRef, useState,useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const containerRef = useRef(null)
  const infoRef = useRef(null)
  
  useEffect(() => {
    const infoHeight = infoRef.current.getBoundingClientRect().height;
    if (showInfo) {
      containerRef.current.style.height = `${infoHeight}px`
    } else {
      containerRef.current.style.height = 0;
    }
  },[showInfo])

 
  return (
    <article className='accordion__question'>
      <header onClick={() => setShowInfo(!showInfo)}>
        <h3>{title}</h3>
        <button>
          <FiChevronDown className={showInfo ? 'btn-active' : 'btn-icon'}/>
        </button>
      </header>
      <div className="accordion__info" ref={containerRef}>
      <p ref={infoRef}>{info }</p>
      </div>
    </article>
  )
}

export default Question


