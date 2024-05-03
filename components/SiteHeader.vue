<template>
    <section class="container mx-auto px-4 mb-16 " data-path="0.1">
        <div class="relative mx-auto mb-0 pt-8 pb-8  flex justify-center">
            <a href="/">
                <img src="public/logo-long-white.png" class="h-8 me-3" alt="Redress Logo" />
            </a>
        </div>
    </section>
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