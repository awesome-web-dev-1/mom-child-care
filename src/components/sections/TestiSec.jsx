import { Link } from "react-router-dom"
import { IoArrowForward,IoStar } from "react-icons/io5"
import { IoMdQuote } from "react-icons/io"
import { testimonialsItems } from "../../constant/data"
const TestiSec = () => {
  return (
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
        <div className="grid gap-10 mt-[40px] md:mt-[70px] sm:grid-cols-2">
          {testimonialsItems.map((item)=>(
            <div className="border border-neutral-500/25 rounded-lg p-5" key={item.id}>
              <div className="">
                <span className="text-[37px] text-[#00715D]">
                  <IoMdQuote />
                </span>
                <p className="text-[20px] font-semibold my-8">{item.text}</p>
                <div className="flex text-2xl text-[#FFD53F] gap-2">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <div className="w-full h-[1px] bg-neutral-200 mt-3 mb-[10px]"></div>
              </div>
              <div className="flex gap-8">
                <div className="rounded-full w-[60px] h-[60px] overflow-hidden flex-shrink-0">
                  <img src={item.imgURL} alt={item.author} className="object-cover" />
                </div>
                <div className="block gap-10">
                  <p className="font-bold">{item.author}</p>
                  <p>{item.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestiSec