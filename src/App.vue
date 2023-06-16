<template>
    <img alt="Vue logo" src="./assets/logo.png">

    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/Intro">Intro to CyberSecurity</router-link> |
        <router-link to="/cyberdefence">Cyber Defense</router-link>
    </nav>
    <router-view />
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;
    }

        nav a {
            font-weight: bold;
            color: #000000;
            text-align: left
        }

    .bm-menu {
        color: #2c3e50
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
