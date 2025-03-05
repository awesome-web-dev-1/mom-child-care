import { IoArrowForward } from "react-icons/io5"
import { servicesPageItems } from "../constant/data"
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <>
      <section className="pt-[150px] pb-[100px] bg-[#FFD96A]">
      <div className="container text-center">
        <h1 className="max-w-[814px] mx-auto">Home Care Services
        for Your Little One</h1>
        <p className="max-w-[567px] mx-auto">We are dedicated to helping Child thrive, succeed, and find fulfillment in all aspects of their lives.</p>
      </div>
      </section>

      <section className="py-[80px] bg-[#FCFBF7]">
        <div className="container">
          <h2 className="text-center">It is all we do</h2>
          <p className="max-w-[632px] text-center mx-auto">We provide a range of resources and guidance to support their physical, cognitive, emotional, and social growth.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-[40px] min-w-full">
            {servicesPageItems.map((item)=>(
              <div className="grid xs:grid-cols-2 border border-[#D9DADB] p-5 bg-white" key={item.id}>
                
                <div className="order-1 xs:order-none mt-3 xs:mt-0">
                  <div className="flex gap-[5px]">
                    <img src={item.icon} alt={item.title} className="flex-shrink-0" />
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                  <div>
                    <p className="mt-4 mb-9">{item.text}</p>
                    <Link className="link flex items-center gap-1">
                    {item.link}
                    <IoArrowForward />
                    </Link>
                  </div>
                </div>

                <div>
                  <img src={item.imgUrl} alt={item.title} className="img-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services