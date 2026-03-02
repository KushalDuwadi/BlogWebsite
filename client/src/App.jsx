import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import  Blog  from './pages/Blog'
import Layout from './pages/admin/Layout/Layout'
import Dashboard from './pages/admin/Dashboard/Dashboard'
import AddBlog from './pages/admin/AddBlog/AddBlog'
import ListBlog from './pages/admin/Listblog/ListBlog'
import Comments from './pages/admin/Comments/Comments'
import Login from './components/admin/Login/Login'
import 'quill/dist/quill.snow.css';
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'


const App = () => {
  const{token} = useAppContext();
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        {/* <Route path='/admin' element={false ? <Layout/> : <Login/>}> */}
         <Route path='/admin' element={token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='addBlog' element={<AddBlog/>}></Route>
          <Route path='listBlog' element={<ListBlog/>}></Route>
          <Route path='comments' element={<Comments/>}></Route>
        </Route>
    </Routes>
    </div>

  )
}

export default App