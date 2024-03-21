import React from 'react'
import './topBrands.css';
import NextArrow from '../../Common/caraousel/nextArrow';
import PrevArrow from '../../Common/caraousel/prevArrow';
import Slider from "react-slick";

const topBrandList=[
    {
        id:1,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png",
    },
    {
        id:2,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7e4c022edf3d02b992442f3e94e9dbb6_1605071544.png",
    },
    {
        id:3,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png",
    },
    {
        id:4,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png",
    },
    {
        id:5,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png",
    },
    {
        id:6,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7c26cec5328c49e583876f3d0a747623_1707127530.png",
    },
    {
        id:7,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png",
    },
    {
        id:8,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179319.png",
    },
    {
        id:9,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png",
    },
    {
        id:10,
        time:"35min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png",
    },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow />,
  };


const TopBrands = () => {
  return <div className='top-brands max-width'>
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
            {topBrandList.map((brand)=>{
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} className='top-brands-image' alt={TopBrands.time} />
                    </div>
                </div>
            })}
        </Slider>
    </div>
  
}

export default TopBrands