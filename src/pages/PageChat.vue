<template>
  <q-page class="flex column">
    <q-banner class="text-center bg-grey-4"> User offline. </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <div class="row">
            <div class="col-11">
              <q-input
                outlined
                rounded
                v-model="newMessage"
                label="Message"
                dense
                bg-color="white"
                class="full-width"
              >
              </q-input>
            </div>
            <div class="col-1">
              <q-btn type="submit" round dense flat color="white" icon="send" />
            </div>
          </div>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      newMessage: "",
      messages: [
        {
          text: "Hey Jim, how are you?",
          from: "me",
        },
        {
          text: "Good thanks, Alex! How are you?",
          from: "them",
        },
        {
          text: "Pretty good!",
          from: "me",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
    },
  },
});
</script>
