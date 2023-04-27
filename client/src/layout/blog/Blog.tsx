import React from 'react';
import './blog.css'
import Tags from '../../components/tags/Tags';
function Blog() {
  return (
    <div className='container'>
      <header className='header'>
            <h2 className='section__header'>Projects</h2>
            <div className='blog-tags'>
              <span className='blog-tags-head'>Tags:</span>
              <div className='all-tags'>
                <button className='all-tags-tag'>
                  Chat
                </button>
                <button className='all-tags-tag'>
                    Dashboards
                </button>
                <button className='all-tags-tag'>OOP
                </button>
              </div>
            </div>
      </header>
      <div className='section__container'>
        <div className='blog-items'>
          <div className='blog-item'>
            <div className='blog-item-info'>
              <div className='blog-item__date'>Feb.2023</div>
              <h3 className='blog-item-info__header'>Web3 solutions</h3>
              <div className='blog-item-info__text'>
                <span>I implement user interface design and solve user problems </span> with HTML, CSS AND Javascript. I have 2 years of making products that solve user problems and implementing responsive website. implement.
              </div>
              <button className='blog-item-info__link'>
                www.website.com
              </button>
              <Tags/>
            </div>
            <div className='blog-item-img'>
              <img src={'https://colorlib.com/wp-content/uploads/sites/2/endgam-free-template.jpg'} alt="" />
            </div>
          </div>
          <div className='blog-item'>
            <div className='blog-item-info'>
              <div className='blog-item__date'>Feb.2023</div>
              <h3 className='blog-item-info__header'>Web3 solutions</h3>
              <div className='blog-item-info__text'>
                <span>I implement user interface design and solve user problems </span> with HTML, CSS AND Javascript. I have 2 years of making products that solve user problems and implementing responsive website. implement.
              </div>
              <button className='blog-item-info__link'>
                www.website.com
              </button>
              <Tags/>
            </div>
            <div className='blog-item-img'>
              <img src={'https://colorlib.com/wp/wp-content/uploads/sites/2/techmag-free-template.jpg'} alt="" />
            </div>
          </div>
          <div className='blog-item'>
            <div className='blog-item-info'>
              <div className='blog-item__date'>Feb.2023</div>
              <h3 className='blog-item-info__header'>Web3 solutions</h3>
              <div className='blog-item-info__text'>
                <span>I implement user interface design and solve user problems </span> with HTML, CSS AND Javascript. I have 2 years of making products that solve user problems and implementing responsive website. implement.
              </div>
              <button className='blog-item-info__link'>
                www.website.com
              </button>
              <Tags/>
            </div>
            <div className='blog-item-img'>
              <img src={'https://colorlib.com/wp/wp-content/uploads/sites/2/dorne-directory-listing-free-template.jpg'} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
