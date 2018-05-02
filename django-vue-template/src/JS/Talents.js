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
    axios.get(API_URL)
      .then((response) => {
        this.skillsData = response.data
      })
      // .catch((error) => {}) uncomment to debug
  },
  methods: {
    seeSkills: function () {
      this.skills = !this.skills
    }
  }
}
