<template>
  <q-page class="flex column">
    <q-banner v-if="!otherUserDetails.online" class="text-center bg-grey-4">
      {{ otherUserDetails.name }} is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
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
import { mapActions, mapState } from "vuex";
import mixinOtherUserDetails from "src/mixins/mixin-other-user-details";

export default defineComponent({
  mixins: [mixinOtherUserDetails],
  data() {
    return {
      newMessage: "",
    };
  },
  computed: {
    ...mapState("store", ["messages", "userDetails"]),
  },
  methods: {
    ...mapActions("store", [
      "firebaseGetMessages",
      "firebaseStopGettingMessages",
      "firebaseSendMessage",
    ]),
    sendMessage() {
      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: "me",
        },
        otherUserId: this.$route.params.otherUserId,
      });
    },
  },
  mounted() {
    // console.log(this.$route.params.otherUserId);
    this.firebaseGetMessages(this.$route.params.otherUserId);
  },
  unmounted() {
    this.firebaseStopGettingMessages();
  },
});
</script>
