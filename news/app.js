
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e4276efcda1449deb0da61fc1e519719')
    .then((res)=> res.json())
    .then((res)=>{
        console.log((res))
        for(var i=0;i<res.articles.length;i++){
            var news = document.getElementById("new")
      
            news.innerHTML+=`
            <p>
  <a class="btn btn-primary btn1" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  ${res.articles[i].title}
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
  ${res.articles[i].description}
  </div>
</div>
            `
        
        }

    }
    )
    .catch((error)=>{
        console.log("error")
    })

