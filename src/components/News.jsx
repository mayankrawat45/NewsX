import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Screenload from './Screenload'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const  News =(props)=> {
  const [articles,setArticles]=useState( [

    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Lena H. Sun",
      "title": "U.S. measles cases reach 33-year record high as outbreaks spread",
      "description": "Johns Hopkins University data reflects the public health reversal in defeating the vaccine-preventable disease since measles was officially eliminated from the U.S. in 2000.",
      "url": "https://www.washingtonpost.com/health/2025/07/07/measles-cases-hit-record/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TOX2HJGMSOUFT77TNID5MEFXZU.JPG&w=1440",
      "publishedAt": "2025-07-07T10:00:00Z",
      "content": "The United States has reached its highest annual measles case tally in 33 years, hitting at least 1,277 confirmed cases across 38 states and the District of Columbia.\r\nThe milestone marks a public he… [+8367 chars]"
    },
    {
      "source": { "id": "wired", "name": "Wired" },
      "author": "Wired",
      "title": "The Future of Trans Health Care",
      "description": "",
      "url": "https://www.wired.com/visual-story/historian-future-trans-health-care/",
      "urlToImage": "https://media.wired.com/photos/6850abcf50868307ecf24ca7/191:100/w_1280,c_limit/2.png",
      "publishedAt": "2025-06-28T14:07:37.4910458Z",
      "content": null
    },
    {
      "source": { "id": "time", "name": "Time" },
      "author": null,
      "title": "TIME100 Health 2025",
      "description": "In today's changing health landscape, these leaders are advancing care, shaping policy, and driving innovations that transform lives.",
      "url": "http://time.com/collections/time100-health-2025/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2025/05/T100Health-Header2.jpg?quality=85&w=1200&h=628&crop=1",
      "publishedAt": "2025-05-14T17:37:33.2697375Z",
      "content": "In a rapidly evolving global health landscape, these are the most influential voices leading the wayadvancing care, shaping policy, driving innovation, and transforming lives.\r\nHow We Chose the List"
    },
    {
      "source": { "id": "recode", "name": "Recode" },
      "author": "Celia Ford",
      "title": "Phones and mental health: What if an app can tell you if you’re depressed?",
      "description": "Emerging apps like MoodCapture use AI to guess when you’ll be sad. Can they also help you feel better?",
      "url": "https://www.vox.com/future-perfect/24150430/depression-detection-technology-ai-tests-apps-mental-health",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/sKqyLa2kPkjuiUjAhCZcLqm3CvQ=/0x0:4590x2403/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25435888/681977094.jpg",
      "publishedAt": "2024-05-07T11:30:00Z",
      "content": "If you have a sore throat, you can get tested for a host of things Covid, RSV, strep, the flu and receive a pretty accurate diagnosis (and maybe even treatment). Even when youre not sick, vital signs… [+15415 chars]"
    },
    {
      "source": { "id": "the-irish-times", "name": "The Irish Times" },
      "author": "Jennifer Bray",
      "title": "Abortion rules should be relaxed, review to recommend",
      "description": "Minister for Health Stephen Donnelly considering report by barrister Marie O’Shea which examined operation of the existing law",
      "url": "https://www.irishtimes.com/ireland/social-affairs/2023/03/29/review-calls-for-abortion-law-to-be-relaxed/",
      "urlToImage": "https://www.irishtimes.com/resizer/DycgF-s39PfaIVo4cOhhhNhDjqM=/1200x630/filters:format(jpg):quality(70):focal(1109x649:1119x659)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/YVVSZCLNN6CW4NWJKGEPUSEAPE.jpg",
      "publishedAt": "2023-03-29T04:15:00Z",
      "content": "A new review of the States abortion law is set to recommend a loosening of existing rules which could involve the removal of the three-day wait to access medication.\r\nMinister for Health Stephen Donn… [+2934 chars]"
    },
    {
      "source": { "id": "the-globe-and-mail", "name": "The Globe And Mail" },
      "author": "Wency Leung",
      "title": "‘COVID hasn’t gone away’: Five things health experts say we must do to end the pandemic",
      "description": "Boosting health care capacity, encouraging third doses and better understanding long COVID are among the issues health experts say need to be addressed",
      "url": "https://www.theglobeandmail.com/canada/article-covid-19-pandemic-not-over/",
      "urlToImage": "https://www.theglobeandmail.com/resizer/nYUYq7AN4xv1_6tgavE1CKi6OvQ=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/OSOQKLUMCZEDDPFOKUWLUFOLFY.png",
      "publishedAt": "2022-06-15T17:00:00Z",
      "content": "Restaurants are open. Festivals are back. Masks, for the most part, are optional. And starting Monday, June 20, proof of vaccination will no longer be required of Canadian air and train passengers.\r\n… [+7848 chars]"
    }

  ])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  
  //  document.title = `NewsX-${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`

  
  
  const updatenews = async () => {
    props.setProgress(30)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
        props.setProgress(50)

    let parsedData = await data.json()
    console.log(data)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
        props.setProgress(100)

  }

  useEffect(() => {
  
    document.title = `NewsX-${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`
    updatenews()

   
  }, [])
  
  

  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1 )
    
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(data)
    setArticles(articles.concat( parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };
  // handleprevclick=async()=>{
  //     console.log("previous")
  //     setState({page:page-1},updatenews)



  // }
  // handlenextclick=async()=>{
  //   console.log("next")
  //   setState({page:page+1},updatenews)

  // }

  
    console.log("render")

    return (
      <>
        <h1 className='text-center '>NewsX-Top Headlines in {(props.category).charAt(0).toUpperCase() + (props.category).slice(1)} </h1>
        {loading && <Screenload/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={loading && <Screenload />}
        >
          <div className='container'>
          <div className='row'>
            { /* !loading &&*/articles.map((element) => {
              return <div className='col-md-4' key={element.url?Math.random():element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 78) : ""} imageUrl={element.urlToImage || `https://cdn.arstechnica.net/wp-content/uploads/2025/07/wi-fi-data-1152x648-1751912403.jpg`} newsUrl={element.url}
                  author={element.author} date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>

        {/* <div className='container d-flex justify-content-between'>
          <button type="button" className="btn btn-primary" onClick={handleprevclick}disabled={page<=1} >&larr;Previous</button>
          <button type="button" className="btn btn-primary"onClick={handlenextclick} disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} >Next &rarr;</button>
        </div> */}
        </>
      
    )
  
}

  // News.defaultProps = {
  //   country: "us",
  //   pageSize: 9,
  //   category: "general"
  // }
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

export default News
