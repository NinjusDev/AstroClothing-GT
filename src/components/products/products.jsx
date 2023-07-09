import React from 'react';
import Daytona500 from './prd-img/daytona500.png';
import TravisHoodie from './prd-img/hoodie-travis.png';
import Moon from './prd-img/moon.png';
import Pegaso from './prd-img/pegaso.png';
import PoseidonGrey from './prd-img/poseidon.png';
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

      <a href='/products/poseidon-grey'>
        <div class="card">
          <div class="card-img"><img src={PoseidonGrey} alt=''></img></div>
          <div class="card-title">POSEIDON GREY</div>
          <div class="card-price">$11.050</div>
          <hr class="card-divider"></hr>
          <div class="card-footer">
            <div class="card-subtitle"><span>3</span> cuotas sin interes de <span>$3.683,33</span></div>
          </div>
        </div>
      </a>

      <a href='/products/moon'>
        <div class="card">
          <div class="card-img"><img src={Moon} alt=''></img></div>
          <div class="card-title">MOON</div>
          <div class="card-price">$11.200</div>
          <hr class="card-divider"></hr>
          <div class="card-footer">
            <div class="card-subtitle"><span>3</span> cuotas sin interes de <span>$3.733,33</span></div>
          </div>
        </div>
      </a>

      <a href='/products/pegaso'>
        <div class="card">
          <div class="card-img"><img src={Pegaso} alt=''></img></div>
          <div class="card-title">PÈGASO</div>
          <div class="card-price">$12.700</div>
          <hr class="card-divider"></hr>
          <div class="card-footer">
            <div class="card-subtitle"><span>3</span> cuotas sin interes de <span>$4.233,33</span></div>
          </div>
        </div>
      </a>
    </>
  );
}

export default ProductCard;
