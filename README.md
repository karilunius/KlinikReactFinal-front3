# Marcos 16:6

Examen Final de Frontend III

## Indice

- [Requisitos](#requisitos)


## Sobre el proyecto

```
# Se utilizo Vitejs react.

# clona el repositorio del final en tu computadora
git clone  https://github.com/karilunius/KlinikReactFinal-front3.git

# elimina los links al repositorio 
git remove remote origin

# debes instalar npm, usa el comando: npm install

# ejecuta con comando: npm run dev
```

### Aspectos del proyecto
```
Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su implementación sea correcta:

**Validaciones**

- Una validación para cada campor es suficiente, pueden ser "manuales" o con expreciones regulares. Lo importante es el correcto manejo de errores y submit.

**Funcionalidad de destacados**

- Se valorará funcionalidades extra a esta feature, como lo pueden ser el eliminar de destacadados, manejo de errores al intentar agregar repetidos y reseteo total de los destacados.


**Estilos**

- Se valorará el estilado de demas apartados de la App (por fuera del estilado obligatorio de las rutas en base al theme)

**Buenas Prácticas**

- Se prestará especial atención al uso de buenas prácticas, mejoras de performance (implementando useMemo) y la reutilizacion de codigo

## Funcionalidades


## Desarrollo

## API

Las API utilizadas fueron las siguiente:
`https://jsonplaceholder.typicode.com/users`


`https://jsonplaceholder.typicode.com/users/:id`
```
## Estructura
La estructura trat? de basarse en la plantilla original dada.
- proyecto
  - node_modules
  - public
    - logo-n-b.jpg
    - logoklinik.jpg
    - profiledoctor.jpg
  - src
    - componentes
      -gen
        - Card.jsx
        - Footer.jsx
        - Form.jsx
        - Navbar.jsx
      -utils
        -context
          -globalcontext.jsx
          -logincontext.jsx
          -themecontext.jsx
        -Protected
          -ProtectedRouter.jsx
      -Login.jsx
    - navigate
      - Routes.js
    - routes
      - Contactos.jsx
      - Dentista.jsx
      - Destacados.jsx
      - Home.jsx
    - styles
      - dark-theme.css
      - light-theme.css
      - theme.css
    - App.jsx
    - main.jsx
    - .gitignore
    - package-lock.json
    - package.json
    - README.md
    - vite.config.js
  - package-lock.json

### Sobre el formato de Entrega

- Tuve en cuenta la plantilla base entregada, pero debido a que hice un traslado de datos a un proyecto de vite, quise darle un estilo visual más personal.

```