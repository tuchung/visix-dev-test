<template>
  <div>
    <img class='floor' :src="'images/floor_plan/map-flr2.png'"/>
    <img class='pointer206' v-show="p206" :src="'images/icon/mapit-pin.png'"/>
    <img class='pointer241' v-show="p241" :src="'images/icon/mapit-pin.png'"/>
    <img class='pointer242' v-show="p242" :src="'images/icon/mapit-pin.png'"/>
    <h1 class='label'>2nd Floor</h1>
  </div>
</template>

<script>
export default {
    Name: 'floor2',
    props: {
        p206: false,
        p241: false,
        p242: false,
    },
    components: {
    },
    mounted: function(){
        console.log(this.p206);
    }
};
</script>

<style scoped>
    .floor{
        position: relative;
    }
    .pointer206{
        position: absolute;
        top: 250px;
        left: 450px;

    }
    .pointer241{
        position: absolute;
        top: 350px;
        left: 600px;

    }

    .pointer242{
        position: absolute;
        top: 350px;
        left: 760px;

    }
    .label{
        position: absolute;
            top: 840px;
             left: 150px;
        color: white;
    }
</style>
