import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Shared/Loading';
import background2 from '../../assets/background2.png'

function Home() {
  const [isLoading, setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },1000);
  },[])
  if(isLoading){
    return <Loading />
  }
  return (
    <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={background2} class="w-[494px] h-[355px] rounded-lg " alt='' />
    <div>
      <h1 class="text-5xl font-bold">Welcome to Dhamija Jobs</h1>
      <p class="py-6">Dhamija Jobs is a Indian website where  experienced or freashers can find there dream jobs.</p>
      <Link to={'/findjobs'} class="btn btn-primary">Find Jobs</Link>
    </div>
  </div>
</div>
  )
}

export default Home