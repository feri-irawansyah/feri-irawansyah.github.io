<script>
  import Badge from "../components/Badge.svelte";
  import { t } from "../lang";

  function hitungUsia(tanggalLahir) {
    const today = new Date();
    const birthDate = new Date(tanggalLahir);

    let usia = today.getFullYear() - birthDate.getFullYear();
    const bulan = today.getMonth() - birthDate.getMonth();
    const hari = today.getDate() - birthDate.getDate();

    // Kalau bulan atau hari belum lewat tahun ini, usia dikurangi 1
    if (bulan < 0 || (bulan === 0 && hari < 0)) {
      usia--;
    }

    return usia;
  }

  // Contoh penggunaan
  const usiaSekarang = hitungUsia('2000-06-09');
  const experience = hitungUsia('2021-02-04');
</script>

<section id="about" class="about section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{$t("about")}</h2>
      <p>{$t("about_desc")}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4 justify-content-center">
        <div class="col-lg-4 d-flex about-img">
          <img src="/img/feri.jpg" class="img-fluid rounded" alt="Profile Tidak ada">
          <div class="badge-container">
            <Badge text={experience} />
          </div>
        </div>
        <div class="col-lg-8 content">
          <h2>Software Engineer &amp; Developer.</h2>
          <p class="fst-italic py-3">
            {$t("about_age")}
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>{$t("born")}:</strong> <span>{$t("birth_date")}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>{$t("website")}:</strong> <span>www.feri-irawansyah.github.io</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>{$t("phone")}:</strong> <span>+62 82323443535</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>{$t("city")}:</strong> <span>DKI Jakarta, Indonesia</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>{$t("age")}:</strong> <span>{usiaSekarang}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>{$t("degree")}:</strong> <span>{$t("bachlor")}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>feryirawansyah09@gmail.com</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>{$t("freelance")}:</strong> <span>{$t("availability")}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>

<style scoped>
  .badge-container {
    position: absolute;
    bottom: -20%;
    right: -20%;
  }
  .about-img {
    position: relative;
  }

  @media screen and (max-width: 768px) {
    #about .section-title h2 {
      font-size: 1.6rem;
    }

    #about .section-title p {
      font-size: 0.8rem;
    }
  }

</style>