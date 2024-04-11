/* eslint-disable react/jsx-key */
import './HCategory.scss'


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
        title
        slug
        text
        image{
          data{
            attributes{
              url
            }
          }
        }
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
                                <a key={category.id} href={`/kategorie/${category.attributes.slug}`} className="category-item">
                                    <div className="category-item__img">
                                      <img src={`http://localhost:1337${category.attributes.image.data.attributes.url}`} alt="" />
                                    </div>
                                    <div className="category-item__title">{category.attributes.title}</div>
                                    <div className="category-item__all"> {category.attributes.przepisy.data.length} przepisów</div>
                                </a>
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
