import React from 'react'
import Bg3 from '../assets/img/slider/3.png'
const Inicio = () => {
  return (
    <main>
            {/* <!-- hero area start here --> */}
            <section className="tp-slider-area fix">
                <div className="tp-slider-active swiper-container common-dots">
                    <div className="swiper-wrapper">
                        <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                            <div className="slide-bg" data-background={Bg3}></div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-slider-wrapper mt-60 position-relative">
                                            <div className="tp-slider z-index">

                                                <h1 className="tp-slider-title mb-45" data-animation="fadeInUp" data-delay=".8s">Reporte de Sostenibilidad 2021</h1> <br/> <hr/> 
                                                    <p>Conoce algunas de nuestras iniciativas desarrolladas durante el año 2021</p>  
                                            
                                                <div className="tp-slider-btn" data-animation="fadeInUp" data-delay="1.1s">
                                                    <a href="assets/pdf/Reporte-2021.pdf" className="theme-btn _self"><i className="flaticon-enter">

                                                        
                                                    </i>Ver Reporte</a>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                            <div className="slide-bg" data-background="assets/img/slider/2.png"></div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-slider-wrapper mt-60 position-relative">

                                            <div className="tp-slider z-index">

                                                <h1 className="tp-slider-title mb-45" data-animation="fadeInUp" data-delay=".8s">¡Limpieza y <br/>Excelencia <br/>Garantizada! </h1>
                                                <div className="tp-slider-btn" data-animation="fadeInUp" data-delay="1.1s">
                                                    <a href="about.html" className="theme-btn"><i className="flaticon-enter"></i>
                                                        Ver mas</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide"
                            data-swiper-autoplay="5000">
                            <div className="slide-bg" data-background={Bg3}></div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-slider-wrapper mt-60 position-relative">
                                            <div className="tp-slider z-index">

                                                <h1 className="tp-slider-title mb-45" data-animation="fadeInUp" data-delay=".8s">Somos <br/>Empresa B <br/></h1>
                                                    <div className="tp-slider-btn" data-animation="fadeInUp" data-delay="1.1s">
                                                    <a href="about.html" className="theme-btn"><i className="flaticon-enter"></i>
                                                        Ver mas</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- If we need pagination --> */}
                    <div className="swiper-paginations slide-dots"></div>
                </div>
            </section>
            {/* <!-- hero area end here --> */}





    </main>
  )
}

export default Inicio