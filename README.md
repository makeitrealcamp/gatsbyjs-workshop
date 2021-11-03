# Workshop Gatsby.js - Portafolio
> Crea un portafolio para tu perfil con Gatsby

<img src="./static/developer_blog_1000_2x.png">

## Reto
Como desarrollador, su GitHub es un gran paso adelante de una lista de viñetas de palabras de moda en un currículum. Sin embargo, sus repositorios por sí solos no dan mucho espacio para proporcionar un contexto adicional sobre los otros aspectos del desarrollo web. Su tarea es utilizar Gatsby para crear un sitio tipo portafolio que presente sus proyectos de Github mas importantes. Hágalo rentable y accesible desde el primer momento, agregue soporte de SEO para que los empleadores potenciales puedan encontrarlo con una búsqueda rápida.

Puede crear este sitio usando MDX, o estirarse un poco confiando en componentes React reutilizables y pasando cosas a través de props. Ambos son excelentes enfoques para usar dentro de Gatsby.

### Funcionamiento

- La página de índice del sitio de su portafolio debe incluir al menos 3 casos de estudio.
- MDX es un formato autorizable que le permite escribir JSX sin problemas en sus documentos Markdown. Utilice MDX para procesar y representar el contenido de cada página.
- Gatsby puede ayudar a que su sitio se clasifique y funcione mejor en los motores de búsqueda. Algunas ventajas, como la velocidad, vienen de fábrica y otras requieren configuración. Agregue soporte SEO a su sitio.
- Debes tener una lista de blogpost que cad uno de ellos al ver el detalle, su pagina deben crearse mediante programación a partir de sus datos GraphQL utilizando la API de ruta del sistema de archivos.

## Desarrollo

### Crear proyecto en tu github
Usar esta plantilla base para crear tu proyecto, para ello ve al boton verde en la parte superiror derecha donde dice `use this template`.

<img src="./static/01.png">

Luego debes clonar el repositorio desde tu cuenta e instalar las dependencias

```bash
git clone <url>
cd workshop-gatsby
npm install
```

## Cree un componente de SEO accesible usando React Helmet
Agregue metadatos a su archivo `gatsby-config` y consúltelo usando el hook `useStaticQuery` y la función de plantilla `GraphQL`.

`gatsby-config.js`
```js
  siteMetadata: {
    siteTitle: 'Personal web site',
    siteTitleAlt: 'Personal web site - Workshop Gatsby',
    siteHeadline: 'Personal web site - Workshop Gatsby',
    siteUrl: 'https://your-url.com',
    siteDescription:
      'Playful and Colorful One-Page portfolio featuring Parallax effects and animations',
    siteLanguage: 'en',
    siteImage: '/banner.jpg',
    author: 'MakeItReal Students',
    basePath: '/',
  },
```

React Helmet es un componente que le permite controlar el encabezado de su documento usando su componente React. Use el componente Helmet de react-helmet para pasar la información necesaria como título, descripción, idioma y titleTemplate. Finalmente, use la palabra clave `meta` para agregar información de `Twitter` y `og`.

`./src/components/Seo.jsx`
```jsx
import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ title, description, pathname, image, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          siteImage
          author
        }
      }
    }
  `);

  const site = data.site.siteMetadata;

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />

      {children}
    </Helmet>
  );
};

SEO.defaultProps = {
  title: ``,
  description: false,
  pathname: false,
  image: false,
  children: null,
};

export default SEO;
```

Por ulitmo, agregar este componente dentro del archivo `./src/components/Layout.jsx` para que todo nuestro `Layout` siempre use el componente `Seo`

```jsx
const Layout = ({ children, className }) => (
  <Themed.root>
    ...
    <Seo />
    ...
  </Themed.root>
);
```

## Utilice MDX para renderizar contenido markdown en un sitio de Gatsby
Es hora de crear las secciones que tendra nuestra pagina index.

En la carpeta `./sections/` es donde vamos a trabajar y crear los archivos de este punto.

### Intro
Crear un archivo `intro.mdx` en cual vas a incluir un mensaje de bienvenida o informacion importante sobre ti. aca te dejo un ejemplo:

```
# Hello, I'm Khriztianmoreno 👨🏼‍💻.

I'm a FullStack Javascript Developer 👨🏻‍💻
On a daily basis I use: JavaScript (ES6), React, Gatsby, CSS (inJS), GraphQL, just to name the most important bits.
```

### Proyectos
Ahora vamos a crear otro archivo, esta vez sera `projects.mdx` en el cual vamos a usar `ProjectCard` un componente de React que ya tenemos dentro de este proyecto para crear una lista de nuestros casos de estudio.

Te dejo un ejemplo:

```
## Projects

<ProjectCard
  title="URL Shortoner"
  link="https://github.com/khriztianmoreno/short-urls"
  bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
>
URL shortener with an airtable backend 👨🏼‍💻⚛️✂️
</ProjectCard>

<ProjectCard
  title="Status Dashboard"
  link="https://github.com/khriztianmoreno/gatsby-status-dashboard"
  bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
>
Dashboard showing the statuses of my Netlify builds & CircleCI tests
</ProjectCard>

<ProjectCard
  title="Pet Library"
  link="https://github.com/khriztianmoreno/pet-libraryr"
  bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
>
A library for pets 🐱🐶🐰
</ProjectCard>
```

### Acerca de
El siguiente paso es crear el archivo `about.mdx` donde agregaras la informacion mas revelvante acerca de ti.

```
## About

> The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating Emoji into my speech to better express myself. Winky face.

You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all right?
```

### Contacto
Y finalmente en vas a crear otro archivo, este se llamara `contact.mdx` y tendra la informacion donde peudan encontrarte.

```
## Get in touch

Say [Hi](mail@gmail.com) or find me on other platforms: [Twitter](https://twitter.com/username) & [Instagram](https://www.instagram.com/username/)
```

## Agregar las secciones en sus componentes
Los archivos `.mdx` deben ser importados en su correspondiente componente de react para poder ser visualizado de forma correcta dentro de la pagina.

En el archivo `./src/pages/index.js` vamos a encontrar los siguientes componentes

```jsx
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
```

Cada uno de ellos se mapea con el componente correspondiente en `.mdx`. O puedes hacer una busquedad en tu editor de codigo con este texto `component MDX`

Lo que debes hacer, es ir aca cada uno de estos componentes e importar el archivo correcto.

|Componente|MDX File                      |
|----------|------------------------------|
|Hero      |`./src/sections/intro.mdx`    |
|Projects  |`./src/sections/projects.mdx` |
|About     |`./src/sections/about.mdx`    |
|Contact   |`./src/sections/contact.mdx`  |

## Crear una nueva seccion para listar tus BlogPost
Deberas construir una nueva seccion para listar los 6 primeros blog post en el home de nuestro sitio, para ello puedes basarte en el componente `./src/components/Projects.jsx`.

Este es un ejemplo para ayudar a inspiarte
<img src="./static/02.png">

Este nuevo componente deber ir entre las secciones `About` y `Contact`

```jsx
const IndexPage = () => (
  <Layout>
    <Parallax pages={7}>
      ...
      <About offset={3} />

      <PostList offset={4} />

      <Contact offset={6} />
    </Parallax>
  </Layout>
);
```

Puedes tomar esta lista de post como data dummy solo para tu maquetacion

```js
const data = [
  {
    id: 1,
    name: 'How I built a modern website in 2021',
    description: `For over half of 2021, I worked on a complete rewrite of kentcdodds.com. You're reading this on the rewrite of this site! Are you using dark mode or light mode? Have you signed in and selected your team yet? Have you tried to call into the Call Kent Podcast? This blog post isn't about these and other features of the new site, but how I built it. There's too much to dive deep in a single blog post. I just want to give you an overview of the technologies and libraries I used to make this experience for you.`,
    image:
      'https://kentcdodds.com/img/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 2,
    name: 'How I built a modern website in 2021',
    description: `For over half of 2021, I worked on a complete rewrite of kentcdodds.com. You're reading this on the rewrite of this site! Are you using dark mode or light mode? Have you signed in and selected your team yet? Have you tried to call into the Call Kent Podcast? This blog post isn't about these and other features of the new site, but how I built it. There's too much to dive deep in a single blog post. I just want to give you an overview of the technologies and libraries I used to make this experience for you.`,
    image:
      'https://kentcdodds.com/img/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 3,
    name: 'How I built a modern website in 2021',
    description: `For over half of 2021, I worked on a complete rewrite of kentcdodds.com. You're reading this on the rewrite of this site! Are you using dark mode or light mode? Have you signed in and selected your team yet? Have you tried to call into the Call Kent Podcast? This blog post isn't about these and other features of the new site, but how I built it. There's too much to dive deep in a single blog post. I just want to give you an overview of the technologies and libraries I used to make this experience for you.`,
    image:
      'https://kentcdodds.com/img/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 4,
    name: 'How I built a modern website in 202',
    description: `For over half of 2021, I worked on a complete rewrite of kentcdodds.com. You're reading this on the rewrite of this site! Are you using dark mode or light mode? Have you signed in and selected your team yet? Have you tried to call into the Call Kent Podcast? This blog post isn't about these and other features of the new site, but how I built it. There's too much to dive deep in a single blog post. I just want to give you an overview of the technologies and libraries I used to make this experience for you.`,
    image:
      'https://kentcdodds.com/img/image/upload/w_2100,q_auto,f_auto,b_rgb:e6e9ee/kentcdodds.com/content/blog/how-i-built-a-modern-website-in-2021/banner_iplhop',
    created: '2017-11-04T18:48:46.250Z',
  },
];
```

## Headless CMS: Contentful
Ahora te toca crear en contentful.com un nuevo `Content model` para crear nuestros blog post en este CMS.

### Crea tu cuenta Contentful gratuita
También necesitará una cuenta Contentful gratuita: [crear una solo](https://www.contentful.com/sign-up/) toma un momento.

### Generar tokens de acceso
Antes de pasar a la parte emocionante de configurar su sitio web, primero debe generar 2 tokens de acceso para que su sitio web basado en Contentful esté en funcionamiento mediante la obtención de datos de la API.

- Content Management API
- Content Delivery API

Dirígete al menú desplegable Configuración de espacio y navega a la sección de API. Desde allí, navegue hasta la pestaña del token de API que le gustaría generar. La API de administración de contenido se utiliza para el acceso de escritura a su espacio, así que mantenga el token generado seguro y privado

### Modelo y configuración de contenido

Los campos que debe tener el `Content model` son:
- [ ] Title - Text
- [ ] Slug -  Slug
- [ ] Image - Asset
- [ ] Body - RichText

Luego de creado esto, deberas agregar 6 entradas de este tipo.

## Conectar Contentful con gatsby
Trabajando con React y con énfasis en un rendimiento rápido, GatsbyJS es un generador de sitios estáticos prometedor que le permite conectar sus proyectos web a una variedad de API y fuentes de datos; incluida la infraestructura de contenido de Contentful.

### Instalar el plugin
Puedes seguir las instrucciones de la [documentacion oficial](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/) para instlaar y configurar el plugin.

```bash
npm install gatsby-source-contentful
```

### Crear paginas programaticamente
Vamos a crear paginas dinamicamente mediante programacion usando `node.js` y una consulta simple de graphql en contentful.

Primero deberas crear el archivo `gatsby-node.js` en toda la raiz del proyecto, en este archivo será el encargado de crear las paginas dinamicamente.

Aca te dejo un ejemplo de como crear una pagina, pero recuerda que debes tener previamente creado el template que servira de plantilla para crear esta pagina.

```js
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const template = path.resolve('./src/templates/Post.js')

  createPage({
    path: `/posts/${element.node?.slug}`,
    component: template,
    context: element?.node,
  })
}
```

El siguiente paso sera que consultes a contentful para consultar los blogpost que creaste en pasos antetiores con el fin de que las paginas que creemos sean de acuerdo a la informacion que existe all.

Este es un posible ejemplo de como seria el `query` que deberias hacer.

```js
graphql(`
  {
    allContentfulPosts {
      edges {
        node {
          id
          title
          slug
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`)
```

Finalmente tu archivo deberia verse al parecido o similar a este fragmento de codigo:

```js
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const template = path.resolve('./src/templates/Post.js')

  return graphql(
    `
      {
        allContentfulPosts {
          edges {
            node {
              id
              title
              slug
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  ).then( result => {
    result.data.allContentfulPosts.edges.forEach(element => {
      createPage({
        path: `/posts/${element.node?.slug}`,
        component: template,
        context: element?.node,
      })
    })
  })

}

```

## Actualizar la seccion para listar tus BlogPost
Ahora que ya tenemos una conexion con contentfull dentro del proyecto, deberas hacer una consulta para obtener la informacion.

Tienes dos opciones que se importan desde el paquete de `gatsby`:
- `useStaticQuery`
- `query`

Ambas te van a servir y el query que hicimos en el paso anterior podrias utilizarlo tambien en este.

Luego de que tengas la data, recuerda pintar los datos usando un `.map`

```jsx
{posts.map(({ node }) => {
  return (
    <Link to={`/post/${node.slug}`} key={node.slug}>
      <h2> {node.title} </h2>
      <img src={node.image} alt={i.name} />
    </Link>
  )
})}
```

Si realizaste todos los pasos previos correctamente, podrias hacer clic en cada una de las tarjetas de los blog post e irias al detalle del mismo en una nueva pagina.

## 🚀 Despliegue
Por ultimo, la invitacion es para que despliegues este proyecto en netlify o vercel.

## Captura final

<img src="./static/final.gif">
