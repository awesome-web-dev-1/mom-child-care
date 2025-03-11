import { IoArrowBack } from "react-icons/io5"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="grid place-content-center text-center bg-[#FCFCFC]">
      <div className="">
        <img src="/images/Error page.png" alt="error page" className="w-[650px] h-[650px] object-cover" />
      </div>
      <h1>Page not found</h1>
      <Link to='/' className="font-semibold text-[20px] mt-10 max-w-max flex items-center mx-auto link gap-3">
        <IoArrowBack size={24} />
        Go to Home page
      </Link>
     </section>
  )
}

export default Error