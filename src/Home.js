import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id=""
            title="Samsung Galaxy S10"
            image="https://images.samsung.com/is/image/samsung/uk/galaxy-s10/gallery/uk-galaxy-s10-sm-g973-hybrid-sim-sm-g973fzwdbtu-frontprismwhite-thumb-145527178"
            price={399.99}
            rating={5}
          />
          <Product
            id=""
            title="iPhone 12"
            image="https://shop.ee.co.uk/content/dam/everything-everywhere/images/SHOP/affiliates/apple/iPhone_12_Blue_800x800.png"
            price={999.99}
            rating={4}
          />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
