
import React, {useEffect, useState} from 'react';
import data from './data'
import './slider.css'
function Slider () {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);
   useEffect(() => {
    const lastIndex = people.length -1;
    if(index < 0) {
        setIndex(lastIndex);
    }
    if(index > lastIndex) {
        setIndex(0);
    }
   }, [index, people]);
    return (
    <div className='slider-wrap'>
        <div className='slider-up'>
            {people.map((person) => {
                const {id, image, text} = person;
                return (
                        <div className={"slider-up-container"} key={id} style={{left: (((id-1) + -index) * 100) + "%"}}>
                            <img src={image} alt="" />
                            <div className='slider-up-container__text'>
                                {text}
                            </div>
                        </div>
                )
            })
            }
        </div>
        <div className='slider-down' style={{left: -(index * 9) + "%"}}>
            {people.map((person) => {
                const {id, image} = person;
                return (
                        <div className={"slider-down-container "} key={id} style={{opacity: id -1 === index ? .4 : 1}} onClick={() => setIndex(id-1)}>
                            <img src={image} alt="" />
                        </div>
                )
            })
            }
        </div>
        <div className='slider-down-arrays'>
                <div className='slider-down-arrays__array array-left' onClick={() => setIndex(index -1)}><svg xmlns="http://www.w3.org/2000/svg" width="34" height="55" viewBox="0 0 34 55" fill="none">
                    <g filter="url(#filter0_d_206_28510)">
                    <path d="M28.7555 22.3947L7.55654 1.25438C6.86198 0.562143 5.73748 0.563307 5.04408 1.25796C4.35122 1.95252 4.35301 3.07765 5.04766 3.77042L24.9848 23.6525L5.04694 43.5346C4.35238 44.2274 4.35059 45.3518 5.04336 46.0465C5.39096 46.3947 5.84633 46.5688 6.3017 46.5688C6.75591 46.5688 7.20949 46.3959 7.55646 46.0501L28.7555 24.9102C29.0901 24.5774 29.2778 24.1245 29.2778 23.6525C29.2778 23.1806 29.0895 22.7282 28.7555 22.3947Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_206_28510" x="0.524902" y="0.736084" width="32.7529" height="53.8328" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_206_28510"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_28510" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                </div>
                <div className='slider-down-arrays__array array-right' onClick={() =>  setIndex(index +1)}><svg xmlns="http://www.w3.org/2000/svg" width="34" height="55" viewBox="0 0 34 55" fill="none">
                    <g filter="url(#filter0_d_206_28510)">
                    <path d="M28.7555 22.3947L7.55654 1.25438C6.86198 0.562143 5.73748 0.563307 5.04408 1.25796C4.35122 1.95252 4.35301 3.07765 5.04766 3.77042L24.9848 23.6525L5.04694 43.5346C4.35238 44.2274 4.35059 45.3518 5.04336 46.0465C5.39096 46.3947 5.84633 46.5688 6.3017 46.5688C6.75591 46.5688 7.20949 46.3959 7.55646 46.0501L28.7555 24.9102C29.0901 24.5774 29.2778 24.1245 29.2778 23.6525C29.2778 23.1806 29.0895 22.7282 28.7555 22.3947Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_206_28510" x="0.524902" y="0.736084" width="32.7529" height="53.8328" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_206_28510"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_206_28510" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                </div>
            </div>
    </div>
   )
}

export default Slider;