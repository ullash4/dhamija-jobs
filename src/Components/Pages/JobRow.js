import React from "react";

function JobRow({ job }) {
  const { company, designation, location, min_experience, skills } = job;
  let exprience;
  if (min_experience < 1) {
    exprience = <span className="text-green-500">Fresher</span>;
  } else {
    exprience = <span className="text-primary">Exprienced</span>;
  }
  return (
    <div
      className="card lg:max-w-lg bg-base-100 shadow-xl"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="card-body">
        <h2 className="text-3xl font-semibold text-center">{designation}</h2>
        <p className="font-medium">
          <span className="text-xl">Company: </span> {company}
        </p>
        <p className="font-medium">
          <span className="text-xl">Location:</span> {location}
        </p>
        <p className="font-medium">
          <span className="text-xl">Experience:</span> {exprience}
        </p>
        <p className="font-medium">
          <span className="text-xl">Requird Skills:</span> {" " + skills + " "}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Datails</button>
        </div>
      </div>
    </div>
  );
}

export default JobRow;
