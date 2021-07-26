const app = require('./server')
const port = 8080 || process.env.PORT;

app.listen(port, ()=> console.log(`Server is running at ${port}`));