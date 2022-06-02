import React, { useEffect, useState } from 'react'

function Jobs() {
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    fetch('http://refertest.pythonanywhere.com/job/openings',{
      method:'GET',
      headers:{
        "tid":3441
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setJobs(data.data)
      console.log(data);
    })
  },[])
  return (
    <div>Jobs{jobs.length}</div>
  )
}

export default Jobs