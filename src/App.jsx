import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Error from './pages/Error';
import BlogDetials from './pages/BlogDetials';
import TeamDetails from './pages/TeamDetails';
import Layout from './components/layout/Layout';
import ServicesDetail from './pages/ServicesDetail';
import RegisLog from './pages/RegisLog';
import ScrollToTop from './components/common/ScrollToTop';
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='blog/:id' element={<BlogDetials />} />
          <Route path='contact' element={<Contact />}/>
          <Route path='services' element={<Services />}/>
          <Route path='services:id' element={<ServicesDetail />}/>
          <Route path='team:id' element={<TeamDetails />}/>
        </Route>
        <Route path='signUp' element={<RegisLog />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App