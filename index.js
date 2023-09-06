// #JSON

// const student = {
//   name: 'John',
//   age: 27,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null,
//   sayHi: function () {
//     console.log(this.name);
//   },
// };
// console.log(student);
// console.log(typeof student);
// student.sayHi();

// const studentJSON = JSON.stringify(student);
// console.log(studentJSON);
// console.log(typeof studentJSON);
// `{"name": "John", "age", 27, "isAdmin": ["html","css","js"], "wife":null}`

// const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// JSON.stringify(js-obj) : Obj=>JSON(string)
// JSON.parse(json) :  JSON(string) => Obj

// ########## HTTP Request

// built-in : fetch fn
const fetch = require('node-fetch');

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// 1.GET All
// let endpoint = BASE_URL + '/posts';
// let option = {
//   method: 'GET',
// };

// 2.GET ByID
// let endpoint = BASE_URL + '/posts/20';
// let option = {
//   method: 'GET',
// };

// 3.GET Comments
// let endpoint = BASE_URL + '/posts/1/comments';
// let option = {
//   method: 'GET',
// };

// 4.GET Comments by Query
// let endpoint = BASE_URL + '/comments?postId=1';
// let option = {
//   method: 'GET',
// };

// 5. POST : post
// let endpoint = BASE_URL + '/posts';
// const option = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     title: 'Test',
//     body: 'lorem ipsum.....',
//   }),
// };

// 6. PUT
// let endpoint = BASE_URL + '/posts/100';
// const option = {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     phone: '066-666-6666',
//   }),
// };

// 7. PATCH
// let endpoint = BASE_URL + '/posts/16';
// const option = {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     phone: '066-666-6666',
//   }),
// };

// 8. DELETE
// let endpoint = BASE_URL + '/posts/16';
// const option = {
//   method: 'DELETE',
// };

// function sendRequest() {
// fetch(endpoint, option)
//   .then((result) => result.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// }

async function sendRequest() {
  try {
    let result = await fetch(endpoint, option);
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

sendRequest();
