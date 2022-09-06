<script>
import Fa from 'svelte-fa'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faMedium, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { experiences } from '$lib/data';

</script>

<div class="container">
<header class="text-gray-700">
    <!-- Name and title -->

    <h1 class="name text-5xl">Basuke Suzuki</h1>
    <p class="title">Software Engineer</p>

    <!-- Resume summary -->

    <p>
        Full stack software engineer with 30+ years of experience in this industry,
        database, embedded stack, web browser engine, mobile and desktop application,
        serverside technology.
        5+ years of open source WebKit project and the WebKit reviewer since 2022.
        Speciality for not only C++, but wide web technology from JavaScript / TypeScript, HTML5 and CSS,
        Loves Svelte, Vite, Tailwind CSS.
    </p>

    <!-- Contact information and some social links -->

    <ul class="contact">
        <li><a href="https://twitter.com/basuke"><Fa icon={faTwitter} class="inline-block"/> @basuke</a></li>
        <li><a href="https://github.com/basuke"><Fa icon={faGithub} class="inline-block"/> GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/basuke/"><Fa icon={faLinkedin} class="inline-block"/> LinkedIn</a></li>
    </ul>
</header>

<main class="text-gray-700">
    <!-- Experience -->
    <header class="text-sm">
        <h2 class="text-lg ">Experience</h2>
    </header>
    <section class="experience">
        {#each experiences as e}
            <article class="my-4">
                <header class="text-sm">
                    <h3 class="text-xl">{e.company}</h3>
                    <div class="title">{e.title}</div>
                    <div class="period">{e.period}</div>
                    <div class="location">{e.location}</div>
                </header>
                <p>{e.description}</p>
            </article>
        {/each}

    </section>

    <!-- Education -->

</main>

<aside class="text-gray-700">
    <!-- Relevant skills -->

    <!-- Awards -->

    <!-- Projects -->

    関心空間
    駅ベル
    Kinoma
    SIE
    WebKit
    AssistOn
    <!-- Skills -->

    <!-- Language -->

    <!-- Social links -->

    <li>YouTube <Fa icon={faYoutube} class="inline-block text-indigo-500"/> https://www.youtube.com/BasukeSuzuki</li>
    <li>blog: <Fa icon={faMedium} class="inline-block text-indigo-500"/> https://blog.basuke.com/</li>
    <li>バスケの言い分: https://note.com/basuke/m/ma19bcf3653b4</li>
</aside>
</div>
