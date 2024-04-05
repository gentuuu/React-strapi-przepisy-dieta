import './RecipeItems.scss'
import Przepis  from '../../../assets/przepis.jpg'

import { FaChartSimple, FaClock, FaUserLarge  } from "react-icons/fa6";


export const RecipeItems = () => {
  return (
    <>
        <div className="recipe-right">
            <div className="recipe-right-primary">Przepisy</div>
            <div className="recipe-right-items">
                <a to="" className="recipe-item" >
                    <div className="recipe-item__img">
                        <img src={Przepis} alt=""/>
                        <div className="recipe-item__category">
                            <div className="recipe-item__category-item">Mrożona</div>
                            <div className="recipe-item__category-item">Deser</div>
                        </div>
                        <div className="recipe-item__hover">
                            <div className="recipe-item__hover-items">
                                <div className="recipe-item__hover-item lavel">
                                    <FaChartSimple />
                                    <p>Łatwy</p>
                                </div>
                                <div className="recipe-item__hover-item time">
                                    <FaClock />
                                    <p>10 min</p>
                                </div>
                                <div className="recipe-item__hover-item person">
                                    <FaUserLarge />
                                    <p>2 osoby</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-item__title">
                        Lorem ipsum
                    </div>
                </a>
                <a to="" className="recipe-item" >
                    <div className="recipe-item__img">
                        <img src={Przepis} alt=""/>
                        <div className="recipe-item__category">
                            <div className="recipe-item__category-item">Mrożona</div>
                            <div className="recipe-item__category-item">Deser</div>
                        </div>
                        <div className="recipe-item__hover">
                            <div className="recipe-item__hover-items">
                                <div className="recipe-item__hover-item lavel">
                                    <img src="" alt=""/>
                                    <p>Łatwy</p>
                                </div>
                                <div className="recipe-item__hover-item time">
                                    <img src="" alt=""/>
                                    <p>10 min</p>
                                </div>
                                <div className="recipe-item__hover-item person">
                                    <img src="" alt=""/>
                                    <p>2 osoby</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-item__title">
                        Lorem ipsum
                    </div>
                </a>
                <a to="" className="recipe-item" >
                    <div className="recipe-item__img">
                        <img src={Przepis} alt=""/>
                        <div className="recipe-item__category">
                            <div className="recipe-item__category-item">Mrożona</div>
                            <div className="recipe-item__category-item">Deser</div>
                        </div>
                        <div className="recipe-item__hover">
                            <div className="recipe-item__hover-items">
                                <div className="recipe-item__hover-item lavel">
                                    <img src="" alt=""/>
                                    <p>Łatwy</p>
                                </div>
                                <div className="recipe-item__hover-item time">
                                    <img src="" alt=""/>
                                    <p>10 min</p>
                                </div>
                                <div className="recipe-item__hover-item person">
                                    <img src="" alt=""/>
                                    <p>2 osoby</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-item__title">
                        Lorem ipsum
                    </div>
                </a>
                <a to="" className="recipe-item" >
                    <div className="recipe-item__img">
                        <img src={Przepis} alt=""/>
                        <div className="recipe-item__category">
                            <div className="recipe-item__category-item">Mrożona</div>
                            <div className="recipe-item__category-item">Deser</div>
                        </div>
                        <div className="recipe-item__hover">
                            <div className="recipe-item__hover-items">
                                <div className="recipe-item__hover-item lavel">
                                    <img src="" alt=""/>
                                    <p>Łatwy</p>
                                </div>
                                <div className="recipe-item__hover-item time">
                                    <img src="" alt=""/>
                                    <p>10 min</p>
                                </div>
                                <div className="recipe-item__hover-item person">
                                    <img src="" alt=""/>
                                    <p>2 osoby</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-item__title">
                        Lorem ipsum
                    </div>
                </a>
            </div>
        </div>
    </>
  )
}
