import React, { Suspense } from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import LatestPostsSection from "../../_components/sections/LatestPosts";
import CallToActionSection from "../../_components/sections/CallToAction";

export const metadata = {
    title: {
        default: "Ads",
    },
    description: AppData.settings.siteDescription,
}

const PaidAds = () => {
  return (
    <>
        <PageBanner pageTitle={"Paid Ads"}  bgImage={"/img/photo/12.jpg"} />

        <section>
    <div className="container mil-p-120-60">
        <div className="mil-background-grid mil-softened"></div>
        <div className="row justify-content-between">
            <div className="col-lg-7">
                <>
                    <h3 className="mil-upper mil-up mil-mb-60">WHAT WE DO</h3>
                    <div className="mil-text mil-up mil-mb-60">
                        <p>At Bright Media, our area of specialization is designing strong sponsored ads to elevate the online presence of our clients and bring about meaningful outcomes. Consequently, as experts in Meta Ads (Facebook and Instagram) and Google Ads, we pay attention to how much we spend versus what we get out of it by weaving together persuasive commercials that communicate with their precise target audience and always fine-tuning for good performance.</p>
                    </div>




                    <section style={{marginTop:"-130px"}}>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                      <h3 className="mil-upper mil-up mil-mb-60">WHAT WE OFFER ?</h3>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src='https://ruizarch-react.vercel.app/img/icons/4.svg' alt='img' />
                            </div>
                            <div><h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Strategic Planning</h4></div>
                            </div>
                            <p>Our team carries out research that is comprehensive in order to identify the right places for advertising, ad forms and options of targeting for your campaigns.</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30" >
                                <img src='https://ruizarch-react.vercel.app/img/icons/4.svg' alt='img' />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30 " style={{fontSize:'16px'}}>Creative Execution</h4></div>
                            </div>
                            <p>Through persuasive copywriting, engaging visuals and clear calls-to-action we manage to grab attention and motivate users to respond.</p>
                        </div>

                    </div>
                   
                </div>



                <div className="row">
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src='https://ruizarch-react.vercel.app/img/icons/4.svg' alt='img' />
                            </div>
                            <div>
                            <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Continuous Optimization</h4></div>
                            </div>
                            <p>Based on data insights, we continuously optimize your campaigns to improve performance and maximize ROI.</p>
                        </div>

                    </div>
                    <div className="col-lg-6" >

                        <div className="mil-icon-box mil-up mil-mb-60">
                        <div style={{display:'flex',alignItems:"center",gap:'10px'}}>
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src='https://ruizarch-react.vercel.app/img/icons/4.svg' alt='img' />
                            </div>
                            <div> <h4 className="mil-upper mil-mb-30"  style={{fontSize:'16px'}}>Transparent Reporting</h4> </div>
                            </div>
                            <p>Our reports highlight key metrics, insights, and recommendations for future optimizations.</p>
                        </div>

                    </div>
                   
                </div>
            </div>
        </section>






                    <h3 className="mil-upper mil-up mil-mb-60">SERVICE OUTCOME</h3>
                    <div className="row justify-content-between">
                    <div className="col-lg-5">
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-up mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Increased online presence</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Enhanced Audience Engagement</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Higher engagement and interactions</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Boosted website traffic</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <ul className="mil-icon-list mil-mb-60">
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Enhanced lead generation</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Increased sales and conversions</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Maximized return on investment (ROI)</li>
                                <li className="mil-hover mil-up"><img src="/img/icons/11.svg" alt="icon" />Data-driven insights and reporting</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mil-divider-lg mil-up mil-mb-60" />
                </>
            </div>
            <div className="col-lg-5">
                <div className="mil-sidebar-frame mil-mb-60">
                    <h2 className="mil-upper mil-up mil-mb-60">Info Areas</h2>

                    <React.Fragment >
                        <>
                            <h6 className="mil-upper mil-up mil-mb-30">Master Planning</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Workplace Consulting</li>
                                <li >3D Modeling Planning</li>
                                <li >Architecture</li>
                            </ul>
                        </>
                        <>
                            <h6 className="mil-upper mil-up mil-mb-30">Master Planning</h6>
                            <ul className="mil-list mil-dark mil-up mil-mb-30">
                                <li >Workplace Consulting</li>
                                <li >3D Modeling Planning</li>
                                <li >Architecture</li>
                            </ul>
                        </>
                        <>
                            <div className="row">
                                <div className="col-6" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" >10</span></h5>
                                        <p className="mil-dark" >Years Experience</p>
                                    </div>
                                   
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" >10</span></h5>
                                        <p className="mil-dark" >Years Experience</p>
                                    </div>
                                   

                                </div>
                                <div className="col-6" >

                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" >10</span></h5>
                                        <p className="mil-dark" >Years Experience</p>
                                    </div>
                                    <div className="mil-counter-frame mil-up mil-mb-30">
                                        <h5 className="mil-mb-5"><span className="mil-counter" >10</span></h5>
                                        <p className="mil-dark" >Years Experience</p>
                                    </div>
                                   

                                </div>
                            </div>
                        </>
                        <div className="mil-divider-lg mil-up mil-mb-30" />
                    </React.Fragment>
                </div>
            </div>
        </div>
    </div>
</section>










        {/* map */}
        {/* <LatestPostsSection/> */}
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">We’d love to talk</h2>
                            <p className="mil-up mil-mb-30">Have a question? We’d love to hear from you. Send us a note to get the conversation started - or click on an office above and talk to us. Especially about designing something, or something we’ve designed.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">Interested in joining the team? Browse our current openings.</p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">Join Us <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                    <CallToActionSection/>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default PaidAds;
