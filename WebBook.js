var inputText = document.querySelector("#inputText");
var button = document.querySelector(".btn");
var title, author, publisher, bookImg, bookLink, price;
var result = document.querySelector(".list-output");
var partial = document.querySelector(".partial");
var full = document.querySelector(".full");
var free_ebooks = document.querySelector(".free-ebooks");
var paid_ebooks = document.querySelector(".paid-ebooks");
var ebooks = document.querySelector(".ebooks");
var all = document.querySelector(".all");
var books = document.querySelector(".books");
var magazines = document.querySelector(".magazines");

button.addEventListener('click', () => {
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}`).
    then(response => response.json()).then(data => {
        console.log(data);
        console.log(data.items[0].volumeInfo.title)
        console.log(data.items[0].volumeInfo.previewLink)
        if(inputValue == undefined || inputValue == null){
            alert("No result!.... try again")
        } else{
            // document.querySelector("#title").animate({'margin-top': '5px'}, 1000);
            forVisible();
            result.innerHTML = "";
            
            displayresult(data);
        }
        
    }).catch(err => console.log(err));
})
// button.addEventListener('click', myfun);

/*-------- Filter --------*/
// full
/*full.addEventListener('click',()=>{
    result.innerHTML = "";
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&filter=full`).
    then(response => response.json()).then(data =>{
        console.log(data);
        if(inputValue == undefined || inputValue == null){
            alert("No result!... try again");
        }else{
            displayresult(data);
        }
    }).catch(err => console.log(err));
    
})*/
//partial
partial.addEventListener('click',() => {
    result.innerHTML = "";
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&filter=partial`).
    then(response => response.json()).then(data =>{
        console.log(data);
        if(inputValue == undefined || inputValue == null){
            alert("No result!... try again");
        }else{
            displayresult(data);
        }
    }).catch(err => console.log(err));
})
//free-ebooks
free_ebooks.addEventListener('click', () => {
    result.innerHTML = "";
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&filter=free-ebooks`).
    then(response => response.json()).then(data =>{
        console.log(data);
        if(inputValue == undefined || inputValue == null){
            alert("No result!... try again");
        }else{
            displayresult(data);
        }
    }).catch(err => console.log(err));
})
//paid-ebooks
paid_ebooks.addEventListener('click', () => {
    result.innerHTML = "";
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&filter=paid-ebooks`).
    then(response => response.json()).then(data =>{
        console.log(data);
        if(inputValue == undefined || inputValue == null){
            alert("No result!... try again");
        }else{
            displayresult(data);
        }
    }).catch(err => console.log(err));
})
//ebooks
ebooks.addEventListener('click', () => {
    result.innerHTML = "";
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&filter=ebooks`).
    then(response => response.json()).then(data =>{
        console.log(data);
        if(inputValue == undefined || inputValue == null){
            alert("No result!... try again");
        }else{
            displayresult(data);
        }
    }).catch(err => console.log(err));
})
//all
all.addEventListener('click', () => {
    result.innerHTML = "";
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&printType=all`). 
    then(response => response.json()).then(data => {
        console.log(data);
        if(inputValue == undefined || inputValue == null){
            alert("No result!... try again");
        }else{
            displayresult(data);
        }
    }).catch(err => console.log(err));
})
//books
books.addEventListener('click', () => {
    result.innerHTML = "";
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&printType=books`). 
    then(response => response.json()).then(data => {
        console.log(data);
        if(inputValue == undefined || inputValue == null){
            alert("No result!... try again");
        }else{
            displayresult(data);
        }
    }).catch(err => console.log(err));
})
//magazines
magazines.addEventListener('click', () => {
    result.innerHTML = "";
    const inputValue = inputText.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&printType=magazines`). 
    then(response => response.json()).then(data => {
        console.log(data);
        if(inputValue == undefined || inputValue == null){
            alert("No result!... try again");
        }else{
            displayresult(data);
        }
    }).catch(err => console.log(err));
})

function displayresult(data){
 for(let i=0; i<data.items.length; i++){
    //console.log(data.items[i].volumeInfo.title);
    var x;
    var item = data.items[i];
    title = item.volumeInfo.title;
    author = item.volumeInfo.authors;
    publisher = item.volumeInfo.publisher;
    bookImg = item.volumeInfo.imageLinks.thumbnail;
    bookLink = item.volumeInfo.previewLink;
    // price = (item.saleInfo.saleability == "FOR_SALE") ? Math.round(item.saleInfo.listPrice.amount) :
    //                                                     signVisible() + item.saleInfo.saleability
    price = (item.saleInfo.saleability == "FOR_SALE") ? `<i class="fa-solid fa-indian-rupee-sign"></i>`+
    Math.round(item.saleInfo.listPrice.amount) : ``;

    result.innerHTML += `<div class="row justify-content-center">`+ 
                        output(title, author, bookImg, publisher, bookLink)+
                        `</div>`
 }
}
function output(title, author, bookImg, publisher,bookLink){
    var card = `<div class="col-lg-8 col-md-12 card-con">
                <div class="card">
                    <div class="row justify-content-center">
                        <div class="col-3 colsm img-container">
                            <img src=${bookImg} class="card-img">
                        </div>
                        <div class="col-6 colsm about">
                            <div class="card-body">
                                <h3 class="title">${title}</h3>
                                <p class="author"><b>Author : </b>${author}</p>
                                <p class="publisher"><b>Publisher : </b>${publisher}</p>
                                <div class="priceread">
                                    <p class="price">${price}</p>
                                    <button class="btn"><a href=${bookLink} target="_blank">Read Book</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="clearfix">
                </div>`
    return card;
}
function forVisible(){
    var y = document.querySelector(".spandiv");
        y.style.visibility = "visible"
    var x = document.querySelector(".search-here");
        x.style.display = "none";
    var z = document.querySelector(".searchspan");
        z.innerHTML = inputText.value
}
