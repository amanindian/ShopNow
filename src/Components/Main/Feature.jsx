import React from 'react'
import f1 from '../../Image/features/f1.png'
import f2 from '../../Image/features/f2.png'
import f3 from '../../Image/features/f3.png'
import f4 from '../../Image/features/f4.png'
import f5 from '../../Image/features/f5.png'
import f6 from '../../Image/features/f6.png'
import './Feature.css'

export default function Feature() {
    return (
        <section id="features">
            <div className="fe-card">
                <img src={f1} alt="feture_card_img" />
                <h6>Free Shipping</h6>
            </div>
            <div className="fe-card">
                <img src={f2} alt="feture_card_img" />
                <h6>Online Order</h6>
            </div>
            <div className="fe-card">
                <img src={f3} alt="feture_card_img" />
                <h6>Save Money</h6>
            </div>
            <div className="fe-card">
                <img src={f4} alt="feture_card_img" />
                <h6>Promotions</h6>
            </div>
            <div className="fe-card">
                <img src={f5} alt="feture_card_img" />
                <h6>Happy Sell</h6>
            </div>
            <div className="fe-card">
                <img src={f6} alt="feture_card_img" />
                <h6>24/7 Support</h6>
            </div>
        </section>

    )
}
