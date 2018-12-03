<template>
 <sui-list class='directory' link>
    <sui-list-item active>Home</sui-list-item>
    <a is="sui-list-item">About</a>
    <a is="sui-list-item">Jobs</a>
    <a is="sui-list-item">Team</a>

  </sui-list>
</template>

<script>

export default {
  name: 'Directory'
};

</script>

<style scoped>
    .directory{
        height: 310px;
        overflow: auto;
        background-color: white;
    }
</style>

