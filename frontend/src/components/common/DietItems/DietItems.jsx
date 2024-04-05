import './DietItems.scss'
import Przepis  from '../../../assets/przepis.jpg'

const DietItems = () => {
  return (
    <>
        <div className="diet">
            <div className="container">
                <div className="diet-title"> Polecane kawy </div>
                <div className="diet-items">
                    <a to="" className="diet-item"> 
                        <div className="diet-item__img">
                            <img src={Przepis} alt=""/>
                        </div>
                        <div className="diet-item__title">
                            ghghngnh
                        </div>
                        <div className="diet-item__category">
                           asdasd
                        </div>
                        <div className="diet-item__btn"><img src="img/arrow-right-recipe.png" alt=""/></div>
                    </a>
                    <a to="" className="diet-item"> 
                        <div className="diet-item__img">
                            <img src={Przepis} alt=""/>
                        </div>
                        <div className="diet-item__title">
                            ghghngnh
                        </div>
                        <div className="diet-item__category">
                           asdasd
                        </div>
                        <div className="diet-item__btn"><img src="img/arrow-right-recipe.png" alt=""/></div>
                    </a>
                    <a to="" className="diet-item"> 
                        <div className="diet-item__img">
                            <img src={Przepis} alt=""/>
                        </div>
                        <div className="diet-item__title">
                            ghghngnh
                        </div>
                        <div className="diet-item__category">
                           asdasd
                        </div>
                        <div className="diet-item__btn"><img src="img/arrow-right-recipe.png" alt=""/></div>
                    </a>
                    <a to="" className="diet-item"> 
                        <div className="diet-item__img">
                            <img src={Przepis} alt=""/>
                        </div>
                        <div className="diet-item__title">
                            ghghngnh
                        </div>
                        <div className="diet-item__category">
                           asdasd
                        </div>
                        <div className="diet-item__btn"><img src="img/arrow-right-recipe.png" alt=""/></div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default DietItems


