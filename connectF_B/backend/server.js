

import express from 'express';

const app = express();

const port = process.env.PORT || 4000; 

app.get('/', (req,res) => {
    res.send("Server is ready")
})

app.get('/api/data', (req,res) => {
    const data = [
        {
            "id": 1,
            "title": "Lokesh Kumawat",
            "content": "The ghost of the Uchiha"
        },
        {
            "id": 2,
            "title": "Itachi Uchiha",
            "content": "My eyes can see everything beyond all your deceptions"
        },
        {
            "id": 3,
            "title": "Saitama",
            "content": "Who said what your limit is"
        },
        {
            "id": 4,
            "title": "Tanjiro",
            "content": "stucked in Infinity castle "
        },
        {
            "id": 5,
            "title": "Sung Jinwoo",
            "content": "E rank solo leveller"
        },

    ];
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example App is listening on port ${port}`)
})