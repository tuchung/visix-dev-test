<template>
    <sui-segment raised>
        <h2 class="sui-header">About This Site</h2>
        <div class="paragraph">
            <sui-grid  class="column-content">
                <sui-grid-row>
                <h3>
                    build with:
                </h3>

                </sui-grid-row>
                <sui-grid-row>
                <sui-list>
                        <sui-list-item><v-icon color="red" name="brands/laravel" scale="2" /><strong class='list-label'>Laravel</strong></sui-list-item>
                        <sui-list-item><v-icon color="green" name="brands/vuejs" scale="2" /><strong class='list-label'>VueJS</strong></sui-list-item>
                        <sui-list-item><v-icon color="blue" name="brands/css3" scale="2" /><strong class='list-label'>Semantic UI</strong></sui-list-item>
                </sui-list>
                </sui-grid-row>
                <sui-grid-row>You can follow me on GitHub and find the project source code here:&nbsp;&nbsp;&nbsp;<a href="https://github.com/tuchung/resume-site">https://github.com/tuchung/resume-site</a></sui-grid-row>
                <br>
            </sui-grid>

        </div>

      </sui-segment>
</template>

<script>

export default {
    Name: 'AboutSite',
};
</script>

<style scoped>
    .column-content{
        margin: 10px;
    }
</style>

