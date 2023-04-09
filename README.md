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

- Se considero la mayoria de lo dispuesto en el .doc de entrega final: 
https://docs.google.com/document/d/1ewex1MkKkmz3Je10heISh9u8-Fcno0UT16Ne7XB7cHg/edit

**Login**
- Se agregó un login que posee solo un atributo de required=true pero no tiene validaciones. Sí tiene un localstorage para conservar los datos de ingreso.
- Se implemento un contexto para el login.
![image](https://user-images.githubusercontent.com/93058053/230798225-77733035-2a9d-4558-aa34-3d8b8e366a0c.png)


**Contexto**
- Se uso de la carpeta Context el archivo themecontext.jsx para el boton de claro / oscuro en la app.

![image](https://user-images.githubusercontent.com/93058053/230798282-51cd6fe3-d5e7-43c7-802a-1b9a0dd90c8d.png)
![image](https://user-images.githubusercontent.com/93058053/230798300-3644ea7a-f505-46cd-a892-11e78f46744f.png)



- Se implemento un contexto para los clicks de favoritos. 
![image](https://user-images.githubusercontent.com/93058053/230798466-0a1d60f7-6461-42f2-8c9e-986b2dd7ce49.png)


**Rutas**

![image](https://user-images.githubusercontent.com/93058053/230798481-4e9a7438-aa23-43df-8757-dfd167c779e0.png)


- /home
Se presenta la lista rapida de dentistas.

![image](https://user-images.githubusercontent.com/93058053/230798587-929ca0bf-b910-4842-a890-283a5431576c.png)

- /home/users{id}
Se uso segun la ruta de API dada. Muestra la informacion en detalle de cada dentista.

![image](https://user-images.githubusercontent.com/93058053/230798612-9b58b1ff-310d-4f98-9834-aa4a8472b933.png)

- /home/contactos/
Se muestra un forms para rellenar los datos para mas imformacion. 
![image](https://user-images.githubusercontent.com/93058053/230798651-16bc8fa5-0eec-4366-a751-3fa7227f85fc.png)


La validacion es muy basica:
    - para nombre 
si es valido seria sobre Es Igual y Mayor a 3 caracteres.
si no es valido seria menor a 3 caracteres.
    - para correo
no se uso validacion de regex
       - si es valido seria Es Igual y Mayor a 6 Caracteres.
       - si no es valido seria menor a 6 caracteres.

Si todo se encuentra validado presentara un mensaje:

![image](https://user-images.githubusercontent.com/93058053/230798682-4f057d67-70f5-44d6-82f3-13f9bc13e1d0.png)

Si algo no es validado presentara un mensaje:

![image](https://user-images.githubusercontent.com/93058053/230798704-67bc0233-cda6-401d-9af3-0883919a1348.png)

**Destacados o favs**
- Se uso ruta /home/destacados para renderizar las cards que den favorito desde el home, y se guardan en el localstorage
![image](https://user-images.githubusercontent.com/93058053/230798740-0e680aa1-c228-4a17-b2ff-d0941f9cfffa.png)
![image](https://user-images.githubusercontent.com/93058053/230798749-2d0f5800-5208-4725-9b5f-8d2c067aa258.png)
![image](https://user-images.githubusercontent.com/93058053/230798767-04aec13c-30f7-4fc3-9fd0-90553fa25d05.png)


**Estilos**

- Se uso el archivo light-theme.css para este proyecto.Los otros archivos .css se trato de crear un theme con la idea de que al dar click en el boton cargue un estilo u otro pero no se logro.


## API

Las API utilizadas fueron las siguiente:
`https://jsonplaceholder.typicode.com/users`


`https://jsonplaceholder.typicode.com/users/:id`
```
## Estructura
La estructura trato de basarse en la plantilla original dada.
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

- Tuve en cuenta la plantilla base entregada, pero debido 
a que hice un traslado de datos a un proyecto de vite, 
quise darle un estilo visual más personal.

```
