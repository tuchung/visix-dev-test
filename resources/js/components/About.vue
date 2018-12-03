<template>
  <sui-grid class="column-content">
    <sui-grid-column>
        <profile></profile>
        <site></site>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import profile from './about/AboutMe'
import site from './about/AboutSite'

export default {
    Name: 'About',
    components: {
            profile, site
        }
};
</script>

<style scoped>
    .column-content{
        margin: 10px;
    }
</style>

