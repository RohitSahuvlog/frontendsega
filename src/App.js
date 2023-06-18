import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './sega/reducers.js';
import rootSaga from './sega/sagas.js';
import ExamplePage from './Componets/ExamplePage.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <ExamplePage />
  </Provider>
);

export default App;
