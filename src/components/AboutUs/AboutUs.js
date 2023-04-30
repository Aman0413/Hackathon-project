import React from "react";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="AboutUs">
      <div class="company">
        <div class="img">
          <img
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80"
            alt=""
          />
        </div>
        <div class="company-info">
          <span>
            The Mission Behind Our Unique <span class="our">T-Shirt </span>
          </span>
          <p>
            Welcome to our company <b>TeeTrendz </b>, where we're passionate
            about creating unique and stylish t-shirts that inspire our
            customers to express themselves. Our story began with a group of
            friends who shared a love for graphic design and fashion. We
            realized that there was a gap in the market for t-shirts that
            combined both of these interests, and we set out to fill that void.
            After months of research, design, and planning, we launched our
            company with a mission to create t-shirts that were more than just
            clothing - they were works of art. We wanted to provide our
            customers with a way to express their personalities and beliefs
            through what they wear, and we believed that t-shirts were the
            perfect canvas for this. Since our launch, we've been dedicated to
            creating high-quality t-shirts with designs that are both unique and
            meaningful. We use only the best materials and work with talented
            artists to bring our designs to life. Our goal is to create t-shirts
            that make our customers feel confident and empowered, no matter
            their style or background.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
