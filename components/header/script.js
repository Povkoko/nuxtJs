import api from '~/plugins/api';
import global from '~/plugins/globalfunction';

export default {
  name: 'hello',
  data() {
    return {
      form_show : false,
      drop: false,
      dropGloss : false,
      Web3 : false,
      dropver: false,
      form_all : false,
    }
  },
  components: {

  },
  created() {

  },
  methods: {
    close_nav(){
      // alert("hello");
      if(this.form_show){
        this.form_show = false;
      }else{
        this.form_show = true;
      }
    },
    dorpDown(){
      if(this.drop){
        this.drop = false;
      }else{
        this.drop = true;
      }
      // alert(123);
    },
    dorpGlossay(){
      if(this.dropGloss){
        this.dropGloss = false;
      }else{
        this.dropGloss = true;
      }
    },
    dorpWeb(){
      if(this.Web3){
        this.Web3 = false;
      }else{
        this.Web3 = true;
      }
    },
    dorpversion(){
      if(this.dropver){
        this.dropver = false;
      }else{
        this.dropver = true;
      }
    }
    
  }
  }

