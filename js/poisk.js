document.addEventListener("DOMContentLoaded", function(){
    let searshicon = document.querySelector(".search_trigger");
    let search_fade_in = document.querySelector(".search_fade_in");
    let close = document.querySelector(".close_search");

    searshicon.addEventListener("click", function(){
        search_fade_in.classList.remove("none");
    });

    close.addEventListener("click", function(){
        search_fade_in.classList.add("none");
    });
});