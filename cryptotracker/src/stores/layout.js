import { defineStore } from "pinia";

export const useLayoutStore = defineStore({
  id: "layout",
  state: () => ({
    mobile_menu: false,
    layout: 'landing_page'
  }),
  getters: {
    get_mobile_menu: (state) => state.mobile_menu,
    get_layout: (state) => state.layout,
  },
  actions: {
    toggle_mobile_menu() {
      if (this.mobile_menu == true) {
        this.mobile_menu = false;
      } else {
        this.mobile_menu = true;
      }
    },
    active_mobile_menu() {
      this.mobile_menu = true;
    },
    deactive_mobile_menu() {
      this.mobile_menu = false;
    },

    setLayout(layout) {
      this.layout = layout;
    }
  },
});
