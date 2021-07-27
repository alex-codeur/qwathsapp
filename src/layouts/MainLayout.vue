<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn to="/" icon="arrow_back" flat dense label="Back" />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        <q-btn
          v-if="!userDetails.userId"
          to="/auth"
          class="absolute-center login"
          icon="account_circle"
          flat
          dense
          label="Login"
        />
        <q-btn
          v-else
          @click="logoutUser"
          class="absolute-center login"
          icon="account_circle"
          flat
          dense
        >
          Logout<br />
          {{ userDetails.name }}
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("store", ["userDetails"]),
    title() {
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "Qwathsapp";
      else if (currentPath == "/chat") return "Chat";
      else if (currentPath == "/auth") return "Login";
    },
  },
  methods: {
    ...mapActions("store", ["logoutUser"]),
  },
});
</script>

<style lang="sass">
.login
  margin-right: 0
  margin-left: 100px
.q-toolbar
  .q-btn
    line-height: 1.2
</style>>
