<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" id="NavB" href="">{{ title }}</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a id="sk" class="nav-link js-scroll-trigger" href="#services">Skills</a>
            </li>
            <li  class="nav-item">
              <a id="po" class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a id="ab" class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Team</a>
            </li> -->
            <li class="nav-item">
              <a id="co" class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>


<script src="../JS/Nav.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../CSS/Nav.css" scoped></style>
