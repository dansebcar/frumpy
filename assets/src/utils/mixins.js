function clean(value) {
  if (Array.isArray(value)) {
    return value.map(k => k.id);
  }

  return value;
}

export const formContextMixin = {
  data() {
    return {
      form: {},
    };
  },
  computed: {
    payload() {
      let form = {};

      for (let [name, {value}] of Object.entries(this.form)) {
        form[name] = clean(value);
      }

      return form;
    },
  },
  methods: {
    update({name, value}) {
      this.$set(this.form[name], 'value', value);
    },
    updateList({name, push, remove}) {
      let value = this.form['infos'].value;

      if (push) {
        value.push(push);
      }
      if (remove) {
        for (let i = 0; i < value.length; i++) {
          if (value[i].id === remove) {
            value.splice(i, 1);
            break;
          }
        }
      }
    },
  },
};
