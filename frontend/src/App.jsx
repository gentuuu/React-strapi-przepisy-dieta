import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/common/Navbar/Navbar'
import Home from './components/Home/Home'
import { Footer } from './components/common/Footer/Footer'
import Recipe from './components/Recipe/Recipes'
import Diets from './components/Diet/Diets'
import Blogs from './components/Blogs/Blogs'
import RecipeItem from './components/Recipe/RecipeItem'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"


// initialize apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})


function App() {


  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/przepisy' element={<Recipe />} />
            <Route path='/przepisy/post' element={<RecipeItem />} />
            <Route path='/diety' element={<Diets />} />
            <Route path='/blogs' element={<Blogs />} />
          </Routes>
          <Footer />
        </ApolloProvider>
      </BrowserRouter>
    </>
  )
}

export default App
