<script lang="ts">
    import { onMount } from 'svelte';
    import { t } from '../lang';
  import { formatWIBDate } from '../lib/app';

    let data = $state([]);

    onMount(async () => {
      await fetch('https://snakesystem-web-api-tdam.shuttle.app/api/v1/data/get-table?tablename=Notes&offset=0&limit=10&nidkey=NotesNID', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async (res) => {
        const response = await res.json();
        data = response.rows;
      }).catch((err) => {
        console.log(err);
      })
    })
  
    // Inisialisasi card
    onMount(() => {
      document.querySelectorAll('.card');
    });
  </script>

<section id="blog" class="blog section">
    <div class="container section-title" data-aos="fade-up">
      <h2>{$t('blog_title')}</h2>
      <p>{$t('blog_desc')}</p>
    </div>
    <div class="container">
        <div class="sticky-cards-section" data-aos="fade-up" data-aos-delay="100">
            {#each data as blog, index}
                <div class="card card-{index + 1} linkedin-post" style="z-index: {index + 1};">
                  <div class="card-body">
                    <div class="row justify-content-between">
                        <div class="col-md-8">
                            <h5 class="card-title">{blog.Title}</h5>
                            <p class="card-text">{blog.Description}</p>
                            <a href={`https://snakesystem-library.vercel.app/#/notes/${blog.NotesCategory}/${blog.Slug}`} target="_blank" class="text-decoration-none">Read More</a>
                            <p class="card-text"><small class="text-muted">{formatWIBDate(blog.LastUpdate)}</small></p>
                        </div>
                        <div class="col-md-4">
                            <img class="card-img-top" src={`https://raw.githubusercontent.com/feri-irawansyah/snakesystem-library/refs/heads/main/public/img/notes/${blog.Slug}.png`} alt={blog.Title} onerror={(e: any) => e.target.src = 'https://raw.githubusercontent.com/feri-irawansyah/snakesystem-library/refs/heads/main/public/img/bg-mobile-fallback.jpg'} />
                        </div>
                    </div>
                  </div>
                </div>
            {/each}
        </div>
    </div>
</section>
  
<style>
    .card {
      position: -webkit-sticky; /* Untuk Safari */
      border: none;
      position: sticky;
      top: 20px; /* Setiap card akan sticky dengan jarak top */
      width: 70%;
      margin: 20px auto;
      border-radius: 10px;
      box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.1);
      display: flex;
      align-items: stretch;
      justify-content: center;
      font-size: 18px;
      transition: all 0.3s ease-out;
      z-index: 1;
    }

    .card:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.2);
    }

    .card-title {
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
    }
    
    .card.linkedin-post {
        padding: 10px;
        border-left: 4px solid #0077b5;
        background-color: var(--background-color);
        font-style: italic;
    }

    .card-text {
        color: var(--default-color);
    }

    .card-text small {
      color: var(--default-color) !important;
    }

    .card.linkedin-post a {
        color: #0077b5;
        text-decoration: none;
        font-weight: bold;
    }

    .card.linkedin-post a:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {

      #blog .section-title {
        margin-bottom: -3rem;
      }

      #blog .section-title h2 {
        font-size: 1.6rem;
      }

      #blog .section-title p {
        font-size: 0.9rem;
      }

      .card {
        width: 100%;
      }

      .card-body p {
        font-size: 0.9rem;
        text-align: justify;
      }
    }
  </style>
  