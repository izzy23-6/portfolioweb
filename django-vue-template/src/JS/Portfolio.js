import axios from 'axios'

export default {
  name: 'Portfolio',
  data () {
    return {
      portfolioData: {}
    }
  },
  mounted () {
    console.log('portfolio')
    axios.get('http://127.0.0.1:8000/api/portfolio/')
      .then((response) => {
        console.log(response)
        this.portfolioData = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
