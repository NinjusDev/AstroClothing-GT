import React from 'react';
import Daytona500 from './prd-img/daytona500.png';
import TravisHoodie from './prd-img/hoodie-travis.png';
import './productcard.css';

function ProductCard() {
  return (
    <>
      <a href='/products/daytona-500'>
        <div class="card">
          <div class="card-img"><img src={Daytona500} alt=''></img></div>
          <div class="card-title">DAYTONA 500</div>
          <div class="card-price">$4.700</div>
          <hr class="card-divider"></hr>
      
          <div class="card-footer">
            <div class="card-subtitle"><span>3</span> cuotas sin interes de <span>$1566,67</span></div>
          </div>
        </div>
      </a>

      <a href='/products/hoodie-travis-oversize'>
        <div class="card">
          <div class="card-img"><img src={TravisHoodie} alt=''></img></div>
          <div class="card-title">HOODIE TRAVIS OVERSIZE</div>
          <div class="card-price">$18.760</div>
          <hr class="card-divider"></hr>
      
          <div class="card-footer">
            <div class="card-subtitle"><span>3</span> cuotas sin interes de <span>$6.253,33</span></div>
          </div>
        </div>
      </a>
    </>
  );
}

export default ProductCard;
