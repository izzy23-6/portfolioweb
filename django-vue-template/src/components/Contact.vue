<template>
  <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Me</h2>
            <h3 class="section-subheading text-muted">I am available for hire, so please feel free to get in contact with me via the message box below, or via my social media with any questions or concerns. I will respond as soon as I can.</h3>
          </div>
        </div>
        <div class="row Text-Center">
          <div class="col-md-12">          
            <span class="fa-stack fa-4x social-icons">    
              <a href="https://www.facebook.com/israel.i.clark" target="_blank">                    
              <i id="facebook" class="fab fa-facebook fa-stack-1x fa-inverse"></i>
              </a>
            </span>                         
            <span class="fa-stack fa-4x social-icons">
              <a href="https://www.linkedin.com/in/israel-clark/" target="_blank">
              <i id="linkedin" class="fab fa-linkedin fa-stack-1x fa-inverse"></i>
              </a>
            </span>
            <span class="fa-stack fa-4x social-icons">
              <a href="https://twitter.com/Thaking00123" target="_blank">
              <i id="twitter" class="fab fa-twitter fa-stack-1x fa-inverse"></i>
              </a>
            </span>
            <span class="fa-stack fa-4x social-icons">
              <a href="https://github.com/izzy23-6" target="_blank">
              <i id="github" class="fab fa-github fa-stack-1x fa-inverse"></i>
              </a>
            </span>
          </div>
          </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" @submit.prevent="onSubmit" novalidate>
              <div class="row">
                <div class="col-md-6">
                   <div :class="{'form-group':  true }">
                    <input class="form-control"
                    id="name"
                    name="name"
                    type="text"
                    ref = 'input'
                    placeholder="Your Name *"
                    v-validate="'required'"
                    v-model="name"
                    />
                    <p v-show="errors.has('name')" class="help-block text-danger">{{ errors.first('name') }}</p>
                  </div>
                  <div :class="{'form-group': true}">
                    <input :class="{'form-control': true}"
                    id="email"
                    name="email"
                    type="email"
                    ref = 'input'
                    placeholder="Your Email *"
                    v-validate= "'required|email'"
                    v-model="email"
                    />
                    <p v-show="errors.has('email')" class="help-block text-danger">{{ errors.first('email') }}</p>
                  </div>
                  <div :class="{'form-group':  true}">
                    <input class="form-control"
                    id="phone"
                    name="phone"
                    type="tel"
                    ref = 'input'
                    placeholder="Your Phone *"
                    v-validate="'required'"
                    v-model="phone"
                    />
                     <p v-show="errors.has('phone')" class="help-block text-danger">{{ errors.first('phone') }}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div :class="{'form-group': true}">
                    <textarea class="form-control"
                    id="message"
                    name="message"
                    placeholder="Your Message *"
                    ref="input"
                    v-validate= "'required'"
                    v-model="message"
                    ></textarea>
                    <p v-show="errors.has('message')" class="help-block text-danger">{{ errors.first('message') }}</p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                  id="sendMessageButton"
                  class="btn btn-primary btn-xl text-uppercase"
                  type="submit"                  
                  v-show="errors.any() === show"                 
                  @click.prevent="onSubmit"
                  >Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script src="../JS/Contact.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../CSS/Contact.css" scoped>

</style>
