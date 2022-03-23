import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos: [],
    opiniones: [],
  },
  mutations: {
    SET_JUEGOS(state, juegos) {
      state.juegos = juegos;
    },
    AGREGAR_OPINION(state, opinion) {
      state.opiniones.push(opinion);
    },
    ELIMINAR_OPINION(state, indice) {
      state.opiniones.splice(indice, 1);
    },
    MODIFICAR_OPINION(state, { indice, opinion }) {
      const opiniones = [...state.opiniones];
      opiniones[indice] = opinion;
      state.opiniones = opiniones;
    },
  },
  actions: {
    modificar_Opinion({ commit, state }, opinion) {
      const { opiniones } = state;
      const { id } = opinion;

      const indiceDeLaOpinion = opiniones.findIndex((o) => o.id === id);
      commit("MODIFICAR_OPINION", { indice: indiceDeLaOpinion, opinion });
    },
    eliminar_Opinion({ commit, state }, id) {
      const { opiniones } = state;
      const indiceDeLaOpinion = opiniones.findIndex((o) => o.id === id);
      commit("ELIMINAR_OPINION", indiceDeLaOpinion);
    },
    async get_Juegos({ commit }) {
      const url = "/games.json";
      const response = await axios.get(url);
      const { data: juegos } = response;

      commit("SET_JUEGOS", juegos);
    },
  },
  getters: {
    getJuegosAndOpiniones(state) {
      const { juegos, opiniones } = state;
      const getFullData = [];
      opiniones.forEach((opinion) => {
        const juegoRelacionadoConLaOpinion = juegos.find((juego) => {
          return juego.id === opinion.idJuego;
        });

        const juegoYOpinionUnificada = {
          ...opinion,
          juego: { ...juegoRelacionadoConLaOpinion },
        };

        getFullData.push(juegoYOpinionUnificada);
      });

      return getFullData;
    },
    getOpinionById: (state) => (id) => {
      const { opiniones } = state;
      const opinion = opiniones.find((o) => o.id == id);
      return opinion;
    },
    getJuegoById:(state) => (id) => {
      const { juegos } = state
      const juego = juegos.find((j) => j.id === id)
      return juego
    },
  },
});

store.dispatch("get_Juegos");

export default store;
