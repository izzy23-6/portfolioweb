import axios from 'axios'

export default {
  name: 'Portfolio',
  data () {
    return {
      portfolioData: {}
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:8000/api/portfolio/')
      .then((response) => {
        this.portfolioData = response.data
      })
      // .catch((error) => {}) - uncomment to debug
  }
}
