import React, { useEffect, useState } from 'react'
import Loading from '../Shared/Loading'
import JobRow from './JobRow'

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [isLoading, setLoading]= useState(true)
  useEffect(()=>{
    fetch('http://refertest.pythonanywhere.com/job/openings')
    .then(res=>res.json())
    .then(data=>{
      setJobs(data.data)
      console.log(data);
      setLoading(false)
    })
  },[])
  if(isLoading){
    return <Loading />
  }
  return (
    <div className='lg:px-20 my-10'>
      <h1 className='text-3xl font-bold text-center text-primary mb-5'>Find Your Dream Job</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
        {
          jobs.map(job=><JobRow key={job.id} job={job}></JobRow>)
        }
      </div>
    </div>
  )
}

export default Jobs