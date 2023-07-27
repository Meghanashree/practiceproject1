import React from "react";
import pasta from "../Assets/pasta.PNG"

const Cards = (props) => {
  return (
    <>


                <div className="col-md-4 col-10 mx-auto">
                  <div className="card" >
                    <img src={props.imgsource} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.description}</p>
                      <a href="#" className="btn btn-primary">{props.buttonname}</a>
                    </div>
                  </div>
                </div>


    </>
  )
}

export default Cards;
