<template>
  <div>
    <h1>Administración de opiniones</h1>

    <table class="table w-75 m-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Juego</th>
          <th>Opinion</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="({ opinion, juego }, i) in getJuegosAndOpiniones"
          :key="i"
        >
          <td>{{ opinion.id }}</td>
          <td>{{ opinion.usuario.nombre }}</td>
          <td>{{ juego.name }}</td>
          <td>{{ opinion.descripcion }}</td>
          <td>
            <button
            @click="irAEditarOpinion(opinion.id)" class="btn btn-warning">Editar</button>
            <button
              @click="eliminar_Opinion(opinion.id)"
              class="btn btn-danger"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getJuegosAndOpiniones"]),
  },
  methods: {
    ...mapActions(["eliminar_Opinion"]),
    irAEditarOpinion(id){
      this.$router.push(`/editar/${id}`)
    }
  },
};
</script>

<style>
</style>