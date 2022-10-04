
// ---------------DOM Selectors--------------------

const add_moviesBtn = document.getElementById("add_movies");
const backDropDiv = document.getElementById("backDrop");
const myModalDiv = document.getElementById("myModal");
const myClose = Array.from(document.querySelectorAll(".myClose"));
const input_text = document.getElementById("title");
const input_rating = document.getElementById("rating");
const input_imgUrl = document.getElementById("imgUrl");
const thumbnailDiv = document.getElementById("thumbnail");
const formSubmitForm = document.getElementById("formSubmit");
let movieArry = [];


// -----------------------CallBack Function--------------------

const addMovies = (event) =>{
backDropDiv.classList.remove("d-none");
myModalDiv.classList.remove("d-none");
}
const hideModal = (event) =>{
backDropDiv.classList.add("d-none");
myModalDiv.classList.add("d-none");
}

const CreatCatd = function(ele){
    ele.preventDefault();
// console.log(ele.target);
let obj = {
    title : input_text.value,
    imgUrl : input_imgUrl.value,
    rating : input_rating.value
}


movieArry.push(obj);
// console.log(movieArry);
creatcard(movieArry);
this.reset();
hideModal();
}

function creatcard(Arry){
    let result = "";
Arry.forEach(function(ele){
    result += `<div class="col-md-4 mt-5">
    <div class="card">
      <div class="card-body">
        <figure>
          <h3>${ele.title}</h3>
          <img src="${ele.imgUrl}" alt="${ele.title}" title="${ele.title}" class="img-fluid img-thumbnail">
          <figcaption>
            <p>
            ${ele.rating}/5
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
            </div>`
  thumbnailDiv.innerHTML = result;
})

}
// --------------------------Event Binding-------------------

add_moviesBtn.addEventListener("click",addMovies);
myClose.forEach(function(ele){
    ele.addEventListener("click",hideModal);
})

backDropDiv.addEventListener("click",hideModal);

formSubmitForm.addEventListener("submit", CreatCatd);

