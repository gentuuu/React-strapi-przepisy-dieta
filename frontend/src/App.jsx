import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/common/Navbar/Navbar'
import Home from './components/Home/Home'
import { Footer } from './components/common/Footer/Footer'
import Recipe from './components/Recipe/Recipes'
import Diets from './components/Diet/Diets'
import Blogs from './components/Blogs/Blogs'
import RecipeItem from './components/Recipe/RecipeItem'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/przepisy' element={<Recipe />} />
          <Route path='/przepisy/post' element={<RecipeItem />} />
          <Route path='/diety' element={<Diets />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
