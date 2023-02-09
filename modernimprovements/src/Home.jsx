import logo from './logo.svg';
import './App.css';
import main from './assets/images/modern-kitchen-living-room-black-vinyl-flooring.png'
import pencilRuler from './assets/images/pencilRuler.svg'
import pencilPaint from './assets/images/pencilPaint.svg'
import paintRoller from './assets/images/paintRoller.svg'
import checklist from './assets/images/checklist.svg'
import layers from './assets/images/layers.png'
import wallPaint from './assets/images/wallPaint.jpeg'
import handyMan from './assets/images/handyman.jpeg'
import houseRemodel from './assets/images/houseRemodel.jpeg'
import vinylFlooring from './assets/images/vinylFlooring.png'
import zebraShades from './assets/images/zebraShades.webp'
import doors from './assets/images/doors.jpeg'
import drivewaySeal from './assets/images/drivewaySeal.png'
import powerWash from './assets/images/powerWash.png'
import 'animate.css';
import Sidebar from './SideBar';
import ContactForm from './ContactForm';
import Testimonials from './testimonials';
import { Route } from 'react-router-dom';
import QuoteForm from './QuoteForm';
import { useState } from 'react';

const handleNavItemClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
};

function Home() {
    const [openQuote, setOpenQuote] = useState(false)

    const openModal = () => {

        setOpenQuote(true)
    }
    return (
        <>
            <div className="App">

                <div className='callToAction animate__animated  animate__fadeIn'>
                    <a href="tel:3474001820">FREE Estimate! Call Now: (347) 400-1820</a>
                </div>

                <div className='mainSection' id="home">

                    <Sidebar className='sideBar' />

                    <img src={main} alt='modern kitchen and living room with gray, white and black color scheme and black vinyl flooring. This image showcase the high-quality work of Modern Improvement Contractors' />

                    <p className='image-caption' aria-hidden='true'>This modern and stylish kitchen and living room features a sleek color scheme of gray, white and black, paired with durable black vinyl flooring. The combination of colors and materials creates a warm and inviting atmosphere, perfect for entertaining guests or spending time with family. The black vinyl flooring is ideal for high-traffic areas and can withstand heavy foot traffic. This image is an example of the high-quality work of Modern Improvement Contractors, a leading provider of home improvement services in the area. </p>


                    <div className='innerMainSection'>
                        <div className='animate__animated animate__fadeIn companyName'>Modern Improvement Contractors</div>
                        <div className='slogan animate__animated animate__fadeIn'>Building Your Dream Home, Together</div>
                        <button className='callToActionQuoteBtn animate__animated animate__fadeIn' onClick={openModal}>Get A Quote</button>
                    </div>
                </div>


                <div className='section1' id='solutions'>
                    <div className='whiteSection'>
                        <div className='ourOffer'>Offering Complete Solutions</div>
                        <div className='ourOfferSlogan'>Transform Your Home with Confidence</div>
                        <div className='ourOfferDesc'>


                            <div className='part1Offer'>
                                <div className='part1Title'>
                                    <img src={pencilPaint} /> <div>Remodeling</div>
                                </div>

                                <div>
                                    <strong><em>Say goodbye to outdated and uninspiring spaces.</em></strong> At Modern Improvements, we specialize in turning your dreams into reality by remodeling and renovating your home to meet your every need and desire. From revamping your entire home's structure to restoring specific rooms, we'll work closely with you to ensure your project is executed to perfection.</div>

                            </div>

                            <div className='part2Offer'>
                                <div className='part2Title'>
                                    <img src={pencilRuler} /> <div>Planning</div>
                                </div>

                                <div>Our experts will take the time to understand your vision, making sure every detail is covered before we start. Our comprehensive planning process ensures your project runs smoothly and efficiently, giving you the confidence to sit back and enjoy the transformation unfold.</div>

                            </div>

                            <div className='part3Offer'>
                                <div className='part3Title'>
                                    <img src={paintRoller} /> <div>Executing</div>
                                </div>
                                <div>
                                    With Modern Improvements, you can be sure you're getting the best of both worlds - beautiful design and exceptional execution. </div>

                                <button className='contactUsBtn' onClick={() => handleNavItemClick('contact')}>Contact us today to get started!</button>

                            </div>
                        </div>



                    </div>


                </div>


                <div className='section2' id="process">
                    <div className='blackSection'>
                        <div className='theProcess'>The Process</div>

                        <div className='verticalSection'>
                            <div className='vSection1'>
                                <div className='step1'>

                                    <div className='step1MainSection'>
                                        <div className='step1Title'><img src={checklist} /> <div>Consultation</div></div>
                                        <div className='step1Desc'>Get started on your home improvement project with a comprehensive consultation from Moderm Improvements. Our experienced estimators will analyze your home, discuss materials, schedule the work, and help you choose the perfect colors to match your vision. Let's work together to bring your dream home to life.</div>
                                    </div>

                                </div>

                                <div className='step3'>
                                    <div className='step3MainSection'>
                                        <div className='step3Title'><img src={checklist} /><div>Seamless Execution</div></div>
                                        <div className='step3Desc'>Our experienced team of professionals work efficiently to bring your vision to life, using the highest quality materials and the latest techniques to ensure that the final product meets and exceeds your expectations. Our commitment to customer satisfaction is reflected in our attention to detail, careful project management, and open communication throughout the entire process. With Modern Improvements, you can trust that your home improvement project will be completed with seamless precision.</div>
                                    </div>
                                </div>


                            </div>

                            <div className='vSection2'>
                                <div class="container">
                                    <div class="line"></div>
                                    <div class="step">
                                        <div class="dot1"></div>
                                    </div>
                                    <div class="step">
                                        <div class="dot2"></div>
                                    </div>
                                    <div class="step">
                                        <div class="dot3"></div>
                                    </div>
                                </div>
                            </div>

                            <div className='vSection3'>
                                <div className='step2MainSection'>
                                    <div className='step2Title'><img src={layers} /><div>Material Acquisition <br />and <br />Team Coordination</div></div>
                                    <div className='step2Desc'>At Modern Improvements, we gather all necessary materials and assemble a highly skilled team to ensure top-quality work. Our internal planning guarantees efficient execution and seamless coordination to bring your vision to life.</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='ourServices' id='services'>
                    <div className='ourServicesSection'>
                        <div className='theServices'>Our Services</div>
                        <div className='services'>
                            <div className='imgColumn'>

                            </div>

                            <div className='services1'>
                                <div className='paint'>
                                    <img src={wallPaint} className='wallPaint' />

                                    <div>
                                        <div className='serviceTitles'>Painting</div>
                                        <ul>
                                            <li>Exterior Home Paint Or Stain</li>
                                            <li>Interior Home Paint Or Stain</li>
                                            <li>Paint Removal</li>
                                        </ul>
                                    </div>
                                </div>


                                <div className='flooring'>
                                    <img src={vinylFlooring} className='floor' />
                                    <div>
                                        <div className='serviceTitles'>Flooring</div>
                                        <ul>
                                            <li>Hardwood Floor Installation</li>
                                            <li>Vinyl Floor Plank Installation</li>
                                            <li>Laminate Floor Plank Installation</li>
                                            <li>Tile Installation</li>

                                        </ul>
                                    </div>

                                </div>

                                <div className='doorInstallation'>
                                    <img src={doors} className='doors' />
                                    <div>
                                        <div className='serviceTitles'>Doors</div>
                                        <ul>
                                            <li>Exterior Door Installation</li>
                                            <li>Interior Door Installation</li>
                                            <li>Storm Door Installation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='services2'>


                                <div className='blinds'>
                                    <img src={zebraShades} className='shades' />
                                    <div>
                                        <div className='serviceTitles'>Window Coverings</div>
                                        <ul>
                                            <li>Blinds Installation</li>
                                            <li>Custom Blinds</li>
                                            <li>Electric/Automated Blinds</li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="powerWashing">
                                    <img src={powerWash} className='powerWasher' />
                                    <div>
                                        <div className='serviceTitles'>Power Washing</div>
                                        <ul>
                                            <li>Powerwash Exterior Surfaces</li>
                                            <li>Powerwash Driveways</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='handyman'>
                                    <img src={handyMan} className='handyMan' />
                                    <div>
                                        <div className='serviceTitles'>Handyman Services</div>
                                        <ul>
                                            <li>Handyman for Multiple Small Projects or Needs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='driveWay'>
                            <img src={drivewaySeal} className='driveWaySeal' />
                            <div>
                                <div className='serviceTitles'>Driveway Sealing</div>
                            </div>
                        </div>

                        <div className='servicingCounty'><strong><em>Servicing All of Suffolk & Nassau County</em></strong></div>
                    </div>
                </div>
                <div className='testimonials' id='testimonials'>
                    <div><Testimonials /></div>
                </div>
                <div className='aboutUs' id="about">
                    <div className='mainAboutUsSection'>

                        <div className='aboutUsTitle'>About Modern Improvement Contractors, Inc</div>

                        <div className='whoWeAre'>Who We Are</div>

                        <div className='description'>
                            <div className='whyUsDesc'>At Modern Improvements, we understand that renovating your home can be a daunting task. That's why we've made it our mission to provide top-quality home improvement services that are both professional and personal.<br /><br />

                                Our team of experts is dedicated to creating beautiful and functional spaces that reflect your unique style and needs. We use only the best materials and state-of-the-art techniques to ensure that your renovation is not only visually stunning, but also built to last.<br /><br />

                                But what truly sets us apart is our commitment to customer satisfaction. We take the time to listen to your needs and concerns, and work closely with you to ensure that your vision is brought to life. Our team of experts will guide you through every step of the process, from design to completion, to ensure that your project runs smoothly and exceeds your expectations.<br /><br />

                                With years of experience and a proven track record of satisfied customers, you can trust us to deliver outstanding results. Don't just take our word for it, check out our customer reviews and portfolio of completed projects.<br /><br />

                                So why wait? Contact us today to schedule your free consultation and see for yourself why Modern Improvements is the premier choice for your home renovation needs.</div>


                            <img src={houseRemodel} className='houseRemodel' />
                        </div>

                    </div>
                </div>

                <div className='contactForm'>
                    <div><ContactForm /></div>
                </div>

                <div className='footer'>
                    <footer>
                        <hr />
                        <div>
                            2023 All Rights Reserved By Modern Improvement Contractors Inc. <br /> Design By: Eman Enterprises
                        </div>
                    </footer>
                </div>

            </div>
            {openQuote && (
                <QuoteForm openQuote={openQuote} setOpenQuote={setOpenQuote} />
            )}
        </>
    );
}

export default Home;
