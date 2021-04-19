import { Provider } from 'react-redux';
import { RouterOnly } from '../router';
import store from './store';


export const ReduxAndRouter: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterOnly/>
    </Provider>
  );
};