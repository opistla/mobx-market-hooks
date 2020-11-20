import {
  counter, market, user
} from './stores';

const useStore = () => {
  return { counter, market, user };
}

export default useStore;