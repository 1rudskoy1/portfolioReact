import React from 'react';
import './blogImtem.css';
import Tags from '../tags/Tags';
function BlogItem(props:any) {
  return (
    <div className='blog-item' key={props.data.id}>
            <div className='blog-item-info'>
              <div className='blog-item__date'>{props.data.date}</div>
              <h3 className='blog-item-info__header'>{props.data.head}</h3>
              <div className='blog-item-info__text'>
                <span>{props.data.text}</span>
              </div>
              <button className='blog-item-info__link'>
                {props.data.link}
              </button>
              <Tags tags = {props.data.tags}/>
            </div>
            <div className='blog-item-img'>
              <img src={props.data.image} alt="" />
            </div>
          </div>
  );

}

export default BlogItem;