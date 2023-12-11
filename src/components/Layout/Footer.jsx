import React from 'react'
import fb from '../../assets/facebook.png'
import yt from '../../assets/youtub.png'
import x from '../../assets/x.png'
import inst from '../../assets/instergram.png'
import linkedin from '../../assets/in.png'
import appstore from '../../assets/app store.png'
import googleplay from '../../assets/google play.png'




const Footer = () => {
  return (
    
  <div className="footer">

  <div className="sb_footer">
    <div className="sb_footer_link">
      <div className="footer_link_div">
        <h6>Catagories</h6>
        <a href="/interface">
          <p>User Interface</p>
        </a>
        <a href="/experience">
          <p>User Experience</p>
        </a>
        <a href="/media">
          <p>Digital Media</p>
        </a>
        <a href="/lifestyle">
          <p>Lifestyle</p>
        </a>

      </div>
      <div className="footer_link_div">
        <h6>Product</h6>
        <a href="/pricing">
          <p>Pricing</p>
        </a>
        <a href="/overview">
          <p>Overview</p>
        </a>
        <a href="/browse">
          <p>Browse</p>
        </a>
        <a href="/accessibility">
          <p>Accessibility</p>
        </a>

      </div>
      <div className="footer_link_div">
        <h6>Solutions</h6>
        <a href="/brainstorming">
          <p>Brainstorming</p>
        </a>
        <a href="/ideation">
          <p>Ideation</p>
        </a>
        <a href="/wireframing">
          <p>Wireframing</p>
        </a>
        <a href="/research">
          <p>Research</p>
        </a>

      </div>
      <div className="footer_link_div">
        <h6>Resources</h6>
        <a href="/help-center">
          <p>Help Center</p>
        </a>
        <a href="/blog">
          <p>Blog</p>
        </a>
        <a href="/tutorials">
          <p>Tutorials</p>
        </a>
        <a href="/faqs">
          <p>FAQs</p>
        </a>

      </div>
      <div className="footer_link_div">
        <h6>Support</h6>
        <a href="/contact">
          <p>Contact Us</p>
        </a>
        <a href="/developers">
          <p>Developers</p>
        </a>
        <a href="/documentation">
          <p>Browse</p>
        </a>
        <a href="/integrations">
          <p>Integrations</p>
        </a>

      </div>
      <div className="footer_link_div">
        <h6>Company</h6>
        <a href="/about">
          <p>About</p>
        </a>
        <a href="/press">
          <p>Press</p>
        </a>
        <a href="/events">
          <p>Events</p>
        </a>
        <a href="/demo">
          <p>Request Demo</p>
        </a>

      </div>

    </div>
    <div className="social">
     <div className="address">
        <p>OHSM @ 2023 </p>
        <a href="/terms">
          <p>Terms of Service</p>
        </a>
        <a href="/policy">
          <p>Privacy Policy</p>
        </a>
        <a href="/cookies">
          <p>Manage Cookies</p>
        </a>
       
      </div>  
    
      <div className="socialmedia">
      

       <div className='imghendal'>
       <a href="/youtub">
          <p><img src={yt} alt=''/></p>
        </a>
        <a href="/facebook">
          <p><img src={fb} alt=''/></p>
        </a>
        <a href="/x">
          <p><img src={x} alt=''/></p>
        </a>
        <a href="/instgram">
          <p><img src={inst} alt=''/></p>
        </a>
        <a href="/linkedin">
          <p><img src={linkedin} alt=''/></p>
        </a>

       </div>
       <div className='store'>
       <p ><img src={appstore} alt=''/></p>
        
        <p><img src={googleplay} alt=''/></p>
       </div>

       
      </div>
      
      
      


      </div>

  </div>
  </div>
  
   
  )
}

export default Footer