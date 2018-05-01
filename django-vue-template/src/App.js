/* eslint-disable no-new */
import Nav from './components/Nav.vue'
import HelloWorld from './components/HelloWorld.vue'
import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Talents from './components/Talents.vue'
import { TweenMax, Power1, Back } from 'gsap'
import { SplitText } from 'gsap'
import $ from 'jquery'

const gsap = require('gsap')

let scrollmagic
if (process.browser) {
  scrollmagic = require('scrollmagic')
  require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')
  require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
}

export default {
  name: 'app',
  components: {
    'app-nav': Nav,
    'app-helloworld': HelloWorld,
    'app-portfolio': Portfolio,
    'app-about': About,
    'app-contact': Contact,
    'app-talents': Talents
  },
  // scroll animations
  methods: {
    //   //navbar animations
    anime () {
      const controller = new scrollmagic.Controller()
      const tweenmax = TweenMax.to('#mainNav', 2, {
        backgroundColor: '#212529',
        opacity: 0.9,
        ease: Power1.easeIn
      })
      new scrollmagic.Scene({
        offset: 500,
        triggerElement: '#home'
      }) // point of execution
        .setTween(tweenmax)
        .addIndicators({ name: 'scene1 - no duration' })
        .addTo(controller)

      new scrollmagic.Scene({
        duration: '100%',
        triggerElement: '#home'
      }) // point of execution
        .setClassToggle('#NavB', 'active')
        .addIndicators({ name: 'homeScene' })
        .addTo(controller)

      new scrollmagic.Scene({
        offset: 200,
        duration: '100%',
        triggerElement: '#services'
      })
        .setClassToggle('#sk', 'active')
        .addIndicators({ name: 'skillsScene' })
        .addTo(controller)

      new scrollmagic.Scene({
        duration: '100%',
        triggerElement: '#portfolio'
      })
        .setClassToggle('#po', 'active')
        .addIndicators({ name: 'portfolioScene' })
        .addTo(controller)

      new scrollmagic.Scene({
        duration: 2000,
        offset: 1200,
        triggerElement: '#portfolio',
        triggerHook: 1,
        reverse: true
      })
        .setClassToggle('#ab', 'active')
        .addIndicators({ name: 'aboutScene' })
        .addTo(controller)

      new scrollmagic.Scene({
        duration: 800,
        triggerElement: '#contact'
      })
        .setClassToggle('#co', 'active')
        .addIndicators({ name: 'contactScene' })
        .addTo(controller)
    },
    // effects: () => {
    //   TweenMax.to()
    // }
  },
  mounted () {
    this.$nextTick(function () {
      return this.anime()
    })
  }
}
