let i = 0;
setInterval(
    function itemAnimation() {
        document.getElementsByClassName('animated-item')[i].style.display = 'none';
        i +=1;
        i %= 4;
        document.getElementsByClassName('animated-item')[i].style.display = 'inline-block';
    }
,4000);