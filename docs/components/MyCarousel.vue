<script setup>
  import emblaCarouselVue from 'embla-carousel-vue'
  import Autoplay from 'embla-carousel-autoplay'
  import AutoScrollOptions from 'embla-carousel-auto-scroll';

  const options = {
    "loop":true,
    "dragFree": true,
    //"direction":"rtl"
  }

  const autoplay_options = {    
    "delay": 1000,
    "jump": false,
    "playOnInit": true,
    "stopOnInteraction": true,
    "stopOnMouseEnter": true,
  }

  const autoscroll_options = {
    "direction": "forward",
    "stopOnInteraction":false,
    "stopOnFocusIn":true
  }

  const [emblaRef] = emblaCarouselVue(options, [
    Autoplay(autoplay_options), 
    AutoScrollOptions(autoscroll_options)
  ])
</script>

<template>
  <div class="embla" ref="emblaRef">
    <!-- <div class="embla__viewport"> -->
      <div class="embla__container">
        <div class="embla__slide">Slide 1</div>
        <div class="embla__slide">Slide 2</div>
        <div class="embla__slide">Slide 3</div>
        <div class="embla__slide">Slide 4</div>
      </div>
    <!-- </div> -->
    <!-- <div class="embla__controls">
      <div class="embla__dots"></div>
    </div> -->
  </div>
  
</template>


<style scoped>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>