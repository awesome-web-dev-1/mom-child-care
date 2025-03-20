import { Link } from "react-router-dom"
import { IoArrowForward } from "react-icons/io5"
import { blogCardItems } from '../../constant/data'

const BlogSec1 = () => {
  return (
    <section className="py-[100px] mt-8 bg-[#00715d] md:max-h-[524px] h-full">
          <div className="container">
            <div className="md:flex md:justify-between items-start">
              <div className="relative max-w-max">
                <p className="text-[#FFD249]">Blog</p>
                <div className="relative mb-10">
                  <h2 className="text-white max-w-max">Inspiration and Guidance <br /> for Child</h2>
                  <img src="/images/shape-4.png" alt="shape image" className="absolute -top-2 -right-8" />
                </div>
                
              </div>
              <Link to={`blog`} className="border border-white py-4 px-9 text-white flex max-w-max items-center gap-3 mt-8 hover:bg-neutral-50 transition-colors hover:text-neutral-900 duration-300">View More 
                <IoArrowForward />
              </Link>
            </div>
    
            <div className="grid gap-6 mt-[66px] sm:grid-cols-2 md:grid-cols-3">
                {blogCardItems.map((item)=>(
                  <div className="bg-neutral-50 p-4" key={item.id}>
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
  )
}

export default BlogSec1