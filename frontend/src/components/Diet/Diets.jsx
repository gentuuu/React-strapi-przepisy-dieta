import './Diet.scss'
import Przepis from '../../assets/przepis.jpg'


const Diets = () => {
return (
<>
    <div className="page-diet">
        <div className="container">
            <div className="page-diet-content">
                <div className="recipe-left">
                    <div className="recipe-left-primary">Popularne przepisy</div>
                    <div className="recipe-left-items">
                        <a to="" className="recipe-left-item">
                            <div className="recipe-left-item__img">
                                <img src={Przepis} alt="" />
                            </div>
                            <div className="recipe-left-item__text">
                                <div className="recipe-left-item__text-title">Lorem</div>
                                <div className="recipe-left-item__text-text">lorem ipsum lorem ipsum</div>
                            </div>
                        </a>
                        <a to="" className="recipe-left-item">
                            <div className="recipe-left-item__img">
                                <img src={Przepis} alt="" />
                            </div>
                            <div className="recipe-left-item__text">
                                <div className="recipe-left-item__text-title">Lorem</div>
                                <div className="recipe-left-item__text-text">lorem ipsum lorem ipsum</div>
                            </div>
                        </a>
                    </div>
                </div>
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
    </div>
</>
)
}

export default Diets