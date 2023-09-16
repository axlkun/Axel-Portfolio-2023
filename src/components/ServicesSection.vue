<template>
    <v-sheet class="services">
        <v-sheet class="title-container">
            <h2>Servicios</h2>
            <p>Descubre como una solución de software puede transformar tu negocio</p>
        </v-sheet>

            <v-sheet class="container-services">
                <v-sheet class="service" v-for="service in services" :key="service.title">
                  <h3>{{ service.title }} <span :class="'mdi ' + service.icon"></span></h3>
                  <p>{{ service.description }}</p>
                  <ul>
                    <li v-for="example in service.examples" :key="example"><span class="mdi mdi-arrow-right-thin"></span>{{ example }}</li>
                  </ul>
                </v-sheet>
              </v-sheet>
              
    </v-sheet>
</template>

<script>

export default {

name: 'servicesSection',

data: () => ({
    services: [
      {
        title: 'Desarrollo Frontend',
        icon: 'mdi-palette',
        description: 'Creación de interfaces atractivas para sitios web y aplicaciones, asegurando una experiencia de usuario excepcional.',
        examples: ['Landing Page', 'Sitios web informativos', 'Portafolios', 'Catalogos', 'Menús']
      },
      {
        title: 'Desarrollo FullStack',
        icon: 'mdi-desktop-classic',
        description: 'Desarrollo integral de software, brindando soluciones tecnológicas completas y a la medida.',
        examples: ['Soluciones de software a la medida', 'Software empresarial', 'Sitio web con panel de administración', 'Blog']
      },
      {
        title: 'Actualización',
        icon: 'mdi-cog-refresh',
        description: 'Optimización y mejora de proyectos en línea existentes, enfocándonos en el rendimiento y la visibilidad.',
        examples: ['Incorporación de nuevas funcionalidades', 'Rediseño del producto de software', 'Optimización de rendimiento', 'Implementación de estrategias SEO']
      }
    ]
})

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