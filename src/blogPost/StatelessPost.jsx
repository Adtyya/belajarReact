import React from 'react';

const Statelesspost = (props) => {
    return (
            <div className="col-md-6 mb-3 mt-3">
                <div className="card" style={{width : '80%'}}>
                    <img src="https://placeimg.com/200/150/tech" alt="dummy" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <p className="card-text">{props.data.body}</p>
                        <button className="btn btn-danger me-2" onClick={()=>props.remove(props.data.id)}>Remove</button>
                        <button className="btn btn-primary" onClick={()=>props.update(props.data)}>Edit</button>
                    </div>    
                </div>
            </div>
    );
}

export default Statelesspost;
