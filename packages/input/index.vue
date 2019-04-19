<template>
	<div>
		<input type="text" name="" id="" :class="classes" >
	</div>
</template>

<script>
	export default{
		name:'ni-input',
		props:{
			size:{
				type: String,
				default: 'normal'
			}
		},
		computed:{
			classes(){
				return [
					`${this.size}-input`,
				]
			}
		}
	}
</script>

<style>
	.small-input{
		width: 20%;
		padding: 5px ;
	}
	.normal-input{
		width: 40%;
		padding: 10px;
	}
</style>
