<template>
  <div class="home">
    <h1>Galeria</h1>

    <div class="galeria">
      <div v-for="(pokemon, i) in pokemones" :key="i" class="card">
        <img :src="pokemon.src" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ pokemon.name }}</h5>
          <p class="card-text">
            {{ pokemon.id }}
          </p>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="btn btn-success"
          >
            Opinar
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-body w-75 m-auto">
          <div class="modal-content p-4">
            <h4>Agregar una opinión</h4>
            <hr />
            <div>
              <label>Nombre:</label>
              <input class="form-control" />
            </div>
            <div>
              <label>Opinión:</label>
              <textarea class="form-control"></textarea>
            </div>
            <div class="mt-4">
              <button class="btn btn-primary">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["pokemones"]),
  },
};
</script>

<style >
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: auto;
}
</style>
