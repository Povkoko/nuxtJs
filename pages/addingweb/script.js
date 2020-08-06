import global from '~/plugins/globalfunction';

export default {
  name: 'content',
  data() {
    return {
      baseURL: "http://....",
      data: "",
      form_pop1 : false,
      form_pop2 : false,
      Form_newObj : {
        index : "",
        name_em : "",
        salary_em : "",
        age_em : "",
      },
      delete : {
        index : -1,
      }
    }
  },
  components: {

  },

  created() {
    this.getDate();
  },

  mounted() {

  },
  methods: {
    getDate() {
      this.$axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => {
          this.data = response.data;
          console.log(response.data);
        });

    },
    show(){
      this.form_pop1 = true;
    },
    cencel(){
      this.form_pop1 = false;
    },

    addOkay(){
      this.form_pop1 = false;
      let body = {
        name : this.Form_newObj.name_em,
        salary : this.Form_newObj.salary_em,
        age : this.Form_newObj.age_em,
      };
      this.$axios.post('http://dummy.restapiexample.com/api/v1/create',body).then(response => {
        // alert(response.data.data.name);
          let newObj ={
            id : response.data.data.id,
            employee_name : response.data.data.name,
            employee_salary : response.data.data.salary,
            employee_age : response.data.data.age,
          }
          console.log(newObj);
          this.data.data.unshift(newObj);
      })
    },

    Form_Update(index){
      // alert(this.data.data[index].id)
      this.form_pop2 = true;
      this.Form_newObj.index = this.data.data[index].id;
      this.Form_newObj.name_em = this.data.data[index].employee_name;
      this.Form_newObj.salary_em = this.data.data[index].employee_salary;
      this.Form_newObj.age_em = this.data.data[index].employee_age;
    },
    form_close(){
      this.form_pop2 = false;
    },
    form_update(index){
      // alert(this.Form_newObj.index);
      let body = {
        name : this.Form_newObj.name_em,
        salary : this.Form_newObj.salary_em,
        age : this.Form_newObj.age_em,
      };

    this.$axios.put('http://dummy.restapiexample.com/api/v1/update/'+ this.Form_newObj.index, body)
    .then(response => {
      // alert(this.data.data[this.Form_newObj.index].id)
      this.data.data[this.Form_newObj.index].employee_name = response.data.name;
      this.data.data[this.Form_newObj.index].employee_salary = response.data.salary;
      this.data.data[this.Form_newObj.index].employee_age = response.data.age;

      this.Form_newObj.name_em = "";
      this.Form_newObj.salary_em = "";
      this.Form_newObj.age_em = "";

    })

    },
    Form_delete(index){
      this.delete.index = index;
      this.$axios.delete('http://dummy.restapiexample.com/api/v1/delete/'+this.delete.index)
      .then(response => {
        this.data.data.splice(index,1);
      })
    }
    
  }

}
