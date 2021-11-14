import React from "react";
import "./typewriter.css";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <React.Fragment>
      <div className="carousel-overlay-text">
        <div className="bg-transparent container">
          <h1 className="display-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front-End Developer")
                  .callFunction(() => {
                    //  console.log('String typed out!');
                  })
                  .pauseFor(600)
                  .callFunction(() => {
                    //     console.log('All strings were deleted');
                  })
                  .start();
              }}
            />
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TypeWriter;
