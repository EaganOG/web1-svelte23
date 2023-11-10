<!-- FILEPATH: /c:/Users/ocg12/Desktop/New folder/my-app/src/routes/In-Touch/+page.svelte -->
<svelte:head>
    <link rel="stylesheet" href="css/main.css">
    <title>IHO - Get in Touch</title>
</svelte:head>


<script>
  // Your script goes here
  import { onMount } from 'svelte';

  let data;
  const BASE_URL = 'https://maps.googleapis.com/maps/api/staticmap?center=Z%C3%BCrich&zoom=12&size=400x400&key=';//Base URL for the API
  const API_KEY = 'AIzaSyB5VrQTGPPjm2GoKo4HLW83nkcUnRvRNWE';//Key given by google

  //Fetches the data from the API, more just proof I know how to pull from an API due to Google's API for maps just being a link that requires
  //a quite basic integration shown below which is why console.log(data) shows errors.
  onMount(async () => {
    const res = await fetch(`${BASE_URL}`+`${API_KEY}`);
    data = await res.json();
  });

  console.log(data);//left to show bugs/error in console.


</script>

<style>
  /* Your styles go here */
</style>

<main>
  <!---->
  <iframe title="ihoLocation" 
    width="600" 
    height="450" 
    style="border:0" 
    loading="lazy" 
    allowfullscreen 
    src="https://www.google.com/maps/embed/v1/place?q=60%20Tennyson%20Street%2C%20Central%20Dunedin%2C%20Dunedin%2C%20New%20Zealand&key=AIzaSyB5VrQTGPPjm2GoKo4HLW83nkcUnRvRNWE">
  </iframe>
</main>
