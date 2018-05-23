import React, { Component } from 'react';
import '../other/rem.js';
import '../styles/App.css';



import {
	 BrowserRouter as Router,
	 Link,
	 Route
}from 'react-router-dom'

//主要模块组件
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div className="box">
                   <section>
                         <Route path="/foot1" component={Foot1}/>
				                 <Route path="/foot2" component={Foot2}/>
				                 <Route path="/foot3" component={Foot3}/>
				                 <Route path="/foot4" component={Foot4}/>
                   </section>
                   <footer>
                      <Foot></Foot>
                   </footer>
              </div>     
          </Router>
      </div>
    );
  }
}
//底部组件
class Foot extends Component {
    render(){
    	return(
    		  <ul>
    		      <li><Link to="foot1"><img src="foot1.png" alt=""/></Link></li>
    		      <li><Link to="foot2"><img src="foot2.png" alt=""/></Link></li>
    		      <li><Link to="foot3"><img src="foot3.png" alt=""/></Link></li>
    		      <li><Link to="foot4"><img src="foot4.png" alt=""/></Link></li>
    		  </ul>
    	)
    }
}


class Foot1 extends Component {
	  constructor(props){
	  	super(props)
	  	this.state={
	  		arr:[]
	  	}
	  }
	
    render(){
    	return(
    		  <div>
    		     <img src="logo.png" alt="" className="logo1"/>
    		     <div className="xuanran">
    		         <ul>
    		            {
    		            	this.state.arr.map((ele,index)=>{
    		            		   return <li key={index}>
    		            		      <img src={ele.pic} alt=""/>
    		            		      <p>{ele.desc}</p>
    		            		      </li>
    		            	})
    		            }
    		         </ul>
    		     </div>
    		     <img src="logo2.png" alt="" className="logo2"/>
    		  </div>
      )
    }
    
    componentDidMount(){
    	   fetch('content.json').then((res)=>{
						return res.json()
					})
					.then((res)=>{
						console.log(res)
						this.setState({
							arr:res
							
						})
					})
    }
}
class Foot2 extends Component {
    render(){
    	return(
    		  <div>
    		     <h2>第二</h2>
    		  </div>
      )
    }
}
class Foot3 extends Component {
    render(){
    	return(
    		  <div>
    		     <h2>第三</h2>
    		  </div>
      )
    }
}
class Foot4 extends Component {
    render(){
    	return(
    		  <div>
    		     <h2>第四</h2>
    		  </div>
      )
    }
}

export default App;
