import { aboutStatusItem } from "../../constant/data"
import { Link } from "react-router-dom"

const Guiding = () => {
  return (
    <section className="section">
      <div className="container grid gap-20 md:grid-cols-2">
        <div className="md:order-1">
          <h2 className="title">Guiding Single Mothers to Success</h2>
          <p className="text mt-4 mb-16">
          At Empowered Moms, we are passionate about supporting and guiding single mothers on their path to success. We understand the unique challenges and responsibilities that come with being a single mother, and we are dedicated to empowering you to overcome obstacles and unlock your full potential.
          </p>
          <Link to='' className='btn'>Learn More</Link>
          <div className="mt-[35px] grid grid-cols-2 gap-7">
          {aboutStatusItem.map((item)=>(
            <div key={item.id}>
              <h3 className='font-bold text-[32px]'>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        </div>
        <div className="about-banner">
          <img src="/images/about-sec-banner-t.png" alt="about banner" className="top-banner" />
          <img src="/images/about-sec-banner-b.png" alt="about banner" className="bottom-banner" />
          <img src="/images/shape-small.png" className="absolute -top-8 -right-7 rotate-90" />
          <img src="/images/shape-2.png" className="absolute -bottom-10 -left-10" />
        </div>
      </div>
    </section>
  )
}

export default Guiding