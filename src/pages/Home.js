import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/pages/home.css'
import slide1 from '../assets/img/cars/onix-plus-premier-at-turbo.png'
import slide2 from '../assets/img/cars/corolla xei.png'

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className="Page">
            <div className="container-busca">
                <form>
                    <div className="form-row">
                        <div className="label-cell">
                            <label htmlFor="inputLocal">Local:</label>
                        </div>
                        <div className="label-cell">
                            <label htmlFor="inputRetirada">Data de retirada:</label>
                        </div>
                        <div className="label-cell">
                            <label htmlFor="inputDevolucao">Data de devolução:</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-cell">
                            <input type="text" id="inputLocal" />
                        </div>
                        <div className="input-cell">
                            <input type="date" id="inputRetirada" />
                        </div>
                        <div className="input-cell">
                            <input type="date" id="inputDevolucao" />
                        </div>
                    </div>
                </form>
            </div>

            <div className="carousel">
                <Slider {...settings}>
                    <div className='slides'>
                        <img src={slide1} alt="slide1" />
                    </div>
                    <div className='slides'>
                        <img src={slide2} alt="slide2" />
                    </div>
                    <div className='slides'>
                        <img src={slide2} alt="slide3" />
                    </div>
                </Slider>
            </div>

            <div className="Home-content">
                <div className="grid">
                </div>
            </div>
        </div>
    );
}

export default Home;