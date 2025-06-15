Nombre del proyecto: API RESTful de Gestión de Usuarios

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre usuarios, cumple con los principios REST.


Tecnologías Usadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemon (para desarrollo)
- Git + GitHub


Instalación y ejecución

Requisitos previos

- Node.js instalado
- MongoDB local o Atlas (en la nube)
- Git

Clonar repositorio

```bash
git clone (https://github.com/NDANIV/API-RESTful.git)

cd API-RESTful.git

npm start run
```

Endpoints disponibles
 
  - (POST)	    /api/users	    (Crear un usuario)
  - (GET)	      /api/users	    (Obtener todos los usuarios)
  - (GET)	      /api/users/:id	(Obtener usuario por ID)
  - (PUT)	      /api/users/:id	(Actualizar usuario por ID)
  - (DELETE)	  /api/users/:id	(Eliminar usuario por ID)


Ejemplo JSON (POST y PUT)

```
{
  "nombre": "Nicolás Vallejo",
  "email": "nicolas@example.com",
  "edad": 27
}
```
