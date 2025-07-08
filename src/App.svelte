<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Settings from "./components/Settings.svelte";
  import Stats from "./components/Stats.svelte";
  import About from "./routes/About.svelte";
  import Blog from "./routes/Blog.svelte";
  import Contact from "./routes/Contact.svelte";
  import Hero from "./routes/Hero.svelte";
  import Portfolio from "./routes/Portfolio.svelte";
  import Resume from "./routes/Resume.svelte";
  import Service from "./routes/Service.svelte";
  import Skill from "./routes/Skill.svelte";
  import Testimoni from "./routes/Testimoni.svelte";
  import PureCounter from '@srexi/purecounterjs';

  import AOS from 'aos';

  $effect(() => {
    AOS.init();
    new PureCounter();
  })

  $effect(() => {
    window.addEventListener('load', () => {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              // @ts-ignore
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });

    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

  });
  
</script>

<Header/>

<main class="main"> 

    <!-- Hero Section -->
    <Hero/>
    <!-- /Hero Section -->

    <!-- About Section -->
     <About/>
    <!-- /About Section -->

    <!-- Stats Section -->
     <Stats/>
    <!-- /Stats Section -->

    <!-- Skills Section -->
     <Skill/>
    <!-- /Skills Section -->

    <!-- Resume Section -->
     <Resume/>
    <!-- /Resume Section -->

    <!-- Portfolio Section -->
     <Portfolio/>
    <!-- /Portfolio Section -->

    <!-- Services Section -->
     <Service/>
    <!-- /Services Section -->

    <!-- Blog Section -->
     <Blog/>
    <!-- /Blog Section -->

    <!-- Testimonials Section -->
    <!-- <Testimoni/> -->
    <!-- /Testimonials Section -->

    <!-- Contact Section -->
    <Contact/>
    <!-- /Contact Section -->
</main>
<Footer/>
<Settings/>
<a href="/#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center" aria-label="Scroll to Top"><i class="bi bi-arrow-up-short"></i></a>
<!-- Preloader -->
<!-- <div id="preloader"></div> -->