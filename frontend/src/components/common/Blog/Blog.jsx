import './Blog.scss'
import Przepis  from '../../../assets/przepis.jpg'

const Blog = () => {
  return (
    <>
        <div className="article">
            <div className="container">
                <div className="article-title">Artykuły</div>
                <div className="article-items">
                    <a className="article-item" to=""> 
                        <div className="article-item__img">
                            <img src={Przepis} alt=""/>
                        </div>
                        <div className="article-item__title">
                            asdasdasd
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog
