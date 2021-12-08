import React, { Component } from 'react';
import Statelesspost from './StatelessPost';
import axios from 'axios';

class Post extends Component {
    
    getPostApi = ()=> {
        axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
        .then((result)=> {
            this.setState({
                post : result.data
            })
        })
    }

    state = {
        post : [],
        formPost : {
            id: 1,
            userId: 4,
            title: '',
            body: ''
        }, isUpdate : false
    }
    
    postDataToApi = ()=> {
        axios.post('http://localhost:3001/posts', this.state.formPost).then(()=> {
            this.getPostApi()
        }, (err)=> {
            console.log('error : ', err)
        })
        this.setState({
            formPost : {
                id: 1,
                userId: 4,
                title: '',
                body: ''
            }
        })
    }

    handleRemove = (data)=> {
        axios.delete(`http://localhost:3001/posts/${data}`)
        .then(()=> {
            this.getPostApi()
        })
       
    }

    handleUpdate = (e)=> {
        this.setState({
            formPost: e,
            isUpdate: true
        })
    }
    
    handleFormChange = (e)=> {
        const formPostNew = {...this.state.formPost}
        // {...this.state.formPost} mengcopy dari function formPost
        const timeStamp = new Date().getTime()
        if(!this.state.isUpdate){
            formPostNew['id'] = timeStamp
        }
        formPostNew[e.target.name] = e.target.value
        // e.target.name mengambil nama/name inputan dari form misal <input name="title">. Lalu e.target.value mengambil value yang diketikan oleh user 
        this.setState({
            formPost: formPostNew
        })
    }

    putDataToApi = ()=>{
        axios.put(`http://localhost:3001/posts/${this.state.formPost.id}`, this.state.formPost)
        .then(()=>{
            this.getPostApi()
        })
        this.setState({
            isUpdate: false,
            formPost : {
                id: 1,
                userId: 4,
                title: '',
                body: ''
            }
        })
    }

    handleSubmit = ()=>{
        if(this.state.isUpdate){
            this.putDataToApi()
        }else{
            this.postDataToApi()
        }
    }
    
    componentDidMount()
    {
        this.getPostApi()
    }
    render() {
        return (
            <div className="container">
                <h3>Blog Post</h3>
                <div className="row">
                    <div className="col-md">
                        <strong>Tambah Post</strong>
                        <div className="form col-md-6">
                            <label htmlFor="title">Masukan title</label>
                            <input type="text" name="title" id="titsle" className="form-control" placeholder="Masukan judul" value={this.state.formPost.title} onChange={this.handleFormChange}/>
                            <label htmlFor="body" className="mt-3">Masukan Content</label>
                            <textarea name="body" id="body" className="form-control" placeholder="Masukan konten" value={this.state.formPost.body} onChange={this.handleFormChange}></textarea>
                            <button className="btn btn-primary mt-3" type="submit" onClick={this.handleSubmit}>Tambah Post</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                {
                    this.state.post.map( post =>{ return <Statelesspost key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                    } )
                }
                </div>
            </div>
        );
    }
}

export default Post;
/*  <div className="row">
        {
            this.state.post.map( post =>{ return <Statelesspost key={post.id} data={post} remove={this.handleRemove}/>
        } )
            }
    </div>
Looping semua data yang ada di API menggunakan code di atas
*/

