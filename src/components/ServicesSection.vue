<template>
    <v-sheet class="services">
        <v-sheet class="title-container">
            <h2>Servicios</h2>
            <p>Descubre como una solución de software puede transformar tu negocio</p>
        </v-sheet>

            <v-sheet class="container-services">
                <v-sheet class="service">
                    <h3>Desarrollo Frontend <span class="mdi mdi-palette"></span></h3>
                    <!-- <p>Planeacion, diseño, desarrollo, pruebas, despliegue y mantenimiento de aplicaciones Frontend</p> -->
                    <p>El desarrollo frontend se enfoca en la creación de interfaces de usuario de alta calidad para sitios web y aplicaciones. Se centra en la implementación de diseños atractivos y funcionales que ofrecen una experiencia de usuario excepcional. Por ejemplo:</p>
                    <ul>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Landing Page</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Sitios web informativos</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Portafolios</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Catalogos</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Menús</li>
                    </ul>
                </v-sheet>
                <v-sheet class="service">
                    <h3>Desarrollo FullStack <span class="mdi mdi-desktop-classic"></span></h3>
                    <p>El desarrollo fullstack abarca la creación completa de aplicaciones, desde la interfaz de usuario hasta el backend. Incluye la programación de la lógica, la gestión de bases de datos y la configuración de servidores, brindando soluciones tecnológicas integrales. Por ejemplo:</p>
                    <ul>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Software empresarial</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Sitio web con panel de administración</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Blog</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Soluciones de software a la medida</li>
                    </ul>
                </v-sheet>
                <v-sheet class="service">
                    <h3>Actualización <span class="mdi mdi-cog-refresh"></span></h3>
                    <p> Este servicio se enfoca en mejorar y optimizar proyectos en línea existentes. Se prioriza el rendimiento y la visibilidad en línea. Por ejemplo:</p>
                    <ul>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Incorporación de nuevas funcionalidades</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Rediseño del producto de software</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Optimización de rendimiento</li>
                        <li><span class="mdi mdi-arrow-right-thin"></span>Implementación de estrategias SEO</li>
                    </ul>
                </v-sheet>
            </v-sheet>
    </v-sheet>
</template>

<script>

export default {

name: 'servicesSection',


}
</script>

<style scoped>
.services{
    min-height: 100vh;
    background-color: var(--primary-blue);
}

.title-container {
    font-size: 35px;
    max-width: 80%;
    margin: 0 auto;
    color: var(--background-grey);
    background: transparent;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        max-width: 90%;
        text-align: start;
    }
}

.title-container h2 {
    font-weight: 400;

    @media only screen and (min-width: 1024px) {
        font-size: 55px;
    }
}

.title-container p {
    font-size: 20px;
    line-height: 1.2;

    @media only screen and (min-width: 1024px) {
        line-height: 1.1;
        font-size: 25px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--background-grey);
    }
}

.container-services{
    background: transparent;
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin: 30px auto 0 auto;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    gap: 30px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
}

.service{
    background: transparent;
    border: 1px solid var(--background-grey);
    border-radius: 10px;
    padding: 15px;
    color: var(--background-grey);
    line-height: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    height: 500px;
    transition: transform 0.3s ease;

    &:hover{
        transform: scale(1.05);
    }
}

.service:nth-child(1), .service:nth-child(3)  {
    

    @media only screen and (min-width: 1024px) {
        margin-top: -60px;
    }
  }
.service:nth-child(2) {
    
    background-color: var(--background-grey);
    color: var(--primary-blue);

    @media only screen and (min-width: 1024px) {
        margin-top: 60px;
    }
  }

  .service:nth-child(3) {
    margin-bottom: 30px;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
    }
  }


.service h3{
    font-size: 25px;
    text-align: center;

    @media only screen and (min-width: 1024px) {
       
        font-size: 36px;
       
    }
}

.service p, li{
    font-size: 20px;
    line-height: 1.2;
}

li{
    margin: 15px 0;
    display: flex;
    flex-direction: row;
}

span{
    margin-right: 15px;
    
}
</style>