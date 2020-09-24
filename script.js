var numtubers = 4;

//CLICK ON TAB
function anim(e) {
    let vtubers = document.getElementsByClassName('vtuber');
    let bios = document.getElementsByClassName('bio');
    let found = false;
    if (e.classList.contains('open')){
        for(let i = 1; i < (1+numtubers); i++){
            let $this = $(vtubers.item(i));
            let $bio = $(bios.item(i-1));
            if(vtubers.item(i).classList.contains('open')) {
                $this.removeClass('open').addClass('close');
                $bio.removeClass('visible').addClass('invisible');
            }
        }
    }else{
        for(let i = 1; i < (1+numtubers); i++){
            if(e.isEqualNode(vtubers.item(i))){
                found = true;
                let $bio = $(bios.item(i-1));
                $bio.removeClass('invisible').addClass('visible');
            }
            if(found){
                $this = $(vtubers.item(i));
                $this.removeClass('close').addClass('open');
            }
        }
    }
}

//CLICK BUTTONS
function open_content(e){
    let $this = $(document.getElementById(e.text.toLowerCase()));
    $this.css("visibility", "visible");
    $this.css("animation", "fade_in 0.5s forwards");
}

function close_content(e){
    let $this = $(e);
    $this.css("animation", "fade_out 0.5s forwards");
    $this.css("visibility", "hidden");
    window.history.pushState("", "", "/nya/");
}

//STOPS ABOUT / CONTACT CONTENT FROM SETTING OFF THE OUTER EXIT FUNCTION
$(".content").on("click", function (event) {
    event.stopPropagation();
});