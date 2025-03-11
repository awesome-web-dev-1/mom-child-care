import React from 'react'

const Title = ({title,text}) => {
  return (
    <section className="pt-[150px] pb-[100px] bg-[#FFD96A]">
      <div className="container text-center">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

export default Title