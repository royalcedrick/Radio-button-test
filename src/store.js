const state = {
    menus: [
        // first group of radio-buttons
        [
            { id: '101', value: 'Vegetarian' },
            { id: '102', value: 'Nut allergy' },
            { id: '103', value: 'Halal' }
        ],
        // second group of radio-buttons
        [
            { id: '201', value: 'Cashew chicken' },
            { id: '202', value: 'Sweet and sour pork' },
            { id: '203', value: 'Stir fried Tofu' },
            { id: '204', value: 'Vegetable fried rice' },
            { id: '205', value: 'Pad Thai' },
            { id: '206', value: 'Massaman beef' },
        ],
        // third group of radio-buttons
        [
            { id: '301', value: 'Peanut sauce' },
            { id: '302', value: 'Oyster sauce' },
            { id: '303', value: 'Vegetable spring rolls' },
            { id: '304', value: 'Steamed rice' },
        ],
    ],
    rules: {
        // 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
        101: [201, 202, 206, 302],
        // 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
        102: [201, 301],
        // 'Halal' is NOT compatible with 'Sweet and sour pork',
        103: [202],
        // 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
        204: [304],
        // 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
        205: [304],
    },
    selected : {
        food:   [],
        dish:   [],
        addon:  [],
    }
};

const getters = {
    isSelectingFoodType: state => Object.keys(state.selected.food).length === 0,
    isSelectingDishType: state => Object.keys(state.selected.dish).length === 0
}

const mutations = {
    setSelectedFood(state, selectedFood) {
        state.selected.food = selectedFood;
    },
    setSelectedDish(state, selectedDish) {
        state.selected.dish = selectedDish;
    },
    setSelectedAddon(state, selectedAddon) {
        state.selected.addon = selectedAddon;
    },
};

const actions = {
    /**
     * Save selected food and commit
     * @param content
     * @param foodValue
     * @returns {string}
     */
    doSetSelectedFood(content, foodValue) {
        content.commit(foodValue.commitName, foodValue.commitValue);
        if (foodValue.commitName === 'setSelectedFood') {
            content.commit('setSelectedDish', []);
            content.commit('setSelectedAddon', []);
            return 'clear-all'
        }
        if (foodValue.commitName === 'setSelectedDish') {
            content.commit('setSelectedAddon', []);
            return 'clear-addon';
        }
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}
