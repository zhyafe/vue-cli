const config = {
  data() {
    return {
      age: 22,
      name: "mixin name",
    };
  },
  methods: {
    add() {
      console.log("mixin add");
    },
    del() {
      console.log("mixin del");
    },
  },

  mounted() {
    console.log("mixin mounted");
  },
};

export default config;
