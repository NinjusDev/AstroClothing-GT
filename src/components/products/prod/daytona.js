import React from "react";
import './daytona.css';
import Daytona500 from './daytona500.png';

function Daytona() {
    return (
        <>
        <div className="general">
            <div className="img">
                <img src={Daytona500} alt=""></img>
            </div>

            <div className="info">
                <h2>DAYTONA 500</h2>
                <h5>$9.400</h5>
                <h1>$4.700 <span className="discount">50% OFF</span></h1>
                <h4>¡LLEVA 3 Y PAGA 2!</h4>
                <p>Válido para este producto y todos los de la categoría: TEES.</p>
                <p>Podés combinar esta promoción con otros productos de la misma categoría.</p>
            </div>

            <div className="anchors">
                <a href="/"><span>3</span> cuotas sin interes de <span> 1566.67</span></a>
                <br></br>
                <a href="/"><span>10% de descuento</span> pagando con Transferencia Bancaria</a>
                <br></br>
                <a href="/">Ver medios de pago</a>
            </div>

            <div className="talle">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
            </div>

            <div className="addtocart">
                <button>
                    ADD TO CART
                </button>
            </div>
        </div>
        </>
    )
}

export default Daytona