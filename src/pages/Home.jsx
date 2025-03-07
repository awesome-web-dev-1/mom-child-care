import { useState } from "react"
import ContactSec from '../components/common/ContactSec'
import Hero from "../components/home/Hero"
import AboutSec from "../components/home/AboutSec"
import MissionSec from "../components/sections/MissionSec"
import HealYourSelf from "../components/home/HealYourSelf"
import BlogSec1 from "../components/home/BlogSec1"
import FaqSec from "../components/sections/FaqSec"
import BlogSec2 from "../components/home/BlogSec2"


const Home = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const handleToggleQuestion = (index) => {
    setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
  };

  return (
    <>
    <Hero />
    <AboutSec />
    <MissionSec />
    <HealYourSelf />
    <BlogSec1 />
    <FaqSec />
    <BlogSec2 />
    <ContactSec />
    </>
  )
}

export default Home