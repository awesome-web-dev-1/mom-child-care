import { healItems } from "../../constant/data"
import {IoCheckbox } from "react-icons/io5"

const HealYourSelf = () => {
  return (
    <section className="py-[100px] relative mt-32">
      <div className="container md:grid md:grid-cols-12">
        <div className="border-l-[14px] border-l-[#FFD96A] px-[46px] py-8 bg-white md:col-span-8">
          <h2>Heal Yourself</h2>
          <p className="mt-4 mb-5">Our mission is to nurture your child's holistic development. We provide a range of resources and guidance to support their physical, cognitive, emotional, and social growth.</p>
          <div className="w-full bg-neutral-200 h-[1px] mb-[30px]"></div>
          <div className="grid gap-6">
            {healItems.map((item)=>(
              <div className="flex gap-3" key={item.id}>
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
  )
}

export default HealYourSelf