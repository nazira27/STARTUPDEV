<template>
  <div class="Flag">
		<div class="item"> 
			<img :src="getPic(help)" class="ImgItem">
		</div>
	</div>
</template>
<script>
export default {
	name: 'Flag',
	props: {
		help: String,
	},
	computed: {
	},
	methods: {
		getPic(val) {
			//console.log("background: url('../../assets/'" + this.help + "'.png')");
			//document.getElementsByClassName('item').style = "background: url('../../assets/'" + this.help + "'.png')";
			//return '../../assets/' + item + '.png';
			return require('../../assets/64/'+val+'.png');
		}
	},
}
</script>
<style lang="scss" scoped>
.item{
	//width: 30px;
	//height: 20px;
	//overflow: hidden;
}
.ImgItem{
	width:29px;
	transform: translate(0%, 15%);
	margin-right: 10px;
}
</style>