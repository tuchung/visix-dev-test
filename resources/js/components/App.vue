<template>
    <div>
      <sui-grid celled>
                <sui-grid-row>
                  <sui-grid-column :width="3">
                      <div id='directory'>
                          <directory/>
                      </div>
                  </sui-grid-column>
                  <sui-grid-column :width="13">
                    <router-view></router-view>
                  </sui-grid-column>
                </sui-grid-row>
      </sui-grid>
    </div>
</template>

<script>
import directory from './Directory'

export default {
    Name: 'App',
    components: {
        directory
    }
};
</script>

<style scoped>
    .column-content{
        margin: 10px;
    }
</style>
