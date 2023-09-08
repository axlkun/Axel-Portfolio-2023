<template>
    <header class="header">
        <nav>
            <div class="logo" @click="redirectToHome">
                <div>

                    <img :src="logo" alt="Icono" loading="lazy" />
                </div>
                <div>
                    <a><span>Axel</span>Cruz</a>
                </div>

            </div>
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="menu-icon">&#9776;</label>
            <ul class="menu">
                <li><a @click="scrollToSection('steps')">Inicio</a></li>
                <li><a @click="scrollToSection('contact')">Sobre Mi</a></li>
                <li><a @click="scrollToSection('contact')">Proyectos</a></li>
                <li><a @click="scrollToSection('contact')">Blog</a></li>
                <li><a @click="scrollToSection('contact')">Contacto</a></li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
import { scrollToSection } from '../utils/utils';
import logo from '../assets/logo.svg';

export default {

    name: 'myHeader',

    data: () => ({
        logo
    }),

    methods: {
        scrollToSection, // se declara la función importada

        redirectToHome() { // función que reedirige al home
            this.$router.push('/');
        }
    },

}
</script>
  
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
    list-style: none;
}

.header {
    /*position: sticky;*/
    top: 0;
    width: 100%;
    background-color: #f0f1fb;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    /*padding: 0 10px;
    border-radius: 10%;*/
}

.logo img {
    width: 52px;
    height: 52px;
}

.logo a {
    font-size: 24px;
    font-weight: bold;
    color: #0434e4;
}

.logo a span {
    color: #0b1842;
}

/*
.logo:hover{
    background-color: #EEEEEE;
}
*/

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu a {
    display: block;
    padding: 7px 15px;
    font-size: 17px;
    font-weight: 500;
    transition: 0.2s all ease-in-out;
    color: #0b1842;
    cursor: pointer;
}

.menu a:hover {
    color: #211ee9;
    text-decoration: underline;
}

.menu-icon {
    display: none;
}

#menu-toggle {
    display: none;
}

#menu-toggle:checked~.menu {
    transform: scale(1, 1);
}

@media only screen and (max-width: 950px) {

    .header {
        position: static;
    }

    .menu {
        flex-direction: column;
        background-color: #f0f1fb;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        z-index: 1;
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 0.3s ease-in-out;
        height: 90vh;
    }

    .menu a {
        margin-left: 12px;
    }

    .menu li {
        margin-bottom: 10px;
    }

    .menu-icon {
        display: block;
        color: #141213;
        font-size: 28px;
        cursor: pointer;
    }


}
</style>