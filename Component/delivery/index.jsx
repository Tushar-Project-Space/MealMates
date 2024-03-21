import React from 'react'
import Filters from '../Common/filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../Common/exploreSection';
import { restaurants } from '../../data/restaurants';

const deliveryFilters=[
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
    title:"Safe and Hygenic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    title:"Delivery Time",
  },
  {
    id:6,
    title:"Greate Offers",
  },
];

const reastauranList = restaurants;
const Delivery = () => {
  return (
    <div>
    <div className="max-width">
    <Filters filterList={deliveryFilters} />
    </div>
    <DeliveryCollections />
    <TopBrands />
    <ExploreSection list={reastauranList} collectionName='Delivery restaurants in Banglore' />
  </div>
  )
  
    
};

export default Delivery;
