<template>
    <header class="header">
        <nav :class="{ 'fixed-logo': menuOpen }">

            <div class="nav-container">
                <div class="logo" @click="redirectToHome">
                    <div>
                        <img :src="logo" alt="Icono" loading="lazy" />
                    </div>
                    <div>
                        <a><span>Axel</span>Cruz</a>
                    </div>
    
                </div>
    
                <label for="menu-toggle" class="menu-icon">&#9776;</label>
                <input type="checkbox" id="menu-toggle" @click="toggleMenu">
                
    
                <ul class="menu">
                    <li><a @click="scrollToSection('home')">Inicio</a></li>
                    <li><a @click="scrollToSection('aboutme')">Sobre Mi</a></li>
                    <li><a @click="scrollToSection('services')">Servicios</a></li>
                    <li><a @click="scrollToSection('projects')">Proyectos</a></li>
                    <li><a @click="scrollToSection('blog')">Blog</a></li>
                    <li><a @click="scrollToSection('contact')" class="button">Contacto</a></li>
                </ul>
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
        }
    },

}
</script>
  
<style scoped>

.header {
    /*position: sticky;*/
    top: 0;
    width: 100%;
    background-color: var(--primary-background);
}

nav {
    width: 100%;
    background-color: var(--primary-background);
}

.nav-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    background-color: var(--primary-background);
    transition: 0.2s all ease-in-out;
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.fixed-logo {
    position: fixed;
    height: 100vh;
    z-index: 100;
    position: fixed;
    /* Otros estilos si es necesario */
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
    color: var(--primary-black);
    ;
}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-background);
}

.menu a {
    display: block;
    padding: 7px 15px;
    font-size: 17px;
    font-weight: 500;
    
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

    .menu {
        flex-direction: column;
        background-color: var(--primary-background);
        justify-content: space-evenly;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        height: 90%;
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 0.3s ease-in-out;
    }

    .menu a {
        margin-left: 12px;
        font-size: 35px;
    }

    .menu li {
        margin-bottom: 10px;
        border-bottom: 1px solid var(--primary-grey);
        width: 90%;
        
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

    &:hover {
        opacity: 0.9;
        text-decoration: none;
    }
}
</style>