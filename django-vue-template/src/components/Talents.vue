<template>
<!-- skills section -->
  <section id="services">
      <div class="container" id="Skills">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Skills</h2>
            <h3 class="section-subheading text-muted">To see my skills, click the button below.</h3>
          </div>
        </div>
        <div class="row text-center" v-if="skills">
          <div class="col-md-4">
            <span class="fa-stack fa-7x">
              <i class="fab fa-python fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">{{ skillsData[0].name }}</h4>
            <p class="text-muted">{{ skillsData[0].description }}</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-7x">
              <i class="fas fa-database fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">{{ skillsData[1].name }}</h4>
            <p class="text-muted">{{ skillsData[1].description }}</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-7x">
              <i class="fab fa-js-square fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">{{ skillsData[2].name }}</h4>
            <p class="text-muted">{{ skillsData[2].description }}</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-7x">
              <i class="fab fa-css3 fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">{{ skillsData[3].name }}</h4>
            <p class="text-muted">{{ skillsData[3].description }}</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-7x">
              <i class="fab fa-html5 fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">{{ skillsData[4].name }}</h4>
            <p class="text-muted">{{ skillsData[4].description }}</p>
          </div>
      </div>
      <div class="row text-center">
        <div class="col-md-12">
        <button type="button"
        id="skills" 
        class="btn btn-primary btn-xl text-uppercase" 
        @click="seeSkills">See skills</button>
        </div>
      </div>
      </div>
    </section>
</template>
<script src="../JS/Talents.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../CSS/Talents.css" scoped></style>
