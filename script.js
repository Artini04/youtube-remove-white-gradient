// ==UserScript==
// @name        YouTube - Remove White Bottom Gradient
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/watch*
// @grant       none
// @version     0.1
// @author      artini04
// @run-at      document-end
// @description 11/29/2023, 10:59:41 AM
// @license     GPL 3.0
// ==/UserScript==

(() => {
  const a = document.getElementsByClassName("ytp-gradient-bottom")[0] // Target node
  const config = { attributes: true }                                 // Observer config

  start()

  // ==Main Function==
  function start() {
    function listen(mutationList, observer) {
      for (const mutation of mutationList) {
        a.removeAttribute("style")
        console.log("Removed gradient!")
      }
    }

    const nodeObserver = new MutationObserver(listen)
    nodeObserver.observe(a, config)
  }
})()