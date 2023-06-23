import React from 'react'
import vector from '../../img/SVG/Vector-arr.svg';

const FormInputs = () => {

  return (
    <form className="form">

      <div className="form__group">
        <label htmlFor="name" className="form__label">full name?</label>
        <input type="name" id='name' className="form__input" required />
        <span></span>
      </div>

      <div className="form__group">
        <label htmlFor="email" className="form__label">email?</label>
        <input type="email" id='email' className="form__input" required />
        <span></span>
      </div>

      <div className="form__group">
        <label htmlFor="tel" className="form__label">number?</label>
        <input type="tel" id="tel" name="phone" className="form__input" required />
        <span></span>
      </div>

      <div className="form__group">
        <label htmlFor="address" className="form__label">address?</label>
        <input type="text" id='address' className="form__input" />
        <span></span>
      </div>
      
      <div className="form__group form__group--textarea">
        <label htmlFor="message" className="form__label">message?</label>
        <textarea name="" id="message" cols="30" rows="10" required>

        </textarea>
      </div>

      <div className="form__group form__group--btn">
        <button className='btn btn--main'>
          submit 
          <img src={vector} alt="vector" />
        </button>
      </div>

    </form>
  )
}

export default FormInputs
