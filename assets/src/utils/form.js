let index = 0;

class Field {
  constructor(field) {
    Object.assign(this, field);
    this.index = ++index;
  }
  get id() {
    return `${this.constructor.name}-${this.index}-${this.name}`;
  }
  get payload() {
    const value = this.value;

    if (Array.isArray(value)) {
      return value.map(k => k.id);
    }

    return value;
  }
  reset() {
    this.value = this.initial;
  }
}

class Form {
  constructor(fields) {
    for (let [name, field] of Object.entries(fields)) {
      field.name = name;
      field.initial = field.value;
      this[name] = new Field(field);
    }
  }
  [Symbol.iterator]() {
    return Object.values(this).values();
  }
  get payload() {
    let payload = {};

    for (let field of this) {
      payload[field.name] = field.payload;
    }

    return payload;
  }
  reset() {
    for (let field of this) {
      field.reset();
    }
  }
}

export default {
  data() {
    return {
      form: {},
    };
  },
  mounted() {
    this.form = new Form(this.form);
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
