import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const brand_data: string[] = [
   "/assets/img/brand/logo-1.png",
   "/assets/img/brand/logo-2.png",
   "/assets/img/brand/logo-3.png",
   "/assets/img/brand/logo-4.png",
   "/assets/img/brand/logo-5.png",
   "/assets/img/brand/logo-1.png",
   "/assets/img/brand/logo-2.png",
   "/assets/img/brand/logo-3.png",
];

const setting = {
   loop: true,
   freeMode: true,
   slidesPerView: 'auto' as const,
   spaceBetween: 40,
   centeredSlides: true,
   allowTouchMove: false,
   speed: 8000,
   autoplay: {
      delay: 1,
      disableOnInteraction: true,
   },
};

const TrustedBrands = () => {
   return (
      <div className="td-trusted-brands-area pt-80 pb-80">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="text-center mb-50">
                     <h3 className="td-section-title mb-15" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                        Trusted by Leading Brands Worldwide
                     </h3>
                     <p className="td-section-text" style={{ fontSize: '0.95rem', color: '#666' }}>
                        Building lasting partnerships through exceptional results
                     </p>
                  </div>
                  <div className="td-brand-wrap">
                     <Swiper {...setting} modules={[Autoplay]} onSwiper={(swiper) => {
                        swiper.wrapperEl.classList.add("slide-transition");
                     }} className="swiper-container td-brand-slide-active">
                        {brand_data.map((brand, i) => (
                           <SwiperSlide key={i} className="swiper-slide">
                              <div className="td-brand-item" style={{ opacity: 0.7, transition: 'opacity 0.3s' }}>
                                 <img src={brand} alt="" style={{ maxHeight: '50px', objectFit: 'contain' }} />
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TrustedBrands

