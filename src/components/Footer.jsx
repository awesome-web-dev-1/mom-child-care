import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="bg-[#0D0E0F] py-[34px]">
      <div className="container grid place-content-center text-center">
        <div className="flex gap-5 mx-auto">
            <a href="" className="footer-link">
              <IoLogoFacebook />
            </a>
            <a href="" className="footer-link">
              <IoLogoTwitter />
            </a>
            <a href="" className="footer-link">
              <IoLogoLinkedin />
            </a>
        </div>

        <div className="my-8 text-[#BFC1C4] flex gap-4 items-center flex-wrap">
          <p className="text-[#BFC1C4]">2024 All Rights Reserved</p> |
          <p className="text-[#BFC1C4]">Contact youremail@gmail.com</p> |
          <p className="text-[#BFC1C4]">MOM</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer