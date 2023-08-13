<script setup>
</script>
<template>
    <section class="bg-white dark:bg-gray-900">
    <nav x-data="{ isOpen: false }" class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
            <a href="/">
                <svg width="60" class="ml-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.65 139.81"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M94.85,5.15,0,139.81,52.44,0H64.19Q83.17,0,94.85,5.15Z"/><polygon class="cls-2" points="52.44 0 0 139.81 0 0 52.44 0"/><path class="cls-3" d="M128.65,69.43q0,22.41-5.1,34.76a57.54,57.54,0,0,1-14.16,20.7A46.32,46.32,0,0,1,89.93,136a100.26,100.26,0,0,1-25.74,3.81H0L126.83,49.42A106.53,106.53,0,0,1,128.65,69.43Z"/><path class="cls-4" d="M126.83,49.42,0,139.81,94.85,5.15a50,50,0,0,1,19.31,14.78,61.41,61.41,0,0,1,11.06,22.42C125.85,44.67,126.38,47,126.83,49.42Z"/></g></g></svg>
            </a>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
                <button x-cloak @click="isOpen = !isOpen" type="button" class="text-[#723456]  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
            
                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                <a class="text-[#723456]
 transition-colors duration-300 transform lg:mx-8 hover:text-[#723456]/70"
 href="#">Home</a>
                <a class="transition-colors duration-300 transform lg:mx-8 hover:text-[#723456]/70"
 href="#">Components</a>
                <a class="transition-colors duration-300 transform lg:mx-8 hover:text-[#723456]/70"
 href="#">Pricing</a>
                <a class="transition-colors duration-300 transform lg:mx-8 hover:text-[#723456]/70"
 href="#">Contact</a>
            </div>

            <a class="block px-5 py-2 mt-4 text-sm text-center  capitalize bg-blue-600 rounded-lg lg:mt-0 hover:text-[#723456]/70
 lg:w-auto" href="#">
                Get started
            </a>
        </div>
    </nav>

    <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
    <h1 class="app-grad bg-clip-text text-transparent font-bold text-center text-[120px] pt-6">D-Profile</h1>

            <p class="mb-10 text-[#723456] text-xl font-semibold bg-[#723456]/20 rounded-md py-3">D-Profile will help you build a profile page - About page - for your company in less than 2 minutes.</p>
            <a href="/builder" class="px-5 py-2 mt-6 text-xl font-semibold leading-5 text-center capitalize app-grad
 rounded-lg lg:mx-0 lg:w-auto focus:outline-none shadow hover:opacity-90 transform hover:-translate-y-1 transition duration-300 !border-0 text-slate-200">
                Start Now
                <icon name="mdi:arrow" class="transform rotate-180 h-4 w-4" />

            </a>
            <p class="mt-3 text-sm text-gray-800/70 ">It's Free and <a class="mt-3 text-sm text-gray-800 hover:text-gray-800/50 transition duration-300" href="/buildergi">
                Open-source</a>
            </p>
        </div>

        <div class="flex justify-center mt-10">
            <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
        </div>
    </div>
</section>
</template>
<style scoped>
.app-grad{
  @apply bg-gradient-to-bl from-[#723456] to-[#8a516e]/90 
}
.cls-1{fill:#a37389;}
.cls-2{fill:#c198ab;}
.cls-3{fill:#723456;}.cls-4{fill:#8a516e;}
</style>