import './HCategory.scss'
import Przepis from '../../../../assets/przepis.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const HCategory = () => {
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
                        <SwiperSlide>
                            <div to="" className="category-item">
                                <div className="category-item__img">
                                    <img src={Przepis} alt=""/>
                                </div>
                                <div className="category-item__title">Lorem</div>
                                <div className="category-item__all">123 przepisów</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div to="" className="category-item">
                                <div className="category-item__img">
                                    <img src={Przepis} alt=""/>
                                </div>
                                <div className="category-item__title">Lorem</div>
                                <div className="category-item__all">123 przepisów</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div to="" className="category-item">
                                <div className="category-item__img">
                                    <img src={Przepis} alt=""/>
                                </div>
                                <div className="category-item__title">Lorem</div>
                                <div className="category-item__all">123 przepisów</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div to="" className="category-item">
                                <div className="category-item__img">
                                    <img src={Przepis} alt=""/>
                                </div>
                                <div className="category-item__title">Lorem</div>
                                <div className="category-item__all">123 przepisów</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div to="" className="category-item">
                                <div className="category-item__img">
                                    <img src={Przepis} alt=""/>
                                </div>
                                <div className="category-item__title">Lorem</div>
                                <div className="category-item__all">123 przepisów</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}

export default HCategory
