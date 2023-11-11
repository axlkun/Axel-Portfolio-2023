<template>
    <header class="header" :class="{ 'stick': menuOpen }">
        <nav>

            <div class="container-bar">
                <div class="logo" @click="redirectToHome">
                    <div>
                        <img :src="logo" alt="Icono"/>
                    </div>
                    <div>
                        <a><span>Axel</span>Cruz</a>
                    </div>

                </div>

                <div class="hide-icon">
                    <v-icon :icon="menuOpen ? 'mdi mdi-close-box' : 'mdi mdi-menu'" @click="toggleMenu"></v-icon>
                </div>
            </div>

            <div class="container-menu" :class="{ 'hide': !menuOpen }">
                <ul class="menu desktop-menu">
                    <li><a @click="redirectSection('home')">Inicio</a></li>
                    <li><a @click="redirectSection('aboutme')">Sobre mi</a></li>
                    <li><a @click="redirectSection('services')">Servicios</a></li>
                    <!-- <li><a @click="redirectSection('projects')">Proyectos</a></li> -->
                    <!-- <li><a @click="redirectSection('blog')">Blog</a></li> -->
                    <li><a @click="redirectSection('contact')" class="button">Contacto</a></li>
                </ul>

                <div class="hide-icon">
                    <p>axelcruz.dev@gmail.com</p>
                </div>
            </div>

        </nav>
    </header>
</template>
  
<script>
import { scrollToSection } from '../utils/utils';
import logo from '../assets/logo.svg';

export default {

    name: 'myHeader',

    data: () => ({
        logo,

        menuOpen: false
    }),

    methods: {
        scrollToSection, // se declara la función importada

        redirectToHome() { // función que reedirige al home
            this.$router.push('/');
        },

        toggleMenu() {
            this.menuOpen = !this.menuOpen;

            if (!this.menuOpen) {
                window.scrollTo(0, 0);
            }
        },

        redirectSection(sectionName) {

            const windowWidth = window.innerWidth;

            if (windowWidth <= 1024) {
                
                this.menuOpen = !this.menuOpen;
            }
            

            this.scrollToSection(sectionName);
        }
    },

}
</script>
  
<style scoped>
.header {
    width: 100%;
    max-height: 100vh;
    background-color: var(--primary-background);
}

.stick {
    position: fixed;
    z-index: 100;
    height: 100vh;
}

nav {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.logo img {
    width: 48px;
    height: 48px;
}

.logo a {
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-blue);
}

.logo a span {
    color: var(--primary-black);
}

.hide-icon {
    @media only screen and (min-width: 1024px) {
        display: none;
    }
}

.container-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.container-menu {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        height: auto;
    }
}

.menu {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        height: auto;
        gap: 15px;
    }
}

.menu a {
    font-size: 43px;
    line-height: 1.2;
    cursor: pointer;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
    }

    &:hover {
        color: var(--primary-blue);
        text-decoration: underline;
    }
}

ul.menu li a.button {
    background-color: var(--primary-blue);
    color: white;
    padding: 2px 8px;
    border-radius: 8px;
}

ul.menu li a.button:hover {
    opacity: 0.9;
    text-decoration: none;
    color: var(--primary-background);
}

/* */
.hide {
    display: none;

    @media only screen and (min-width: 1024px) {
        display: block;
    }
}
</style>