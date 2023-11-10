<svelte:head>
    <link rel="stylesheet" href="css/main.css">
</svelte:head>

<script>
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { Button, Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte';
	let isHovered = false;

  	function handleMouseOver() {
    	isHovered = true;
  	}

  	function handleMouseOut() {
    	isHovered = false;
  	}
	
</script>


	<!--Nav bar for the whole website-->
	<header id="navigator" data-role="Accordion" class="home-header">
	 	<img alt="logo" src="\WebsiteLogo.png" class="home-image">
	 	<hr>
	 	<nav id="navigationMenu" class="home-nav">
	 	    <Button href="/"
			 id="welcomeButton"
			 class="nav-button"
			 on:mouseover={handleMouseOver}
			 on:mouseout={handleMouseOut}
			 style={`background-color: ${isHovered ? '--website-accent-color' : '--website-background-color'}`}
		   >WELCOME</Button>
	 	    <Button href="/Our-Team" id="teamButton" class="nav-button">OUR TEAM</Button>
	 	    <Button href="/Services" id="servicesButton" class="nav-button">SERVICES</Button>
	 	    <Button href="/In-Touch" id="touchButton" class="nav-button">GET IN TOUCH</Button>
	 	    <Button href="/Join-Us" id="joinButton" class="nav-button">JOIN OUR TEAM</Button>
	 	</nav>
	</header>

<slot />

<footer class="footer">
	<p class="footer-content">Integrated Health Otago&copy; 2023</p>
</footer>