<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <counter-button @click="increment()">
      +
    </counter-button>
    <counter-button @click="decrement()">
      -
    </counter-button>
  </div>
</template>

<script>
import CounterButton from './counter-button.vue';

export default {
  components: {
    CounterButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
};
</script>
