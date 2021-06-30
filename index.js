const fetch = require("node-fetch")
const repo = process.argv[2]

console.log(repo);

async function getRepo(){
  const resp = await fetch("https://api.github.com/repos/octocat/hello-world")
  const result = await resp.json();
  console.log(result);
}


getRepo()