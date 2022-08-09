<template>
      <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs d-flex align-items-center" style="background-image: url('assets/img/project-header.jpg');">
      <div class="container position-relative d-flex flex-column align-items-center">

        <h2>Project Details</h2>
        <ol>
          <li><a href="/">Home</a></li>
          <li>Project Details</li>
        </ol>

      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Project Details Section ======= -->
    <section id="projects-details" class="projects-details">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="slides-1 projects-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img src="/assets/img/projects/app-1.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="/assets/img/projects/product-1.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="/assets/img/projects/branding-1.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="/assets/img/projects/books-1.jpg" alt="">
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="projects-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
              </ul>
            </div>
            <div class="projects-description">
              <h2>This is an example of project detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Project Details Section -->

  </main><!-- End #main -->
</template>

<script>
    export default {
        name: 'ProjectDetails'
    }
</script>