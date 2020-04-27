import React from 'react'
import Link from 'next/link'
import Wrapper from './Wrapper'




const PostItem = ({ post }) => (

  
  <Wrapper>
     <style jsx>{`

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

.mb-2, .my-2 {
  margin-bottom: .5rem!important;
}

  .card-header:first-child {
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
    }
    
    .card-header {
        padding: .75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,.03);
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
    .mt-5, .my-5 {
      margin-top: 3rem!important;
  }
  *, ::after, ::before {
      box-sizing: border-box;
  }
  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
user agent stylesheet
h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
}
h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
}
*, ::after, ::before {
    box-sizing: border-box;
}

.h5, h5 {
    font-size: 1.25rem;
}

.card-title {
    margin-bottom: .75rem;
}


.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

      `}</style>
    
      {post.Episodes.map(p =>
        <div  className="card mb-2">
            <div  className="card-header"> Series Name : {post.Title} </div>
            <div  className="card-body">
                <h5  className="card-title">Episode Title : {p.Title}</h5>
                <p  className="card-text">Episode No: {p.Episode} | IMDB Ratings: {p.imdbRating} 
        | Release Date: {p.Released}</p>
        
       
        <Link href={{ pathname: '/post', query: { slug: p.imdbID } }}>
                <a  className="btn btn-primary">Go to Detail Page</a>
               </Link>
            </div>
        </div>
      )}
    
  </Wrapper>
)

export default PostItem
