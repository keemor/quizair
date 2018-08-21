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
    "url": "client.bf607674.js",
    "revision": "5f0ca443fe124b5cab377ceb4b5e7849"
  },
  {
    "url": "client.caaa0d38.css",
    "revision": "9039dd76494fc510d16a89ff0f54a665"
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
    "revision": "18f6c14de67b87ae463c2b05d4bb5b0d"
  },
  {
    "url": "/",
    "revision": "ff92712903649ec72473973782fa886d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");
