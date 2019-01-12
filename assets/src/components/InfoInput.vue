<script>
import api from 'utils/api.js';
import debounce from 'utils/debounce.js';
import {formContextMixin} from 'utils/mixins.js';

import BaseInput from './BaseInput.vue';
import BaseModal from './BaseModal.vue';
import InfoItem from './InfoItem.vue';
import InfoAutocomplete from './InfoAutocomplete.vue';

export default {
  mixins: [formContextMixin],
  components: {
    BaseInput,
    BaseModal,
    InfoItem,
    InfoAutocomplete,
  },
  props: {
    field: Object,
  },
  data() {
    return {
      results: [],
      creating: false,
      form: this.getForm(),
    };
  },
  computed: {
    infos() {
      return this.field.value;
    },
    canCreate() {
      return this.query && this.results.length === 0;
    },
    exclude() {
      return this.infos.map(k => k.id).join('-');
    },
    query() {
      return this.form[this.$language.current].value;
    },
    otherLanguages() {
      let form = {};

      for (let [name, field] of Object.entries(this.form)) {
        if (name !== this.$language.current) {
          form[name] = field;
        }
      }

      return form;
    },
  },
  watch: {
    query: debounce(function() { this.load(); }),
  },
  methods: {
    async load() {
      if (this.query) {
        const data = await api(`info/?q=${this.query}&exclude=${this.exclude}`);

        if (data) {
          Object.assign(this, data);
        }
      } else {
        this.results = [];
      }
    },
    async create() {
      if (this.creating) {
        const info = await api('info/', {method: 'post', data: {name: this.payload}});

        if (info) {
          const {id} = info;
          this.$emit('update', {push: {id, name: this.query}});
          this.creating = false;
          this.form = this.getForm();
        }
      } else if (this.canCreate) {
        this.creating = true;
      }
    },
    select(info) {
      this.form = this.getForm();
      this.$refs.query.focus();
      this.$emit('update', {push: info});
    },
    remove({id}) {
      this.$emit('update', {remove: id});
    },
    getForm() {
      const form = {};
      const langs = Object.entries(this.$language.available);

      for (let [name, label] of langs) {
        if (name === this.$language.current) {
          label = this.field.label;
        }

        form[name] = {
          name,
          label,
          value: '',
        };
      }

      return form;
    },
  },
};
</script>

<template>
  <div>
    <BaseInput
      ref="query"
      :field="form[$language.current]"
      @update="update"
    >
      <ul
        v-if="infos.length"
        class="infos"
      >
        <InfoItem
          v-for="info in infos"
          :key="info.id"
          :info="info"
          @remove="remove"
        />
      </ul>
    </BaseInput>
    <button
      v-if="canCreate"
      v-translate
      tabindex="-1"
      @click.prevent="create"
    >Create new info</button>
    <BaseModal
      :open="creating"
      @close="creating = false"
    >
      <template slot="head">
        <translate :translateParams="{name: query}">Add other languages for %{name}</translate>
      </template>
      <ul
      >
        <li
          v-for="(field, name) in otherLanguages"
          :key="name"
        >
          <BaseInput
            :field="field"
            @update="update"
          />
        </li>
      </ul>
      <template slot="foot">
        <button
          v-translate
          @click.prevent="create"
        >
          Create
        </button>
      </template>
    </BaseModal>
    <InfoAutocomplete
      :infos="results"
      @select="select"
    />
  </div>
</template>

<style scoped lang="scss">
.infos {
  margin-bottom: 10px;
  padding-left: 11px;

  list-style-type: square;
}
</style>
