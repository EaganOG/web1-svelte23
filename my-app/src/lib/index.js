// place files you want to import through the `$lib` alias in this folder.
    function welcomeButtonEffect() => {
        document.getElementById("welcomeButton")?.addEventListener("mouseover", function() {
            document.getElementById("welcomeButton").style.backgroundColor = "#ffc107";
            document.getElementById("welcomeButton").style.color = "white";
        }
    , false);}
    
    document.getElementById("welcomeButton").addEventListener("mouseover", function() {
        document.getElementById("welcomeButton").style.backgroundColor = "#ffc107";
        document.getElementById("welcomeButton").style.color = "white";
    });