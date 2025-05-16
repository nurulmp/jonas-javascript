(function () {
  "use strict";

  function initSceneAnimations() {
    const sceneTimeline = gsap.timeline({
      defaults: {
        duration: 1.9,
        ease: "power2.out",
      },
    });

    sceneTimeline
      .from(".scene__sun", { y: "100%", scale: 0.7, opacity: 0.3 })
      .from(".scene__light", { y: "30%", scale: 0.8, opacity: 0 }, "<+=0.8")
      .from(".scene__tree-left", { x: "-100vw" }, "<")
      .from(".scene__tree-right", { x: "100vw" }, "<")
      .from(
        ".scene__mountain-1-left, .scene__mountain-1-right",
        { y: "100vh" },
        "<"
      )
      .from(
        ".scene__mountain-2-left, .scene__mountain-2-right",
        { y: "100vh" },
        "<+=0.4"
      )
      .from(
        ".scene__mountain-3-left, .scene__mountain-3-right",
        { y: "100vh" },
        "<+=0.3"
      )
      .from(
        ".scene__mountain-4-left, .scene__mountain-4-right",
        { y: "100vh" },
        "<+=0.2"
      )
      .from(
        ".scene__mountain-5-left, .scene__mountain-5-right",
        { y: "100vh" },
        "<+=0.1"
      )
      .from(".scene__rect", { opacity: 0, y: "100vh" }, "<")
      .from(".scene__cloud-1-left", { x: "-100vw", opacity: 0 }, "<+=1")
      .from(".scene__cloud-1-right", { x: "100vw", opacity: 0 }, "<+=0.3")
      .from(
        ".scene__mountain-6-left, .scene__mountain-6-right",
        { y: "100vh" },
        "<+=0.5"
      )
      .from(
        ".scene__mountain-7-left, .scene__mountain-7-right",
        { y: "100vh" },
        "<+=0.3"
      )
      // opacity 0 করার লাইনগুলো সরানো হয়েছে
      .from(".scene__cloud-2-left", { x: "-100vw" }, "<")
      .from(
        ".scene__mountain-8-left, .scene__mountain-8-right",
        { y: "100vh" },
        "<+=1"
      )
      // opacity 0 করার লাইনগুলো সরানো হয়েছে
      .from(".scene__mountain-9-left", { y: "100vw" }, "<")
      // opacity 0 করার লাইনগুলো সরানো হয়েছে
      .from(".scene__tree-2-right", { opacity: 0, scale: 1.2 }, "<-=0.5")
      .to(".scene__tree-left, .scene__tree-right", { opacity: 0 }, "<")
      .from(
        ".scene__tree-3-left, .scene__tree-3-right",
        { opacity: 0, scale: 1.2 },
        "<"
      )
      .from(".scene__city-1-left", { x: "-100%" }, "<+=2")
      .from(".scene__city-1-right", { x: "100%" }, "<")
      .to(
        ".scene__mountain-9-left, .scene__tree-2-right, .scene__mountain-6-left",
        { opacity: 0 },
        "<+=2.5"
      )
      .from(".scene__city-2-left", { x: "-100vw" }, "<-=0.5")
      .from(".scene__city-2-right", { x: "100vw" }, "<-=0.5");
  }

  document.addEventListener("DOMContentLoaded", function () {
    initSceneAnimations();
  });
})();
