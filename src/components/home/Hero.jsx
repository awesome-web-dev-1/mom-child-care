import Button from "../common/Button"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div>
          <h1>Caring Hands, Quality Home Care for Your Little One</h1>
          <p className="mt-4 mb-[30px]">Welcome to Empowered Moms, a supportive space committed to empowering single mothers in managing child care and achieving success. Our mission is to offer the guidance, resources and thrive in every aspect of life.
          </p>
          <Button label='Book a Session' to='' className='btn' />
        </div>
        <div className="hero-banner">
          <img src="/images/hero-banner.png" alt="hero banner" width={599} height={489}/>
        </div>
      </div>
        <div className="hidden md:block w-[50%] h-[664px] absolute top-0 right-0 bg-[#FFD967] -z-10"></div>
    </section>
  )
}

export default Hero