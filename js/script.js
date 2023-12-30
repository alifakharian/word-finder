let random = document.querySelector(".random");
let result = document.querySelector(".result");
let ans = document.querySelector(".ans");
let master = document.querySelector(".master");
let box = document.querySelector(".box");
let bye = document.querySelector(".bye");
let passage =document.querySelector(".passage")
let click = document.querySelector(".click")
let clear = document.querySelector(".clear")



let number1 = Math.floor(Math.random() * 100 + 10);
let number2 = Math.floor(Math.random() * 10 + 3);
random.innerHTML = `<h2>${number1} + ${number2} </h2>`;
result.addEventListener("click", function () {
  ans.style.display = "block";

  let voroodi = Number(document.getElementById("voroodi").value);

  if (number1 + number2 == voroodi) {
    master.style.display = "block";
    box.style.display = "none";
  } else {
    bye.style.display = "block";
  }
});

clear.addEventListener("click",function(){
  search.value = ""
  
})


click.addEventListener("click",function(){
  let search = document.getElementById("search").value;
   let replaceData = new RegExp(search,"ig");
  passage.innerHTML=passage.innerText.replace(replaceData,`<span class="highlight">${search}</span>`)
});





