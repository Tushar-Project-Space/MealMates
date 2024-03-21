import React from 'react'
import './nightLife.css'
import Collection from '../Common/collection';  
import Filters from '../Common/filters';
import { nightLife } from '../../data/nightLife';
import ExploreSection from '../Common/exploreSection';

  const nightFilters=[
    {
      id:1,
      icon:<i class="fa fa-filter absolute-center"></i>,
      title:"filters",
    },
    {
      id:2,
      title:"Rating: 4.0+",
    },
    {
      id:3,
      title:"Pro Offers",
    },
    {
      id:4,
      title:"Distance",
    },
    {
      id:5,
      title:"Pubs & Bars",
    },
  ];

  const collectionList=[
    {
      id:1,
      title:"The Legend of Banglore",
      cover:"https://b.zmtcdn.com/data/collections/ce8f94a179d859d01f94c441d67ef5ad_1706256879.png",
      places:"29 Places",
    },
    {
      id:2,
      title:"Best bars & Pubs",
      cover:"https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
      places:"22 Places",
    },
    {
      id:3,
      title:"Artisan cocktails",
      cover:"https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
      places:"20 Places",
    },
    {
      id:4,
      title:"Happy Hours",
      cover:"https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg",
      places:"12 Places",
    },
    {
      id:5,
      title:"Dine for the Gram",
      cover:"https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1709815433.png",
      places:"9 Places",
    },
    {
      id:6,
      title:"Lets Brunch",
      cover:"https://b.zmtcdn.com/data/collections/fdcf90c9aadc2e4eed25bc5486653989_1709187376.png",
      places:"13 Places",
    },
    {
      id:7,
      title:"Best in Banglore",
      cover:"https://b.zmtcdn.com/data/collections/1322e8a1ff6ae914cd70bc8ec849d20d_1709811421.png",
      places:"21 Places",
    },
    {
      id:8,
      title:"What a view",
      cover:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810493.png",
      places:"30 Places",
    },
  ]
const nightList=nightLife;

const NightLife = () => {
  return (
    <div>
    <Collection list={collectionList}/>
    <div className="max-width">
      <Filters filterList={nightFilters}/>
    </div>
    <ExploreSection list={nightList} collectionName="NightLife Restaurants in Lucknow"/>
  </div>
  )
    
};

export default NightLife
