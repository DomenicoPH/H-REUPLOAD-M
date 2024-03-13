/*  
STORE
Contiene:
♦ Imports: {createStore}, reducer
♦ Store (función)
*/

//  STORE : DEMO CONFIG
/*
    import {createStore} from 'redux'
    import reducer from './reducer'

    const store = createStore(reducer)

    export default store;
*/

/*
CONEXIÓN ENTRE REACT Y REDUX
• Instalación de React-Redux --> npm install react-redux
• index.jsx/main.jsx imports:
    1. {Provider} de react-redux
    2. store de ./redux/store
• Provider envuelve a App y toma 'store' como prop:
    <Provider store={store}>
      <App />
    </Provider>
*/

// STORE: Config. estándar
import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import { thunk } from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;