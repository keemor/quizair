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
    "url": "client.4c325463.js",
    "revision": "1598bb774eac4c4b6b75a85f00ae0460"
  },
  {
    "url": "client.86b826db.css",
    "revision": "429e48b24921a95eebbcd0ff6f8695d4"
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
    "revision": "570c4e4cf2202c92b1e45d30f5df867c"
  },
  {
    "url": "/",
    "revision": "25fbddc032163a76aae5a77bf85169cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");
