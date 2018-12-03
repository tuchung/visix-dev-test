<template>
  <div>
    <sui-modal class='contact-modal' size="mini" v-model="open">
      <sui-modal-header class="contact-header">
          Contact Via
        <v-icon class="close-icon" v-on:click.native="toggle()" name="times-circle" scale="2"/>
      </sui-modal-header>
      <sui-modal-content>
        <sui-modal-description>
          <sui-header>By Phone:</sui-header>
          <div>
              <v-icon name="mobile-alt"/>&nbsp;&nbsp;(770) 402-6324
          </div>
          <sui-header>By Email:</sui-header>
          <div>
              <v-icon name="envelope"/>&nbsp;&nbsp;tuthienchung@gmail.com
          </div>
          <sui-header>Or Send Me A Message Directly Here:</sui-header>
          <div>
              <div class="ui form">
                <div class="field">
                    <sui-label>
                        Subject
                    </sui-label>
                    <sui-input v-model="subject" placeholder="Default: No Subject" />
                </div>
                <div class="field">
                    <sui-label>
                        Body
                    </sui-label>
                    <textarea v-model="content"></textarea>
                </div>
              </div>
          </div>

        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button v-show="sendButton" positive @click.native="sendEmail()">
          Send
        </sui-button>
        <!-- loading button -->
        <sui-button v-show="!sendButton" loading positive content="loading">Send</sui-button>
      </sui-modal-actions>
    </sui-modal>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact-Modal',
  props: {externalToggle: false},
  data() {
    return {
      open: false,
      content: '',
      subject: '',
      success: false,
      error: false,
      successMessage: '',
      errorMessage: '',
      sendButton: true,
      messageDiv: true
    };
  },
  methods: {
    clearFields(){
        this.subject = '';
        this.content = '';
    },
    toggle() {
      this.open = !this.open;
    },
    toggleSend(){
        this.sendButton = !this.sendButton;
    },
    sendEmail(){
        let self = this;
        this.toggleSend();
        axios.post('/mail/send',
         {
             subject: this.subject,
             content: this.content
         }
        )
        .then(function(response) {
            self.toggleSend();
            self.clearFields();
            self.toggle();
            self.$parent.$emit('message', 'Email Successfully Send.');
        }).catch(function (error) {
            console.log(error);
            self.toggleSend();
            alert('Error. Fail to Send.');
        });

    }
  },
  watch:{
      externalToggle: function(oldVal, newVal){
          this.toggle();
      }
  },
  mounted: function(){
      console.log(this.sendButton);
  }
};

</script>

<style>

@media only screen and (min-width: 767px){
    .contact-modal .ui.modal{
        top: 5%;
        left: 30%;
        width: 40%;
        height: 91%;
        overflow: auto;
    }
}
@media only screen and (max-width: 766px){
    .contact-modal .ui.modal{
        width: 100%;
    }
}


    .contact-modal .header.contact-header{
        background-color: #3cade0;
    }

    .close-icon{
        float: right;
        cursor: pointer;
    }


</style>

