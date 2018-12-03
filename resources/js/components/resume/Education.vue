<template>
      <sui-segment raised>
        <a is="sui-label" color="orange" class="profile-ribbon" ribbon>
          Education
        </a>
        <div class="paragraph">
           <h2 class="sui-header company">Georgia Gwinnett College: 2010-2015</h2>
           <h4 class="sui-header role">Bachelor's Degree Of Computer Science</h4>
        </div>

      </sui-segment>

</template>

<script>
export default {
    Name: 'Education'
};
</script>

<style scoped>
    .profile-ribbon{
        font-size: 20px;
    }

    .paragraph{
        margin-top: 10px;
    }

    .company{
        color:lightskyblue;
    }

    .role{
        color: lightgrey;
    }
</style>

