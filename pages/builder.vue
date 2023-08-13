<template>
  <div class="h-screen grid lg:grid-cols-3 grid-cols-1 divide-x">
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
    <app-form-preview :data="data" />
    <a
      href="https://linkedin/com/in/taricov"
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
    n: "John Snow",
    d: "I’m John Snow, the king in the north. I know Nothing.",
    i: "https://i.insider.com/56743fad72f2c12a008b6cc0",
    f: "https://www.facebook.com/john_snow",
    t: "https://twitter.com/john_snow",
    ig: "https://www.instagram.com/john_snow",
    e: "mail@john_snow.cc",
    gh: "https://github.com/john_snow",
    tg: "https://t.me/john_snow",
    w: "+918888888888",
    y: "https://youtube.com/@john_snow",
    l: "https://linkedin.com/john_snow",
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://example.com",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };
};

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>
<style>
.app-grad{
  @apply bg-gradient-to-bl from-[#723456] to-[#8a516e] 
}
</style>