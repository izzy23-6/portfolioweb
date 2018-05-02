<template>
  <section id="about">
      <div class="container" id="ABO">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">About Me</h2>
            <h3 class="section-subheading text-muted"></h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="../assets/1.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>{{ aboutData[0].year }}</h4>
                    <h4 class="subheading">{{ aboutData[0].title }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p id ='first' class="text-muted"> {{ aboutData[0].summary }}</p>
                  </div>
                </div>
              </li>
               <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="../assets/3.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>{{ aboutData[2].year }}</h4>
                    <h4 class="subheading">{{ aboutData[2].title }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">{{ aboutData[2].summary }}</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src="../assets/4.jpg" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>{{ aboutData[1].year }}</h4>
                    <h4 class="subheading">{{ aboutData[1].title }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">{{ aboutData[1].summary }}</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4>Be Part
                    <br>Of My
                    <br>Next Chapter!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>
<script src="../JS/About.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../CSS/About.css" scoped></style>
