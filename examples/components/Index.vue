<template>
  <div class="Index">
		<h1>vue</h1>
		 <ni-button size="small">small</ni-button>
		 <ni-button size="normal">normal</ni-button>
		 <ni-button size="large">large</ni-button>
		 <ni-input type="text" ></ni-input>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	created(){
		this.$axios.get('api').then((response) => {
			console.log(response.data)
		}).catch(function(err){
			console.log(err);
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
