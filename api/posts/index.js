import fetch from 'isomorphic-fetch'

export function getPosts () {
  return fetch ('http://www.omdbapi.com/?apikey=81283aa7&i=tt0944947&Season=1')
}

export function getPost (slug) {
  return fetch(`http://www.omdbapi.com/?apikey=81283aa7&i=${slug}`)
}
