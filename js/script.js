let date = new Date(Date.now());
let year = date.getFullYear();

function getDate () {
    let copyright = document.getElementById('copyright').innerHTML = "Copyright " + year;
}; 
getDate();
