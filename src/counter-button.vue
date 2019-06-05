<template>
  <button @click="onClick($event)">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    onClick($event) {
      $event.preventDefault();
      this.$emit('clicked');
    },
  },
};
</script>
