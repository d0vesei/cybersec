<template>
    <div>
        <div class="Intro">
            <div v-for="subject in introA" :key="subject.id">
                <h1> {{ subject.name.replace(/<\/?[^>]+(>|$)/g, '') }}</h1>
                <p>{{ subject.summary.replace(/<\/?[^>]+(>|$)/g, '') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    const apiUrl = 'http://1.11.111.11/webservice/rest/server.php';
    const token = '8cf3c609d24cb5a220b11c6f1ba8b96a';
    const getcontentIntro = 'core_course_get_contents&courseid=2';
    const contentIntro = `${apiUrl}?wstoken=${token}&wsfunction=${getcontentIntro}&moodlewsrestformat=json`;

    export default {
        data() {
            return {
                introA: [],
                contentIntro: contentIntro,
            };
        },
        async created() {
            await this.fetchIntro();
        },
        computed: {
            intro() {
                return this.contentIntro;
            },
        },

        methods: {
            async fetchIntro() {
                try {
                    const introResponse = this.contentIntro ? await axios.get(this.intro) : {};
                    if (Array.isArray(introResponse.data) && introResponse.data.length > 0) {
                        const introAFormatted = this.format(introResponse.data);
                        if (JSON.stringify(this.introA) !== JSON.stringify(introAFormatted)) {
                            this.introA = introAFormatted;
                        }
                    }
                } catch (ex) {
                    this.introA = [];
                }
            },
            format(response) {
                return JSON.parse(JSON.stringify(response).replace(/"quests":/g, '"child":'));
            },
        },
    };
</script>

<style>
    .Intro {
        text-align: left;
        margin-left: 1em;
        padding: 20px;
    }
</style>
