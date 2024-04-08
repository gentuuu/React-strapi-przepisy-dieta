/* eslint-disable react/jsx-key */
import './HCategory.scss'
import Przepis from '../../../../assets/przepis.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { gql, useQuery } from '@apollo/client';


const CATEGORY =gql`
query{
  kategorie{
    data{
      id
      attributes{
        Title
        przepisy{
          data{
            attributes{
              title
            }
          }
        }
      }
      
    }
  }
}

`


const HCategory = () => {

    const { loading, error, data } = useQuery(CATEGORY);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <>
         <div className="category">
            <div className="container">
                <div className="category-items">
                    <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    slidesPerView={4}
                    spaceBetween={30}
                    className="mySwiper">
                        {data.kategorie.data.map(category =>(
                            <SwiperSlide>
                                <div key={category.id} href="" className="category-item">
                                    <div className="category-item__img">
                                        <img src={Przepis} alt=""/>
                                    </div>
                                    <div className="category-item__title">{category.attributes.Title}</div>
                                    <div className="category-item__all"> {category.attributes.przepisy.data.length} przepisów</div>
                                </div>
                            </SwiperSlide>
                        ))} 
                    </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}

export default HCategory
