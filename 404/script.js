(function () {
  "use strict";

  function initSceneAnimations() {
    const sceneTimeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "cubic-bezier(.05, .5, 0, 1)",
      },
    });

    sceneTimeline
      .from(".scene__sun", { y: "100%", scale: 0.7, opacity: 0.3 })
      .from(".scene__light", { y: "30%", scale: 0.8, opacity: 0 }, "<+=0.8")
      .from(".scene__light-small", { y: "30%", scale: 0.8, opacity: 0 }, "<")
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

      //error content

      .fromTo(
        ".scene_error",
        { x: "-100vw", opacity: 0, scale: 1.2 },
        { x: 0, opacity: 1, scale: 1, duration: 1, delay: 1 },
        "<-=0.5"
      )

      .from(
        ".scene_alien-vehicle",
        {
          y: "-100vw",
          duration: 3,
          ease: "power2.out",
        },
        "<+=0.5"
      )

      .fromTo(
        ".scene_alien_vehicle-light",
        {
          y: "-15vh", // vehicle-এর কাছ থেকে শুরু
          opacity: 0,
          scale: 0.8,
        },
        {
          y: "0", // আসল অবস্থানে
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
        }
      )

      .to([".scene_alien-vehicle", ".scene_alien_vehicle-light"], {
        y: "-=15",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })

      .to(
        ".scene_error",
        {
          rotation: -45,
          x: 20,
          y: -50,
        },
        ">"
      )
      .to(
        ".scene_error",
        {
          duration: 1.2,
          delay: 2,
          ease: "power2.out",
        },
        ">"
      )
      .to(
        ".scene_error",
        {
          y: "-=15",
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        },
        "<"
      )

      //remove hobe agula
      .to(
        ".scene__tree-2-right, .scene__mountain-6-left, .scene__cloud-2-left",
        { opacity: 0 },
        "<-=2.5"
      )
      .from(
        ".scene_leaf_home-button",
        {
          x: "-50vh",
          y: "-100px",
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          rotation: 20,
          stagger: 0.2,
        },
        "<-0.5"
      )

      .from(".scene__light-middle", { y: "100vw" }, "<-=0.5");
  }

  document.addEventListener("DOMContentLoaded", function () {
    initSceneAnimations();
  });
})();
