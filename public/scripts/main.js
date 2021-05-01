function searchButton(){
    reset();
    var text2 = document.getElementById("search-bar").value;
    //Make all sections hidden
    text=text2.toLowerCase();
    if(text2==''){
        text = 'adhfslkjghdslkjghskldfhglskjgfhlksdjhglskdg';
    }
    var allList = document.querySelectorAll('.post');
    for(var i=0; i<allList.length;i++){
        allList[i].classList.add('hidden');
    }
    //Find the sections with the title
    var allResults = text.split(' ');
    console.log(allResults);
    for(var i=0; i<allResults.length;i++){
        var newList = document.querySelectorAll(`.${allResults[i]}`);
        console.log(newList);
        for(var j=0; j<newList.length;j++){
            newList[j].classList.remove('hidden');
        }
    }
    
    //If there are none show error
    if(newList.length==0){
        document.querySelector("#test").classList.remove("hidden");
    }
    document.getElementById("back-button").classList.remove('hidden');
}

function reset(){
    var allList = document.querySelectorAll('.post');
    for(var i=0; i<allList.length;i++){
        allList[i].classList.remove('hidden');
    }
    document.querySelector("#test").classList.add("hidden");
    document.getElementById("back-button").classList.add('hidden');
}

function liSearch(text){
    console.log(text);
    document.getElementById("search-bar").value = text;
    document.getElementById("search-button").click();
}

function showMore(id,x){
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id+'readmore').classList.add('hidden');
    if(x!=null){
      showSlides(slideIndex,x);
    }
}

function hide(id){
  document.getElementById(id).classList.add('hidden');
  document.getElementById(id+'readmore').classList.remove('hidden');
}

var slideIndex = 1;
//showSlides(slideIndex,2);

function plusSlides(n,x) {
  showSlides(slideIndex += n,x);
}

function currentSlide(n,x) {
  showSlides(slideIndex = n,x);
}

function showSlides(n,x) {
  console.log("Index"+n.toString());  
  console.log("Slides"+x.toString());  
  var i;
  console.log(`slider${x}`);
  var slides = document.getElementsByClassName(`slider${x}`);
  console.log("Slides"+slides.length);
  var dots = document.getElementsByClassName(`dot${x}`);
  console.log("Dots"+dots.length);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  console.log("Number of Slides"+slides.length);
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
}

function checkCompat() {
    var agent = navigator.userAgent.toLowerCase();
    if(agent.indexOf("safari")!=-1 && agent.indexOf("chrome")<=-1) {
        var elements = document.getElementsByClassName("about-button");
        for(i=0; i<elements.length; i++){
            elements[i].style.backgroundColor="#fff7f2";
        }
    }
}
window.onload = checkCompat;