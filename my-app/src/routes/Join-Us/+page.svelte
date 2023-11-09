<div>
    <link href="./home.css" rel="stylesheet" />
    <title>Integrated Health Otago - Home</title>
    <div class="home-container">
      <header id="navigator" data-role="Accordion" class="home-header">
        <img
          alt="logo"
          src="resources\WebsiteLogo.png"
          class="home-image"
        />
        <hr>
        <nav id="navigationMenu" class="home-nav">
          <button id="welcomeButton" class="nav-button">WELCOME</button>
            <button id="ourteamButton" class="nav-button">OUR TEAM</button>
            <button id="servicesButton" class="nav-button">SERVICES</button>
            <button id="intouchButton" class="nav-button">GET IN TOUCH</button>
            <button id="joinButton" class="nav-button">JOIN OUR TEAM</button>
        </nav>
      </header>


      <div class="join-us-container">
        <h1>
            Join Us!
        </h1>
      </div>


  
  
      <!--Footer with Integrated Health Otago on the left of screen, email in the middle and social media links on the right-->
      <div class="footer">
        <div class="footer-content">
          Integrated Health Otago&#169 2023
        </div>
        </div>
  
    </div>
    
    
  
    <script>
    
      //when welcomeButton is hovered over, change the background colour to gold, and the colour to white
      document.getElementById("welcomeButton").addEventListener("mouseover", function() {
        document.getElementById("welcomeButton").style.backgroundColor = "#ffc107";
        document.getElementById("welcomeButton").style.color = "white";
      });

      //when the mouse leaves the welcomeButton, change the background colour to white, and the colour to black
      document.getElementById("welcomeButton").addEventListener("mouseout", function() {
        document.getElementById("welcomeButton").style.backgroundColor = "white";
        document.getElementById("welcomeButton").style.color = "black";
      });

      //when ourteamButton is hovered over, change the background colour to gold, and the colour to white
      document.getElementById("ourteamButton").addEventListener("mouseover", function() {
        document.getElementById("ourteamButton").style.backgroundColor = "#ffc107";
        document.getElementById("ourteamButton").style.color = "white";
      });

      //when the mouse leaves the ourteamButton, change the background colour to white, and the colour to black
      document.getElementById("ourteamButton").addEventListener("mouseout", function() {
        document.getElementById("ourteamButton").style.backgroundColor = "white";
        document.getElementById("ourteamButton").style.color = "black";
      });

      //when servicesButton is hovered over, change the background colour to gold, and the colour to white
      document.getElementById("servicesButton").addEventListener("mouseover", function() {
        document.getElementById("servicesButton").style.backgroundColor = "#ffc107";
        document.getElementById("servicesButton").style.color = "white";
      });

      //when the mouse leaves the servicesButton, change the background colour to white, and the colour to black
      document.getElementById("servicesButton").addEventListener("mouseout", function() {
        document.getElementById("servicesButton").style.backgroundColor = "white";
        document.getElementById("servicesButton").style.color = "black";
      });

      //when intouchButton is hovered over, change the background colour to gold, and the colour to white
      document.getElementById("intouchButton").addEventListener("mouseover", function() {
        document.getElementById("intouchButton").style.backgroundColor = "#ffc107";
        document.getElementById("intouchButton").style.color = "white";
      });

      //when the mouse leaves the intouchButton, change the background colour to white, and the colour to black
      document.getElementById("intouchButton").addEventListener("mouseout", function() {
        document.getElementById("intouchButton").style.backgroundColor = "white";
        document.getElementById("intouchButton").style.color = "black";
      });

      //when joinButton is hovered over, change the background colour to gold, and the colour to white
      document.getElementById("joinButton").addEventListener("mouseover", function() {
        document.getElementById("joinButton").style.backgroundColor = "#ffc107";
        document.getElementById("joinButton").style.color = "white";
      });

      //when the mouse leaves the intouchButton, change the background colour to white, and the colour to black
      document.getElementById("joinButton").addEventListener("mouseout", function() {
        document.getElementById("joinButton").style.backgroundColor = "white";
        document.getElementById("joinButton").style.color = "black";
      });
  
      //when home-header is no longer on screen set "position:fixed;", "top:0;", and "z-index: 1;
      window.onscroll = function() {myFunction()};
      var header = document.getElementById("navigator");
      var sticky = header.offsetTop;
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          header.style.position = "fixed";
          header.style.top = "0";
          header.style.zIndex = "1";
        } else {
          header.classList.remove("sticky");
          header.style.position = "relative";
          header.style.top = "0";
          header.style.zIndex = "1";
        }
      }
  
      //when the ourteamButton is clicked, open our_team.html
      document.getElementById("ourteamButton").addEventListener("click", function() {
        window.location.href = "our_team.html";
      });
  
      //when the welcomeButton is clicked, open home.html
      document.getElementById("welcomeButton").addEventListener("click", function() {
        window.location.href = "home.html";
      });
  
      //when the servicesButton is clicked, open services.html
      document.getElementById("servicesButton").addEventListener("click", function() {
        window.location.href = "services.html";
      });
  
      //when the intouchButton is clicked, open intouch.html
      document.getElementById("intouchButton").addEventListener("click", function() {
        window.location.href = "intouch.html";
      });
  
      //when the joinButton is clicked, open joinus.html
      document.getElementById("joinButton").addEventListener("click", function() {
        window.location.href = "joinus.html";
      });
  
    </script>
  </div>
  