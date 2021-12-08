import React from "react";
import './HelloComp.css';
const HelloComp = (props)=>{
    return (
            <div className="col-md-4 mt-3">
                <div className="card">
                    <img src="https://trikinet.com/wp-content/uploads/2019/07/cc2b7d627bbabd4385f0fe251f577770_Membuat-thumbnail-Youtube-yang-Keren.png" alt="kosong" height="180"/>
                    <div className="card-body">
                        <h5 className="card-tittle">{props.judul}</h5>
                        <p className="card-text">{props.deskripsi}</p>
                        <a href="https://www.youtube.com">Tombol</a>
                    </div>
                </div>          
            </div>
    )
}
HelloComp.defaultProps = {
    judul : 'null',
    deskripsi : 'oraoraoraora'
}
export default HelloComp;