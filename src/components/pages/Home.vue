<template>
  <!-- ======= Hero Section ======= -->
  <notifications group="message" />
  <section id="hero" class="hero d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <h2 data-aos="fade-up">Joel Jeremiah Rupiah</h2>
          <blockquote data-aos="fade-up" data-aos-delay="100">
            <p>Full Stack Developer.</p>
          </blockquote>
          <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#contact" class="btn-get-started">Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->

  <main id="main">
    <!-- ======= Why Hire Me Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Why Hire Me</h2>
        </div>

        <div class="row gy-4" data-aos="fade-up">
          <div class="col-lg-4">
            <img src="/assets/img/about-1.avif" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8">
            <div class="content ps-lg-5">
              <h4 class="text-center px-5 py-5" style="border: 2px solid darkgreen">
                Dedicated full stack software developer able to develop scalable
                and durable softwares for the needs of a client.
              </h4>
              <p class="text-black">" Dedication is delight, work on it. "</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Why Hire Me Section -->

    <!-- ======= Tech Stacks Section ======= -->
    <section id="stacks" class="stacks">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="text-mute">Tech <strong>Stacks</strong></h2>
          <p>Backend and Frontend and Mobile Development</p>
        </div>

        <div class="row no-gutters stacks-wrap clearfix" data-aos="fade-up">
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="stack-logo">
              <img src="/assets/img/stacks/laravel.jpg" class="img-fluid" alt=""
                style="width: 400px; height: 70px; object-fit: contain" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="stack-logo">
              <img src="/assets/img/stacks/express.jpg" class="img-fluid" alt=""
                style="width: 400px; height: 70px; object-fit: contain" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="stack-logo">
              <img src="/assets/img/stacks/flutter.jpg" class="img-fluid" alt=""
                style="width: 400px; height: 70px; object-fit: contain" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="stack-logo">
              <img src="/assets/img/stacks/docker.jpg" class="img-fluid" alt=""
                style="width: 400px; height: 70px; object-fit: contain" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="stack-logo">
              <img src="/assets/img/stacks/vuejs.jpg" class="img-fluid" alt=""
                style="width: 400px; height: 70px; object-fit: contain" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="stack-logo">
              <img src="/assets/img/stacks/reactjs.jpg" class="img-fluid" alt=""
                style="width: 400px; height: 70px; object-fit: contain" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="stack-logo">
              <img src="/assets/img/stacks/mysql.jpg" class="img-fluid" alt=""
                style="width: 400px; height: 70px; object-fit: contain" />
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="stack-logo">
              <img src="/assets/img/stacks/mongodb.jpg" class="img-fluid" alt=""
                style="width: 400px; height: 70px; object-fit: contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Tech Stacks Section -->

    <!-- ======= Recent Projects Section ======= -->
    <section id="projects" class="projects">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Recent Projects</h2>
        </div>

        <div class="row gy-4 projects-container" data-aos="fade-up" data-aos-delay="300">
          <div class="col-lg-4 col-md-6 projects-item">
            <img src="/assets/img/projects/app-1.jpg" class="img-fluid" alt="" />
            <div class="projects-info">
              <h4>Ecommerce</h4>
              <a href="https://github.com/joelrupiah/rp" target="_blank" title="Github Link" class="preview-link">
                <i class="bi bi-github"></i>
              </a>
              <RouterLink to="/project-details" target="_blank" title="More Details" class="details-link">
                <i class="bi bi-eye-fill"></i>
              </RouterLink>
            </div>
          </div>
          <!-- End projects Item -->
        </div>
        <!-- End projects Container -->
      </div>
    </section>
    <!-- End Recent Projects Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2>Contact</h2>
        </div>

        <div class="row justify-content-center" data-aos="fade-up">
          <div class="col-lg-10">
            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Nairobi, Kenya</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>rupiahjeremiah@gmail.com</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+254 715 733 257</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 justify-content-center" data-aos="fade-up">
          <div class="col-lg-10">
            <form class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required
                    v-model="form.name" />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required
                    v-model="form.email" />
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required
                  v-model="form.subject" />
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required
                  v-model="form.message"></textarea>
              </div>
              <div class="text-center">
                <el-button type="success" :loading="loading" size="default" @click.prevent="sendMessage">
                  {{ loading ? 'Sending message' : 'Send Message' }}
                </el-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
  </main>
  <!-- End #main -->
</template>

<script>
import Api from '../../api/index.js'
export default {
  name: "Home",
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    }
  },
  methods: {
    sendMessage() {
      this.loading = true
      Api().post('/send-message', this.form)
        .then(() => {
          this.loading = false
          this.$notify({ type: "success", group: "message", title: "Message sent" })
          this.form.name = ''
          this.form.email = ''
          this.form.subject = ''
          this.form.message = ''
        })
    }
  }
};
</script>