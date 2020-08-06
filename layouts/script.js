import navbar from '~/components/menu';
// import tophead from '~/components/header';
import headbar from '~/components/header';

export default {
  name: 'layout',
  data() {
    return {
      clos_formhead:false,
    }
  },
  components: {
    navbar,
    headbar,
    // tophead
  },
  mounted() {

  },
  created() {

  },

  watch: {
    '$route.fullPath': function () {

    }
  },
  methods: {
    
  }
  
}
