// ==UserScript==
// @name        YouTube - Remove White Bottom Gradient
// @namespace   https://github.com/Artini04/youtube-remove-white-gradient
// @grant       none
// @match       https://www.youtube.com/*
// @version     0.2.3
// @author      artini04
// @run-at      document-end
// @description Remove the white bottom gradient in the video player control.
// @license     GPL-3.0
// ==/UserScript==

;(() => {
  console.log(`[Remove White Bottom Gradient] Script started!`)
  const body = document.body
  const bodyConfig = { childList: true, subtree: true }
  start()

  ///////////////// MAIN FUNCTION //////////////////////////
  function start() {
    const bodyObserverListener = () => {
      if (document.location.href.includes('watch')) {
        const gradientNode = document.getElementsByClassName('ytp-gradient-bottom')[0]
        if (!gradientNode) return // Just to be safe!
        if (gradientNode.hasAttribute('style')) gradientNode.removeAttribute('style')
      }
    }

    // Body Observer
    const bodyObserver = new MutationObserver(bodyObserverListener)
    bodyObserver.observe(body, bodyConfig)
  }
})()
