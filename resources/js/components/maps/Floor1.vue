<template>
  <div>
    <img class='floor' :src="'images/floor_plan/map-flr1.png'"/>
    <img class='pointer104' v-show="p104" :src="'images/icon/mapit-pin.png'"/>
    <img class='currentLocation' :src="'images/icon/nav-yah-btn.png'"/>
    <h1 class='label'>1st Floor</h1>
  </div>
</template>

<script>
export default {
    Name: 'floor1',
    data: function () {
        return{
            p104: false
        }
    },
    components: {
    },
    mounted: function(){
        console.log(this);
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
    .currentLocation{
        position: absolute;
        top: 280px;
        left: 505px;

    }
    .label{
        position: absolute;
            top: 840px;
             left: 150px;
        color: white;
    }


</style>
