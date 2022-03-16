import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pokemones: []
  },
  mutations: {
    SET_POKEMONES(state, pokemones) {
      state.pokemones = pokemones;
    }
  },
  actions: {
    async get_Pokemones({ commit }) {
      const endopoint = "https://pokeapi.co/api/v2/pokemon?limit=2";
      const { data } = await axios.get(endopoint);
      const { results } = data;
      const pokemones = [];
      for (let pokemon of results) {
        const { data: pokemonData } = await axios.get(pokemon.url);
        const {
          sprites: { front_default: src },
          name,
          id
        } = pokemonData;
        const pokemonObject = { id, name, src };
        pokemones.push(pokemonObject);
      }

      commit("SET_POKEMONES", pokemones);
    }
  }
});

store.dispatch("get_Pokemones");

export default store;