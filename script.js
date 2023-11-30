// ==UserScript==
// @name        YouTube - Remove White Bottom Gradient
// @namespace   remove-white-bottom-gradient
// @match       https://www.youtube.com/
// @version     0.2
// @author      artini04
// @run-at      document-end
// @description Remove the white bottom gradient in the video player control.
// @license     GPL 3.0
// ==/UserScript==

(() => {
  console.log("[Remove White Bottom Gradient] script started!")

  let oldURL = document.location.href
  const body = document.body
  const bodyConfig = { childList: true, subtree: true }

  start()

  // ==Main Function==
  function start() {

    // Set observer to the body element
    const bodyObserverListener = (mutationList, observer) => {
      if (oldURL != document.location.href) {
        oldURL = document.location.href
        console.log("Document changed!")

        // ==Gradient Removal Start==
        const gradientNode = document.getElementsByClassName("ytp-gradient-bottom")[0]  // Gradient element of the video player
        const gradientNodeConfig = { attributes: true }                                 // Observer configuration, listen only to attribute changes

        const gradientNodeObserver = new MutationObserver((gradientMutationList) => {
          if (!gradientNode) return

          for (const mutation of gradientMutationList) {
            gradientNode.removeAttribute("style")
            console.log("White gradient removed!")
          }
        })

        gradientNodeObserver.observe(gradientNode, gradientNodeConfig)
        // ==/Gradient Removal End==
      }
    }

    const bodyObserver = new MutationObserver(bodyObserverListener)
    bodyObserver.observe(body, bodyConfig)
  }
})()