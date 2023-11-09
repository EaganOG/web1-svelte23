<svelte:head>
    <link rel="stylesheet" href="css/main.css">
    <title>Integrated Health Otago - Home</title>
</svelte:head>

<script src="js/main.js">
    let services = [
        {
            id: "Osteohome",
            name: "Osteopathy",
            description: "Osteopathy is a way of detecting, treating and preventing health problems by moving, stretching and massaging a person's muscles and joints. Osteopathy is based on the principle that the wellbeing of an individual depends on their bones, muscles, ligaments and connective tissue functioning smoothly together."
        },
        {
            id: "Physiohome",
            name: "Physiotherapy",
            description: "Physiotherapy is a healthcare profession that assesses, diagnoses, treats, and works to prevent disease and disability through physical means. Physiotherapists are experts in movement and function who work in partnership with their patients, assisting them to overcome movement disorders, which may have been present from birth, acquired through accident or injury, or are the result of ageing or life-changing events."
        },
        {
            id: "podhome",
            name: "Podiatry",
            description: "We identify abnormalities and treat conditions concerning the lower legs, foot and ankle. We also help with nail disorders. Podiatrists are capable of doing surgery, resetting fractured bones, prescribing medications, administering local anaesthesia and ordering lab tests and X-rays."
        },
        {
            id: "Massagehome",
            name: "Massage Therapy",
            description: "Massage therapy (including myotherapy) is the practice of kneading or manipulating a person's muscles and other soft-tissue in order to improve their wellbeing or health. It is a form of manual therapy that includes holding, moving, and applying pressure to the muscles, tendons, ligaments and fascia."
        },
        {
            id: "WHealthhome",
            name: "Women's Health",
            description: "Women's health is a broad term referring to physical and mental health problems that are of exclusive concern for women, and which are more common in women or which differ in presentation, severity, or consequences in women compared to men."
        },
        {
            id: "DNuthome",
            name: "Dietics and Nutrition",
            description: "Changes in diet can help prevent or control many health problems, including obesity, diabetes and certain risk factors for cancer and heart disease. Dietetics is the science of how food and nutrition affects human health."
        },
        {
            id: "Psyhome",
            name: "Psychotherapy",
            description: "There are several approaches to psychotherapy—including cognitive-behavioral, interpersonal, and other kinds of talk therapy—that help individuals work through their problems. Psychotherapy is a collaborative treatment based on the relationship between an individual and a psychologist."
        },
        {
            id: "PTrainhome",
            name: "Personal Training",
            description: "Personal trainers assess their customers' bodily strengths and weaknesses and create customized workout plans. They provide physical and mental guidance and monitor customers' progress on a regular basis. They also make sure that customers don't get injured while training."
        },
        {
            id: "yogahome",
            name: "Yoga",
            description: "Yoga began as a spiritual practice but has become popular as a way of promoting physical and mental well-being. Although classical yoga also includes other elements, yoga as practiced in the United States typically emphasizes physical postures (asanas), breathing techniques (pranayama), and meditation (dyana)."
        },
        {
            id: "lstylehome",
            name: "Lifestyle Coaching",
            description: "A life coach is someone who counsels and encourages clients through personal or career challenges. A life coach helps guide clients to reach their ultimate goals. A life coach can help individuals in different areas of their life. But because each human being is different, so will their goals. Oftentimes, a life coach counsels clients in personal and professional arenas."
        },
        {
            id: "acuhome",
            name: "Acupuncture",
            description: "Acupuncture is the practice of penetrating the skin with thin, solid, metallic needles which are then activated through gentle and specific movements of the practitioner's hands or with electrical stimulation. Acupuncture is part of the ancient practice of Traditional Chinese medicine."
        }
    ]
</script>
```

<main class="home-container">
    <header id="navigator" data-role="Accordion" class="home-header">
        <img alt="logo" src="resources/WebsiteLogo.png" class="home-image">
        <hr>
        <nav id="navigationMenu" class="home-nav">
            <button id="welcomeButton" class="nav-button">WELCOME</button>
            <button id="ourteamButton" class="nav-button">OUR TEAM</button>
            <button id="servicesButton" class="nav-button">SERVICES</button>
            <button id="intouchButton" class="nav-button">GET IN TOUCH</button>
            <button id="joinButton" class="nav-button">JOIN OUR TEAM</button>
        </nav>
    </header>

    <section class="home-hero">
        <h1>Here, Every BODY matters!</h1>
        <p>Here at Integrated Health Otago, we strive to be the best in the business. We offer a wide range of health care services to help you get back to good health.</p>
    </section>

    <section class="about-section">
        <h1 class="about-header">About Us</h1>
        <p class="about-text">Integrated Health Otago was established in 2014 by Jim, after over a decade of planning a health care service that addresses the specific needs of each individual client with both acute and chronic conditions. Jim is qualified as an Osteopath, Physiotherapist and Digestive Health Practitioner who has worked in the public and private sectors as well as with high profile football teams and elite British Athletes.</p>
        <p class="about-text">Jim’s vision was to combine Osteopathic philosophy, where the body is considered a complex integrated system, with biomechanics, muscle balance and rehabilitative techniques of Physiotherapy. Together with his wife Deb, they have grown IHO to combine allied health services such as digestive health and acupuncture in order to provide a progressive all round health care model that is unique to their clinic.</p>
    </section>

    <section class="about-section">
        <h1 class="about-header" style="text-align: center;">Services</h1>
        <br/>
        <p class="services-bio">A short description of each service is provided below. For more information, please visit our services page.</p>

        <hr class="services-breaker">

        <!--Servcies-->
        <article id="{services[0].id}" class="services-desc">
            <h2 class="services-desc-title">{services[0].name}</h2>
            <p class="services-desc-text">{services[0].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[1].id}" class="services-desc">
            <h2 class="services-desc-title">{services[1].name}</h2>
            <p class="services-desc-text">{services[1].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[2].id}" class="services-desc">
            <h2 class="services-desc-title">{services[2].name}</h2>
            <p class="services-desc-text">{services[2].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[3].id}">
            <h2>{services[3].name}</h2>
            <p>{services[3].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[4].id}">
            <h2>{services[4].name}</h2>
            <p>{services[4].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[5].id}">
            <h2>{services[5].name}</h2>
            <p>{services[5].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[6].id}">
            <h2>{services[6].name}</h2>
            <p>{services[6].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[7].id}">
            <h2>{services[7].name}</h2>
            <p>{services[7].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[8].id}">
            <h2>{services[8].name}</h2>
            <p>{services[8].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[9].id}">
            <h2>{services[9].name}</h2>
            <p>{services[9].description}</p>
        </article>

        <hr class="services-breaker">

        <article id="{services[10].id}">
            <h2>{services[10].name}</h2>
            <p>{services[10].description}</p>
        </article>
    </section>

    <footer class="footer">
        <p class="footer-content">Integrated Health Otago&#169 2023</p>
    </footer>
</main>

