function myMenu() {
    var x = document.getElementById("mylinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function closeMe() {
    document.getElementById("searchpanner").style.display = "none";
}

function openMe() {
    document.getElementById("searchpanner").style.display = "inline-flex";
}


// Dark Mode 


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const icon = document.getElementById("modeBtn");

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);