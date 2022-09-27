import Navbar from './Components/Navbar'

import React, { Component } from 'react'
import NewsItem from './Components/Newsitem';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {

  pageSize=8;
  render() {
    return (
     <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        {/* To re render the component we will pass a unique key */}
        
        <Route path="/" element={ <News key="home" pageSize={this.pageSize} category= 'general'/>}></Route>
        <Route path="/business" element={ <News key="business"pageSize={this.pageSize} category= 'business'/>}></Route>
        <Route path="/entertainment" element={ <News key="entertainment" pageSize={this.pageSize} category= 'entertainment'/>}></Route>
        <Route path="/general" element={ <News key="general" pageSize={this.pageSize} category= 'general'/>}></Route>
        <Route path="/health" element={ <News key="health" pageSize={this.pageSize} category= 'health'/>}></Route>
        <Route path="/science" element={ <News key="science" pageSize={this.pageSize} category= 'science'/>}></Route>
        <Route path="/sports" element={ <News key="sports" pageSize={this.pageSize} category= 'sports'/>}></Route>
        <Route path="/technology" element={ <News key="technology"pageSize={this.pageSize} category= 'technology'/>}></Route>
      </Routes>

      </BrowserRouter>
     </div> 
    
      
    )
  }
}


// b402b6548f9841ca96d2fe06ec5052d5 - news api key
