import ContactSec from '../components/common/ContactSec'
import FaqSec from '../components/sections/FaqSec'
const Contact = () => {
  return (
    <>
    <section className="pt-[150px] pb-[100px] bg-[#FFD96A]">
      <div className="container text-center">
        <h1>Contact us</h1>
        <p>Welcome to Empowered Moms, a place dedicated to supporting</p>
      </div>
    </section>
    <ContactSec />
    <FaqSec className='section' />

    
    </>
  )
}

export default Contact