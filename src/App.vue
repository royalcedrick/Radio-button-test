<template>
  <div class="container">
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <form>
        <!-- FOOD -->
        <menu-card
            :styleBorder="'card__border--success'"
            :foodMenu="menus[0]"
            :card_title="'Dish Type'"
            :setCommitName="'setSelectedFood'"
            :radioInputID="'foodTypeRadio'"
            :radioInputName="'radioFoodType'"
        ></menu-card>

        <!-- DISH -->
        <menu-card
            :styleBorder="'card__border--info'"
            :foodMenu="menus[1]"
            :card_title="'Food Type'"
            :setCommitName="'setSelectedDish'"
            :radioInputID="'dishTypeRadio'"
            :radioInputName="'radioDishType'"
        ></menu-card>

        <!-- ADDON -->
          <menu-card
              :styleBorder="'card__border--warning'"
              :foodMenu="menus[2]"
              :card_title="'Addons'"
              :setCommitName="'setSelectedAddon'"
              :radioInputID="'addonTypeRadio'"
              :radioInputName="'radioAddonType'"
          ></menu-card>

        <div class="col-12 mt-5 d-flex justify-content-center align-items-center">
          <button class="btn btn-outline-dark">Submit Order</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MenuCard from "@/components/MenuCard";
export default {
  name: 'App',
  components: {
    MenuCard
  },
  computed: {
    ...mapState({
      menus : state => state.menus
    }),
    ...mapGetters([
      'isSelectingFoodType',
      'isSelectingDishType'
    ])
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
  .form-check .radio_selection {
    transform: scale(1.5);
  }
  .card:not(:last-child) {
    margin-bottom: 2em;
  }
</style>
