<template>
  <div class="flex flex-col space-y-2 text-left">
    <SidebarContentLink
      url="/home/control/requests"
      icon="comment"
      name="requests"
      :current="currentPage"
    >
      Užklausų valdymas
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/topic"
      icon="note"
      name="topic"
      :current="currentPage"
    >
      Topic keitimas
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/topic"
      icon="how_to_vote"
      name="votes"
      :current="currentPage"
    >
      Sukurti balsavimą
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/topic"
      icon="personal_injury"
      name="ban"
      :current="currentPage"
    >
      Vartotojų baninimas
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/logs"
      icon="web_stories"
      name="logs"
      :current="currentPage"
    >
      Logai
    </SidebarContentLink>
    <SidebarContentLink
      url="/control/quiz"
      icon="quiz"
      name="quiz"
      :current="currentPage"
    >
      Viktorinos klausimai
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/tutorials"
      icon="school"
      name="tutorials"
      :current="currentPage"
    >
      Pamokos
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/tutorials"
      icon="account_circle"
      name="avatars"
      :current="currentPage"
    >
      Avatarai
    </SidebarContentLink>
  </div>
</template>
<script setup>
import SidebarContentLink from "@/Sidebar/ContentLink.vue";

const props = defineProps({
  currentPage: {
    type: String,
    default: "",
  },
});
</script>
