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
        <div className="grid gap-[30px] md:grid-cols-2 mt-[40px] md:mt-[70px]">
          {testimonialsItems.map((item)=>(
            <div className="grid xs:grid-cols-2 gap-[22px] p-[14px] border border-[#D9DADB]" key={item.id}>
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
  )
}

export default TestiSec