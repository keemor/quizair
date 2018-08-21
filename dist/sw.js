/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "client.7c03377a.css",
    "revision": "db0be18a1d1942d7a3b6da425cedd8f0"
  },
  {
    "url": "client.9fade0a7.js",
    "revision": "c5ab65c6f15782ec76e9a5ce6a8d0624"
  },
  {
    "url": "icon.0fc16281.png",
    "revision": "ddb36181eb772d1b2992401f536630d1"
  },
  {
    "url": "icon512.ea8be215.png",
    "revision": "e3f46e824f666a483004e4d705c3c1aa"
  },
  {
    "url": "index.html",
    "revision": "c1de498726f9a767bd12b36fbfbc8680"
  },
  {
    "url": "/",
    "revision": "5daa02e4f77d744dbd948c010c7d0545"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");
