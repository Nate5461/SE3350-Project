import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="section" style={{ overflow: 'hidden' }}>
        <Image
          className="brightness-50"
          src="/OLLI.png"
          fill={true}
          alt='logo'
          objectFit="cover"
        />

        <div className="container">
          <p className="text-wrapper text-zinc-200" >Cheer</p>
          <p className="description text-zinc-200" >Providing comprehensive support for families and individuals with disabilities.</p>
          <button className="button">
            <div className="primary">
              <div className="div text-zinc-200">Learn More</div>
            </div>
          </button>
        </div>
      </div>
      <div className="section-2">
        <div className="container">
          <div className="title-2">Our Services</div>
          <p className="p">We offer a range of services to support individuals with disabilities.</p>
          <div className="list">
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-3">photo-1.jpg</div>
                  <div className="tag">
                    <div className="text">Registration Closed</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-4">Early Intervention</div>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="icon-buttons">
                  <div className="icon">👥</div>
                  <div className="icon">📋</div>
                  <div className="icon">📞</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-3">photo-2.jpg</div>
                  <div className="tag">
                    <div className="text">Registration Open</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-4">Therapy Programs</div>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="icon-buttons">
                  <div className="icon">👥</div>
                  <div className="icon">📋</div>
                  <div className="icon">📞</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-3">photo-3.jpg</div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-4">Assistive Technology</div>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="icon-buttons">
                  <div className="icon">👥</div>
                  <div className="icon">📋</div>
                  <div className="icon">📞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/65baa7f6c4b445bdbec0f000/releases/65baa8124ae9e26d265a295b/img/vector-200.svg"
        />
      </div>
      <div className="section-2">
        <div className="image-wrapper">
          <div className="image-2" />
        </div>
        <div className="container-2">
          <div className="title-5">Why Choose Us</div>
          <p className="text-wrapper-2">
            Here are some reasons why families trust us for their disability support needs.
          </p>
          <div className="list-2">
            <div className="row">
              <div className="article">
                <div className="div-wrapper">
                  <div className="image" />
                </div>
                <div className="frame">
                  <div className="title-6">Experienced Staff</div>
                  <div className="subtitle-2">Qualified professionals</div>
                  <p className="text-wrapper-2">
                    Our team consists of highly trained and experienced professionals dedicated to helping individuals
                    with disabilities.
                  </p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Team</div>
                    </div>
                  </div>
                  <div className="user">
                    <div className="icon-buttons-2">
                      <div className="icon">✍️</div>
                      <div className="icon">🗨️</div>
                      <div className="icon">📚</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="div-wrapper">
                  <div className="image" />
                </div>
                <div className="frame">
                  <div className="title-6">Individualized Approach</div>
                  <p className="text-wrapper-2">
                    We take a personalized approach to ensure that each individual&#39;s unique needs and goals are
                    addressed.
                  </p>
                  <div className="selection">
                    <div className="label-text-wrapper">
                      <div className="label-text">Approach</div>
                    </div>
                  </div>
                  <div className="user">
                    <div className="icon-buttons-2">
                      <div className="icon">✍️</div>
                      <div className="icon">🗨️</div>
                      <div className="icon">📚</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="div-wrapper">
                  <div className="image" />
                </div>
                <div className="frame">
                  <div className="title-6">Community Engagement</div>
                  <p className="text-wrapper-2">
                    We actively involve individuals with disabilities in their communities to promote inclusion and
                    social participation.
                  </p>
                  <div className="selection">
                    <div className="label-text-wrapper">
                      <div className="label-text">Community</div>
                    </div>
                  </div>
                  <div className="user">
                    <div className="icon-buttons-2">
                      <div className="icon">✍️</div>
                      <div className="icon">🗨️</div>
                      <div className="icon">📚</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="vector-2"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/65baa7f6c4b445bdbec0f000/releases/65baa8124ae9e26d265a295b/img/vector-200.svg"
        />
      </div>

      <div className="section-2">
        <div className="container">
          <div className="title-2">Parent Registration</div>
          <div className="input">
            <div className="title-7">Parent Name</div>
            <div className="textfield">
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>
          <div className="input">
            <div className="title-7">Email Address</div>
            <div className="textfield">
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="input">
            <div className="title-7">Child's Name</div>
            <div className="textfield">
              <input type="text" placeholder="Enter your child's name" />
            </div>
          </div>
          <div className="input">
            <div className="title-7">Child's Age</div>
            <div className="textfield">
              <input type="number" placeholder="Enter your child's age" />
            </div>
          </div>
          <div className="div">
            <button className="title-7">Register</button>
          </div>
        </div >

        <img
          className="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/65baa7f6c4b445bdbec0f000/releases/65baa8124ae9e26d265a295b/img/vector-200.svg"
        />
      </div >
      
      <div className="section-2">
        <div className="container-2">
          <div className="title-5">Client Login</div>
          <p className="text-wrapper-2">Already registered? Access your account here.</p>
          <div className="button-2">
            <div className="seconday">
              <div className="title-8">Forgot Password?</div>
            </div>
            <div className="title-wrapper">
              <div className="div">Log In</div>
            </div>
          </div>
        </div>
        <div className="list-3" />
        <img
          className="vector-4"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/65baa7f6c4b445bdbec0f000/releases/65baa8124ae9e26d265a295b/img/vector-200.svg"
        />
      </div>
      <div className="section-2">
        <div className="image-container-2">
          <div className="image-2">
            <p className="title-9">
              Download our informational pamphlet to learn more about our services and how we can support you.
            </p>
            <div className="pagination">
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-3" />
              <div className="rectangle-3" />
            </div>
          </div>
        </div>
        <img
          className="vector-5"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/65baa7f6c4b445bdbec0f000/releases/65baa8124ae9e26d265a295b/img/vector-200.svg"
        />
      </div>
      <div className="container-wrapper">
        <div className="container-3">
          <p className="title-10">© 2023 Cheer. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};
