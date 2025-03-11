import React from 'react'
import { useParams } from 'react-router-dom'
import { blogDetailsItems } from '../constant/data';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import Cta from '../components/sections/Cta';
import blogDetailsCtaImg from '/images/blog-details-cta-img.png'
const BlogDetials = () => {
  const { id } = useParams();
  return (
    <>
      <section className="pt-[150px] pb-[100px] bg-[#FFD96A]">
        <div className="container text-center">
          <h1 className='max-w-[705px] mx-auto'>Creative Ideas for 
          Memorable Kids' Activities</h1>
          <p>Welcome to Empowered Moms, a place dedicated to supporting </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <img src="/images/blog-detial-banner.png" alt="banner" className='img-cover  max-h-[535px]' />
        </div>
      </section>

      <section className="section">
      <div className="container">
        <div>
          <div className="flex gap-3 md:gap-6 items-center flex-wrap">
            <div className="flex items-center gap-[6px] py-[7px] px-[9.5px] rounded-[15px] border max-w-max border-[#9FA1A6]">
              <span className="bg-[#BAEC7B] w-2 h-2 rounded-full"></span>
              <span className="">News</span>
            </div>
            <p><b>Dress Codes</b> . June 11, 2024</p>
          </div>
          <h2 className="title mt-2 mb-5">Make Every Moment Special for Your Little One</h2>
          <p className="text mt-3 mb-[40px] md:mt-5 md:mb-[44px]">
          Are you looking for fun and engaging activities to brighten your child’s day? Whether it’s a weekend activity or a special celebration, 
          these ideas will spark joy and creativity, making unforgettable memories for you and your family. Let’s dive into some exciting themes!
          </p>
        </div>
      </div>
    </section>


    <section className="section">
      <div className="container ">
        <div className="grid md:grid-cols-2 gap-[44px]">
          <ol className='list-decimal'>
            {blogDetailsItems.map((item)=>(
              <li key={item.id}>
                <h3 className="card-title">{item.title}</h3>
                <p className="text mt-4 mb-6 max-w-[661px]">{item.text}</p>
              </li>
            ))}
          </ol>

          <div className="relative max-w-max">
          <img src="/images/blog-details-img.png" alt="image" className='img-cover' />
          <img src="/images/blog-shape-sm.png" alt="shape image" className='absolute -top-6 -right-6' />
          <img src="/images/blog-shape-lg.png" alt="" className='absolute -bottom-10 -left-11' />
          </div>
        </div>
         <p className='mt-[44px]'>With these activities, you can turn ordinary days into extraordinary adventures! Get ready to see your child’s face light up with joy as they create, explore, and learn.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Safety Tips for children while playing outside</h2>
        <p className='my-6'>Actively supervising children during outdoor activities is essential, as they often seek your attention to watch them run, climb, jump, and play. Teach them the importance of safe behaviour by discouraging pushing, shoving, or crowding, which can lead to accidents. Recognize that younger children have different needs and abilities than older ones, so consider having designated areas or activities suited for children under five. Ensure they are dressed appropriately for outdoor play by removing necklaces, scarves, purses, or clothing with drawstrings, which could get caught on objects and pose strangulation risks. Helmets, while critical for biking, should not be worn during general play activities to avoid potential injuries. </p>
        <p className='bg-[#55A093] text-[24px] p-10 text-white font-semibold'>"Children thrive when they have the freedom to explore and play safely. By guiding their actions, ensuring proper attire, and choosing secure play areas, we create an environment where their imagination and energy can flourish."</p>
        <p className='mt-6'>Additionally, prioritize outdoor play areas with softer surfaces, such as grass, sand, wood chips, or mulch, which can cushion falls better than hard surfaces like asphalt or concrete. Taking these precautions helps create a safe and enjoyable environment for children to explore, play, and grow during any outdoor activity.</p>
      </div>
    </section>

    <section className="section">
      <div className="container flex flex-col gap-10 md:flex-row md:justify-between md:items-center">
        <div>
          <div className="flex items-center gap-5">
            <IoArrowBack size={24} className='text-[#00715D] mb-[10px]' />
            <p>Previous Post</p>
          </div>
          <p className='text-[20px] font-medium '>Balancing Work and Family</p>
        </div>

        <div className="">
          <img src="/images/blog-shape-lg.png" alt="" />
        </div>

        <div className="max-w-max">
          <div className="flex items-center justify-end gap-5">
            <p>Next Post</p>
            <IoArrowForward size={24} className='text-[#00715D] mb-[10px]' />
          </div>
          <p className='text-[20px] font-medium'>Tips for Hosting a Stress-Free Playdate</p>
        </div>
      </div>
    </section>

    <Cta img={blogDetailsCtaImg} />
    </>
  )
}

export default BlogDetials