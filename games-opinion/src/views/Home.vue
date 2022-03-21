<template>
  <div class="home">
    <h1>Galeria</h1>

    <div class="galeria">
      <div v-for="(juego, i) in juegos" :key="i" class="card" >
        <img :src="(`${juego.background_image}`)" class="card-img-top" style="max-height: 7.8rem"  />
        <div class="card-body">
          <h5 class="card-title">{{ juego.name }}</h5>
          <p class="card-text" >
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: {{ juego.id }}</li>
              <li class="list-group-item">Rating: {{ juego.rating }}</li>
              <li class="list-group-item">Released: {{ juego.released }}</li>
              <li class="list-group-item">Updated: {{ juego.updated }}</li>
            </ul> 
          </p>
          <button
            @click="juegoSelected = juego.id"
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
            {{ juegoSelected }}
            <h4>Agregar una opinión</h4>
            <hr />
            <div>
              <label>Nombre:</label>
              <input v-model="opinion.usuario.nombre" class="form-control" />
            </div>
            <div>
              <label>Opinión:</label>
              <textarea
                v-model="opinion.descripcion"
                class="form-control"
              ></textarea>
            </div>
            <div class="mt-4">
              <button
               data-bs-toggle="modal"
               data-bs-target="#exampleModal"
               @click="agregarOpinion" 
               class="btn btn-primary">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapMutations(["AGREGAR_OPINION"]),
    agregarOpinion() {
      const { juegoSelected } = this;
      const opinion = {
        ...this.opinion,
        usuario: { ...this.opinion.usuario },
      };
      opinion.idJuego = juegoSelected;
      opinion.id = Math.floor(Math.random() * 999);
      this.AGREGAR_OPINION(opinion);
      // Limpiar formulario
      this.opinion.usuario = { nombre: "" };
      this.opinion.descripcion = "";
    },
  },
  data() {
    return {
      juegoSelected: null,
      opinion: {
        usuario: {
          nombre: "",
        },
        descripcion: "",
      },
    };
  },
  computed: {
    ...mapState(["juegos", "opiniones"]),
    ...mapGetters(["getJuegosAndOpiniones"]),
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
