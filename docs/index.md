# Hello visitor

some random text {.text-3xl .font-bold .underline}

<script setup lang="ts">
  import MyCarousel from './components/MyCarousel.vue'
</script>

<MyCarousel />

<!--@include:.vitepress/vv.md-->
<!--@include:.vitepress/stack.md-->

<div class="my-8 max-w-xs rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
  <div>
    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    </span>
  </div>
  <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">Writes Upside-Down</h3>
  <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>
</div>

# Configuring TailwindCSS to work with Vitepress

<div class="flex flex-col items-center mt-10 sm:flex-row">
  <p class="italic text-gray-500">
    I've found myself feeling limited by the styles provided by the framework so I looked into what it takes to use a stylesheet.
  </p>
</div>

A bit of searching around ended up pointing me towards [this Github issue](https://github.com/vuejs/vitepress/issues/62) which helps a user integrate [Tailwindcss](https://tailwindcss.com/), a framework I've been using professionally and in personal projects for awhile now.
