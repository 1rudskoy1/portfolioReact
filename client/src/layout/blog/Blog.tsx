import React from 'react';
import './blog.css'
import Tags from '../../components/tags/Tags';
import BlogItem from '../../components/blogItem/BlogItem';
import data from '../../data';

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
          {data.map((item) => {
            return (<BlogItem data ={item}/>)
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
