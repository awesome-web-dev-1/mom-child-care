import ContactSec from '../components/common/ContactSec'
import Hero from "../components/home/Hero"
import AboutSec from "../components/home/AboutSec"
import MissionSec from "../components/sections/MissionSec"
import HealYourSelf from "../components/home/HealYourSelf"
import BlogSec1 from "../components/home/BlogSec1"
import FaqSec from "../components/sections/FaqSec"
import BlogSec2 from "../components/home/BlogSec2"
import TestiSec from "../components/sections/TestiSec"


const Home = () => {
  return (
    <>
      <Hero />
      <AboutSec />
      <MissionSec />
      <HealYourSelf />
      <BlogSec1 />
      <FaqSec className='py-[100px] sm:mt-72' />
      <BlogSec2 />
      <TestiSec />
      <ContactSec />
    </>
  )
}

export default Home