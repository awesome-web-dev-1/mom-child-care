import { Link } from "react-router-dom"

const AboutSec = () => {
  return (
    <section className="section">
      <div className="container grid gap-20 md:grid-cols-2">
        <div className="md:order-1">
          <p className="subtitle">About Us</p>
          <h2 className="title">Finding Superior Care for Your Baby</h2>
          <p className="text mt-4 mb-16">
          Reliable child care is essential for single moms striving to balance work, family, and personal growth. It provides a safe and nurturing environment for children, allowing mothers to pursue their careers and goals with peace of mind. Access to trustworthy child care resources helps single mothers manage their busy lives more effectively.
          </p>
          <Link to='about' className='btn'>Learn More</Link>
        </div>
        <div className="about-banner">
          <img src="/images/about-sec-banner-t.png" alt="about banner" className="top-banner" />
          <img src="/images/about-sec-banner-b.png" alt="about banner" className="bottom-banner" />
          <img src="/images/shape-small.png" className="absolute -top-8 -right-7 rotate-90" />
          <img src="/images/shape-2.png" className="absolute -bottom-10 -left-10" />
        </div>
      </div>
    </section>
  )
}

export default AboutSec