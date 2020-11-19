import {
  counter, market
} from './stores';

const useStore = () => {
  return { counter, market };
}

export default useStore;