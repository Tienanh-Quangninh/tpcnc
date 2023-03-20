function auto() {
    darkauto();
    sunmoon();
    livetime();
}
function livetime() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();

    let currentTime = `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;

    document.getElementById('livetime').innerHTML = currentTime;
}
setInterval(livetime, 1000);   

function darkauto() {
    const date = new Date();
    let hours = date.getHours();
    if (hours >= 22 && hours <= 6) {
        document.querySelector('.dark-mode-slide-btn').click();
    }
    else if (hours >= 00 && hours <= 6){
        document.querySelector('.dark-mode-slide-btn').click();
    }
    else {

    }
}

function sunmoon() {
    const date = new Date();
    let hours = date.getHours();
    if (hours >= 19 && hours <= 6) {
        document.querySelector('.moon').style.display = 'inline';
        document.querySelector('.sun').style.display = 'none';
    }
    else if (hours >= 00 && hours <= 6){
        document.querySelector('.moon').style.display = 'inline';
        document.querySelector('.sun').style.display = 'none';
    }
    else {
        document.querySelector('.moon').style.display = 'none';
        document.querySelector('.sun').style.display = 'inline';
    }

}
setInterval(sunmoon(), 10000);  