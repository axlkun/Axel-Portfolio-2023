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
                <li><a @click="scrollToSection('home')">Inicio</a></li>
                <li><a @click="scrollToSection('aboutme')">Sobre Mi</a></li>
                <li><a @click="scrollToSection('services')">Servicios</a></li>
                <li><a @click="scrollToSection('projects')">Proyectos</a></li>
                <li><a @click="scrollToSection('blog')">Blog</a></li>
                <li><a @click="scrollToSection('contact')" class="button">Contacto</a></li>
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
    background-color: var(--primary-background);
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
    color: var(--primary-blue);
}

.logo a span {
    color: var(--primary-black);;
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
    color: var(--primary-black);
    cursor: pointer;
}

.menu a:hover {
    color: var(--primary-blue);
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
    /*
    .logo a{
        display: none;
    }
    */
    .menu {
        flex-direction: column;
        background-color: var(--primary-background);
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
        color: var(--primary-black);
        font-size: 28px;
        cursor: pointer;
    }


}

ul.menu li a.button {
    background-color: var(--primary-blue);
    color: white;
    padding: 2px 8px;
    border-radius: 8px;

    &:hover{
        opacity: 0.9;
        text-decoration: none;
    }
}

</style>