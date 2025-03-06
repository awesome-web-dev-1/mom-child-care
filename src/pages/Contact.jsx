import ContactSec from "../components/ContactSec"
import { faqQuestions} from "../constant/data"
import { useState } from "react";
import { IoAdd,IoRemove } from "react-icons/io5"
const Contact = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  
    const handleToggleQuestion = (index) => {
      setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
    };
  return (
    <>
    <section className="pt-[150px] pb-[100px] bg-[#FFD96A]">
      <div className="container text-center">
        <h1>Contact us</h1>
        <p>Welcome to Empowered Moms, a place dedicated to supporting</p>
      </div>
    </section>
    <ContactSec />
     {/* FAQ */}
    <section className="section">
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

    
    </>
  )
}

export default Contact