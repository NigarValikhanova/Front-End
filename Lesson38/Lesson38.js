/*fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => console.log(json))
*/

//var btn = document.getElementById("btnData");
//var cards = document.getElementById("cards")
/*
btn.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
            var card = '';
            var card = `
            <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${json[0].url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${json[0].title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
        cards.innerHTML = card;
        //cards.innerText = card// chevire bilmeyecekdi 
        })
})
*/

/*
btn.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
            var card = '';
            json.forEach(element => {
                //console.log(element.title)
                //console.log(element.url)
                card += `
                <div class="col-md-3">
                    <div class="card">
                        <img src="${element.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;
            });
            cards.innerHTML = card
        })
})
*/
//NAMAZ API


var month = document.getElementById("month");
var year = document.getElementById("year");
month.addEventListener("change", function () {
    fetch(`https://api.aladhan.com/v1/calendarByCity/${year.value}/${month.value}?city=Baku&country=Azerbaijan&method=2`)
        .then(response => response.json())
        .then(json => console.log(json))

})