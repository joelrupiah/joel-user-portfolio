<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>JR</h3>
            <p>
              Nairobi, Kenya<br />
              <strong>Phone:</strong> +254 715 733 257<br />
              <strong>Email:</strong> rupiahjeremiah@gmail.com<br />
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#about">About</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#stacks">Stacks</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-5 col-md-6 footer-newsletter">
            <h4>Subscribe to my Newsletter</h4>
            <p>
              By subscribing you will get updates on the new projects I will be
              deploying
            </p>
            <form>
              <input type="email" name="email" /><input
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">
      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Joel Jeremiah Rupiah</span></strong
          >. All Rights Reserved
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="linkedin"><i class="bx bxl-github"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "UserFooter",
};
</script>