
let gamesPurchase = [
    {
        "name": "friday the 13th",
        "genre": "horror/action",
        "img": "images/friday.png"
    },

    {
        "name": "Call of duty",
        "genre": "Action/war",
        "img": "images/callofduty.jpg"
    },

    {
        "name": "Forza Horizon 4",
        "genre": "racing/mutliplayer",
        "img": "images/forza.jpg"
    },

    {
        "name": "monster hunter",
        "genre": "horror/action",
        "img": "images/monster.jpeg"
    },

    {
        "name": "Jumanji",
        "genre": "adventure/action",
        "img": "images/jumanji.jpg"
    },

    {
        "name": "Sniper contracts",
        "genre": "Action",
        "img": "images/sniper.jpg"
    }
]

let gamesPlay = [
    { "name": "Hitman Absolution", "genre": "action/crime", "img": "images/hitman.jpg" },
    { "name": "Witcher 3 : the wild hunt", "genre": "open world", "img": "images/witcher.jpg" },
    { "name": "Call of Duty : Black Ops 3", "genre": "action/war", "img": "images/callofduty2.jpg" }
]

let display = document.getElementById("display")
let purchaseDisp = document.getElementById("purchaseDisp")

if (purchaseDisp != null) {
    gamesPurchase.forEach(game => {
        purchaseDisp.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-9 col-xs-10">
    <div class="card">
        <img src=${game.img} height=400 class="card-img-top" alt=${game.name}>
        <div class="card-body">
          <h5 class="card-title">${game.name}</h5>
          <p class="card-text"><b>Genre</b>: ${game.genre}</p>
          <a href="#" class="btn btn-primary" style="width:100px">Purchase</a>
        </div>
      </div>
</div>`
    })
}

if (display != null) {
    gamesPlay.forEach(game => {
        display.innerHTML += `<div class="jumbotron item" style="height:500px;background:url(${game.img});background-size:cover;background-repeat: no-repeat;">
    <div class="details">
        <h1><b>${game.name}</b></h1>
        <span>Genre: ${game.genre}</span><br><br>
        <button class="btn btn-light" style="width:100px;">Play</button>
    </div>
</div>`

    })
}