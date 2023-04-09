##### Marcos 16:6

# Examen Final de Frontend III

## Sobre el proyecto

```
# Se utilizo Vitejs react.Se uso Axios, React-router
ui-material, uimaterialicon

# clona el repositorio del final en tu computadora
git clone  https://github.com/karilunius/KlinikReactFinal-front3.git

# elimina los links al repositorio 
git remove remote origin

# debes instalar npm, usa el comando: npm install

# ejecuta con comando: npm run dev
```

## Aspectos del proyecto

- Se consider? la mayoria de lo dispuesto en el .doc de entrega final: 
https://docs.google.com/document/d/1ewex1MkKkmz3Je10heISh9u8-Fcno0UT16Ne7XB7cHg/edit

**Contexto**
- Se uso de la carpeta Context el archivo themecontext.jsx para el boton de claro / oscuro en la app.
- Se implement? un contexto para el login.
- Se implement? un contexto para los clicks de favoritos.

**Rutas**

- /home
Se presenta la lista r?pida de dentistas.
- /home/users{id}
Se uso segun la ruta de API dada. Muestra la informacion en detalle de cada dentista.
- /home/contactos/
Se muestra un forms para rellenar los datos para mas imformacion. 
La validaci?n es muy basica:
    - para nombre
si es valido seria sobre Es Igual y Mayor a 3 caracteres.
si no es valido seria menor a 3 caracteres.
    - para correo
no se uso validacion de regex
       - si es valido seria Es Igual y Mayor a 6 Caracteres.
       - si no es valido seria menor a 6 caracteres.

Si todo se encuentra validado presentar? un mensaje:

Si algo no es validado presentar? un mensaje:

**Destacados o favs**
- Se uso ruta /home/destacados para renderizar las cards que den favorito desde el home, y se guadan en el localstorage

**Estilos**

- Se uso el archivo light-theme.css para este proyecto.Los otros archivos .css se trato de crear un theme con la idea de que al dar click en el boton cargue un estilo u otro pero no se logr?.


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
    - logo-n.jpg
    - logoklinik.jpg
    - doctor.jpg
  - src
    - componentes
      -gen 
        - Card.jsx
        - Footer.jsx
        - Form.jsx
        - Navbar.jsx
      -utils
        - context
          - favscontext.jsx
          - logincontext.jsx
          - themecontext.jsx
        - Protected
          - ProtectedRoute.jsx
      - Login.jsx
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
    - index.html
    - package-lock.json
    - package.json
    - README.md
    - vite.config.js


### Sobre el formato de Entrega

- Tuve en cuenta la plantilla base entregada, pero debido a que hice un traslado de datos a un proyecto de vite, quise darle un estilo visual más personal.

```