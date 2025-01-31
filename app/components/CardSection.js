import React from 'react'
import Card from './Card'

function CardSection() {
  return (
    <>
         <div className="bg-slate-800  text-white pb-10">
        {/*cards go here*/}
        <section>
          {/*card 1*/}
          <div className="text-center py-20">
            <h4 className="uppercase font-bold text-emerald-500">Hey!</h4>
            <h1 className="capitalize text-3xl font-bold">
              come lets help you
            </h1>
          </div>
          <div>
            <Card/>
          </div>
          
        </section>
      </div>
    </>
  )
}

export default CardSection