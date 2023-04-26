import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from './assets/images/testimonial1.png'
import testimonial2 from './assets/images/testimonial2.png'
import testimonial3 from './assets/images/testimonial3.png'
import testimonial4 from './assets/images/testimonial4.png'
import testimonial5 from './assets/images/testimonial5.png'
import testimonial6 from './assets/images/testimonial6.png'


const Testimonials = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const openModal = image => {
        setModalVisibility(true);
        setCurrentImage(image);
    };

    const closeModal = () => {
        setModalVisibility(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 5,
        pauseOnHover: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <div className="testimonialSection">

            <div style={{
                height: 'auto',
                backgroundColor: '#ffffff',
                color: '#000000',
                width: '280px',
                fontWeight: 900,
                fontSize: '23px',
                zIndex: 3,
                textAlign: 'center',
                padding: '15px',
                marginBottom: '50px',
                marginTop: '20px',
                boxShadow: '1px 0 20px white',
                borderRadius: '10px',

            }}>Testimonials</div>
            <Slider {...settings}>
                <div>
                    <img src={testimonial1} onClick={() => openModal(testimonial1)} width={'400px'} />
                </div>
                <div>
                    <img src={testimonial2} onClick={() => openModal(testimonial2)} width={'400px'} />
                </div>
                <div>
                    <img src={testimonial3} onClick={() => openModal(testimonial3)} width={'400px'} />
                </div>
                {/* <div>
                    <img src={testimonial4} onClick={() => openModal(testimonial4)} width={'400px'} />
                </div> */}
                <div>
                    <img src={testimonial5} onClick={() => openModal(testimonial5)} width={'400px'} />
                </div>
                <div>
                    <img src={testimonial6} onClick={() => openModal(testimonial6)} width={'400px'} />
                </div>
            </Slider>
            {modalVisibility && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.8)", zIndex: 7, width: '80 %' }}>
                    <button onClick={closeModal} style={{ position: "absolute", top: 20, right: 20, color: "black" }}>
                        X
                    </button>
                    <img src={currentImage} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 7, width: '90vw' }} />
                </div>
            )}
        </div>
    );
};

export default Testimonials;
