---
title: "Page Not Found | The Bearded Tek"
date: 2025-04-15T17:09:20+06:00
description: "The Bearded Tek, Palmer and Wasilla's IT Handyman"
layout: index
sections:
    - "404"
---

<section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-6 mx-auto sm:py-12 lg:py-20 pt-20 sm:pt-24 lg:pt-32">
    <div class="max-w-2xl mx-auto text-center">
      <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        404: Page Not Found
      </h1>
      <p class="mt-4 text-base text-gray-500 sm:text-xl dark:text-gray-500">
        This page isn't responding. We checked the cables, restarted the router, and tried turning it off and back on again — still nothing.
      </p>
      <p class="mt-2 text-base text-gray-500 sm:text-xl dark:text-gray-500">
        Good news: unlike an old hard drive, this one can't be recovered, because it was never here.
      </p>
      <div class="mt-8">
        <a id="notfound-back-link" href="/"
          class="inline-block cursor-pointer text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900">
          Back to homepage
        </a>
      </div>
    </div>
  </div>
</section>

<script>
(function () {
  var link = document.getElementById("notfound-back-link");
  if (!link) return;
  var ref = document.referrer;
  if (!ref) return;
  try {
    var refUrl = new URL(ref);
    if (refUrl.origin === window.location.origin && refUrl.pathname !== window.location.pathname) {
      link.href = ref;
      link.textContent = "Take me back";
    }
  } catch (e) {}
})();
</script>
