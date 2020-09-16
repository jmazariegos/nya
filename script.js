function anim(e) {
    if (e.classList.contains('tabf')){
        e.classList.remove('tabf');
        e.classList.add('tabr');
    }else{
        e.classList.remove('tabr');
        e.classList.add('tabf');
    }
}