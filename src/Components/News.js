
import React,{useEffect, useState} from 'react'
import NewsItem from './Newsitem'
import './News.css'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [totalResults, settotalResults] = useState(0);
  const [page, setpage] = useState(1);

    
    const updateNews = async()=>{   //to fetch api
                         
          let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b402b6548f9841ca96d2fe06ec5052d5&page=${page}&pageSize=${props.pageSize}`;
          setloading(true);
          let data = await fetch(url);
          let parsedData= await data.json();
          console.log(parsedData);
          setarticles(parsedData.articles);
          settotalResults=(parsedData.totalResults);
          setloading=(false);
                
          }

          useEffect(()=>{       // which means to run updateNews on []
            updateNews();
          }, []);


        const fetchMoreData = async() => {
          setpage(page + 1);
          let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b402b6548f9841ca96d2fe06ec5052d5&page=${page}&pageSize=${props.pageSize}`;
          
          let data = await fetch(url);
          let parsedData= await data.json();
          console.log(parsedData);
          setarticles(articles.concat(parsedData.articles));
          settotalResults=(parsedData.totalResults);
                     
        };

    return (
      <>
          
        <div className='container my-3'>
          <h1 className='h1'>NewsNest - Top headlines of the day</h1>
          
              <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner/>}
            >
            <div className="row"> 
            {articles.map((element)=>{
                return(
                    <div className="col md-4 my-3">
                    <NewsItem title={element.title?element.title.slice(0,60):""}  key={element.url} description={element.description?element.description.slice(0,80):""} 
                                imageUrl={element.urlToImage?element.urlToImage:"https://picsum.photos/seed/picsum/200/300"} newsUrl={element.url} date={element.publishedAt}/>
                    </div>)
                    
             })}              
            </div>      
            {/* {this.state.loading && <Spinner/>} */}
            </InfiniteScroll>
            </div>
        
      </>
    )
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  catergory: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catergory: PropTypes.string
}

export default News

//