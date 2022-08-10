<template>
  <div class="card" :class="styleBorder">
    <div class="card-header fw-bold text-center">
      {{ card_title }}
    </div>
    <div class="card-body">
      <div v-for="(menu, index) in foodMenu" :key="index" class="form-check">
        <menu-card-radio
            :currentMenu="menu"
            :itemIndex="index"
            :radioInputID="radioInputID"
            :radioInputName="radioInputName"
            :setCommitName="setCommitName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MenuCardRadio from "@/components/MenuCardRadio";
export default {
  name: "MenuCard",
  components: {
    MenuCardRadio
  },
  props: {
    styleBorder : {
      type: String
    },
    card_title : {
      type: String
    },
    setCommitName : {
      type: String
    },
    foodMenu : {
      type: Object
    },
    radioInputID : {
      type: String
    },
    radioInputName : {
      type: String
    },
  },
}
</script>

<style lang="scss" scoped>
.form-check:not(:last-child) {
  margin-bottom: 10px;
}
.card.card__border--success {
  border-top: 3px solid #a0d468;
}
.card.card__border--info {
  border-top: 3px solid #57b5e3;
}
.card.card__border--warning {
  border-top: 3px solid #ffce55;
}
</style>