import axios from 'axios'
import VeeValidate from 'vee-validate'
import $ from 'jquery'
import { TweenMax, TimelineMax } from 'gsap'

let apiUrl = 'http://127.0.0.1:8000/api/contact/'

export default {
  name: 'Contact',
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      show: false
    }
  },
  methods: {
    onSubmit () {
      this.$validator.validateAll().then(result => {
        const formData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        }
        if (result) {
          console.log(formData)
          axios
            .post(apiUrl, formData)
            .then(response => 
            function success () {
              var tl = TimelineMax()

            }
            )
            .catch(error => console.log(error))
        }
      })
      this.$nextTick().then(() => {
        this.name = ''
        this.email = ''
        this.phone = ''
        this.message = ''
        this.$validator.reset()
      })
    }
  }
}
