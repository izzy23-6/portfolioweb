import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/skills/'

export default {
  name: 'Talents',
  data () {
    return {
      skillsData: {},
      skills: false
    }
  },
  mounted () {
    console.log('mounted')
    axios.get(API_URL)
      .then((response) => {
        console.log(response)
        this.skillsData = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    seeSkills: function () {
      this.skills = !this.skills
    }
  }
}
