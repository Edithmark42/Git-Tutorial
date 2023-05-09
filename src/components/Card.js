import React, { useState } from 'react'
import char_ico from './chat_ico.jpg'
import call_ico from './call_ico.jpg'

export default function Card() {
    const [Img, seTImg] = useState(char_ico);

    const changeImg = () => {
        console.log("changeImg clicked");
        if (Img === char_ico) {
            seTImg(call_ico);
        } else {
            seTImg(char_ico);
        }
    }
    return (
        <div className="container width-40px">

            <div className="card">
                <img src={Img} className="card-img-top" alt="messsage icon" onClick={changeImg} />
            </div>
        </div>
    )
}
