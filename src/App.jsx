import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import BlogDetials from './pages/BlogDetials';
import TeamDetails from './pages/TeamDetails';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='blog:id' element={<BlogDetials />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='services' element={<Services />}/>
          <Route path='team' element={<TeamDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App