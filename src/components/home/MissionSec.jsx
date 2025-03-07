import { missionItems } from "../../constant/data"
import { Link } from 'react-router-dom'
const MissionSec = () => {
  return (
    <section className="section pb-32">
          <div className="container grid gap-[73px] md:grid-cols-2">
            <div className="max-w-[414px] w-full">
              <p className="subtitle">Our Mission</p>
              <h2>Building a Brighter Future for Reliable ChildCare</h2>
              <p className="mt-4 mb-10">We are dedicated to helping Child thrive, succeed, and find fulfillment in all aspects of their lives.</p>
    
              <Link to='about' className="btn">Learn More</Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {missionItems.map((item)=>(
                <div className="card" key={item.id}>
                  <div className="bg-[#00715D] max-w-max p-[14px] rounded-full">
                    <img src={item.imgURL} alt={item.title} />
                  </div>
                  <div className="">
                    <h3 className="pt-5 pb-4">{item.title}</h3>
                    <p className="">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
  )
}

export default MissionSec