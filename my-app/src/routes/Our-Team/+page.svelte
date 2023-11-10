
<svelte:head>
    <link rel="stylesheet" href="css/main.css">
    <title>IHO - Our Team</title>
</svelte:head>

<script>
  let teamMembers = [
    {
      id: "jimwebb", //ID for each individual team member
      name: "Jim Webb", //The name of the team member, this is what is shown on the page
      //the role each person has at the company, these are hidden tags for the future
      roles: ["Osteopath", "Physiotherapist", "Digestive Health Practitioner"],
      image: "/jimwebb.jpg", //The image of the team member, this is what is shown on the page
      //The bio of the team member, this is what is shown on the page
      bio: "Jim is our lead clinician with over 20 years of clinical experience. Qualified as an Osteopath, Physiotherapist, and a Digestive Health Practitioner..."
    },
    {
      id: "aliceyoung",
      name: "Alice Young",
      roles: ["Nutritionist"],
      image: "/aliceyoung.jpg",
      bio: "Alice moved to Dunedin from West Otago 10 years ago where she completed her secondary, tertiary and further education..."
    },
    {
      id: "amberdovey",
      name: "Amber Dovey",
      roles: ["Massage Therapist", "Personal Trainer"],
      image: "/amberdovey.jpg",
      bio: "Raised in Dunedin, Amber completed her Diploma in Wellness & Therapeutic Massage – Level 5 at Otago Polytechnic..."
    },
    {
      id: "atticakentondau",
      name: "Attica Kenton-Dau",
      roles: ["Osteopath"],
      image: "/atticakentondau.jpg",
      bio: "Originally from Christchurch, Attica grew up participating in rugby, athletics, mountaineering, downhill biking and martial arts..."
    },
    {
      id: "debwebb",
      name: "Deb Webb",
      roles: ["administrator"],
      image: "/debwebb.jpg",
      bio: "Deb is our Clinic Manager and co-founder of IHO. Prior to moving to New Zealand, Deb worked as a senior neurological Physiotherapist.."
    },
    {
      id: "deecoulter",
      name: "Dee Coulter",
      roles: ["Physiotherapist"],
      image: "/deecoulter.jpg",
      bio: " A Canadian born Kiwi, Dee made her way to Dunedin in 2016 where she began her studies at the University of Otago. After successfully completing her Bachelor..."
    },
    {
      id: "sharonsutton",
      name: "Sharon Sutton",
      roles: ["Dietitian"],
      image: "/sharonsutton.jpg",
      bio: "Originally from Christchurch, Sharon made the move south with her husband and two teenage daughters to make Dunedin their home..."
    },
    {
      id: "steffroddick",
      name: "SteffRoddick",
      roles: ["Psychotherapist"],
      image: "/steffroddick.jpg",
      bio: "Alice moved to Dunedin from West Otago 10 years ago where she completed her secondary, tertiary and further education..."
    },
    {
      id: "zanegreen",
      name: "Zane Green",
      roles: ["Podiatrist"],
      image: "/aliceyoung.jpg",
      bio: "Zane has worked alongside Jim and the team at IHO for many years within the elite sporting arena. After a short stint in Auckland honing his Sports Podiatry skills..."
    },
    // Add other team members here
  ];
</script>


<main class="home-container">
  <section class="our-team-container">
    <header class="page-header">
      <h1>Our Team</h1>
    </header>
  </section>
  

  <!--
    A loop that goes through the teamMembers array, takes each of the entries and creates an article for each one, 
    with each corrosponding field for each itteration of the array
  -->
  {#each teamMembers as member}
    <article id={member.id} class="employee-bio {member.roles.join(' ')}">
      <img alt={member.name} src={member.image} class="employee-image" />
      <div class="employee-text">
        <h2 class="employee-title">{member.name}</h2>
        <p>{member.bio}</p>
      </div>
    </article>
    <hr class="services-breaker" />
  {/each}
</main>