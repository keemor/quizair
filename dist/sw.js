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
    "url": "client.124fb254.css",
    "revision": "1cc9e4f3a8df60e94b8e2fd7a7ba375c"
  },
  {
    "url": "client.e861483e.js",
    "revision": "cc734fdbb7efc8dbcfceb2d8e7919051"
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
    "revision": "2059662ba7e79dfa9e6d522b58194b3d"
  },
  {
    "url": "/",
    "revision": "358f2e55880b0cd00371cee0e2faf238"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");
