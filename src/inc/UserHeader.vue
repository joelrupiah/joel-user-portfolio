<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="
        container-fluid container-xl
        d-flex
        align-items-center
        justify-content-between
      "
    >
      <a href="index.html" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="/src/assets/img/logo.png" alt=""> -->
        <h1 class="d-flex align-items-center">
          <div class="first-letter" style="color: #006400">J</div>
          <div class="second-letter" style="color: #f03c02">R</div>
        </h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="/" class="active">Home</a></li>
          <li v-if="!['ProjectDetails'].includes($route.name)"><a href="#about">About</a></li>
          <li v-if="!['ProjectDetails'].includes($route.name)"><a href="#stacks">Stacks</a></li>
          <li v-if="!['ProjectDetails'].includes($route.name)"><a href="#projects">Projects</a></li>
          <li v-if="!['ProjectDetails'].includes($route.name)"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
</template>

<script>
export default {
  name: "UserHeader",
};
</script>