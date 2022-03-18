<template>
  <div>
    <h1>Editando la opinión del pokemon:</h1>

    <div class="form w-50 m-auto">
      <div>
        <label>Usuario:</label>
        <input class="form-control" v-model="opinion.usuario.nombre" />
      </div>
      <div>
        <label> Descripción:</label>
        <textarea class="form-control" v-model="opinion.descripcion"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],

  methods:{
      ...mapActions
  },

  computed: {
    ...mapGetters(["getOpinionById"]),
    opinion() {
      const { id } = this;
      return {
        ...this.getOpinionById(+id),
        usuario: { ...this.getOpinionById(+id).usuario },
      };
    },
  },
};
</script>
