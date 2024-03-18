import React from 'react'
import img1  from '../Assets/homeimg1.png'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (


 <>
 
      <div className="container-fluid  px-5 py-5 home-main" bis_skin_checked={1}>
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5 home-main-row" bis_skin_checked={1}>
    <div className="col-10 col-sm-8 col-lg-6" bis_skin_checked={1}>
      <img src={img1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={480} height={280} loading="lazy" />
    </div>
    <div className="col-lg-6 px-5" bis_skin_checked={1}>
      <h1 className="display-5 fw-bold lh-1 mb-3 text-start">Riphah and INVOSEG skills</h1>
      <p className="lead text-start mt-5 mb-5">Unlimited access to 7,000+ world-class courses, hands-on projects, and 
      job-ready certificate programs—all included in your subscription</p>
      <p className='text-start'>$59/month, cancel anytime</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start" bis_skin_checked={1}>
        <Link to={'/DashBoard'} type="button" className="btn btn-primary btn-lg px-4 me-md-2 mb-4">
          Start My InterShip program
        </Link>
      </div>
      <p className='text-start text-primary'>or $399/year with 14-day money-back guarantee</p>
    </div>
  </div>
</div>



{/* --------------------------------next--------------------- */}
<div className="container-fluid">
 
  <div className="row">
    <div className="col-12 h-34rem bg-red-400" />
  </div>
  <div className="row border-bottom-2 border-black p-4">
    <h4 className="col-12 text-2xl text-center mb-4">
      Learn from 275+ leading universities and companies with Coursera Plus
    </h4>
  <div className="container">
  <div className="row justify-content-center home-logos-part">
    <div className="col-7 col-md-4 col-lg-3 col-xl-2">
      <img src="alazizi.png" alt="Brand 1" className="img-fluid" width={150} height={150} />
    </div>
    <div className="col-7 col-md-4 col-lg-3 col-xl-2">
      <img src="aldar.png" alt="Brand 2" className="img-fluid" width={150} height={150} />
    </div>
    <div className="col-7 col-md-4 col-lg-3 col-xl-2" >
      <img src="binghatti.png" alt="Brand 3" className="img-fluid" width={150} height={150}/>
    </div>
    <div className="col-7 col-md-4 col-lg-3 col-xl-2">
      <img src="damac.png" alt="Brand 4" className="img-fluid"width={150} height={150} />
    </div>
    <div className="col-7 col-md-4 col-lg-3 col-xl-2">
      <img src="danube.png" alt="Brand 5" className="img-fluid" width={150} height={150}/>
    </div>
    <div className="col-7 col-md-4 col-lg-3 col-xl-2">
      <img src="deyaar.png" alt="Brand 6" className="img-fluid"width={150} height={150} />
    </div>
    {/* <div className="col-7 col-md-4 col-lg-3 col-xl-2">
      <img src="emaar.png" alt="Brand 7" className="img-fluid"  />
    </div>  */}
  </div>
</div>


  </div>
  <div className="row h-32rem">
    <div className="col-12 h-12rem mt-8">
      <div className="text-4xl font-semibold text-center p-4">
        <h3>Invest in your career with Coursera Plus</h3>
      </div>
      <div className="text-base text-center mt-1 mb-3">
       <p> Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top
        instructors from leading universities and companies. </p>
      </div>
       <div class="container mt-4">
  <div class="row justify-content-center align-items-center  mb-5 px-5">
    <div class="col-lg-3 col-md-4 col-sm-6 h-100 px-5 mt-3">
      <div class="d-flex justify-content-center">
        <img src="icon.png" alt="Icon 1" class="img-fluid" />
      </div>
      <div class="text-center my-3">Learn anything</div>
      <div class="text-center">
        Explore any interest or trending topic, take prerequisites, and advance your skills
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 h-100 px-5 mt-3">
      <div class="d-flex justify-content-center">
        <img src="icon2.png" alt="Icon 2" class="img-fluid" />
      </div>
      <div class="text-center my-3">Save money</div>
      <div class="text-center">
        Spend less money on your learning if you plan to take multiple courses this year
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 h-100 px-5 mt-3">
      <div class="d-flex justify-content-center">
        <img src="icon3.png" alt="Icon 3" class="img-fluid" />
      </div>
      <div class="text-center my-3">Flexible learning</div>
      <div class="text-center">
        Learn at your own pace, move between multiple courses, or switch to a different course
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 h-100 px-5  mt-3">
      <div class="d-flex justify-content-center">
        <img src="icon4.png" alt="Icon 4" class="img-fluid" />
      </div>
      <div class="text-center my-3">Unlimited certificates</div>
      <div class="text-center">
        Earn a certificate for every learning program that you complete at no additional cost
      </div>
    </div>
  </div>


</div>

    </div>
  </div>
  <div className="row h-42rem bg-green-400" />
</div>


{/* ----------------------------------------------------- */}

<div className='container-fluid  bg-light'>
  <div className='pt-5 pb-5'>
  <h1>See what you can learn with Coursera Plus</h1>

  </div>
  <div>
 <div class="container ">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-5 pb-5">
    <div class="col">
      <div class="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


     </div>
</div>

{/* --------------------------faq----------------------- */}

<div className="faq_area section_padding_130" id="faq">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-8 col-lg-6">
        <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
          <h3><span>Frequently </span> Asked Questions</h3>
          <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
          <div className="line" />
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-lg-8">
        <div className="accordion faq-accordian" id="faqAccordion">

          {/* Question 1 */}
          <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="card-header" id="headingOne">
              <h6 className="mb-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How can I install this app?<span className="lni-chevron-up" /><i class="fa-solid fa-caret-down"></i></h6>
            </div>
            <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="card border-0 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
            <div className="card-header" id="headingTwo">
              <h6 className="mb-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">The apps isn't installing?<span className="lni-chevron-up" /><i class="fa-solid fa-caret-down"></i></h6>
            </div>
            <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#faqAccordion">
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="card border-0 wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
            <div className="card-header" id="headingThree">
              <h6 className="mb-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Contact form isn't working?<span className="lni-chevron-up" /><i class="fa-solid fa-caret-down"></i></h6>
            </div>
            <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#faqAccordion">
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              </div>
            </div>
          </div>

          {/* Additional Questions (4 to 7) */}
          {/* Question 4 */}
          <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="card-header" id="headingOne">
              <h6 className="mb-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How can I install this app?<span className="lni-chevron-up" /><i class="fa-solid fa-caret-down"></i></h6>
            </div>
            <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <div className="card-header" id="headingOne">
              <h6 className="mb-0 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How can I install this app?<span className="lni-chevron-up" /><i class="fa-solid fa-caret-down"></i></h6>
            </div>
            <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              </div>
            </div>
          </div>

       
        </div>
        <div className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.9s" style={{visibility: 'visible', animationDelay: '0.9s', animationName: 'fadeInUp'}}>
          <i className="lni-emoji-sad" />
          <p className="mb-0 px-2">Can't find your answers?</p>
          <a href="#"> Contact us</a>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer/>
</>
  )
}

export default Home
