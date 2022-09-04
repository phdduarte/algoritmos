fetch('https://jsonmock.hackerrank.com/api/moviesdata?Year=2022')
  .then((resp) => console.log(resp.json()))