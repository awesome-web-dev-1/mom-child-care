import ContactSec from '../components/common/ContactSec'
import TestiSec from '../components/sections/TestiSec'
import MissionSec from '../components/sections/MissionSec'
import TeamSec from '../components/about/TeamSec'
import AboutHeader from '../components/about/AboutHeader'
import Guiding from '../components/about/Guiding'

const About = () => {
  return (
    <>
    <AboutHeader />
    <Guiding />
    <MissionSec />
    <TestiSec />
    <TeamSec />
    <ContactSec />
    </>
  )
}

export default About