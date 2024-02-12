<template>
        <!-- <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
            <div class="flex items-center justify-between ">
                <a href="/">
                    <svg width="60" class="ml-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.65 139.81"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M94.85,5.15,0,139.81,52.44,0H64.19Q83.17,0,94.85,5.15Z"/><polygon class="cls-2" points="52.44 0 0 139.81 0 0 52.44 0"/><path class="cls-3" d="M128.65,69.43q0,22.41-5.1,34.76a57.54,57.54,0,0,1-14.16,20.7A46.32,46.32,0,0,1,89.93,136a100.26,100.26,0,0,1-25.74,3.81H0L126.83,49.42A106.53,106.53,0,0,1,128.65,69.43Z"/><path class="cls-4" d="M126.83,49.42,0,139.81,94.85,5.15a50,50,0,0,1,19.31,14.78,61.41,61.41,0,0,1,11.06,22.42C125.85,44.67,126.38,47,126.83,49.42Z"/></g></g></svg>
                </a>


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


            <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">

                <a target="_blank" class="block px-5 py-2 mt-4 text-sm text-center  capitalize bg-blue-600 rounded-lg lg:mt-0 hover:text-[#723456]/70
    lg:w-auto" href="/builder">
                    Get started
                </a>
                <a target="_blank" class="block px-5 py-2 mt-4 text-sm text-center  capitalize bg-blue-600 rounded-lg lg:mt-0 hover:text-[#723456]/70
    lg:w-auto"
    href="https://github.com/taricov/d-profile">Source Code</a>      
                    <a target="_blank" class="block px-5 py-2 mt-4 text-sm text-center  capitalize bg-blue-600 rounded-lg lg:mt-0 hover:text-[#723456]/70
    lg:w-auto" 
    href="https://linkedin.com/in/taricov">Author</a>
                </div>

            </div>
        </nav> -->
  <div class="h-screen grid lg:grid-cols-1 grid-cols-1 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-[#c198ab]/50">
      <div class="flex-1 overflow-y-auto p-8">
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t border-[#723456] mb-7 justify-center w-full !bg-slate-900 flex items-center">
        <button
          @click="prefillDemoData"
          class="h-8 my-4 w-full flex justify-center items-center space-x-2 px-4  text-xs font-medium mx-3 app-grad hover:opacity-90 transition duration-300 rounded text-slate-300"
        >
          <span>Example</span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-8 my-4 w-full flex justify-center items-center space-x-2 px-4  text-xs font-medium mx-3 bg-slate-800 rounded text-slate-300 app-grad hover:opacity-90 transition duration-300  "
        >
          <span> Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
        <!-- <a
          href="https://github.com/fayazara/onelink"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4  text-xs font-medium bg-white text-slate-700"
        >
          <span> Github </span>
          <icon name="mdi:github" class="h-4 w-4" />
        </a> -->
      </div>
    </div>
    <!-- <app-form-preview :data="data" /> -->
    <a
      href="https://linkedin.com/in/taricov"
      target="_blank"
      class="fixed w-full !border-0 bottom-0 right-0 bg-slate-800 shadow py-1 mx-auto hover:bg-slate-900 hover:text-slate-50 font-medium text-sm text-center text-slate-300 app-grad hover:opacity-90 transition duration-300"
    >
      Made by Taric Ov
    </a>
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
});

const prefillDemoData = () => {
  data.value = {
    n: "El Etihad Co.",
    d: "El Etihad Co. for cosmatics and beauty products.",
    i: "https://ih1.redbubble.net/image.1675601216.9140/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
    f: "https://www.facebook.com/",
    t: "https://twitter.com/",
    ig: "https://www.instagram.com",
    e: "eletihad@gmail.com",
    gh: "https://github.com",
    tg: "https://t.me/",
    w: "+966 404 3243",
    y: "https://youtube.com",
    l: "https://linkedin.com",
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://eletihad.com",
      },
      {
        l: "Amazon Affiliation",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "This is a website",
        i: "grommet-icons:reactjs",
        u: "https://fff.com/",
      },
      {
      l: "Another Website",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Others",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };
};

const publish = async () => {
  const url = `${window.location.origin}/your-page?data=${encodeData(data.value)}`;
  // shortener goes here (shortening will be via api endpoint)
  const shortenedURL = await urlShortener(url)
  // console.log(shortenedURL)
  navigator.clipboard.writeText(shortenedURL).then(() => {
    alert("Link copied to clipboard");
  });

};
</script>
<style scoped>
.app-grad{
  @apply bg-gradient-to-bl from-[#723456] to-[#8a516e] 
}

.app-grad{
  @apply bg-gradient-to-bl from-[#723456] to-[#8a516e]/90 
}
.cls-1{fill:#a37389;}
.cls-2{fill:#c198ab;}
.cls-3{fill:#723456;}.cls-4{fill:#8a516e;}
</style>