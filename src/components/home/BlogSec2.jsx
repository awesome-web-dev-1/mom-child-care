import { Link } from "react-router-dom"
import { IoArrowForward } from "react-icons/io5"

const BlogSec2 = () => {
  return (
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
  )
}

export default BlogSec2