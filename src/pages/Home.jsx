import { Link } from "react-router-dom"
import { blogCardItems, faqQuestions, healItems, missionItems, testimonialsItems } from "../constant/data"
import { IoAdd, IoArrowForward,IoCheckbox,IoRemove,IoStar } from "react-icons/io5"
import { useState } from "react"
import { IoMdQuote } from "react-icons/io"
import ContactSec from '../components/ContactSec'

const Home = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const handleToggleQuestion = (index) => {
    setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
  };

  return (
    <>
    {/* Hero */}
    <section className="hero">
      <div className="hero-container">
        <div>
          <h1>Caring Hands, Quality Home Care for Your Little One</h1>
          <p className="mt-4 mb-[30px]">Welcome to Empowered Moms, a supportive space committed to empowering single mothers in managing child care and achieving success. Our mission is to offer the guidance, resources and thrive in every aspect of life.
          </p>
          <Link to='' className="btn">Book a Session</Link>
        </div>
        <div className="relative max-w-max mx-auto md:mx-0">
          <img src="/images/shape-small.png" alt="shape small" className="absolute -top-8 -left-6" />
          <img src="/images/hero-banner.png" alt="hero banner" width={599} height={489}/>
          <img src="/images/shape-1.png" alt="shape img" className="absolute -bottom-9 -right-10" />
        </div>
      </div>
        <div className="hidden md:block w-[50%] h-[650px] absolute top-0 right-0 bg-[#FFD967] -z-10"></div>
    </section>
    {/* About section */}
    <section className="section">
      <div className="container grid gap-20 md:grid-cols-2">
        <div className="md:order-1">
          <p className="subtitle">About Us</p>
          <h2 className="title">Finding Superior Care for Your Baby</h2>
          <p className="text mt-4 mb-16">
          Reliable child care is essential for single moms striving to balance work, family, and personal growth. It provides a safe and nurturing environment for children, allowing mothers to pursue their careers and goals with peace of mind. Access to trustworthy child care resources helps single mothers manage their busy lives more effectively.
          </p>
          <Link to='about' className='btn'>Learn More</Link>
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
    

    {/* Heal yourself section */}
    <section className="py-[100px] relative mt-32">
      <div className="container md:grid md:grid-cols-12">
        <div className="border-l-[14px] border-l-[#FFD96A] px-[46px] py-8 bg-white md:col-span-8">
          <h2>Heal Yourself</h2>
          <p className="mt-4 mb-5">Our mission is to nurture your child's holistic development. We provide a range of resources and guidance to support their physical, cognitive, emotional, and social growth.</p>
          <div className="w-full bg-neutral-200 h-[1px] mb-[30px]"></div>
          <div className="grid gap-6">
            {healItems.map((item)=>(
              <div className="flex gap-3">
                <div className="text-[#00715D] text-[32px]">
                  <IoCheckbox />
                </div>
                <div className="">
                  <h3 className="mb-3">{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      <img src="/images/banner image.png" alt="banner" className="absolute -top-20 right-0 -z-10 md:-top-1/2 md:bottom-1/2 md:translate-y-1/2 md:w-1/2 img-cover"/>
      <img src="/images/shape-5.png" className="absolute top-0 right-0" alt="shape image" />
      <img src="/images/shape-6.png" className="absolute bottom-0 left-0" alt="shape image" />
    </section>

    {/* Blog */}
    <section className="py-[100px] mt-8 bg-[#00715d] md:max-h-[524px] h-full">
      <div className="container">
        <div className="md:flex md:justify-between items-start">
          <div className="sm:max-w-[531px] relative">
            <p className="text-[#FFD249]">Blog</p>
            <div className="relative mb-10">
              <h2 className="text-white max-w-max">Inspiration and Guidance for Child</h2>
              <img src="/images/shape-4.png" alt="shape image" className="absolute -top-2 -right-8" />
            </div>
            
          </div>
          <Link to='blog' className="border border-white py-4 px-9 text-white flex max-w-max items-center gap-3 mt-8 hover:bg-neutral-50 transition-colors hover:text-neutral-900 duration-300">View More 
            <IoArrowForward />
          </Link>
        </div>

        <div className="grid gap-6 mt-[66px] sm:grid-cols-2 md:grid-cols-3">
            {blogCardItems.map((item)=>(
              <div className="bg-neutral-50 p-4">
                <div className="">
                  <img src={item.imgURL} alt={item.title} className="w-full" />
                </div>
                <div className="">
                  <h4 className="text-[24px] mt-4 mb-3">{item.title}</h4>
                  <p className="mb-5">{item.text}</p>
                  <Link to='blog' className="flex items-center gap-1 text-[#00715d]  text-[16px] hover:gap-2 transition duration-300 max-w-max font-quicksand font-semibold">{item.link} <IoArrowForward size={20} /></Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>


    {/* FAQ */}
    <section className="py-[100px] sm:mt-72">
      <div className="container bg-[url(/images/faq-banner.png)] bg-no-repeat py-8 grid">
      <div className="sm:max-w-[60%] w-full bg-white p-10 border border-[#D9DADB] sm:ml-auto">
        <p className="subtitle">FAQ</p>
        <div className="relative max-w-max mb-10">
          <h2>Frequently Asked Questions</h2>
          <img src="/images/shape-7.png" alt="shape image" className="absolute -top-2 -right-8" />
        </div>

      <div className="grid gap-5">
        {faqQuestions.map((item, index) => (
          <div className="border border-[#D9DADB]" key={index}>
            <div className="flex justify-between items-center py-[22px] px-[30px] cursor-pointer" onClick={() => handleToggleQuestion(index)}>
              <h3>{item.title}</h3>
              <button className="text-[36px]">
                {activeQuestionIndex === index ? 
                  <IoRemove className="bg-[#00715d] p-[10px] rounded-full text-[#fafafa]"/>  :
                  <IoAdd className="bg-[#FAFAFA] p-[10px] rounded-full text-[#00715d]" />
              }
                
              </button>
            </div>
            <div className="w-full h-[1px] bg-neutral-200"></div>
            <div className={`question-text ${activeQuestionIndex === index ? "active" : ""}`}>
              <p className="p-[30px]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>

    {/* Blog */}
    <section className="section pb-[100px]">
      <div className="container">
        <div className="md:flex md:justify-between md:items-start">
          <div>
            <p className="subtitle">Blog</p>
            <div className="relative max-w-max mb-10">
              <h2>Some Outstanding Articles</h2>
              <img src="/images/shape-7.png" alt="shape image" className="absolute -top-2 -right-8" />
            </div>
          </div>

            <Link to='blog' className="border border-[#00715d] py-4 px-9 text-[#00715d]   flex max-w-max items-center gap-3 mt-8 hover:bg-[#00715d] transition-colors hover:text-neutral-50 duration-300">View More 
              <IoArrowForward />
            </Link>
        </div>

        <div className="mt-[70px] grid gap-6 md:grid-cols-2">
            <div>
              <div className="">
                <img src='/images/blog-2-img-1.png' alt='Practical Childcare Tips' className="w-full" />
              </div>
              <div className="">
                <h4 className="font-semibold text-[24px] my-3">Practical Childcare Tips</h4>
                <span className="text-[#3F444D] text-[14px]">April 7, 2022</span>
                <p className="text mt-5 mb-4">Practical Childcare Tips provide essential advice for parents and caregivers to navigate daily challenges with ease.</p>
                <Link to='blog' className="text-[#00715D] font-bold border-b-2 pb-1 border-b-[#00715D]">Listen now</Link>
              </div>
            </div>
        <div className="grid gap-6">

            <div className="sm:flex gap-4">
              <div className="flex-shrink-0">
                <img src='/images/blog-2-img-2.png' alt='Emotional Well-being' className="w-full" />
              </div>
              <div className="">
                <h4 className="font-semibold text-[24px] my-3 sm:my-0">Emotional Well-being</h4>
                <span className="text-[#3F444D] text-[14px]">April 7, 2022</span>
                <p className="text mt-5 mb-4">It involves providing support</p>
                <Link to='blog' className="text-[#00715D] font-bold">Listen now</Link>
              </div>
            </div>

            <div className="sm:flex gap-4">
              <div className="flex-shrink-0">
                <img src='/images/blog-2-img-3.png' alt='Personal Growth and Self-Discovery' className="w-full" />
              </div>
              <div className="">
                <h4 className="font-semibold text-[24px] my-3">Personal Growth and Self-Discovery</h4>
                <span className="text-[#3F444D] text-[14px]">April 7, 2022</span>
                <p className="text mt-5 mb-4">Personal growth is the journey of understanding oneself.</p>
                <Link to='blog' className="text-[#00715D] font-bold">Listen now</Link>
              </div>
            </div>
        </div>
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


    {/* Contact */}
    <ContactSec />
    </>
  )
}

export default Home