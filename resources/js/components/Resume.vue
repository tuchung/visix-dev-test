<template>
  <sui-grid class="column-content"  :columns="2">
    <sui-grid-column>

        <profile></profile>
        <skill></skill>
    </sui-grid-column>
    <sui-grid-column>
        <experience></experience>
        <education></education>
        <reference></reference>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import profile from './resume/Profile'
import skill from './resume/Skill'
import education from './resume/Education'
import experience from './resume/Experience'
import reference from './resume/Reference'

export default {
    Name: 'Resume',
    components: { profile, skill, education, experience, reference }
};
</script>

<style scoped>
    .column-content{
        margin: 10px;
    }

</style>

