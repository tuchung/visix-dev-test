<template>
 <sui-list class='directory' link>
    <a href='/#/1'><strong>1st Floor</strong></a>
    <a is="sui-list-item" href='/#/2'><strong>2nd Floor</strong></a>
    <a is="sui-list-item"  href='/#/3'><strong>3rd Floor</strong></a>
    <a is="sui-list-item"  href='/#/4'><strong>4th Floor</strong></a>

  <router-link
  is="sui-list-item" v-for="entry in entries"
   :key="entry.id"
   :content="stringConcat(entry.firstname, entry.lastname)"
    :to="{path: calculatePath(entry.floor, entry.office)}"></router-link>
 </sui-list>
</template>

<script>

export default {
  name: 'Directory',
  data: function(){
    return {
        idleTime: 0,
        entries: [
  {
    "id": 2,
    "lastname": "Alston",
    "firstname": "Ashton",
    "title": "Administrative Assistant",
    "office": "RCB 242",
    "floor": "2"
  },
  {
    "id": 5,
    "lastname": "Bennett",
    "firstname": "Colleen",
    "title": "Project/Program Specialist",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 9,
    "lastname": "Bradley",
    "firstname": "Tosha",
    "title": "Associate Director for Admissions Operations",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 10,
    "lastname": "Brady",
    "firstname": "Deborah",
    "title": "Fiscal Support Analyst",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 11,
    "lastname": "Brannon",
    "firstname": "Ashley",
    "title": "Financial Aid Analyst",
    "office": "RCB 206",
    "floor": "2"
  },
  {
    "id": 12,
    "lastname": "Brashear",
    "firstname": "Nita",
    "title": "Administrative Specialist III",
    "office": "RCB 206",
    "floor": "2"
  },
  {
    "id": 13,
    "lastname": "Brock",
    "firstname": "Jessica",
    "title": "Associate Director for Concurrent Enrollment",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 14,
    "lastname": "Campos",
    "firstname": "Rodrigo",
    "title": "Cashier",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 16,
    "lastname": "Crow",
    "firstname": "Angela",
    "title": "Director of Student Accounts",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 17,
    "lastname": "Dare",
    "firstname": "Jesse",
    "title": "Admissions Officer",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 90,
    "lastname": "Donnell",
    "firstname": "Shauna",
    "title": "Director of Admissions/AVP for Enrollment Management",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 22,
    "lastname": "Duncan",
    "firstname": "Mistie",
    "title": "Administrative Specialist III",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 24,
    "lastname": "Dunn",
    "firstname": "Lesly",
    "title": "Fiscal Support Analyst",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 30,
    "lastname": "Fry",
    "firstname": "Austin",
    "title": "Accounting Technician",
    "office": "RCB 206",
    "floor": "2"
  },
  {
    "id": 31,
    "lastname": "Griffin",
    "firstname": "Brandie ",
    "title": "Associate Director for Undergraduate Recruitment",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 32,
    "lastname": "Griffin",
    "firstname": "Jennifer",
    "title": "Project/Program Specialist",
    "office": "RCB 206",
    "floor": "2"
  },
  {
    "id": 33,
    "lastname": "Grigsby",
    "firstname": "Patti",
    "title": "Collection Officer",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 34,
    "lastname": "Hale",
    "firstname": "Tracey",
    "title": "Financial Aid Analyst",
    "office": "RCB 206",
    "floor": "2"
  },
  {
    "id": 39,
    "lastname": "Holland",
    "firstname": "Miranda",
    "title": "Fiscal Support Analyst",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 41,
    "lastname": "Hoyt",
    "firstname": "Mary",
    "title": "Card Office Supervisor",
    "office": "RCB 242",
    "floor": "2"
  },
  {
    "id": 42,
    "lastname": "Huggins",
    "firstname": "Samantha",
    "title": "Admissions Officer",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 45,
    "lastname": "Kline",
    "firstname": "Courtney",
    "title": "Administrative Specialist III",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 46,
    "lastname": "Koch",
    "firstname": "Kathy",
    "title": "Card Office Assistant",
    "office": "RCB 242",
    "floor": "2"
  },
  {
    "id": 47,
    "lastname": "Link",
    "firstname": "Margie",
    "title": "Project/Program Specialist",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 48,
    "lastname": "Lopez",
    "firstname": "Areana",
    "title": "Admissions Officer",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 51,
    "lastname": "McCoy",
    "firstname": "Mary Beth",
    "title": "Student Accounts Officer",
    "office": "RCB 241",
    "floor": "2"
  },
  {
    "id": 52,
    "lastname": "McMichael",
    "firstname": "Jamie",
    "title": "Financial Aid Analyst",
    "office": "RCB 206",
    "floor": "2"
  },
  {
    "id": 53,
    "lastname": "McNeely",
    "firstname": "Annie",
    "title": "Administrative Specialist III",
    "office": "RCB 104",
    "floor": "1"
  },
  {
    "id": 56,
    "lastname": "Ralph",
    "firstname": "Rhonda",
    "title": "Financial Aid Analyst",
    "office": "RCB 206",
    "floor": "2"
  },
  {
    "id": 57,
    "lastname": "Reed",
    "firstname": "Paula",
    "title": "Financial Aid Specialist",
    "office": "RCB 206",
    "floor": "2"
  }
]
,
    }
  },
  methods: {
      stringConcat: function(n,e){
         return n + " " + e;
      },
      calculatePath: function(root, position){
          position = position.slice(3);
          position = position.trim();
         return "/" + root + "/" + position;
      }
  },
  computed: {
  },
  mounted: function () {

  //reset page every 10 second
      var vm = this;
      setInterval(function(){
          vm.idleTime = vm.idleTime + 1;
          if (vm.idleTime > 10) {
                window.location.href = "/#/1";
          }
      }, 1000);
      $('body').mousemove(function (e) {
            vm.idleTime = 0;
        });
      $('body').keypress(function (e) {
            vm.idleTime = 0;
      });


  }
};

</script>

<style scoped>
    .directory{
        height: 310px;
        overflow: auto;
        background-color: white;
    }
</style>

