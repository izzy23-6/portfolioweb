/* eslint-disable no-new */
import axios from 'axios'

export default {
  name: 'About',
  data () {
    return {
      aboutData: []
    }
  },

  mounted () {
    console.log("about");
    axios
      .get("http://127.0.0.1:8000/api/about/")
      .then(response => {
        console.log(response);
        this.aboutData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.aboutData)
  }
}
