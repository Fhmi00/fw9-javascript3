const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => data.map(x => (console.log(x['name']))))



    