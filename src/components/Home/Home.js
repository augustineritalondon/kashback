import React from 'react';
import image from '../../assets/images';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home.css'

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

    return (
        <>
            <section className='container home'>
                <div className='mt-3'></div>
                <div>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={image.one} class="d-block w-100" alt="Image 1" />
                            </div>
                            <div class="carousel-item">
                                <img src={image.two} class="d-block w-100" alt="Image 2" />
                            </div>
                            <div class="carousel-item">
                                <img src={image.three} class="d-block w-100" alt="Image 3" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


                <div className='how_it_works'>
                    <h5 className='subHeader'>How it works</h5>
                    <h2>Start using cryptocurrency in <span style={{ color: "#24b57a" }}>three easy steps.</span></h2>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='how_icons'>
                                <i class="fas fa-cogs"></i>
                                <h4>Create account</h4>
                                <p>Sign up for free on the web, our iOS or Android app and set up your profile.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='how_icons'>
                                <i class="fas fa-cogs"></i>
                                <h4>Deposit</h4>
                                <p>Deposit cash or crypto with multiple payment options — Card, bank e.t.c</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='how_icons'>
                                <i class="fas fa-cogs"></i>
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
                                <li><i class="fas fa-sort-up"></i>Buy, sell & trade Multiple cryptocurrencies.</li>
                                <li><i class="fas fa-sort-up"></i>Buy crypto as low as ₦ 500.</li>
                                <li><i class="fas fa-sort-up"></i>Swap between crypto. e.g Bitcoin to Ripple.</li>
                                <li><i class="fas fa-sort-up"></i>Earn free Bitcoin for life by inviting friends</li>
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


                <div className='advantages'>
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
                                        <i class="fas fa-tv"></i>
                                        <h4>Intuitive</h4>
                                    </div>
                                    <p>flitaa offers you the most beginner friendly experience you can find.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i class="fas fa-tv"></i>
                                        <h4>Fast</h4>
                                    </div>
                                    <p>Built with best practices to deliver a fast crypto user experience.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i class="fas fa-tv"></i>
                                        <h4>Funds Safety</h4>
                                    </div>
                                    <p>Your wallet is protected on multiple layers of security to prevent theft.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i class="fas fa-tv"></i>
                                        <h4>Multi-assets</h4>
                                    </div>
                                    <p>Your one stop wallet for the most popular tokens available.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i class="fas fa-tv"></i>
                                        <h4>Swap</h4>
                                    </div>
                                    <p>Swap seamlessly between tokens of your choice in milli-seconds.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className='advantage_item'>
                                    <div className='advantage_item_flex'>
                                        <i class="fas fa-tv"></i>
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
                                            <i class="fas fa-tv"></i>
                                            <h4>Intuitive</h4>
                                        </div>
                                        <p>flitaa offers you the most beginner friendly experience you can find.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i class="fas fa-tv"></i>
                                            <h4>Fast</h4>
                                        </div>
                                        <p>Built with best practices to deliver a fast crypto user experience.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i class="fas fa-tv"></i>
                                            <h4>Funds Safety</h4>
                                        </div>
                                        <p>Your wallet is protected on multiple layers of security to prevent theft.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i class="fas fa-tv"></i>
                                            <h4>Multi-assets</h4>
                                        </div>
                                        <p>Your one stop wallet for the most popular tokens available.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i class="fas fa-tv"></i>
                                            <h4>Swap</h4>
                                        </div>
                                        <p>Swap seamlessly between tokens of your choice in milli-seconds.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-12'>
                                    <div className='advantage_item'>
                                        <div className='advantage_item_flex'>
                                            <i class="fas fa-tv"></i>
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


                <div className='faq'>
                    <h5 className='subHeader'>Resources</h5>
                    <h2>FAQ</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Question #1
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each element.
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about
                                    any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate
                                    classes that we use to style each element. It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='testimonial'>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='testimonial_item'>
                                    <img src={image.testimonialImage1} />
                                    <p>Yeah, I was a bit lost at first. I’m used to Binance and all its complications. But Flitaa is easier. A heads up: If this team keep giving positive vibe and everything is going smoothly, they will get more clients… Their P2P service must be upgraded. But it’s good for now. Very good. Thanks.</p>
                                    <h5>John Doe</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='testimonial_item'>
                                    <img src={image.testimonialImage1} />
                                    <p>I’m used to Binance and all its complications. But Flitaa is easier. A heads up: If this team keep giving positive vibe and everything is going smoothly, they will get more clients… Their P2P service must be upgraded. But it’s good for now. Very good. Thanks.</p>
                                    <h5>Janie Doe</h5>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='testimonial_item'>
                                    <img src={image.testimonialImage1} />
                                    <p>But Flitaa is easier. A heads up: If this team keep giving positive vibe and everything is going smoothly, they will get more clients… Their P2P service must be upgraded. But it’s good for now. Very good. Thanks.</p>
                                    <h5>Malik Doe</h5>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="contact">
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
                                            <br/>+2348063342192
                                            <br/>+2349011684637</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="contact-card-form" style={{padding: "35px"}}>
                                <form action="">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" class="form-control" placeholder="First name"
                                                aria-label="First name" />
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Last name"
                                                aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div className="col">
                                            <input type="text" class="form-control" placeholder="Subject"
                                                aria-label="First name" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div class="col">
                                            <textarea type="text" class="form-control" rows="4" cols="50"
                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <button style={{padding:"8px 30px", backgroundColor: "orange", color: "black", border: "none"}}
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
