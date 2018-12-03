<template>
      <sui-segment raised>
        <a is="sui-label" color="teal" class="profile-ribbon" ribbon>
          Reference
        </a>

        <sui-list bulleted>
                <sui-list-item>Nicholas Malacarne - <strong>Senior Software Developer</strong> | (678) 235 - 5635</sui-list-item>
                <sui-list-item>Robert Benson - <strong>Software Developer</strong> | (706) 255 - 4113</sui-list-item>
                <sui-list-item>Tyler Reed - <strong>Software Developer</strong> | (770) 316 - 2403</sui-list-item>
        </sui-list>


      </sui-segment>

</template>

<script>
export default {
    Name: 'Reference'
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

