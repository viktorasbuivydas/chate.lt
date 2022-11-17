<template>
  <div class="flex flex-col text-left">
    <SidebarContentLink
      url="/home/control/topic"
      class="flex flex-col"
      icon="note"
    >
      Topic keitimas
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/topic"
      class="flex flex-col"
      icon="how_to_vote"
    >
      Sukurti balsavimą
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/topic"
      class="flex flex-col"
      icon="personal_injury"
    >
      Vartotojų baninimas
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/logs"
      class="flex flex-col"
      icon="web_stories"
    >
      Logai
    </SidebarContentLink>
    <SidebarContentLink url="/control/quiz" class="flex flex-col" icon="quiz">
      Viktorinos klausimai
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/tutorials"
      class="flex flex-col"
      icon="school"
    >
      Pamokos
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/tutorials"
      class="flex flex-col"
      icon="account_circle"
    >
      Avatarai
    </SidebarContentLink>
    <SidebarContentLink
      url="/home/control/requests"
      class="flex flex-col"
      icon="comment"
    >
      Užklausų valdymas
    </SidebarContentLink>
  </div>
</template>
<script setup>
import SidebarContentLink from "@/Sidebar/ContentLink.vue";
</script>
