import React from 'react'
import styled from 'styled-components'
import Layout from 'layouts/Main'
import { getPost } from 'api/posts'
import Link from 'next/link'


const Wrapper = styled.div`
  padding: 3rem;
  max-width: 750px;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 100%;
    padding: 1rem;
  }

  h1 {
    color: #222;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: "PT Sans", sans-serif;
    text-transform: capitalize;
    margin: 0;
  }

  p {
    line-height: 28px;
    color: #666;
    font-family: "PT Sans", sans-serif;
  }

  @media (min-width: 576px)
.jumbotron {
    padding: 4rem 2rem;
}
.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: .3rem;
}

.btn-group-lg>.btn, .btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
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
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}
*, ::after, ::before {
  box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}

.h3, h3 {
  font-size: 1.75rem;
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
user agent stylesheet
h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.btn-group-lg>.btn, .btn-lg {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
}
.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
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
a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
*, ::after, ::before {
    box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
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

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-group-lg>.btn, .btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

`



const PostPage = ({ post }) =>
  <Layout>
    <Wrapper>
    

      <div  className="cardholder mt-5">
        <div className="jumbotron">
       
        <img className="mb-2 mt-2"  src={post.Poster} alt="my image" />
		
           <h3  className="display-5 ">Title: {post.Title}</h3>
<p  className="display-6 ">Episode : {post.Episode}</p>
<p  className="lead">Plot: {post.Plot}</p>
           <hr/>
<p>Genre : {post.Genre}</p>
<p>Director : {post.Director}</p>
            <p>Actors: {post.Actors}</p>
<p>Writers: {post.Writer}</p>
            <p className="lead">
              <Link href="http://chris-assignment-app.herokuapp.com/">
              <a className="btn btn-primary btn-lg">Go Back </a>
              </Link>
            </p>
        </div>
		  </div>

    </Wrapper>
  </Layout>

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  const json = await res.json()
  return { post: json }
}

export default PostPage
