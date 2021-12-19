export default {
  data() {
    return {
      isEditMode: false,
    };
  },
  methods: {
    enableEditMode() {
      this.isEditMode = true;
    },
    disableEditMode() {
      this.isEditMode = false;
    },
  },
};
