<template>
    <sui-segment raised>
        <h2 class="sui-header">About Me</h2>
        <div class="paragraph">
            <sui-grid celled class="column-content">
                <sui-grid-row>
                <sui-grid-column :width="3">
                    <img  :src="'images/profile.png'"/>
                </sui-grid-column>
                <sui-grid-column :width="13">
                <h3>
                I am of vietnamese/chinese descendent. I came to the United States when I was ten years old.
                I attended and graduated from Georgia Gwinnett College in 2015. I worked for the college
                as a technical support specialist for 2 years. Right out of school, I was hired to work as a junior full stack
                developer at Agency Matrix, an insurance management software company. In one year, I was promoted to
                project lead developer for the benefit project. two year later, my team and I continue to develop for benefit project and the new commercial conversion project.
                In addition, I was nominated for Amazing Accomplishment in 2017 by WORK SOURCE GEORGIA.
                </h3>
                </sui-grid-column>
                </sui-grid-row>
            </sui-grid>

        </div>

      </sui-segment>
</template>

<script>

export default {
    Name: 'AboutMe',
};
</script>

<style scoped>
    .column-content{
        margin: 10px;
    }
</style>

