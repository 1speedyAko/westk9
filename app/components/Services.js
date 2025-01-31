import React from 'react'

function Services() {
  return (
    <div className="bg-emerald-200 py-8 w-full">
        <h1 className="text-black text-3xl text-center pb-8 font-bold">
          Our Services
        </h1>
        <div className="grid lg:grid-cols-4 text-black text-center text-xl gap-7 ">
          <div>
            <h1 className="font-bold">Dog Grooming</h1>
            
              <ul>
                <li>Nail clipping</li>
                <li>Full body wash</li>
                <li></li>
                <li></li>
              </ul>
          
          </div>
          <div>
            <h1 className="font-bold">Dog Training</h1>
            
            <ul>
                <li>Foundational Training</li>
                <li>Basic Training</li>
                <li>Intermidiate Training</li>
                <li>Advanced Training</li>
              </ul>
            
          </div>
          <div>
            <h1 className="font-bold">Handler Training</h1>
            
            <ul>
                <li>Basics of dog Training</li> 
                <li>Understanding behaviour and communication</li>
                <li>Practical Training techniques</li>
              </ul>
           
          </div>
          <div>
            <h1 className="font-bold">Dog Breeding</h1>
            <ul className="text-center">
                <li>Stud services</li>
                <li>Puppy rehoming</li>
                <li></li>
                <li></li>
              </ul>
          </div>
        </div>
        {/* <div className="text-center mt-10 pt-4">
          <button className="bg-gray-500 btn"> read more</button>
        </div> */}
        
      </div>
  )
}

export default Services

