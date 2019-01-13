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

export const formMixin = {
  data() {
    return {
      form: {},
    };
  },
  created() {
    this.form = new Form(this.form);
  },
};

export const fieldMixin = {
  props: {
    field: {type: Object, required: true},
  },
  computed: {
    value: {
      get() {
        return this.field.value;
      },
      set(value) {
        this.$set(this.field, 'value', value);
      },
    },
  },
};
