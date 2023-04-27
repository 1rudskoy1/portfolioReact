import React from 'react';
import './about.css'
function About() {
  return (
    <>
    <div className='container'>
      <div className='about'>
        <h2 className='about__header section__header'>About me</h2>
      </div>
      <div className='about-resume'>
        <div className='about-resume__button'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
          <span className='about-resume__head'>Resume</span>
        </div>
      </div>
      <div className='about-me section__container'>
        <div className='about-me__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra, nibh sed sit. Blandit proin eget nulla sit congue nulla. Pellentesque aliquam pretium adipiscing eget semper tincidunt. Tellus pretium sed fermentum, urna. Vitae, cras aliquet tempus viverra neque quis suscipit leo sit. Risus viverra ornare rhoncus pharetra dolor urna magna. Justo natoque eu at nisl ullamcorper. Gravida sit dignissim sollicitudin rhoncus, elit.

Lacus, dignissim nisl proin nulla. Fermentum adipiscing netus sed nunc, odio mauris. Id placerat vitae lectus auctor malesuada elit placerat vestibulum pharetra. Quam euismod diam urna orci et massa, amet convallis. Ut porttitor id turpis lectus libero, netus tortor. Nisi porttitor nisl lorem sit pretium amet, etiam. Nec sed consectetur senectus lorem. Ultrices sed tellus tempus et congue amet nunc.

Massa sed in nullam sit diam aliquam nullam. Turpis pellentesque et, felis viverra interdum. Fringilla suspendisse morbi non augue interdum elit pellentesque quam scelerisque. Iaculis tincidunt in aliquam feugiat semper. Quam sit eu duis magnis pellentesque metus a aliquam odio. Mattis ultrices aliquam ut laoreet faucibus sed bibendum elementum.
        </div>
        <div className='about-me__img'>
          <img src={'https://i.pinimg.com/736x/63/a7/d2/63a7d24514134db28d190d256fcbfbf6.jpg'} alt="" />
        </div>
      </div>
      <div className='works-space'>
          <div className='work-space'>
            <h3 className='work-space__header'>Vk</h3>
            <div className='work-space__skills skills'>
                <div className='skills__skill'>
                  HTML
                </div>
                <div className='skills__skill'>
                  Css
                </div>
                <div className='skills__skill'>
                  Javascript
                </div>
            </div>
            <div className='work-info'>
              <p className='work-info__text'>
                Teslim is a Product design lead, Entrepreneur and Mentor, currently at Netflix who is passionate about creating delightful and intuitive human-centered experiences at scale through innovation and product strategy.
              </p>
              <div className='work-info__date'>
                jan, 2023
              </div>
            </div>
          </div>
          <div className='work-space'>
            <h3 className='work-space__header'>Vk</h3>
            <div className='work-space__skills skills'>
                <div className='skills__skill'>
                  HTML
                </div>
                <div className='skills__skill'>
                  Css
                </div>
                <div className='skills__skill'>
                  Javascript
                </div>
              </div>
            <div className='work-info'>
              <p className='work-info__text'>
                Teslim is a Product design lead, Entrepreneur and Mentor, currently at Netflix who is passionate about creating delightful and intuitive human-centered experiences at scale through innovation and product strategy.
              </p>
              <div className='work-info__date'>
                jan, 2023
              </div>
            </div>
          </div>
          <div className='work-space'>
            <h3 className='work-space__header'>Vk</h3>
            <div className='work-space__skills skills'>
                <div className='skills__skill'>
                  HTML
                </div>
                <div className='skills__skill'>
                  Css
                </div>
                <div className='skills__skill'>
                  Javascript
                </div>
            </div>
            <div className='work-info'>
              <p className='work-info__text'>
                Teslim is a Product design lead, Entrepreneur and Mentor, currently at Netflix who is passionate about creating delightful and intuitive human-centered experiences at scale through innovation and product strategy.
              </p>
              <div className='work-info__date'>
                jan, 2023
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default About;
