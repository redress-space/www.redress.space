<template>

    <div class="container mx-auto py-8 h-[90%]">

        <section class="container mx-auto px-4" data-path="0.1">
            <div class="relative mx-auto mb-12 pt-12 pb-64 xs:pb-40 lg:pb-12 border-b">
                <Logo />
            </div>
        </section>

        <section class=" flex items-center h-full justify-center pt-28 pb-28">
            <div>
                <h1 class="text-center text-2xl sm:text-4xl md:text-2xl mb-28">UNDER CONSTRUCTION</h1>
                <img class="w-96 h-96 rounded-lg" src="/public/undraw_dev.svg"/>
            </div>
        </section>
    </div>

    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

    <footer class="bg-white dark:bg-gray-900 mb-5">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="https://redress.space/" class="flex items-center mb-3">
                        <img src="public/logo-long-white.png" class="h-8 me-3" alt="Redress Logo" />
                    </a>

                    <div class="text-sm text-gray-400 hover:text-gray-700 dark:hover:text-white  md:ms-5 md:mt-4">
                       <p>© 2024. All Rights Reserved.</p>
                       <p>Parker Russell, Level 30 The Leadenhall Building, 122 Leadenhall Street</p>
                       <p>London, UK, EC3V 4AB</p>
                       <p>REDRESS SPACE LTD</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources
                        </h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="https://www.redress.space" class="hover:underline">RE:DRESS</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us
                        </h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="https://github.com/redress-space" class="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/7G5N3n6U" class="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal
                        </h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
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