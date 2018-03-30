fetch('http://localhost:3000/api/comments')
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    console.log('parsed json: ', json)
  })
  .catch(function (ex) {
    console.log('parsing failed: ', ex)
  });
console.log('dddd')
