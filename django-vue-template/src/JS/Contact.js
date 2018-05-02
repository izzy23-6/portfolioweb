import axios from 'axios'
import VeeValidate from 'vee-validate'
import $ from 'jquery'

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
    // form validation
    onSubmit () {
      this.$validator.validateAll().then(result => {
        const formData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        }
        // form validation end
        if (result) {
          // api call
          axios
            .post(apiUrl, formData)
            .then(response => this.$nextTick(() => {
              success: {
          // Success message
                $('#success').html("<div class='alert alert-success'>")
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append('</button>')
                $('#success > .alert-success')
            .append('<strong>Your message has been sent. </strong>')
                $('#success > .alert-success')
            .append('</div>')
          // clear all fields
                $('#contactForm').trigger('reset')
              } 
            }))
            .catch(error => this.$nextTick(() => {
              errors: {
          // Fail message
                $('#success').html("<div class='alert alert-danger'>")
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert'           aria-hidden='true'>&times;")
                  .append('</button>')
                $('#success > .alert-danger').append($('<strong>').text('Sorry ' + name + ', it seems that my mail     server is not responding. Please try again later!'))
                $('#success > .alert-danger').append('</div>')
          // clear all fields
                $('#contactForm').trigger('reset')
              }
            }))
        }
      })
      // form reset function
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
