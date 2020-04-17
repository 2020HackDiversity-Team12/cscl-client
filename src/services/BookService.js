import axios from "axios";

export default {
  browse,
  remove,
  search,
  add,
  borrow,
  handback,
  get
};

const host = 'https://api-cscl.herokuapp.com'
const base_url = `${host}/api/`

function browse(nextUrl) {
  const url = (nextUrl) ? nextUrl : base_url + `books`
  return axios.get(url)
}

function get(isbn) {
  const url = base_url + `books/${isbn}`
  return axios.get(url)
}

function search(q) {
  const url = base_url + `search?q=${q}`
  return axios.get(url)
}

function add(book) {
  const url = base_url + `books`
  return axios.post(url, book)
}

function borrow(book) {
  const url = base_url + `books/${book.isbn}?act=borrow`
  return axios.get(url)
}

function handback(book) {
  const url = base_url + `books/${book.isbn}?act=handback`
  return axios.get(url)
}

function remove(isbn) {
  const url = base_url + `books/${isbn}`
  return axios.delete(url)
}
