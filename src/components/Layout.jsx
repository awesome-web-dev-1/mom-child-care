import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <main className='min-h-[100vh]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout