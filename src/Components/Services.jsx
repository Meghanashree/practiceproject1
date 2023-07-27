import React from "react";
import Cards from "./Cards";
import ServiceData from "../Data/ServiceData";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {ServiceData.map((val, ind) => {
                return <Cards key={ind} imgsource={val.imgsource} buttonname={val.buttonname}
                 title={val.title} description={val.description} />
              })}
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Services;
