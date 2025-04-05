const url = "https://documenter.getpostman.com/view/11861104/2sA35G42ve";

fetch(url)
.then (resposne => resposne.json())
.then(data => console.log(data))