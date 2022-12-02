<template>
  <div v-if="user">
    <Header />
    <!-- Card code block start -->
    <div aria-label="cards" class="bg-white dark:bg-gray-800 shadow rounded">
      <div class="relative">
        <img
          tabindex="0"
          class="focus:outline-none h-56 shadow rounded-t w-full object-cover object-center"
          src="/images/placeholders/profile-cover.webp"
          alt="mountains cover"
        />
        <div
          class="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white"
        >
          <img
            tabindex="0"
            class="focus:outline-none w-full h-full overflow-hidden object-cover rounded"
            src="/images/placeholders/avatar.png"
            alt="person"
          />
        </div>
      </div>
      <div class="px-5 pb-10">
        <div
          class="flex justify-center items-center space-x-2 w-full pt-16 xl:pt-5"
        >
          <div>
            Reputacija:
            <span class="font-semibold">0</span>
          </div>
          <button class="hover:text-brand">
            <Material icon="thumb_up" />
          </button>
          <button class="hover:text-red-500">
            <Material icon="thumb_down" />
          </button>
        </div>
        <div class="pt-3 xl:pt-5 flex flex-col items-center justify-between">
          <div class="xl:pr-16 w-full xl:w-2/3">
            <div
              class="text-center mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start"
            >
              <a
                tabindex="0"
                class="text-gray-800 dark:text-gray-100 focus:outline-none"
              >
                <h2
                  class="mb-3 xl:mb-0 xl:mr-4 text-2xl font-medium tracking-normal"
                >
                  {{ user.username }}
                </h2></a
              >
              <p v-if="user.roles && user.roles.length > 0">
                <span
                  class="focus:outline-none text-sm bg-blue-500 dark:bg-blue-600 text-white px-5 py-1 font-normal rounded-full"
                  v-for="role in user.roles"
                >
                  {{ role }}
                </span>
              </p>
              <p
                class="focus:outline-none text-sm bg-blue-500 dark:bg-blue-600 text-white px-5 py-1 font-normal rounded-full"
                v-else
              >
                Narys
              </p>
            </div>

            <!-- <p
              tabindex="0"
              class="focus:outline-none text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5"
            >
              Mano aprasymas blablablabla
            </p> -->
          </div>
          <div
            class="xl:px-10 w-full py-5 flex flex-wrap items-start justify-center"
          >
            <ProfileStat
              :number="user.forum_message_count"
              title="Forume žinučių"
            />
            <ProfileStat
              :number="user.chat_message_count"
              title="Pokalbiuose žinučių"
            />
            <ProfileStat
              :number="user.forum_thread_count"
              title="Forume temų"
            />
            <ProfileStat
              :number="user.reputation_points"
              title="Reputacijos taškų"
            />
            <ProfileStat
              :number="user.inbox_sent_message_count"
              title="Asmeninių žinučių"
            />
          </div>
          <!-- <div>
            <div class="text-2xl font-medium tracking-normal mb-2">
              Projektai:
            </div>
            <ul class="space-y-2">
              <li>
                <a href="" class="text-brand">http://test.com</a>
              </li>
              <li>
                <a href="" class="text-brand">http://test.com</a>
              </li>
            </ul>
          </div> -->

          <!-- <div class="w-full">
            <div class="text-2xl font-medium tracking-normal mt-4 mb-2">
              Atsiliepimai (1)
            </div>

            <div class="flex items-center justify-start w-full h-full py-2">
              <div class="w-full bg-white dark:bg-gray-800 rounded-lg">
                <div class="py-2 px-2 w-full sm:max-w-2xl">
                  <div class="font-semibold text-xl">anonimas</div>
                  <p
                    tabindex="0"
                    class="focus:outline-none text-sm sm:text-base leading-snug text-gray-500 dark:text-gray-400"
                  >
                    testinis atsiliepimas lalala
                  </p>
                </div>
                <div class="mt-5 border-t border-gray-200 w-full">
                  <div class="px-2 py-4 flex justify-between">
                    <a
                      href="javascript:void(0)"
                      class="focus:underline focus:outline-none focus:text-blue-500 hover:text-blue-600 text-sm font-semibold cursor-pointer leading-none text-blue-700"
                      >Rodyti daugiau</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div
          class="text-center mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start"
        >
          <BaseButtonsSimpleLink
            :to="'/home/inbox/create/' + user.username"
            v-if="loggedInUser.username !== user.username"
            >Rašyti žinutę</BaseButtonsSimpleLink
          >
        </div>
      </div>
    </div>

    <!-- Card code block end -->
    <!-- <div class="flex flex-col flex-grow p-2" v-if="user">
        <div>
          <div>Atsiliepimai (2)</div>
        </div>
        <div>
          Rasyti zinute
          <textarea></textarea>
          <button type="submit">Siusti</button>
        </div>
        <div>Admin</div>
        <div>Baninti</div>
        <div>Atbaninti</div>
      </div> -->
  </div>
</template>
<script>
export default {
  layout: "home",
};
</script>

<script setup>
import { onMounted, useContext, useRoute } from "@nuxtjs/composition-api";
import { computed, ref } from "vue";
import ProfileStat from "@/Cards/ProfileStat.vue";
import Material from "@/Material.vue";
import Header from "@/Header.vue";
import BaseButtonsSimpleLink from "@/Base/Buttons/SimpleLink.vue";
const route = useRoute();
const user = ref(null);
const { $axios, error, $auth } = useContext();

onMounted(() => {
  getUserByUsername();
});

const getUserByUsername = () => {
  $axios
    .get("/about/" + route.value.params.username)
    .then((response) => {
      user.value = response.data.data;
    })
    .catch((e) => {
      error({ statusCode: 404, message: "Post not found" });
    });
};

const loggedInUser = computed(() => {
  return $auth.user.data;
});
</script>
