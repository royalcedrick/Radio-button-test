<template>
  <input
      class="form-check-input radio_selection"
       type="radio"
       :id='setRadioIDLabel(radioInputID, itemIndex)'
       :name="radioInputName"
       :value="currentMenu.value"
       @change="fireEventChange(currentMenu)"
      :disabled="getCompatibleFoods(setCommitName, currentMenu)"
  />
  <label
      class="form-check-label"
      :for="setRadioIDLabel(radioInputID, itemIndex)"
  >
    {{ currentMenu.value }}
  </label>
</template>

<script>
import $ from 'jquery';
import { mapActions, mapState } from 'vuex';
export default {
  name: "MenuCardRadio",
  props: {
    currentMenu : {
      type: Object
    },
    itemIndex : {
      type: Number
    },
    radioInputID : {
      type: String
    },
    radioInputName : {
      type: String
    },
    setCommitName : {
      type: String
    },
  },
  computed: {
    ...mapState({
      rules             : state => state.rules,
      stateSelectedFood : state => state.selected.food,
      stateSelectedDish : state => state.selected.dish
    })
  },
  methods: {
    ...mapActions([
      'doSetSelectedFood',
    ]),
    /**
     * Set radio id name
     * @param radioInputID
     * @param itemIndex
     * @returns String
     */
    setRadioIDLabel(radioInputID, itemIndex) {
      return radioInputID + itemIndex;
    },
    /**
     * Check if food is compatible from previous selection
     * If first selection, other selection must be disabled first
     * @param setCommitName
     * @param currentMenu
     * @returns {boolean}
     */
    getCompatibleFoods(setCommitName, currentMenu) {
      let currentMenuId = Number(currentMenu.id);
      if (this.stateSelectedFood.length !== 0) {
        if (this.stateSelectedDish.length !== 0 && this.rules[this.stateSelectedDish.id] !== undefined) {
          let FoodSelectionRule = Object.values(this.rules[this.stateSelectedFood.id]);
          let DishSelectionRule = Object.values(this.rules[this.stateSelectedDish.id]);
          let MergeRules = DishSelectionRule.concat(FoodSelectionRule);
          return MergeRules.includes(currentMenuId);
        }
        return Object.values(this.rules[this.stateSelectedFood.id]).includes(currentMenuId);
      }
      return this.setCommitName !== 'setSelectedFood';
    },
    /**
     * Set selected food
     * @param currentItemMenu
     */
    async fireEventChange(currentItemMenu) {
      let selectionReturn = await this.doSetSelectedFood({
        commitName: this.setCommitName,
        commitValue: currentItemMenu
      })
      if (selectionReturn === 'clear-all') {
        let selectRadioButtons = $('.radio_selection');
        selectRadioButtons.filter("[name='radioDishType']").prop('checked', false);
        selectRadioButtons.filter("[name='radioAddonType']").prop('checked', false);
      }
      if (selectionReturn === 'clear-addon') {
        $('.radio_selection').filter("[name='radioAddonType']").prop('checked', false);
      }
    },
  }
}
</script>

<style scoped>

</style>