import React from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import "./footer.css";

function Footer() {
  return (
    <div className='contact'>
        <h4 className='copyright'>&copy; Shaikh Irfan</h4>
        <div className='contact-1'>
        <h5 className='footer-att'>Call<br/><br/><span>7021797398</span></h5>
        <h5 className='footer-att'>Write<br/><br/><span>irfanshaik1997@gmail.com</span></h5>
        {/* <h5 className='footer-att'>Follow<br/><br/>
            <span><SocialMediaIconsReact borderColor="rgba(13,12,12,0.25)" borderWidth="1" borderStyle="" icon="twitter" iconColor="rgba(22,20,20,1)" backgroundColor="#FFFFFF" iconSize="4" roundness="29%" url="https://some-website.com/my-social-media-url" size="22" /></span>
            <span><SocialMediaIconsReact borderColor="rgba(13,12,12,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(22,20,20,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="29%" url="https://some-website.com/my-social-media-url" size="22" /></span>
            <span><SocialMediaIconsReact borderColor="rgba(13,12,12,0.25)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(22,20,20,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="29%" url="https://some-website.com/my-social-media-url" size="22" /></span>
            <span><SocialMediaIconsReact borderColor="rgba(13,12,12,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(22,20,20,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="29%" url="https://some-website.com/my-social-media-url" size="22" /></span>
        </h5> */}
        </div>
    </div>
  )
}

export default Footer