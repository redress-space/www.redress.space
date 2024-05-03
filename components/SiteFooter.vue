<template>
<footer class="bg-white mt-8 mb-2">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="mb-0 md:mb-0">

                    <div class="text-sm text-gray-400 hover:text-gray-700   md:ms-5 md:mt-4">
                       <p class="mb-2">© 2024. All Rights Reserved.</p>
                       <p>REDRESS SPACE LTD</p>
                       <p>Parker Russell, Level 30 The Leadenhall Building</p>
                       <p>122 Leadenhall Str.</p>
                       <p>London, UK, EC3V 4AB</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us
                        </h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="https://www.instagram.com/redress.space?utm_source=qr" class="hover:underline ">Instagram</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal
                        </h2>
                        <ul class="text-gray-500  font-medium">
                            <li class="mb-4">
                                <a href="/privacy" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </footer>

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