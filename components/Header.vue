<template>
  <div>
    <div class="bg-white">
      <div class="2xl:container 2xl:mx-auto">
        <nav class="">
          <div class="flex flex-row justify-between">
            <div class="flex space-x-3 items-center p-6 pr-8">
              <img
                class="cursor-pointer"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg1.svg"
                alt="circle"
              />
            </div>

            <div
              class="lg:flex hidden flex-auto justify-between flex-row px-7 border-l border-r border-gray-200 py-6"
            ></div>
            <div
              class="flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8"
            >
              <!-- <div
                class="cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 relative flex justify-center items-center xl:mr-8 mr-6"
              >
                <Material icon="notifications" />
                <div
                  class="animate-ping w-1.5 h-1.5 bg-blue-700 rounded-full absolute top-1 right-0 m-auto duration-200"
                ></div>
                <div
                  class="w-1.5 h-1.5 bg-blue-700 rounded-full absolute top-1 right-0 m-auto shadow-lg"
                ></div>
              </div> -->
              <nuxt-link
                to="/home/inbox"
                class="cursor-pointer hover:bg-gray-200 rounded-md p-2 focus:outline-none relative flex justify-center items-center xl:mr-8 mr-6"
              >
                <Material icon="mail" />
                <div
                  class="animate-ping w-2 h-2 bg-blue-700 rounded-full absolute top-1 right-1 m-auto duration-200"
                ></div>
                <div
                  class="w-2 h-2 bg-blue-700 rounded-full absolute top-1 right-1 m-auto shadow-lg"
                ></div>
              </nuxt-link>
              <div class="flex justify-center items-center flex-row"></div>
            </div>

            <!-- Burger Icon -->
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import Material from "@/Material.vue";

const toggleMenu = () => {
  var icon = document.getElementById("bgIcon");
  const childEle = icon.children;

  childEle[0].classList.toggle("hidden");
  childEle[1].classList.toggle("hidden");

  document.getElementById("MobileNavigation").classList.toggle("hidden");
};

const rotateIcon = () => {
  var clicked = event.target;
  clicked.classList.toggle("rotate-180");
};
</script>

<style></style>
