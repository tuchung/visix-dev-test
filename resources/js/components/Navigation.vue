<template>
  <div>
    <sui-menu class="content-menu" pointing>

        <router-link
        is="sui-menu-item"
        v-for="item in routeItems"
        :active="isActive(item.name)"
        :key="item.name"
        :content="item.name"
        v-on:click.native="select(item.name)"
        :to="item.href"
        ></router-link>

        <a class="contact-link" is="sui-menu-item"
        :key="contact.name"
        :content="contact.name"
        @click="toggle()"
        />

    </sui-menu>
    <transition name="fade">
    <sui-message
            v-show="messageDiv"
            class="app-message"
            :content="message"
            positive
    />
    </transition>
    <contact-modal :external-toggle="modal"/>
  </div>
</template>

<script>
import Modal from './navigation/ContactModal';

export default {
  name: 'Navigation',
  data() {
    return {
      active: 'Resume',
      routeItems:
          [
              {
                name: "Resume",
                href: "/"
              },
              {
                name: "About",
                href: "/about"
              }
          ]
      ,
      contact:{
          name: "Contact Me"
      },
      modal: false,
      messageDiv: false,
      message: ''
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
        this.active = name;
    },
    setRoute(){
        var i;
        for(i=0;i < this.routeItems.length;i++){
            if(this.routeItems[i].href === this.$route.path){
                this.active = this.routeItems[i].name;
                return;
            }
        }
    },
    toggle(){
        this.modal = !this.modal;
    },
    toggleMessage(message){
        let self = this;
        this.messageDiv = true;
        this.message = message;

        setTimeout(function(){
            self.messageDiv = false;
        }, 4000);
    }
  },
  mounted(){
    this.setRoute();
    this.$on('message', message => {
        this.toggleMessage(message);
    });

  },
  watch: {
    '$route': function(from, to) {
      this.setRoute();
    }
  },
  components:{
      'contact-modal': Modal
  }
};

</script>

<style scoped>
    .content-menu.ui.menu,.app-message{
        margin: 10px;
    }

    .contact-link{
        cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
    opacity: 0;
    }

</style>

