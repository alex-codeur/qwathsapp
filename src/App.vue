<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  methods: {
    ...mapActions("store", ["handleAuthStateChanged"]),
  },
  mounted() {
    this.handleAuthStateChanged();
  },
});
</script>
