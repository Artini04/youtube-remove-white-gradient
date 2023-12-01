// ==UserScript==
// @name        YouTube - Remove White Bottom Gradient
// @namespace   remove-white-bottom-gradient
// @grant       none
// @match       https://www.youtube.com/*
// @match       https://www.youtube.com/watch*
// @version     0.2.2
// @author      artini04
// @run-at      document-end
// @description Remove the white bottom gradient in the video player control.
// @license     GPL3
// ==/UserScript==

;(() => {
  // Userscript Properties and Descriptions
  const version = '0.2.2'
  console.log(`[Remove White Bottom Gradient] Script started!\nVersion ${version}`)

  let currentURL = document.location.href
  const body = document.body
  const bodyConfig = { childList: true, subtree: true }

  start()

  // ==Main Function==
  function start() {
    const bodyObserverListener = () => {
      if (currentURL.includes('watch')) {
        // ==Gradient Removal Start==
        const gradientNode = document.getElementsByClassName('ytp-gradient-bottom')[0]
        if (!gradientNode) return // Just to be safe!
        if (gradientNode.hasAttribute('style')) gradientNode.removeAttribute('style')
        // ==/Gradient Removal End==
      }
    }

    const bodyObserver = new MutationObserver(bodyObserverListener)
    bodyObserver.observe(body, bodyConfig)
  }
})()
