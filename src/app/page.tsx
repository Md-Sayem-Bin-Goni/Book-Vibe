import BannerPage from '@/components/homepage/Banner';
import Books from '@/components/homepage/Books';
import React from 'react';

const HomePage = () => {
  return (
    <div>
     
      <BannerPage></BannerPage>
      <Books/>
    </div>
  );
};

export default HomePage;