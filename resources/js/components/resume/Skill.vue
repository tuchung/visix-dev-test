<template>
      <sui-segment raised>
        <a is="sui-label" color="green" class="profile-ribbon" ribbon>
          Skill
        </a>
        <div class="paragraph">
            <h2 is="sui-header">Front-End</h2>
            <h3 is="sui-header">General</h3>

            <sui-grid class="column-content"  :columns="2">
                <sui-grid-column>
                <sui-list>
                    <!-- As components -->
                    <sui-list-item>
                                <v-icon color="orange" name="brands/html5" scale="2" /><strong class='list-label'>HTML</strong>
                    </sui-list-item>
                    <sui-list-item>
                                <v-icon color="blue" name="brands/css3" scale="2" /><strong class='list-label'>CSS</strong>
                    </sui-list-item>
                </sui-list>

            </sui-grid-column>
                <sui-grid-column>
                    <sui-list>
                        <sui-list-item>
                            <v-icon color="pink" name="brands/sass" scale="2" /><strong class='list-label'>SASS</strong>
                        </sui-list-item>
                        <sui-list-item>
                            <v-icon style="background-color: black;" color="yellow" name="brands/js-square" scale="2" /><strong class='list-label'>Javascript / Jquery</strong>
                        </sui-list-item>
                    </sui-list>
            </sui-grid-column>
            </sui-grid>

            <h3 is="sui-header">CSS Framework</h3>
            <sui-grid class="column-content"  :columns="2">
                <sui-grid-column>
                <sui-list>
                    <!-- As components -->
                    <sui-list-item>
                            <v-icon color="blue" name="brands/css3" scale="2" /><strong class='list-label'>Semantic UI</strong>
                    </sui-list-item>
                </sui-list>

            </sui-grid-column>
                <sui-grid-column>
                    <sui-list>
                        <sui-list-item>
                            <v-icon color="blue" name="brands/css3" scale="2" /><strong class='list-label'>Bootstrap</strong>
                        </sui-list-item>
                    </sui-list>
            </sui-grid-column>
            </sui-grid>

            <h3 is="sui-header">JS Framework</h3>
            <sui-grid class="column-content"  :columns="2">
                <sui-grid-column>
                <sui-list>
                    <!-- As components -->
                    <sui-list-item>
                            <v-icon color="green" name="brands/vuejs" scale="2" /><strong class='list-label'>VueJS</strong>
                    </sui-list-item>
                </sui-list>

            </sui-grid-column>
                <sui-grid-column>
                    <sui-list>
                        <sui-list-item>
                            <v-icon color="red" name="brands/angular" scale="2" /><strong class='list-label'>AngularJs</strong>
                        </sui-list-item>
                    </sui-list>
            </sui-grid-column>
            </sui-grid>


            <h2 is="sui-header">Back-End</h2>
            <h3 is="sui-header">General</h3>

            <sui-grid class="column-content"  :columns="2">
                <sui-grid-column>
                <sui-list>
                    <!-- As components -->
                    <sui-list-item>
                                <v-icon color="violet" name="brands/php" scale="2" /><strong class='list-label'>PHP</strong>
                    </sui-list-item>
                </sui-list>

            </sui-grid-column>
                <sui-grid-column>
                    <sui-list>
                        <sui-list-item>
                                <v-icon color="green" name="brands/node-js" scale="2" /><strong class='list-label'>NodeJS</strong>
                        </sui-list-item>
                    </sui-list>
            </sui-grid-column>
            </sui-grid>

            <h3 is="sui-header">PHP FrameWork</h3>

            <sui-grid class="column-content"  :columns="2">
                <sui-grid-column>
                <sui-list>
                    <!-- As components -->
                    <sui-list-item>
                                <v-icon color="green" name="dove" scale="2" /><strong class='list-label'>Phalcon</strong>
                    </sui-list-item>
                </sui-list>

            </sui-grid-column>
                <sui-grid-column>
                    <sui-list>
                        <sui-list-item>
                                <v-icon color="red" name="brands/laravel" scale="2" /><strong class='list-label'>Laravel</strong>
                        </sui-list-item>
                    </sui-list>
            </sui-grid-column>
            </sui-grid>

            <h2 is="sui-header">Database</h2>

            <sui-grid class="column-content"  :columns="2">
                <sui-grid-column>
                <sui-list>
                    <!-- As components -->
                    <sui-list-item>
                                <v-icon color="teal" name="database" scale="2" /><strong class='list-label'>MYSQL</strong>
                    </sui-list-item>
                </sui-list>

            </sui-grid-column>
                <sui-grid-column>
                    <sui-list>
                        <sui-list-item>
                                <v-icon color="teal" name="database" scale="2" /><strong class='list-label'>SQLite</strong>
                        </sui-list-item>
                    </sui-list>
            </sui-grid-column>
            </sui-grid>

            <h2 is="sui-header">Server</h2>

            <sui-grid class="column-content"  :columns="1">
                <sui-grid-column>
                <sui-list>
                    <!-- As components -->
                    <sui-list-item>
                                <v-icon color="black" name="server" scale="2" /><strong class='list-label'>NGINX</strong>
                    </sui-list-item>
                </sui-list>

            </sui-grid-column>
            </sui-grid>

            <h2 is="sui-header">VCS</h2>

            <sui-grid class="column-content"  :columns="2">
                <sui-grid-column>
                <sui-list>
                    <!-- As components -->
                    <sui-list-item>
                                <v-icon color="orange" name="brands/git-square" scale="2" /><strong class='list-label'>Git</strong>
                    </sui-list-item>
                </sui-list>

            </sui-grid-column>
            </sui-grid>


        </div>

      </sui-segment>

</template>

<script>
export default {
    Name: 'Skill'
};
</script>

<style scoped>

    .profile-ribbon{
        font-size: 20px;
    }

    .paragraph{
        margin-top: 10px;
    }
</style>

