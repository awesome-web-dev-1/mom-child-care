import { Link } from "react-router-dom"
import { IoArrowForward } from "react-icons/io5"
const Cta = ({ img }) => {
  return (
    <section className="section grid md:grid-cols-[0.5fr,1fr] md:gap-[18px] md:items-stretch">
          <div className="bg-[#00715D] text-white py-[75px] px-[42px] md:order-1">
            <h2 className="text-[28px]">Are You Ready to Explore More?</h2>
            <p className="text-neutral-300 mt-4 mb-8">Don’t miss out on more creative ideas, parenting tips, and fun activities! Stay connected with us for the latest updates and exclusive offers.</p>
            <Link to='' className="bg-[#FFD249] py-4 px-8 flex gap-3 text-neutral-900 items-center max-w-max transition-colors hover:bg-[#dead19]">
              Join Our Community
              <IoArrowForward />
            </Link>
          </div>
          <img src={img} alt="banner image" className="max-h-[328px] w-full object-cover md:max-h-none" />
          
        </section>
  )
}

export default Cta