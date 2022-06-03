import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import background2 from "../../assets/background2.png";

function Home() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          data-aos="zoom-out-left"
          data-aos-duration="1000"
          src={background2}
          className="w-[494px] h-[355px] rounded-lg "
          alt=""
        />
        <div>
          <h1
            data-aos="zoom-out-right"
            data-aos-duration="1000"
            className="text-5xl font-bold"
          >
            Welcome to Dhamija Jobs
          </h1>
          <p
            data-aos="zoom-out-right"
            data-aos-duration="1000"
            className="py-6"
          >
            Dhamija Jobs is a Indian website where experienced or freashers can
            find there dream jobs.
          </p>
          <Link
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="300"
            to={"/findjobs"}
            className="btn btn-primary"
          >
            Find Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
