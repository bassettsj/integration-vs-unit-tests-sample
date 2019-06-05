// ./__tests__/counter.spec.js
import { shallowMount } from '@vue/test-utils';
import { render, fireEvent, cleanup } from '@testing-library/vue';
import Counter from '../counter.vue';
import CounterButton from '../counter-button.vue';

describe('Counter component', () => {
  describe('Unit Tests', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Counter);
    });

    it('should render', () => {
      // Doesn't catch the real snapshot.
      expect(wrapper).toMatchSnapshot();
    });

    it('should increment when button is clicked', () => {
      // Passes but it is not actually working together.
      wrapper.find(CounterButton).vm.$emit('click');
      expect(wrapper.vm.count).toBe(1);
    });
  });
  describe('Integration Tests', () => {
    afterEach(cleanup);
    it('should increment when you click the + button', async () => {
      const { getByText } = render(Counter);
      getByText('Times clicked: 0');
      const increment = getByText('+');
      await fireEvent.click(increment);
      getByText('Times clicked: 1');
    });

    it('should decrement when you click the - button', async () => {
      const { getByText } = render(Counter);
      getByText('Times clicked: 0');
      const increment = getByText('+');
      const decrement = getByText('-');
      await fireEvent.click(increment);
      getByText('Times clicked: 1');
      await fireEvent.click(decrement);
      getByText('Times clicked: 0');
    });
  });
});
