const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require("./schema.js");

const cors = require('cors');

// Allow cross-origin

const app = express();
app.use(cors())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));