import { IoArrowForward} from "react-icons/io5"
import { Link } from "react-router-dom"
import { blogPageCardItems } from "../constant/data"
import ContactSec from "../components/ContactSec"
const Blog = () => {
  return (
    <>
    <section className="pt-[150px] pb-[100px] bg-[#FFD96A]">
      <div className="container text-center">
        <h1>Some Outstanding Articles</h1>
        <p>Welcome to Empowered Moms, a place dedicated to supporting</p>
      </div>
    </section>

    <section className="section">
      <div className="container grid gap-20 md:grid-cols-2">
        <div className="md:order-1">
          <div className="flex gap-3 md:gap-6 items-center flex-wrap">
            <div className="flex items-center gap-[6px] py-[7px] px-[9.5px] rounded-[15px] border max-w-max border-[#9FA1A6]">
              <span className="bg-[#BAEC7B] w-2 h-2 rounded-full"></span>
              <span className="">News</span>
            </div>
            <p><b>Front-end</b> . 1 Hour Ago</p>
          </div>
          <h2 className="title">Unlock the Secrets to Your Success!</h2>
          <p className="text mt-3 mb-[40px] md:mt-5 md:mb-[70px]">
          I recently optimized my website's already fast loading times by focusing on CSS. Here's how you can do the same to boost your site's speed.
          </p>
          <Link to='' className='link justify-end'>
            Read Full
            <IoArrowForward />
          </Link>
        </div>
        <div className="">
          <img src="/images/banner-3.png" alt="banner" className="" />
        </div>
      </div>
    </section>

    <section className="section grid md:grid-cols-[0.5fr,1fr] md:gap-[18px] md:items-stretch">
      <div className="bg-[#00715D] text-white py-[75px] px-[42px] md:order-1">
        <h2 className="text-[28px]">Are You Ready to Explore More?</h2>
        <p className="text-neutral-300 mt-4 mb-8">Don’t miss out on more creative ideas, parenting tips, and fun activities! Stay connected with us for the latest updates and exclusive offers.</p>
        <Link to='' className="bg-[#FFD249] py-4 px-8 flex gap-3 text-neutral-900 items-center max-w-max transition-colors hover:bg-[#dead19]">
          Join Our Community
          <IoArrowForward />
        </Link>
      </div>
      <img src="/images/banner-4.png" alt="banner image" className="max-h-[328px] w-full object-cover md:max-h-none" />
    </section>


    <section className="section">
      <div className="container grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {blogPageCardItems.map((item)=>(
          <div className="mb-10 md:mb-[62px]" key={item.id}>
          <div className="">
            <img src={item.imgUrl} alt={item.title} className="img-cover" />
          </div>
          <div className="">
            <div className="flex justify-between my-[26px]">
              <span className="border py-1 px-4">{item.span}</span>
              <p>{item.subtext}</p>
            </div>
            <h3 className="card-title mb-[24px]">{item.title}</h3>
            <Link className="link gap-1">
              {item.link}
              <IoArrowForward />
            </Link>
          </div>
          </div>
        ))}
      </div>
    </section>

    <ContactSec />
    </>
  )
}

export default Blog