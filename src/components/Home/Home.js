import React from 'react';
import { Navbar } from '../../components';
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
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="1027.99206" height="529.55555"
                                                viewBox="0 0 1027.99206 529.55555" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>online_transactions</title>
                                                <rect x="305.99206" y="295.38557"
                                                    width="343.71997" height="234.16998" fill="#24b57a" />
                                                <path d="M754.88605,453.21778h-338.24a4.11628,4.11628,0,0,0-4.11005,4.11v228.69a4.10986,4.10986,0,0,0,4.11005,4.11h338.24a4.10984,4.10984,0,0,0,4.11-4.11v-228.69A4.11626,4.11626,0,0,0,754.88605,453.21778Zm1.37,232.8a1.36568,1.36568,0,0,1-1.37,1.37h-338.24a1.36569,1.36569,0,0,1-1.37-1.37v-228.69a1.37207,1.37207,0,0,1,1.37-1.37h338.24a1.37206,1.37206,0,0,1,1.37,1.37Z"
                                                    transform="translate(-86.00397 -185.22222)"
                                                    fill="#3f3d56" />
                                                <rect x="344.33535" y="429.58731" width="154.74254" height="17.80224" rx="2" fill="#3f3d56" />
                                                <path d="M726.126,599.74775h-49.29a4.10991,4.10991,0,0,0-4.11005,4.11v38.34a4.10986,4.10986,0,0,0,4.11005,4.11h49.29a4.1098,4.1098,0,0,0,4.11-4.11v-38.34A4.10985,4.10985,0,0,0,726.126,599.74775Zm1.37,42.45a1.37206,1.37206,0,0,1-1.37,1.37h-49.29a1.37212,1.37212,0,0,1-1.37006-1.37v-38.34a1.36574,1.36574,0,0,1,1.37006-1.37h49.29a1.36568,1.36568,0,0,1,1.37,1.37Z"
                                                    transform="translate(-86.00397 -185.22222)" fill="#3f3d56" />
                                                <rect x="598.67562" y="423.37233" width="33.60304" height="6.95235" rx="2" fill="#3f3d56" />
                                                <rect x="598.67562" y="434.32756" width="33.60304" height="6.95235" rx="2" fill="#3f3d56" />
                                                <rect x="598.67562" y="445.28278" width="33.60304" height="6.95235" rx="2" fill="#3f3d56" />
                                                <rect x="348.44356" y="284.4306" width="71.20896" height="30.12687" rx="2" fill="#3f3d56" />
                                                <path d="M475.52961,484.71625c0,5.29411-2.45241,9.58583-5.47761,9.58583s-5.47761-4.29172-5.47761-9.58583,5.47761-9.58582,5.47761-9.58582S475.52961,479.42215,475.52961,484.71625Z" transform="translate(-86.00397 -185.22222)" fill="#24b57a" />
                                                <polygon points="901.992 161.837 899.992 161.837 899.992 385.451 672.992 385.451 672.992 387.451 901.992 387.451 901.992 161.837"
                                                    fill="#3f3d56" />
                                                <polygon points="305.992 387.451 76.992 387.451 76.992 161.837 78.992 161.837 78.992 385.451 305.992 385.451 305.992 387.451"
                                                    fill="#3f3d56" /><path d="M1113.35519,223.03181h-1.28168v-2.24294h.96126a.64087.64087,0,0,0,.64084-.64084V208.6129a.64085.64085,0,0,0-.64084-.64084h-.96126v-6.551a13.95586,13.95586,0,0,0-13.956-13.95591h-1.42421v-1.60211a.64085.64085,0,0,0-.64084-.64084h-11.53513a.64085.64085,0,0,0-.64084.64084v1.60211H875.46088a13.95586,13.95586,0,0,0-13.956,13.95591v296.9942a13.9559,13.9559,0,0,0,13.956,13.956h222.65667a13.9559,13.9559,0,0,0,13.956-13.956V235.84861h1.28168a.64087.64087,0,0,0,.64084-.64084V223.67265A.64085.64085,0,0,0,1113.35519,223.03181Z"
                                                        transform="translate(-86.00397 -185.22222)" fill="#3f3d56" /><rect x="787.03482" y="11.37165" width="229.42338"
                                                            height="304.40573" rx="1.9048" fill="#d0cde1" />
                                                <rect x="875.401" y="160.55814" width="39.35653" height="11.66295" rx="2" fill="#3f3d56" />
                                                <rect x="827.82072" y="69.75378" width="134.51708" height="4.99841" rx="2" fill="#3f3d56" />
                                                <rect x="827.82072" y="85.58206" width="134.51708" height="4.99841" rx="2" fill="#3f3d56" />
                                                <rect x="827.82072" y="101.41034" width="134.51708" height="4.99841" rx="2" fill="#3f3d56" />
                                                <rect x="827.82072" y="117.23863" width="134.51708" height="4.99841" rx="2" fill="#3f3d56" />
                                                <rect x="827.82072" y="133.06691" width="134.51708" height="4.99841" rx="2" fill="#3f3d56" />
                                                <circle cx="890.31727" cy="261.97835" r="41.77968" fill="#24b57a" />
                                                <path d="M988.63566,479.42627a52.38194,52.38194,0,1,1,52.38193-52.38194A52.44121,52.44121,0,0,1,988.63566,479.42627Zm0-102.85908a50.47714,50.47714,0,1,0,50.47714,50.47714A50.53392,50.53392,0,0,0,988.63566,376.56719Z"
                                                    transform="translate(-86.00397 -185.22222)" fill="#3f3d56" />
                                                <path d="M241.496,273.13387h-1.71341V226.19551a27.16665,27.16665,0,0,0-27.16673-27.16667H113.1707A27.16664,27.16664,0,0,0,86.004,226.19551V483.703a27.16664,27.16664,0,0,0,27.16673,27.16667h99.44519A27.16665,27.16665,0,0,0,239.78262,483.703V306.54539H241.496Z"
                                                    transform="translate(-86.00397 -185.22222)" fill="#3f3d56" />
                                                <path d="M233.99737,227.79218V484.92413a20.28849,20.28849,0,0,1-20.28483,20.29192H113.78728a20.28842,20.28842,0,0,1-20.28475-20.29192V227.79218a20.28688,20.28688,0,0,1,20.28475-20.28471h12.12326a9.63757,9.63757,0,0,0,8.925,13.27583h56.97157a9.63747,9.63747,0,0,0,8.925-13.27583h12.98047A20.287,20.287,0,0,1,233.99737,227.79218Z"
                                                    transform="translate(-86.00397 -185.22222)" fill="#d0cde1" />
                                                <rect x="64.36182" y="173.77302" width="26.76842" height="7.93258" rx="2" fill="#3f3d56" />
                                                <rect x="32" y="112.01225" width="91.49206" height="3.39968" rx="1.69984" fill="#3f3d56" />
                                                <rect x="32" y="122.77789" width="91.49206" height="3.39968" rx="1.69984" fill="#3f3d56" />
                                                <rect x="32" y="133.54352" width="91.49206" height="3.39968" rx="1.69984" fill="#3f3d56" />
                                                <rect x="32" y="144.30916" width="91.49206" height="3.39968" rx="1.69984" fill="#3f3d56" />
                                                <rect x="32" y="155.0748" width="91.49206" height="3.39968" rx="1.69984" fill="#3f3d56" />
                                                <circle cx="69.87495" cy="256.35481" r="28.81288" fill="#24b57a" />
                                                <path d="M164.37142,463.80112A36.12462,36.12462,0,1,1,200.496,427.67651,36.16549,36.16549,0,0,1,164.37142,463.80112Zm0-70.9356a34.811,34.811,0,1,0,34.811,34.811A34.85016,34.85016,0,0,0,164.37142,392.86552Z"
                                                    transform="translate(-86.00397 -185.22222)" fill="#3f3d56" />
                                                <rect x="147.50456" y="375.18969" width="28" height="28" fill="#d0cde1" />
                                                <path d="M278.50853,572.41192h-34v-34h34Zm-32.52174-1.47826h31.04348V539.89018H245.98679Z" transform="translate(-86.00397 -185.22222)" fill="#3f3d56" />
                                                <rect x="774.50456" y="375.18969" width="28" height="28" fill="#d0cde1" />
                                                <path d="M905.50853,572.41192h-34v-34h34Zm-32.52174-1.47826h31.04348V539.89018H872.98679Z" transform="translate(-86.00397 -185.22222)" fill="#3f3d56" />
                                            </svg>
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
