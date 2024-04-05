import './Recipe.scss'
import { FaChartSimple, FaClock, FaUserLarge  } from "react-icons/fa6";
import Przepis from '../../assets/przepis.jpg'
import DietItems from '../common/DietItems/DietItems';
import Blog from '../common/Blog/Blog';
import { RecipeItems } from '../common/RecipeItems/RecipeItems';

const RecipeItem = () => {
  return (
    <>
        <div className="page-recipe">
            <div className="container">
                <div className="page-recipe-row">
                    <div className="page-recipe-content">
                        <div className="page-recipe__title">Lorem ipsum</div>
                        <div className="page-recipe-details">
                            <div className="page-recipe__img">
                                <img src={Przepis} alt="" />
                            </div>
                            <div className="page-recipe__info">
                                <div className="page-recipe-items">
                                    <div className="page-recipe-item lavel">
                                        <FaChartSimple />
                                        <p>Łatwy</p>
                                    </div>
                                    <div className="page-recipe-item time">
                                        <FaClock />
                                        <p>10 min</p>
                                    </div>
                                    <div className="page-recipe-item person">
                                        <FaUserLarge />
                                        <p>2 osoby</p>
                                    </div>
                                </div>
                                <div className="page-recipe-ingredients">
                                    <h2>Składniki</h2>
                                    <ul>
                                        <li>asd</li>
                                        <li>asd</li>
                                        <li>asd</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-recipe-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum omnis et doloremque consequatur? Asperiores nulla tenetur autem ratione delectus. Nemo at, aut assumenda non saepe aliquam adipisci ipsam. Inventore, reprehenderit!
                        Totam veniam in reprehenderit, aliquam nihil nisi nemo laudantium assumenda. Officia distinctio vero voluptatem hic et. Necessitatibus dolore ipsa consequuntur praesentium ducimus deleniti reprehenderit error, neque atque vel dolor quibusdam.
                        Accusantium minima quibusdam adipisci exercitationem nulla ea, distinctio debitis expedita excepturi officia unde reprehenderit illo assumenda odit praesentium impedit nihil. Ratione minus aut corporis est quas! Provident voluptatem voluptates delectus!
                        Officiis fuga dolor, quisquam nobis, eos labore fugit vero vel beatae cumque numquam eaque dolore? Voluptates hic maxime ducimus accusamus eligendi molestias maiores quas placeat. Blanditiis harum nisi laboriosam odio?
                        Similique maxime voluptatem at fugiat dolorem ullam iste, cum nobis fuga dicta ipsum repudiandae facilis nulla vero sequi quis error quas! Obcaecati possimus, eius asperiores inventore suscipit autem quis ullam!
                        Natus, nihil consectetur autem voluptate, quod totam similique, est aperiam officia sint omnis. Quas, amet, minima vitae reiciendis aliquid distinctio, debitis veniam consequatur nesciunt rerum sunt ab fugiat! Laborum, molestiae.
                        Perferendis autem, distinctio natus non dolores debitis ipsum aperiam recusandae commodi odio iste rerum, cumque facere, quam doloribus repellendus voluptatem placeat quaerat quod facilis? Officiis eaque inventore laudantium voluptates earum!
                        Nihil explicabo at voluptates accusantium eveniet magnam molestiae quas obcaecati voluptas neque, reiciendis odit? Tempora corporis rem minima aperiam assumenda sint cupiditate libero quidem facere pariatur. Id quia consequatur nesciunt.
                        Saepe perferendis asperiores molestiae sit non earum alias minus et, ut ea consequuntur iusto ipsum nobis vitae eius tenetur modi recusandae quaerat. Corporis natus iste recusandae laborum in voluptas quia!
                        Nobis saepe pariatur nisi exercitationem, sequi sint animi incidunt architecto aliquid hic molestiae inventore dolorum voluptate quia tempora illum eaque? Saepe fugit ullam, fuga corrupti excepturi repudiandae itaque id beatae?
                        Ratione possimus nobis voluptatem, omnis quas quo nihil laboriosam quae saepe odio, eaque delectus asperiores aliquid. Excepturi eos iure earum dolore? Consectetur, eligendi! Rerum velit natus reprehenderit minus consequatur neque?
                        Quia facere delectus dicta doloribus aperiam accusantium ratione ea veniam aut harum amet, suscipit cupiditate at neque qui, eos, quos consequuntur praesentium. Voluptatem maiores hic assumenda at beatae quibusdam atque?
                    </div>
                </div>
                <RecipeItems />
             
            </div>
        </div>
        <DietItems />
        <Blog />
    </>
  )
}

export default RecipeItem
