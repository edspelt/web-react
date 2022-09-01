import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/img/slider/4.png'
import Img2 from '../assets/img/slider/reporte.jpg'
import Img3 from '../assets/img/slider/3.png'

function Carrusel() {
  return (
    <div
      id="carouselExampleCrossfade"
      className="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active float-left w-full">
          <img
            src={Img2}
            className="block w-full"
            alt="Wild Landscape"
          />
          <div className='flex flex-col absolute top-44 left-48'>
            <p className='text-6xl text-white font-bold border-b-4 border-white pb-5'>Reporte de Sostenibilidad 2021</p>
            <p className='text-3xl text-white font-bold '>Conoce algunas de nuestras iniciativas desarrolladas durante el año 2021</p>
            <button className='inline-block max-w-[10rem] mt-3 px-4 py-2 text-center text-white bg-[#b02853] rounded-md shadow hover:bg-red-900'>
              Ver Reporte
            </button>
          </div>
         
          
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src={Img1}
            className="block w-full"
            alt="Camera"
          />
          
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src={Img3}
            className="block w-full"
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carrusel;