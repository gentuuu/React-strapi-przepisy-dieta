import './RecipeSidebar.scss'
import Przepis from '../../../assets/przepis.jpg'

const RecipeSidebar = () => {
  return (
    <>
        <div className="recipe-left">
           <div className="recipe-left-primary">Popularne przepisy</div>
           <div className="recipe-left-items">
                <a to="" className="recipe-left-item" >
                    <div className="recipe-left-item__img">
                        <img src={Przepis} alt=""/>
                    </div>
                    <div className="recipe-left-item__text">
                        <div className="recipe-left-item__text-title">Lorem</div>
                        <div className="recipe-left-item__text-text">lorem ipsum lorem ipsum</div>
                    </div>
                </a>
                <a to="" className="recipe-left-item" >
                    <div className="recipe-left-item__img">
                        <img src={Przepis} alt=""/>
                    </div>
                    <div className="recipe-left-item__text">
                        <div className="recipe-left-item__text-title">Lorem</div>
                        <div className="recipe-left-item__text-text">lorem ipsum lorem ipsum</div>
                    </div>
                </a>
                <a to="" className="recipe-left-item" >
                    <div className="recipe-left-item__img">
                        <img src={Przepis} alt=""/>
                    </div>
                    <div className="recipe-left-item__text">
                        <div className="recipe-left-item__text-title">Lorem</div>
                        <div className="recipe-left-item__text-text">lorem ipsum lorem ipsum</div>
                    </div>
                </a>
           </div>
       </div>
    </>
  )
}

export default RecipeSidebar
