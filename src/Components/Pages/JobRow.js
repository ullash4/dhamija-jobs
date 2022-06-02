import React from 'react'

function JobRow({job}) {
    const {company, designation, location, min_experience, skills}=job;
    let exprience;
    if(min_experience < 1){
        exprience= <span className='text-green-500'>Fresher</span>
    }else{
        exprience= <span className='text-primary'>Exprienced</span>
    }
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-3xl font-semibold text-center">{designation}</h2>
    <p className='font-medium'><span className='text-xl'>Company: </span> {company}</p>
    <p className='font-medium'><span className='text-xl'>Location:</span> {location}</p>
    <p className='font-medium'><span className='text-xl'>Experience:</span> {exprience}</p>
    <p className='font-medium'><span className='text-xl'>Requird Skills:</span> {' '+skills+' '}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">See Datails</button>
    </div>
  </div>
</div>
  )
}

export default JobRow