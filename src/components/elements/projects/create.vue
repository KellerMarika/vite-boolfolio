<template>
    <h1>form crea progetto che rimanda allo store</h1>


    <!--  {{ --error catcher-- }} -->

    <div class="alert alert-success" v-if="submitResult === 'success'">
        Project succesfully created
    </div>


    <div class="alert alert-danger" v-else-if="submitResult">
        Something goes wrong:

        <div>{{ submitResult }}</div>

    </div>

    <!--  {{ --QUESTA COSA è TROOOOOOOPPPO RIPTITIVA-- }} -->

    <div class="container w-75">

        <form class="row" @submit.prevent="onFormSubmit(this.$route.path)" v-if="submitResult !== 'success'">

            <!--    {{ --title --}} -->
            <div class="input-container pb-2 col-12 col-md-5">
                <label class="form-label">Title</label>
                <input type="text"
                    v-model="createForm.title">

            </div>
            <!--    {{ --type --}} -->
            <div class="input-container pb-2 col-12 col-md-3">
                <label class="form-label" for="type_id">Type</label>

                <select
                    class="form-control"
                    id="type_id"
                    v-model="createForm.type_id">

                    <option v-for="type in types" :value="type.id"> {{ type.name }}
                    </option>

                </select>
            </div>

            /* <!--  {{ --level_id --}} --> */
            <div class="input-container pb-2 col-12 col-md-2">
                <label class="form-label" for="level_id">Level</label>
                <select
                    class="form-control"
                    id="level_id"
                    v-model="createForm.level_id">


                    <option v-for="level in levels" :value="level.id">{{ level.name }}
                    </option>
                </select>
            </div>

            <!--  {{ --completed --}} -->
            <div class="input-container pb-2 col-12  col-sm-4 col-md-2 ps-3">
                <div class="form-check form-switch p-0">

                    <label class="form-check-label" for="completed">completed</label>

                    <div class="form-check form-switch pt-2">
                        
                        <!--    {{ --2 imput per raccogliere true o false subito-- }} -->
                        <input type="hidden" value="0">
                        <input
                            class="form-check-input"
                            value="1" v-model="createForm.completed" type="checkbox" role="switch" id="completed">
                    </div>
                </div>
            </div>


            <!--    {{ --Tecnologie --}} -->

            <div class="input-container pb-2 col-12 ">
                <label class="form-label text-uppercase">Tecnologie:</label> <br>
                <div class="form-check form-check-inline" v-for=" tecnology, i in tecnologies">
                    <input type="checkbox"
                        class="form-check-input"
                        :value="tecnology.id"

                        id="tecnology_{{i}}"
                        v-model="createForm.tecnologies">

                    <label class="form-check form-check-inline"
                        for="tecnology_{{i}}">{{ tecnology.name }}</label>
                </div>

            </div>


            <!--    {{ --cover_img --}} -->
            <div class="input-container pb-2">
                <label class="form-label">Img</label>
                <input type="file" class="form-control"
                    name="cover_img"
                    @change="onAttachmentChange">
            </div>

            <!--    {{ --description --}} -->
            <div class="input-container pb-2">
                <label class="form-label">Description</label>
                <textarea cols="30" rows="3"
                    class="form-control" v-model="createForm.description">
                    </textarea>
            </div>

            <!--   {{ --link --}} -->
            <div class="input-container pb-2 col-12 ">
                <label class="form-label">github url</label>
                <input type="url"
                    class="form-control"
                    v-model="createForm.github_link">

            </div>
            <!--    {{ --opzioni --}} -->
            <div class="p-3">
                <!--  <a href="{{ route('admin.projects.index') }}" class="btn btn-primary">Annulla</a> -->

                <button class="btn btn-secondary">crea progetto</button>


            </div>

        </form>
    </div>
</template>


<script>
import axios from "axios";
import { store } from "../../../store";
export default {

    name: "Progects.Create",
    data() {
        return {

            store,
            types: [{ id: 1, name: "frontend" }, { id: 2, name: "backend" }, { id: 3, name: "full-stack" }],
            levels: [{ id: 1, name: "easy" }, { id: 2, name: "medium" }, { id: 3, name: "hard" }],
            tecnologies: [{ id: 1, name: "html" }, { id: 2, name: "sass" }, { id: 3, name: "js" }, { id: 4, name: "php" }],
            submitResult: "",

            createForm: {
                title: "",
                completed: "",
                description: "",
                github_link: "",
                cover_img: "",
                type_id: "",
                level_id: "",
                tecnologies: [],

            },
        };
    },
    methods: {
        /* INVIO A API ROUTE */
        onFormSubmit(apiRoute) {
            
            let apiUrl = `${this.store.backedRootUrl}/api${apiRoute}`
            console.log(apiUrl)
            //convertire l'oggetto form in un oggetto FormData x postare il file cover_img
            const formData = new FormData();
            formData.append("title", this.createForm.title);
            formData.append("description", this.createForm.description);
            formData.append("completed", this.createForm.completed);
            formData.append("github_link", this.createForm.github_link);
            formData.append("cover_img", this.createForm.cover_img);
            formData.append("type_id", this.createForm.type_id);
            formData.append("level_id", this.createForm.level_id);
            formData.append("tecnologies", this.createForm.tecnologies);

            axios
                .post(apiUrl, formData)
                .then((resp) => {
                    this.submitResult = "success";
                    console.log(resp)
                })
                .catch((err) => {

                    if (err.response && err.response.data) {
                        this.submitResult = err.response.data.message;
                    } else {
                        this.submitResult = err.message;
                    }
                    console.log(err);
                });
        },

        /* SET FILE AS CREATEFORM.ATTACHMENT: OBJECT */
        onAttachmentChange(e) {
            // reucupero l'array dei file scelti dall'utente
            const chosenFiles = e.target.files
            console.log(chosenFiles);
            // salvo il file scelto dentro l'oggetto form
            this.createForm.cover_img = chosenFiles[0];
        }
    },
    mounted() {

    }
};
</script>