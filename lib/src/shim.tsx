// export const shim = async () => {
//  let { run } = await import(/* webpackChunkName: "lib" */ '.');
//  return run();
// };

interface Manifest {
    URL: string;
}

export const hello = () => console.log('hello');

import { FC } from 'react';

export const loadWidget = async () => {
    await load();
    console.log('here1', window['__PREPLY_LIB__']);
    let lib = await import(/* webpackChunkName: "index" */ '.');
    console.log('here2', lib);
    return lib.Widget;
};

const load = async () => {
    return new Promise(async resolve => {
        const res = await fetch('http://localhost:3000/');
        console.log(res.status);
        const manifest = (await res.json()) as Manifest;
        console.log(manifest, manifest.URL);
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = manifest.URL;
        s.onload = resolve;
        document.querySelector('head').appendChild(s);
    });
};

export const loadLib = async () => {
    await load();
    console.log('here1', window['__PREPLY_LIB__']);
    let lib = await import(/* webpackChunkName: "index" */ '.');
    console.log('here2', lib);
    return lib;
};

// (window as any).__PREPLY_LIB__ = {
//  shim,
// };
