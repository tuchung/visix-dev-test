<template>
<div class='title'>
    <div class="logo"><img :src="'images/code_logo.png'"/></div>
   <h1 class='title-margin-left header-margin' is="sui-header">Tu T. Chung</h1>
   <sui-divider class="title-margin-left title-divider" section />
   <h5 class="light-blue title-margin-left header-margin">Full Stack Developer</h5>
</div>

</template>

<script>
export default {
    Name: 'Title'
};
</script>

<style scoped>
    .light-blue{
        color: lightblue;
    }

    .title-margin-left{
        margin-left: 100px;
    }

    .title-divider{
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 100px;
        width: 150px;
    }

    .header-margin{
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .logo{
        float: left;
        clear: both;
    }

    .logo img{
    width: 50px;
    margin-top: 10px;
    margin-left: 25px;
    }

</style>


