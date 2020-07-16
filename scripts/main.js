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