import React from 'react'

function TeamCard({img, name, desc}) {
  return (
    <div className="rounded-[25px] flex justify-between flex-col w-[70%] border-primary-100 border-2 p-3 m-3 font-montserrat">
      <div className="flex flex-row items-center gap-6 m-3">
        <img src={img} alt={name} />
        <span className='text-primary-400 font-bold'>{name}</span>
      </div>
      <div className='bg-primary-100 p-5 rounded-3xl min-h-[165px] justify-end content-end'>
        <p className='w-[85%] mx-auto'>{desc}</p>
      </div>
    </div>
  );
}

export default TeamCard