import React, { useState } from 'react';

const Contact = () => {
const [data, setData ] = useState(
  {fullname: '', email: '', number: '', message:''}
);

const InputEvent = (event) => {
  const {name, value} = event.target;

  setData((preVal) => {
    return {
      ...preVal,
      [name]: value,
    }
  })
}

  const formSubmit = (e) => {
    e.preventDefault()
    alert(`My name is ${data.fullname}`)
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="text" className="form-control" value={data.fullname} id="exampleFormControlInput1" onChange={InputEvent} name="fullname" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Phone number</label>
              <input type="number" className="form-control" value={data.number} id="exampleFormControlInput1" onChange={InputEvent} name="number" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" value={data.email} id="exampleFormControlInput1" onChange={InputEvent} name="email" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label" >Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" value={data.message} rows="3"></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Send</button>
            </div>
            </form>

          </div>
        </div>
      </div>


    </>
  )
}

export default Contact;
