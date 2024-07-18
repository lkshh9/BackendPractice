require('dotenv').config()


const express = require('express')
const app = express()

const port = process.env.PORT

const githubData = {
    "login": "lkshh9",
    "id": 93564639,
    "node_id": "U_kgDOBZOu3w",
    "avatar_url": "https://avatars.githubusercontent.com/u/93564639?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lkshh9",
    "html_url": "https://github.com/lkshh9",
    "followers_url": "https://api.github.com/users/lkshh9/followers",
    "following_url": "https://api.github.com/users/lkshh9/following{/other_user}",
    "gists_url": "https://api.github.com/users/lkshh9/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lkshh9/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lkshh9/subscriptions",
    "organizations_url": "https://api.github.com/users/lkshh9/orgs",
    "repos_url": "https://api.github.com/users/lkshh9/repos",
    "events_url": "https://api.github.com/users/lkshh9/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lkshh9/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Lokesh Kumawat",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 73,
    "public_gists": 0,
    "followers": 15,
    "following": 136,
    "created_at": "2021-11-02T02:57:02Z",
    "updated_at": "2024-07-16T12:04:07Z"
  }

app.get('/', (req,res) => {
    res.send("hello lokesh")
})

app.get('/login', (req,res) => {
    res.send("please login")
})

app.get('/signup', (req,res) => {
    res.send("signup here")
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

console.log("crack backend interview")

app.listen(port, () => {
    console.log(`Example app listening on port  ${port}`)
})