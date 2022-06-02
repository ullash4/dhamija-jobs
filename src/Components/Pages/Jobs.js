import React, { useEffect, useState } from 'react'
import Loading from '../Shared/Loading'

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [isLoading, setLoading]= useState(true)
  useEffect(()=>{
    fetch('http://localhost:5000/jobs')
    .then(res=>res.json())
    .then(data=>{
      setJobs(data)
      console.log(data);
      setLoading(false)
    })
  },[])
  if(isLoading){
    return <Loading />
  }
  return (
    <div>Jobs{jobs.length}</div>
  )
}

export default Jobs