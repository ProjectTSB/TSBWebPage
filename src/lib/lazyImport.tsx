import { ComponentType, lazy } from 'react';
import * as React from 'react';

const lazyImport = <T = {}>(factory: () => Promise<{ default: ComponentType<T> }>): React.LazyExoticComponent<ComponentType<T>> => lazy(async () => {
  try {
    const component = await factory();
    window.sessionStorage.removeItem('lazyImport-force-reload');
    return component;
  } catch (e) {
    if (!window.sessionStorage.getItem('lazyImport-force-reload')) {
      window.sessionStorage.setItem('lazyImport-force-reload', 'true');
      window.location.reload();
      return { default: () => <></> };
    }

    return {
      default: () => (
        <>
          <h1>Error occurred</h1>
          <button onClick={() => window.location.reload()}>Reload</button>
        </>
      )
    };
  }
});

export default lazyImport;
