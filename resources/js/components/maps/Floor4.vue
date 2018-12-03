<template>
  <div>
    <img class='floor' :src="'images/floor_plan/map-flr4.png'"/>
    <img class='pointer104' :src="'images/icon/mapit-pin.png'"/>
    <h1 class='label'>4th Floor</h1>
  </div>
</template>

<script>
export default {
    Name: 'floor4',
    components: {
    }
};
</script>

<style scoped>
    .floor{
        position: relative;
    }
    .pointer104{
        position: absolute;
        top: 300px;
        left: 450px;

    }
    .label{
        position: absolute;
            top: 840px;
             left: 150px;
        color: white;
    }
</style>
