import { Link } from 'react-router-dom'
import { aboutStatusItem,missionItems,teams,testimonialsItems } from '../constant/data'
import { IoArrowForward,IoStar } from "react-icons/io5"
import { IoMdQuote } from "react-icons/io"
import Contact from './Contact'
import ContactSec from '../components/ContactSec'

const About = () => {
  return (
    <>
    <section className="pt-[150px] pb-[100px] bg-[#FFD96A]">
      <div className="container text-center">
        <h1>About Us</h1>
        <p>Welcome to Empowered Moms, a place dedicated to supporting </p>
      </div>
    </section>


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


    {/* our mission section */}
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

      {/* Testimonials */}
      <section className="py-[100px]">
      <div className="container">
      <div className="md:flex md:justify-between md:items-start">
          <div>
            <p className="subtitle">Testimonial</p>
            <div className="relative max-w-max mb-10">
              <h2>What our Clients say About us</h2>
              <img src="/images/shape-7.png" alt="shape image" className="absolute -top-2 -right-8" />
            </div>
          </div>

            <Link to='about' className="border border-[#00715d] py-4 px-9 text-[#00715d]   flex max-w-max items-center gap-3 mt-8 hover:bg-[#00715d] transition-colors hover:text-neutral-50 duration-300">View More 
              <IoArrowForward />
            </Link>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 mt-[40px] md:mt-[70px]">
          {testimonialsItems.map((item)=>(
            <div className="grid xs:grid-cols-2 gap-[22px] p-[14px] border border-[#D9DADB]">
              <div className="flex-shrink-0">
                <img src={item.imgURL} alt={item.author} width={222} height={251} className="img-cover" />
              </div>
              <div className="">
                <span className="text-[37px] text-[#00715D]">
                  <IoMdQuote />
                </span>
                <p className="">{item.text}</p>
                <div className="flex text-2xl text-[#FFD53F] gap-2">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <div className="w-full h-[1px] bg-neutral-200 mt-3 mb-[10px]"></div>
                <div className="bt-[10px] flex gap-2 flex-wrap">
                  <p className="font-bold">{item.author}</p>
                  <p>{item.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      </section>

      {/* Our team */}
      <section className="section">
        <div className="container">
          <p className="subtitle">Our Team</p>
          <h2>Care givers</h2>

          <div className="about-page-card-wrapper">
            {teams.map((team)=>(
              <div key={team.id} className='about-page-card'>
                <Link to='TeamDetails'>
                  <div>
                  <img src={team.imgUrl} alt={team.name} />
                  </div>
                  <div className='about-page-card-content'>
                  <p className='text-white text-center text-2xl'>{team.name}</p>
                  <p className='text-white text-center'>{team.identity}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    <ContactSec />

    </>
  )
}

export default About