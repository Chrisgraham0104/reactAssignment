import React from 'react'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'

import Post from 'components/Post'
//import searchComp from '../components/Search'
var data;


const IndexPage = ({ posts }) =>

   
  <Layout>
    <style jsx>{`
   .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

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

user agent stylesheet
input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark-color(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: -internal-light-dark-color(white, black);
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
*, ::after, ::before {
    box-sizing: border-box;
}

      `}</style>
   
   
    <div class="form-group mt-5">
        
    <input  className="form-control ng-valid ng-dirty ng-touched" id="exampleInputEmail1" placeholder="Search by Title Name" type="text"
      onKeyDown={async (event) => {
       
       
          console.log(event.currentTarget.value)  
          const data = event.currentTarget.value
          const res = await getPosts()
          const json = await res.json()
          console.log(json.Episodes)
          const ep = json.Episodes
          let new_ep = ep.filter(x=> x.Title.includes(data))
          console.log(new_ep)
          json.Episodes = new_ep
          //return { posts: json }
          IndexPage.bind({ posts: json })
      }}/>    
        
    </div>
    <div className="cardholder mt-5">      
       
          <Post  post={posts} />
    
    </div>
  </Layout>



IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
