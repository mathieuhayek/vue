<template>

<body>
<div  class="all">

<div class="first">
<img src="../assets/maison.png">
<p>Maison</p>
<p>Mathieu</p>
<p>500000$</p>
</div>

<div class="second">
<img src="../assets/car.jpg">
<p>Voiture</p>
<p>Mathieu</p>
<p>50000$</p>
</div>

<div class="third">
<img src="../assets/lap.jpg">
<p>Laptope</p>
<p>Mathieu</p>
<p>5000$</p>
</div>

<div class="forth">
<img src="../assets/iphone.jpeg">
<p>Iphone 11</p>
<p>Mathieu</p>
<p>500$</p>
</div>

</div>
</body>




</template>


<style scoped>

.all{
display:flex;
justify-content:space-between;
padding:80px;
}

img{
height:150px;}
</style>





<script>

export default {
  name: 'ProductListItem',
  props: {
    msg: String
  }
}

</script>