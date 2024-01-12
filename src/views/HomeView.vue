<template>
    <div class="welcome">

        <h1>Welcome to the Fundamentals of Cybersecurity Course!</h1>
        <p>We're delighted to have you on board. This course will guide you through the basics of cybersecurity, including but not limited to:</p>
        <ul>
            <li class="list-item">Recognizing and understanding cyber threats and attacks</li>
            <li class="list-item">Understanding offensive and defensive security</li>
            <li class="list-item">Securing personal and professional information</li>
            <li class="list-item">Implementing network security measures</li>
            <li class="list-item">Maintaining secure communication over the internet</li>
            <li class="list-item">Exploring careers available in cybersecurity</li>
            <li class="list-item">Introduction to password cracking using John the Ripper</li>
            <li class="list-item">Understanding and complying with cybersecurity laws and regulations</li>
        </ul>
        <p>Our aim is to equip you with a solid foundation in cybersecurity principles and practices. Embark on this thrilling journey into the realm of cybersecurity with us!</p>

        <div>
            <p>Below you will find the courses available on our website that will assist you in your journey to start learning cybersecurity.</p>
            <div v-for="course in courses" :key="course.idnumber">
                <template v-if="course.fullname !== 'New Site'">
                    <strong>{{ course.fullname }}</strong> - {{ course.summary.replace(/<\/?[^>]+(>|$)/g, '') }}
                </template>
            </div>
        </div>
    </div>

    <Slide>
        <div class="menu-item">
            <RouterLink to="/intro">
                Intro to CyberSecurity
            </RouterLink>
        </div>

        <div class="menu-item">
            <RouterLink to="/cyberdefence">
                Cyber Defense
            </RouterLink>
        </div>
    </Slide>
</template>

<script>
    import axios from 'axios';
    import { Slide } from 'vue3-burger-menu';


    const apiUrl = 'http://1.11.111.11/webservice/rest/server.php';
    const token = '';

    const getcourses = 'core_course_get_courses';
    const coursesname = `${apiUrl}?wstoken=${token}&wsfunction=${getcourses}&moodlewsrestformat=json`;

    const getcontentIntro = 'core_course_get_contents&courseid=2';
    const contentIntro = `${apiUrl}?wstoken=${token}&wsfunction=${getcontentIntro}&moodlewsrestformat=json`;

    export default {
        name: 'WelcomePage',
        components: {
            Slide,
        },
        data() {
            return {
                courses: [],
                coursesname: coursesname,
                introA: [],
                contentIntro: contentIntro,
            };
        },
        async created() {
            await this.fetch();
            await this.fetchIntro();
        },
        computed: {
            endpoint() {
                return this.coursesname;
            },
            intro() {
                return this.contentIntro;
            },
        },

        methods: {
            async fetch() {
                try {
                    const coursesResponse = this.coursesname ? await axios.get(this.endpoint) : {};
                    if (Array.isArray(coursesResponse.data) && coursesResponse.data.length > 0) {
                        const coursesFormatted = this.format(coursesResponse.data);
                        if (JSON.stringify(this.courses) !== JSON.stringify(coursesFormatted)) {
                            this.courses = coursesFormatted;
                        }
                    }
                } catch (ex) {
                    this.courses = [];
                }
            },
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

<style scoped>
    .welcome {
        text-align: left;
        margin-left: 1em;
        padding: 20px;
    }

        .welcome h1 {
            text-align: center;
            color: #333;
        }

        .welcome p {
            font-size: 1.1em;
            line-height: 1.6;
        }

    .Slide {
        padding: 20px;
        background-color: #f2f2f2;
        border-radius: 10px;
    }

    a {
        text-decoration: none;
    }

    .menu-item {
        margin-top: 10px;
    }

    .RouterLink {
        display: inline-block;
        padding: 10px;
        background-color: #000000;
        border-radius: 5px;
        color: #333;
        transition: background-color 0.3s;
    }

    .RouterLink:hover {
        background-color: #ccc;
        }
 
</style>
