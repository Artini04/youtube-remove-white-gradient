// ==UserScript==
// @name        YouTube - Remove White Bottom Gradient
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/watch*
// @grant       none
// @version     0.1
// @author      artini04
// @run-at      document-end
// @description 11/29/2023, 10:59:41 AM
// @license     MIT
// ==/UserScript==

(() => {
  const a = document.getElementsByClassName("ytp-gradient-bottom")[0] // Target node
  const config = { attributes: true }                                 // Observer config
  const secondsObserverDisconnect = 7                                 // Seconds before observer disconnect

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

    setTimeout(() => {
      nodeObserver.disconnect()
      console.log("Observer disconnected!")
    }, secondsObserverDisconnect * 1000)
  }
})()