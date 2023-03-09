import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppStore
, { PersistedAppStore }
  from './Configurations/AppStore';
import App from './App';

// import * as serviceWorkerRegistration from './serviceWorkerRegistration'
// import reportWebVitals from './reportWebVitals'

import './index.css';
import { BrowserRouter } from 'react-router-dom';

function disableReactDevTools(): void {
  const noop = (): void => undefined;
  const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

  if (typeof DEV_TOOLS === 'object') {
    for (const [key, value] of Object.entries(DEV_TOOLS)) {
      DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
    }
  }
}

function main(): void {
  console.log('inside index.tsx');
  const isDevTool = process.env.DEV_TOOL === 'true';
  if (!isDevTool) disableReactDevTools();
  const container = document.getElementById('root');

  if (!container) throw new Error('Failed to find the root element');
  const root = createRoot(container);
  if (root) {
    root.render(
      <React.StrictMode>
        <Provider store={AppStore}>
          <BrowserRouter>
            {<PersistGate
              persistor={PersistedAppStore}
              onBeforeLift={() => { }}
            >
              {(persisted) =>
                <App persisted={persisted} />
              }
            </PersistGate>}
          </BrowserRouter>
        </Provider>
      </React.StrictMode >
    );
  } else {
    console.error('Unable to mount react component as root element not found');
  }
}

main();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
