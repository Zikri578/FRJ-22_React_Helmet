import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import DetailBlog from "./pages/DetailBlog"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/detail/:id' element={<DetailBlog />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
