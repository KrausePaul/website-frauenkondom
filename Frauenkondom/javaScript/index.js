function dropdownMenü() {
    var contentbox = document.getElementsByClassName("themen-box")[0];
    var link = document.getElementsByClassName("link")[0];
    contentbox.classList.add("inactive");

    showcontent();
    hidecontent();
    function hidecontent() {
        link.addEventListener("mouseleave", () => {

            setTimeout(()=> {
                contentbox.classList.remove("active");
                contentbox.classList.add("inactive");
            },1500)

        });
    }

    function showcontent() {
        link.addEventListener("mouseenter", () => {
            contentbox.classList.remove("inactive");
            contentbox.classList.add("active");
        });
    }        
}

dropdownMenü();