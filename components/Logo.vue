<template>
    <h1 class="font-heading text-4xl sm:text-5xl md:text-5xl xl:text-13xl tracking-tightest">RE:DRESS</h1>
</template>


<script>
</script>

<style>
    .slide-up-enter {
        transform: translateY(100%);
        opacity: 0;
    }

    .slide-up-enter-active {
        transform: translateY(0);
        opacity: 1;
        transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    }

    .slide-up-exit {
        transform: translateY(0);
        opacity: 1;
    }

    .slide-up-exit-active {
        transform: translateY(-100%);
        opacity: 0;
        transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    }

</style>