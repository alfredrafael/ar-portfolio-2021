import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import "./CssHeroSlider.css";
import IntroText from "../IntroText";

const HeroSlider = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 6000);
  // }, []);

  return (
    <React.Fragment>
      <span className="dynamicIntro">
        <IntroText />
      </span>

      <div
        style={{ background: "black" }}
        className="fullscreen-video-wrap"
        dangerouslySetInnerHTML={{
          __html: `

        <video
          style="opacity: .7; width: 100%; margin-bottom: -.5%"
          playsinline 
          loop 
          autoPlay 
          muted 
          autobuffer 
          poster="https://rmrdetailing.com/wp-content/uploads/2021/10/working-and-studying-e1633667573642.jpg"
        >

        <source 
          src="https://rmrdetailing.com/wp-content/uploads/2021/10/hero-clip.mp4" type="video/mp4" />
        
        <source 
          src="https://rmrdetailing.com/wp-content/uploads/2021/10/hero-clip.mp4" type="video/ogg" />
        Your browser does not support the video tag. I suggest you upgrade your browser.

        </video>     
`,
        }}
      ></div>
      {/* 
      <div className="mobile-hero-picture" style={{ height: '100%' }}>
        <img src="https://alfredorafael.com/wp-content/uploads/2020/05/background.png" style={{ background: 'cover', maxWidth: '100%' }} alt="React.js logo" />
        <IntroText />
      </div>
      {

        isLoaded ?

          <div className='desktop-hero-video fade-effect' style={{ transition: '1s' }}>
            <div style={{ background: 'linear-gradient(black, #3d3d3d, black)' }}>
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  left: 0,
                  top: 0,
                  opacity: '.7',
                }}
              >
                <source src="https://alfredorafael.com/wp-content/uploads/2020/05/personal-website-clip.mp4" type="video/mp4" />
              </video>
              <IntroText />
            </div>
          </div>

          : <div>

            <div className='loading-picture fade-effect' style={{}}>
              <img src="https://alfredorafael.com/wp-content/uploads/2020/05/preload_pic_video_dimensions.png" style={{ background: 'cover', maxWidth: '100%' }} alt="React.js logo" />
              <IntroText />
            </div>
          </div>
      }
    */}
    </React.Fragment>
  );
};

export default HeroSlider;
