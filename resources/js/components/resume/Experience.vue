<template>
      <sui-segment raised>
        <a is="sui-label" color="yellow" class="profile-ribbon" ribbon>
          Experiences
        </a>
        <div class="paragraph">
           <h2 class="sui-header company">Agency Matrix: 2015-2018</h2>
           <h4 class="sui-header role">Team lead | Full-Stack Developer</h4>
           <p>Serve in a client-direct communication role translating business requirement into viable, scalable, accessible solutions. Collaborate with dev-team to drive development and deployment on web platform.</p>
           <sui-list bulleted>
                <sui-list-item><strong>Introduce, design, and develop Benefit Matrix.</strong> A standalone software that utilize Agency Matrix data and its core components to allow clients to enroll and manage customers in benefit plans.</sui-list-item>
                <sui-list-item><strong>Co-Design and co-develop Commercial Add-on.</strong> Overhaul the quote and customer registration system. Revitalize aged and under-utilize line of business datas and integrate them into the new implementation.</sui-list-item>
                <sui-list-item><strong>Remodel and improve existing features.</strong> Such as: custom letter, customer import, reporting, setup, company reassignment, custom question hierarchy, and e- signature.
</sui-list-item>
            </sui-list>
        </div>


      </sui-segment>

</template>

<script>
export default {
    Name: 'Experience'
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

