import React from 'react';
import { Navbar } from '../../components';
import image from '../../assets/images';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home.css'
import Lottie from 'lottie-web';
import cashCard from '../../static/cash-or-card.json'

const Home = () => {

    const options = {
        loop: true,
        margin: 50,
        autoplay: false,
        mouseDrage: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    };

    React.useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector("#cash-or-card"),
            animationData: cashCard,
            renderer: "svg",
            loop: true,
            autoplay: true,
        });
    }, []);

    return (
        <>
            <Navbar />
            <section className='container home'>
                <div className='mt-3'></div>
                <div>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='row'>
                                    <div className='col-lg-5 col-md-6 col-12 display_grid'>
                                        <div className='carousel-content'>
                                            <h1>We’re the bank of the free</h1>
                                            <p>We’re here to help you get the best out of your money, no strings attached. Welcome to your freedom!</p>
                                            {/* <button>Get Kashback</button> */}
                                            <button> <span>Get Kaskback</span></button>
                                        </div>
                                    </div>
                                    <div className='col-lg-7 col-md-6 col-12 display_grid'>
                                        {/* <img src={image.one} className="d-block w-100" alt="Image 1" /> */}
                                        <div className='carousel-content svg_svg'>
                                            {/* <div id="cash-or-card" /> */}

                                            <div className="social_img">
                                                <div className="social-icons">
                                                    <i className="fa-solid fa-house-chimney house"></i>
                                                    <i className="fa-solid fa-people-arrows-left-right hous"></i>
                                                    <i className="fa-solid fa-mobile-screen-button hou"></i>
                                                    <i className="fa-brands fa-drupal ho"></i>
                                                    <i className="fa-solid fa-credit-card credit"></i>
                                                </div>
                                                <img className="email-icon" src={image.animImage} alt="Phone"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="carousel-item">
                                <div className="row">
                                    <div className='col-lg-6 col-md-6 col-12' style={{ marginTop: "6em" }}>
                                        <h1>This is a dummy text</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum corrupti hic, eaque quas quos possimus aut aperiam in culpa quaerat quae omnis dolore porro excepturi, officia obcaecati, doloremque sit?</p>
                                        <button>Become A Vendor</button>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <img src={image.two} className="d-block w-100" alt="Image 2" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className='col-12'>
                                        <img src={image.three} className="d-block w-100" alt="Image 3" />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className='kash_card cards'>
                        <div className="kash kashback_cards">
                            <img src="https://img.icons8.com/ios-filled/50/24b57a/bank-card-front-side--v1.png" />
                            <div>We’ll give you a free debit card. Order it right in the app.</div>
                        </div>
                        <div className="kash kashback_cards">
                            <img src="https://img.icons8.com/ios-filled/50/24b57a/bank-card-front-side--v1.png" />
                            <div>Create smart budgets to help you take control of your spending.</div>
                        </div>
                        <div className="kash kashback_cards">
                            <img src="https://img.icons8.com/ios-filled/50/24b57a/bank-card-front-side--v1.png" />
                            <div>See where your money goes without solving equations.</div>
                        </div>
                    </div>
                    <div className='kash_card cards_bottom'>
                        <div className="kash kashback_cards">
                            <img src="https://img.icons8.com/ios-filled/50/24b57a/bank-card-front-side--v1.png" />
                            <div>Pay absolutely nothing for sending money.</div>
                        </div>
                        <div className="kash kashback_cards">
                            <img src="https://img.icons8.com/ios-filled/50/24b57a/bank-card-front-side--v1.png" />
                            <div>Save automatically and we’ll pay you up to 15% interest every year.</div>
                        </div>
                    </div>
                </div>


                <div className='how_it_works' id="how_it_works">
                    <h5 className='subHeader'>How it works</h5>
                    <h2>Start using cryptocurrency in <span style={{ color: "#24b57a" }}>three easy steps.</span></h2>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='how_icons'>
                                <i className="fas fa-cogs"></i>
                                <h4>Create account</h4>
                                <p>Sign up for free on the web, our iOS or Android app and set up your profile.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='how_icons'>
                                <i className="fas fa-cogs"></i>
                                <h4>Deposit</h4>
                                <p>Deposit cash or crypto with multiple payment options — Card, bank e.t.c</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='how_icons'>
                                <i className="fas fa-cogs"></i>
                                <h4>Transact</h4>
                                <p>Send, receive, buy, sell and swap between cryptos and cash.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />


            <section className="container mb-5">
                <div className='kashback'>
                    <h5 className='subHeader'>Get Kashback</h5>
                    <h2>The crypto wallet you have been waiting for.</h2>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12 mt-5'>
                            <h3>Accept and securely store bitcoin and other cryptocurrencies.</h3>
                            <p>Now you have an all in one platform to store, buy, sell, send, receive and swap crypto. You will be able to:</p>
                            <ul>
                                <li><i className="fas fa-sort-up"></i>Buy, sell & trade Multiple cryptocurrencies.</li>
                                <li><i className="fas fa-sort-up"></i>Buy crypto as low as ₦ 500.</li>
                                <li><i className="fas fa-sort-up"></i>Swap between crypto. e.g Bitcoin to Ripple.</li>
                                <li><i className="fas fa-sort-up"></i>Earn free Bitcoin for life by inviting friends</li>
                            </ul>

                            <button className='mt-5'>Create an account</button>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12 mt-5'>
                            <div>
                                <img src={image.wallet} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='advantages' id='advantages'>
                    <h5 className='subHeader'>Advantages</h5>
                    <h2>Why your friends <span style={{ color: "#24b57a" }}> switched </span>to flitaa.</h2>


                    <div className='advantages_carousel'>
                        <OwlCarousel
                            className="owl-carousel"
                            {...options}
                            id="slider_cat"
                        >
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i className="fas fa-tv"></i>
                                        <h4>Intuitive</h4>
                                    </div>
                                    <p>flitaa offers you the most beginner friendly experience you can find.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i className="fas fa-tv"></i>
                                        <h4>Fast</h4>
                                    </div>
                                    <p>Built with best practices to deliver a fast crypto user experience.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i className="fas fa-tv"></i>
                                        <h4>Funds Safety</h4>
                                    </div>
                                    <p>Your wallet is protected on multiple layers of security to prevent theft.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i className="fas fa-tv"></i>
                                        <h4>Multi-assets</h4>
                                    </div>
                                    <p>Your one stop wallet for the most popular tokens available.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i className="fas fa-tv"></i>
                                        <h4>Swap</h4>
                                    </div>
                                    <p>Swap seamlessly between tokens of your choice in milli-seconds.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i className="fas fa-tv"></i>
                                        <h4>Earn</h4>
                                    </div>
                                    <p>You earn for life when you invite your friends to transact on flitaa.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9 col-md-9 col-12'>
                            <div className='row advantage_none_carousel'>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i className="fas fa-tv"></i>
                                            <h4>Intuitive</h4>
                                        </div>
                                        <p>flitaa offers you the most beginner friendly experience you can find.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i className="fas fa-tv"></i>
                                            <h4>Fast</h4>
                                        </div>
                                        <p>Built with best practices to deliver a fast crypto user experience.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i className="fas fa-tv"></i>
                                            <h4>Funds Safety</h4>
                                        </div>
                                        <p>Your wallet is protected on multiple layers of security to prevent theft.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i className="fas fa-tv"></i>
                                            <h4>Multi-assets</h4>
                                        </div>
                                        <p>Your one stop wallet for the most popular tokens available.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i className="fas fa-tv"></i>
                                            <h4>Swap</h4>
                                        </div>
                                        <p>Swap seamlessly between tokens of your choice in milli-seconds.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i className="fas fa-tv"></i>
                                            <h4>Earn</h4>
                                        </div>
                                        <p>You earn for life when you invite your friends to transact on flitaa.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-12'>
                            <div>
                                <img src={image.switching} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='faq' id='faq'>
                    <h5 className='subHeader'>Resources</h5>
                    <h2>FAQ</h2>
                    <div clasNames="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Question #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each element.
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about
                                    any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate
                                    classes that we use to style each element. It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='testimonial'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='testimonial_item'>
                                    <img src={image.testimonialImage1} />
                                    <p>Yeah, I was a bit lost at first. I’m used to Binance and all its complications. But Flitaa is easier. A heads up: If this team keep giving positive vibe and everything is going smoothly, they will get more clients… Their P2P service must be upgraded. But it’s good for now. Very good. Thanks.</p>
                                    <h5>John Doe</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='testimonial_item'>
                                    <img src={image.testimonialImage1} />
                                    <p>I’m used to Binance and all its complications. But Flitaa is easier. A heads up: If this team keep giving positive vibe and everything is going smoothly, they will get more clients… Their P2P service must be upgraded. But it’s good for now. Very good. Thanks.</p>
                                    <h5>Janie Doe</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='testimonial_item'>
                                    <img src={image.testimonialImage1} />
                                    <p>But Flitaa is easier. A heads up: If this team keep giving positive vibe and everything is going smoothly, they will get more clients… Their P2P service must be upgraded. But it’s good for now. Very good. Thanks.</p>
                                    <h5>Malik Doe</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="contact" id='contact'>
                    <h2>Contact Us</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="contact-card">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>Our Address</h3>
                                <p>Elzazi complex, Opposite Westharm petrol station along gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt )</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="contact-card">
                                        <i className="far fa-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>Hello@hthub.com.ng
                                            <br />Help@hthub.com.ng
                                            <br />Admin@hthub.com.ng
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="contact-card">
                                        <i className="fas fa-phone-volume"></i>
                                        <h3>Call Us</h3>
                                        <p>+2349024123575
                                            <br />+2348063342192
                                            <br />+2349011684637</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="contact-card-form" style={{ padding: "35px" }}>
                                <form action="">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name"
                                                aria-label="First name" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name"
                                                aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Subject"
                                                aria-label="First name" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <textarea type="text" className="form-control" rows="4" cols="50"
                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <button style={{ padding: "8px 30px", backgroundColor: "orange", color: "black", border: "none" }}
                                        className="mt-4">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
