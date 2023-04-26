import logo from './logo.svg';
import './app.css';
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
import kitchen from './assets/images/kitchenRemodel.jpeg'
import bathroom from './assets/images/8256505.png'
import drivewaySeal from './assets/images/drivewaySeal.png'
import powerWash from './assets/images/powerWash.png'
import phone from './assets/images/phone.svg'
import msg from './assets/images/msg.svg'
import 'animate.css';
import Sidebar from './SideBar';
import ContactForm from './ContactForm';
import Testimonials from './testimonials';
import { Route } from 'react-router-dom';
import QuoteForm from './QuoteForm';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { TypeAnimation } from 'react-type-animation';


const handleNavItemClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
};

function Home() {
    const [openQuote, setOpenQuote] = useState(false)
    const [phoneIcon, setPhoneIcon] = useState(false)

    const openModal = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Click',
            label: 'Get A Quote Button',
        });
        setOpenQuote(true)
    }
    return (
        <>
            <div className="App">

                <div className='callToAction animate__animated  animate__fadeIn'>
                    <a href="tel:9342049409">FREE Estimate! Call Now</a>
                </div>

                <div className='mainSection' id="home">

                    <Sidebar className='sideBar' phoneIcon={phoneIcon} setPhoneIcon={setPhoneIcon} />

                    <img src={main} alt='modern kitchen and living room with gray, white and black color scheme and black vinyl flooring. This image showcase the high-quality work of Modern Improvement Contractors' />

                    <p className='image-caption' aria-hidden='true'>
                        This modern and stylish kitchen and living room features a sleek color scheme of gray, white and black, paired with durable black vinyl flooring. The combination of colors and materials creates a warm and inviting atmosphere, perfect for entertaining guests or spending time with family. The black vinyl flooring is ideal for high-traffic areas and can withstand heavy foot traffic. This image is an example of the high-quality work of Modern Improvement Contractors, a leading provider of home improvement services in the area.
                    </p>


                    <div className='innerMainSection'>
                        <div className='animate__animated animate__fadeIn companyName'>Modern Improvement Contractors</div>

                        <TypeAnimation
                            sequence={[
                                'Building Your Dream Home...', 500, 'Building Your Dream Home, Exactly', 500, 'Building Your Dream Home, Like', 500, 'Building Your Dream Home, You', 500, 'Building Your Dream Home, Want', 500, 'Building Your Dream Home, Together', 500,
                                () => {
                                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={false}
                            className='slogan'
                        />


                        <button className='callToActionQuoteBtn animate__animated animate__fadeIn' onClick={openModal}>Get A Quote</button>
                    </div>
                </div>


                <div className='section1' id='solutions'>
                    <div className='whiteSection'>
                        <h2 className='ourOffer'>Offering Complete Home Improvement Solutions</h2>
                        <h3 className='ourOfferSlogan'>Transform Your Home with Confidence</h3>
                        <div className='ourOfferDesc'>
                            <div className='part1Offer'>
                                <h4 className='part1Title'>
                                    <img src={pencilPaint} alt="Home Remodeling Icon" />
                                    <div>Home Remodeling</div>
                                </h4>
                                <div>
                                    <strong><em>Say goodbye to outdated and uninspiring spaces.</em></strong> At Modern Improvements, we specialize in home remodeling, construction, and general contractor services to turn your dreams into reality. From revamping your entire home's structure to kitchen and bathroom renovations, flooring, painting, and window coverings, we'll work closely with you to ensure your project is executed to perfection in both Suffolk and Nassau County.
                                </div>
                            </div>
                            <div className='part2Offer'>
                                <h4 className='part2Title'>
                                    <img src={pencilRuler} alt="Home Improvement Planning Icon" />
                                    <div>Home Improvement Planning</div>
                                </h4>
                                <div>Our construction company experts will take the time to understand your vision for your green building and sustainable construction projects. We cover every detail before starting the work, ensuring a comprehensive planning process for your residential or commercial construction project. This allows your renovation to run smoothly and efficiently, giving you the confidence to sit back and enjoy the transformation unfold.</div>
                            </div>
                            <div className='part3Offer'>
                                <h4 className='part3Title'>
                                    <img src={paintRoller} alt="Home Renovation Execution Icon" />
                                    <div>Home Renovation Execution</div>
                                </h4>
                                <div>
                                    With Modern Improvements, you can be sure you're getting the best of both worlds - beautiful design and exceptional execution for your home improvement project. Our builders and contractors deliver top-quality workmanship, ensuring that your project meets the highest standards in construction and renovation.
                                </div>
                                <button className='contactUsBtn' onClick={() => handleNavItemClick('contact')}>Contact us today to get started on your dream home!</button>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='section2' id="process">
                    <div className='blackSection'>
                        <h2 className='theProcess'>The Process</h2>

                        <div className='verticalSection'>
                            <div className='vSection1'>
                                <div className='step1'>
                                    <div className='step1MainSection'>
                                        <h3 className='step1Title'>
                                            <img src={checklist} alt="Consultation Icon" />
                                            <div>Consultation</div>
                                        </h3>
                                        <div className='step1Desc'>Get started on your home improvement, remodeling, or construction project with a comprehensive consultation from Modern Improvements. Our experienced estimators will analyze your home, discuss green building and sustainable materials, schedule the work, and help you choose the perfect colors and designs to match your vision. Let's work together to bring your dream home to life in Suffolk and Nassau County.</div>
                                    </div>
                                </div>

                                <div className='step3'>
                                    <div className='step3MainSection'>
                                        <h3 className='step3Title'>
                                            <img src={checklist} alt="Seamless Execution Icon" />
                                            <div>Seamless Execution</div>
                                        </h3>
                                        <div className='step3Desc'>Our experienced team of builders and contractors work efficiently to bring your vision to life, using the highest quality materials and the latest techniques for residential or commercial construction. Our commitment to customer satisfaction is reflected in our attention to detail, careful project management, and open communication throughout the entire process. With Modern Improvements, you can trust that your home improvement project will be completed with seamless precision.</div>
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
                                    <h3 className='step2Title'>
                                        <img src={layers} alt="Material Acquisition and Team Coordination Icon" />
                                        <div>Material Acquisition <br />and <br />Team Coordination</div>
                                    </h3>
                                    <div className='step2Desc'>At Modern Improvements, we gather all necessary materials and assemble a highly skilled team of construction professionals to ensure top-quality work for your home remodeling, flooring, painting, or window covering projects. Our internal planning guarantees efficient execution and seamless coordination to bring your vision to life.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <section className="ourServices" id="services">
                    <div className="ourServicesSection">
                        <h1 className="theServices">Our Services</h1>
                        <div className="services">
                            <div className="imgColumn">

                            </div>

                            <div className="services1">
                                <div className="paint">
                                    <img src={wallPaint} alt="Wall painting service" className="wallPaint" />
                                    <div>
                                        <h2 className="serviceTitles">Residential Painting Services</h2>
                                        <ul>
                                            <li>Exterior Home Painting and Staining</li>
                                            <li>Interior Home Painting and Staining</li>
                                            <li>Professional Paint Removal Services</li>
                                            <li>High-Quality Wood Staining</li>
                                            <li>Precision Sanding and Surface Preparation</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="doorInstallation">
                                    <img src={bathroom} alt="Bathroom remodeling service" className="doors" />
                                    <div>
                                        <h2 className="serviceTitles">Bathroom Remodeling Services</h2>
                                        <ul>
                                            <li>Custom Wainscoting and Wall Paneling</li>
                                            <li>Efficient Toilet Installation and Replacement</li>
                                            <li>Modern Sink and Vanity Installations</li>
                                            <li>Stylish Bathroom Lighting Solutions</li>
                                            <li>High-Quality Bathroom Fixtures and Accessories</li>
                                            <li>Elegant Crown Molding and Trim Work</li>
                                            <li>And Many More Custom Bathroom Remodeling Services...</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flooring">
                                    <img src={vinylFlooring} alt="Flooring service" className="floor" />
                                    <div>
                                        <h2 className="serviceTitles">Flooring Services</h2>
                                        <ul>
                                            <li>Expert Hardwood Floor Installation and Refinishing</li>
                                            <li>Durable Vinyl Plank Flooring Installation</li>
                                            <li>Affordable Laminate Floor Plank Installation</li>
                                            <li>Professional Tile Installation for Kitchens, Bathrooms, and More</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="doorInstallation">
                                    <img src={doors} alt="Door installation service" className="doors" />
                                    <div>
                                        <h2 className="serviceTitles">Door Installation Services</h2>
                                        <ul>
                                            <li>Secure Exterior Door Installation and Replacement</li>
                                            <li>Stylish Interior Door Installation for Bedrooms, Bathrooms, and More</li>
                                            <li>Weather-Resistant Storm Door Installation to Protect Your Home</li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="doorInstallation">

                                </div>
                            </div>

                            <div className="services2">
                                <div className="blinds">
                                    <img src={zebraShades} alt="Window coverings service" className="shades" />
                                    <div>
                                        <h2 className="serviceTitles">Window Covering Solutions</h2>
                                        <ul>
                                            <li>Professional Blinds Installation and Replacement</li>
                                            <li>Custom Blinds Design for Unique Window Sizes and Styles</li>
                                            <li>Electric/Automated Blinds Installation for Modern Convenience</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="handyman">
                                    <img src={kitchen} alt="Kitchen remodeling service" className="handyMan" />
                                    <div>
                                        <h2 className="serviceTitles">Kitchen Remodeling Services</h2>
                                        <ul>
                                            <li>Custom Wainscoting for Elegant Kitchen Design</li>
                                            <li>High-Quality Kitchen Cabinetry Solutions</li>
                                            <li>Expert Sink Installations and Plumbing Updates</li>
                                            <li>Modern Fixtures for Enhanced Functionality</li>
                                            <li>Energy-Efficient Kitchen Lighting Solutions</li>
                                            <li>Stylish Backsplash Installations for Easy Cleaning and Visual Appeal</li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="powerWashing">
                                    <img src={powerWash} alt="Power Washing service" className='powerWasher' />
                                    <div>
                                        <h2 className='serviceTitles'>Professional Power Washing Services</h2>
                                        <ul>
                                            <li>Thorough Power Washing for Exterior Surfaces and Siding</li>
                                            <li>Driveway and Walkway Power Washing for Enhanced Curb Appeal</li>
                                            <li>Deck and Patio Power Washing for Outdoor Living Spaces</li>
                                            <li>Fence Power Washing to Refresh and Maintain Wood and Vinyl</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='handyman'>
                                    <img src={handyMan} alt="Handyman service" className='handyMan' />
                                    <div>
                                        <h2 className='serviceTitles'>Comprehensive Handyman Services</h2>
                                        <ul>
                                            <li>Skilled Handyman for Multiple Small Projects and Home Repairs</li>
                                            <li>Furniture Assembly and Installation</li>
                                            <li>Wall Mounting Services for TVs, Shelves, and Artwork</li>
                                            <li>Minor Electrical Repairs and Fixture Installations</li>
                                            <li>Plumbing Repairs and Fixture Replacements</li>
                                            <li>Drywall Repairs and Patching</li>
                                            <li>Door and Window Repairs</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='driveWay'>
                            <img src={drivewaySeal} alt='Driveway Seal' className='driveWaySeal' />
                            <div>
                                <h2 className='serviceTitles'>Driveway Sealing and Maintenance</h2>
                                <ul>
                                    <li>Asphalt Driveway Sealing and Crack Repair</li>
                                    <li>Concrete Driveway Sealing and Crack Repair</li>
                                    <li>Paver Driveway Sealing and Maintenance</li>
                                    <li>Gravel Driveway Maintenance and Grading</li>
                                    <li>Driveway Cleaning and Stain Removal</li>
                                </ul>
                            </div>
                        </div>


                        <div className='servicingCounty'>
                            <strong>
                                <em>Home Improvement Services for Suffolk & Nassau County, Long Island</em>
                            </strong>
                        </div>
                    </div>
                </section>

                <div className='testimonials' id='testimonials'>

                    <div><Testimonials /></div>
                </div>
                <section className="aboutUs" id="about">
                    <div className="mainAboutUsSection">
                        <h2 className="aboutUsTitle">Who We Are</h2>
                        <h1 className="whoWeAre">About Modern Improvement Contractors, Inc – Your Home Remodeling Experts</h1>
                        <div className="description">
                            <p className="whyUsDesc">
                                At Modern Improvements, we understand that home improvement and remodeling can be overwhelming. Our mission is to provide top-quality construction and general contractor services, combining professionalism and personal attention to create exceptional spaces for our clients.<br /><br />

                                Our skilled team of builders and contractors is devoted to designing and constructing beautiful, functional spaces that cater to your individual style and requirements. We specialize in various services, including kitchen remodeling, bathroom remodeling, flooring, painting, and window coverings. We use high-quality materials and cutting-edge techniques to ensure your renovation is visually impressive and built to last.<br /><br />

                                What sets us apart is our dedication to customer satisfaction. As a premier construction company, we listen attentively to your needs and concerns, collaborating closely to ensure your vision comes to life. Our experts guide you through every phase, from design to completion, guaranteeing a seamless process that surpasses your expectations.<br /><br />

                                With extensive experience and a history of satisfied clients in both residential and commercial construction, you can rely on us for exceptional outcomes. Explore our customer testimonials and completed project portfolio to see why we are the leading choice for home remodeling, green building, and sustainable construction in Suffolk and Nassau County.<br /><br />

                                Don't hesitate—contact us today to arrange your complimentary consultation and discover why Modern Improvements is the premier choice for your home renovation and construction needs.
                            </p>

                            <img src={houseRemodel} alt="House remodel example" className="houseRemodel" />
                        </div>
                    </div>
                </section>


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

            {phoneIcon && (
                <>
                    <a href="tel:9342049409" className="callBtn2">
                        <img src={phone} alt="" />
                    </a>
                    <a href="sms:9342049409" className="msgBtn2">
                        <img src={msg} alt="" />
                    </a>
                </>
            )}

            <a href="tel:9342049409" className="callBtn">
                <img src={phone} alt="" />
            </a>
            <a href="sms:9342049409" className="msgBtn">
                <img src={msg} alt="" />
            </a>

        </>
    );
}

export default Home;
