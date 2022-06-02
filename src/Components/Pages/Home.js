import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' />
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