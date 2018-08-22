const app = "I don't do much.";
const token = '6eeff8b6b8600085d43a76a74782b2825edb9621'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
