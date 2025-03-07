import { useEffect, useRef, useState } from "react"
import { NavLink,Link } from "react-router-dom"
import { navItems } from "../../constant/data";
import { IoClose, IoMenu } from "react-icons/io5";
const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);
    const headerRef = useRef(null);
    useEffect(()=>{
    const handleScroll = () => {
        if(window.scrollY > 50){
            setIsScrolled(true);
        }else{
            setIsScrolled(false);
        }
    };
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
    },[])

  return (
    <header ref={headerRef} className={`header ${isScrolled ? "active" : ""}`}>
        <div className="container flex items-center justify-between">
            <Link to='/'>
            <img src="/images/MOM.png" alt="MOM" />
            </Link>
            <nav className={`navbar ${menuOpen ? "active" : ""}`}> 
                <button className="ml-auto text-[35px] hover:text-[#00715D] transition-colors" onClick={()=>setMenuOpen(!menuOpen)}>
                    <IoClose />
                </button>
                <ul className="grid text-[18px] mt-8">
                    {navItems.map((item)=>(
                        <li key={item.id} className="border-y-[1px] py-5 pl-5">
                            <NavLink to={item.path} className={`nav-link ${({isActive})=> isActive ? "active" : null }`} onClick={()=>setMenuOpen(!menuOpen)}>{item.label}</NavLink>
                        </li>
                    ))} 
                    <li>
                        <Link to="" className="btn mt-10">Sign Up</Link>
                    </li>
                    
                </ul>
            </nav>
            <ul className="hidden md:flex md:gap-[48px]">
                {navItems.map((item)=>(
                    <li key={item.id}>
                        <NavLink to={item.path} className={`nav-link ${({isActive})=> isActive ? "active" : null }`}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
            <Link to='' className="btn hidden md:block">Sign Up</Link>

            <button className="text-[35px] hover:text-[#00715D] transition-colors md:hidden" onClick={()=>setMenuOpen(!menuOpen)}>
                <IoMenu />
            </button>
            <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={()=>setMenuOpen(!menuOpen)}></div>
        </div>
    </header>
  )
}

export default Header