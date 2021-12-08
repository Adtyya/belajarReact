import React, { Component } from 'react';

class Product extends Component {
    state ={
        value : 0
    }

    handlerCounterChange = (a)=> {
        // Memanggil function yang ada di market.jsx yg namanya onCounterChange
        this.props.onCounterChange(a)
    }

    tambahData = ()=> {
        this.setState({
            value : this.state.value + 1
        }, ()=> {
            this.handlerCounterChange(this.state.value);
        })
        
    }
    kurangData = ()=> {
        if(this.state.value >0){
            this.setState({
                value : this.state.value - 1
            }, ()=> {
                this.handlerCounterChange(this.state.value)
            })
        }
    }
    render() {
        return (
            <div className="card">
            <img src="https://cdn.idntimes.com/content-images/post/20200214/chickenproducts-lead-ef315ba9984cbbaa5008958366b8072a_600x400.jpg" alt="kosong" height="180"/>
            <div className="card-body">
                <h5 className="card-tittle">Ayam Goreng</h5>
                <p className="card-text">Ayam goreng basi</p>
                <div className="counter">
                    <button className="btn btn-primary" onClick={this.kurangData}>-</button>
                    <input type="text" name="count" id="count" value={this.state.value} className="text-center" disabled/>
                    <button className="btn btn-primary" onClick={this.tambahData}>+</button>
                </div>
            </div>
        </div> 
        );
    }
}

export default Product;
