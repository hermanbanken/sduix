import React, {useEffect} from 'react';
import {useState} from 'react';
import type {Element} from '../server/renderToJson';
import {registry} from './components';
import {TODO} from './components/todo';

export const SDUI = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    // prevent cycle
    if (state !== null) {
      return;
    }
    // load state
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(json => setState(json));
  });
  return hydrate(state);
};

function hydrate(data: Element | null): JSX.Element | null {
  console.log('hydrate', {data});
  if (typeof data === "string") {
    return data;
  }
  if (data && data.type && registry[data.type]) {
    const children = data?.items?.map(hydrate) || [];
    return React.createElement(
      registry[data.type],
      data.props,
      ...children,
    );
  }
  if (data && data.type === '_') {
    return <>{data?.items.map(hydrate) ?? null}</>;
  }
  if (data && data.type) {
    return TODO({name: data.type, ...data.props});
  }
  return null;
}
