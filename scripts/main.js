function searchButton(){
    reset();
    var text2 = document.getElementById("search-bar").value;
    //Make all sections hidden
    text=text2;
    if(text2==''){
        text = 'adhfslkjghdslkjghskldfhglskjgfhlksdjhglskdg';
    }
    var allList = document.querySelectorAll('.post');
    for(var i=0; i<allList.length;i++){
        allList[i].classList.add('hidden');
    }
    //Find the sections with the title
    var newList = document.querySelectorAll(`.${text}`);
    console.log(text);
    console.log(newList);
    for(var i=0; i<newList.length;i++){
        newList[i].classList.remove('hidden');
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