<script>
import api from 'utils/api.js';
import debounce from 'utils/debounce.js';

import BaseInput from './BaseInput.vue';
import BaseModal from './BaseModal.vue';
import InfoItem from './InfoItem.vue';
import InfoAutocomplete from './InfoAutocomplete.vue';

function* otherLanguages({current, available}) {
  for (let code in available) {
    if (code !== current) {
      let name = available[code];
      yield {code, name};
    }
  }
}

export default {
  components: {
    BaseInput,
    BaseModal,
    InfoItem,
    InfoAutocomplete,
  },
  props: {
    infos: Array,
  },
  data() {
    return {
      results: [],
      creating: false,
      namesByLang: {},
    };
  },
  computed: {
    info() {
      return {
        name: this.namesByLang,
      };
    },
    otherLanguages() {
      return [...otherLanguages(this.$language)];
    },
    canCreate() {
      return this.query && this.results.length === 0;
    },
    exclude() {
      return this.infos.map(k => k.id).join('-');
    },
    query: {
      get() {
        return this.namesByLang[this.$language.current];
      },
      set(value) {
        this.$set(this.namesByLang, this.$language.current, value);
      },
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
        const info = await api('info/', {method: 'post', data: this.info});

        if (info) {
          const {id} = info;
          this.$emit('select', {id, name: this.query});
          this.creating = false;
          this.namesByLang = {};
        }
      } else if (this.canCreate) {
        this.creating = true;
      }
    },
    select(info) {
      this.namesByLang = {};
      this.$refs.query.focus();
      this.$emit('select', info);
    },
  },
};
</script>

<template>
  <div>
    <BaseInput
      ref="query"
      v-model="query"
      name="infos"
      autocomplete="off"
    >
      <ul
        v-if="infos.length"
        class="infos"
      >
        <InfoItem
          v-for="info in infos"
          :key="info.id"
          :info="info"
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
          v-for="lang in otherLanguages"
          :key="lang.code"
        >
          <BaseInput
            ref="other"
            v-model="namesByLang[lang.code]"
            :label="lang.name"
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
