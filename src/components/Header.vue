<template>

<header>
<div class="head">
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="Homepage">E-Commerce</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
     
      <ul class="nav navbar-nav navbar-right">
        <li><a href="ProductListItem.vue"> Item 1</a></li>
        <li><a href="#"> Item 2</a></li>
        <li><a href="#">Item 3</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>
</header>

</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.head a{
margin:30px;
}
</style>