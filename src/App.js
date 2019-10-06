import React from 'react';
import axios from 'axios';
import reddit from './reddittab.png'
const Navbar =()=>{
  return (
    <nav className="navbar navbar-white bg-dark">
              <a className="navbar-brand" href="#">
                <img src={reddit}  alt=""/>
                Reddit
              </a>
      </nav>
  )
}

class App extends React.Component {
      state = {
        posts : []
      };

      componentDidMount(){
        axios.get(`https://www.reddit.com/r/movies.json`).then(res=>{
          //console.log(res);
          const posts = res.data.data.children.map(object=> object.data);
          this.setState({
            posts: posts 
          });
          
        })
      }
      render() { 
        let { posts } = this.state ;
        let postList = posts.map((post ,i)=>{
          return(
                  <div className="shadow p-3 mb-5 bg-white rounded"  key={i}>
                  <div className="card-body">
                    <h5 className="card-title">Post No {i+1}</h5>
                    <img src={post.thumbnail} className="card-img-top" alt ="No item"/>
                    <div className="alert alert-secondary" role="alert">
                    {post.title}
                    </div>
                    <a href={post.url} className="btn btn-primary">Read More ...</a>
                  </div>
                </div>
           )
        })
        return (
           <div className = "container">
             <Navbar />
              {postList}
           </div>
            )
          }
    }

export default App;

