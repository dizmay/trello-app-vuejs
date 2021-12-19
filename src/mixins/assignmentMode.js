export default {
  data() {
    return {
      isAssignmentMode: false,
    };
  },
  methods: {
    enableAssignmentMode() {
      this.isAssignmentMode = true;
    },
    disableAssignmentMode() {
      this.isAssignmentMode = false;
    },
  },
};
