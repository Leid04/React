/*Que es servicio en el front-end: 
  -Punto de acceso unico con los servicios de back.
  -Procesa respuesta y transforma parametros para realizar la peticion.
  -Devuelve modelos o listas de modelos.

Que es servicio en el back-end: 
  -Acceso seguro la informacion al servidor.
  -La informacion viaja en un formato estructurado (JSON)

Componente: Gestiona las interaciones y llama a los servicios front, almacena el estado o lo consume y renderiza a partir de los modelos de respuesta. 
*/
// Servicio en el front-end
const userServices = {
  // Punto de acceso único con los servicios de back
  getUser: async (userId) => {
    try {
      // Procesa la respuesta y transforma parámetros para realizar la petición
      const response = await fetch(`https://api.example.com/users/${userId}`);
      const userData = await response.json();
      
      // Devuelve modelos o listas de modelos
      return userData;
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      throw error;
    }
  },
};

// Componente que utiliza el servicio en el front-end
const userComponent = {
  // Gestiona las interacciones y llama a los servicios front
  showUserInfo: async (userId) => {
    try {
      const userData = await userServices.getUser(userId);
      
      // Almacena el estado o lo consume y renderiza a partir de los modelos de respuesta
      console.log('Información del usuario:', userData);
      // Aquí podrías realizar acciones como actualizar el estado del componente o renderizar la información en la interfaz de usuario.
    } catch (error) {
      console.error('Error al mostrar la información del usuario:', error);
      // Manejar el error según tus necesidades
    }
  },
};

// Ejemplo de uso
userComponent.showUserInfo(123);


/*------------------------------------------------------------------------------------------------------------------------------
/Un servicio debe devolve un modelo.
Modelos de entidades
  -Llamamos modelo a una clase que representa una entidad concreta de nuestra aplicación (Artículos, productos, usuarios…)
  -Los modelos de Front-end NO tienen porqué coincidir de manera exacta conlos modelos devueltos o almacenados en el Back-end
  -El modelo es una forma rápida de procesar una serie de datos y permite añadir funcionalidades extras con rapidez
  -Un modelo de Front-end debe de almacenar todas las propiedades relativas a la entidad que sean necesarias para su renderización o procesamiento
habitual*/

import React, { useState } from 'react';

// Función para crear un modelo de usuario
const createUserModel = (id, nombre, correo) => { return { id, nombre, correo }; };

// Componente funcional que utiliza el modelo con el hook useState
export default function UserComponent(){
  // Utilizamos el hook useState para gestionar el estado del modelo
  const [usuario, setUsuario] = useState(createUserModel(1, 'John Doe', 'john.doe@example.com'));

  // Ejemplo de cómo actualizar el modelo en respuesta a alguna acción
  const actualizarNombre = () => {
    // Modificamos solo la propiedad que queremos actualizar
    setUsuario(prevUsuario => ({ ...prevUsuario, nombre: 'Jane Doe' }));
  };

  return (
    <div>
      <h1>ID: {usuario.id}</h1>
      <p>Nombre: {usuario.nombre}</p>
      <p>Correo: {usuario.correo}</p>
      
      <button onClick={actualizarNombre}>Actualizar Nombre</button>
    </div>
  );
};
/*------------------------------------------------------------------------------------------------------------------------------
Uso de los modelos en servicios
  -Disponer de modelos y servicios base nos permite organizar nuestro código en torno a conjuntos de servicios “tipados”
  -Este tipo de orientación es común en MVC (Modelo-Vista-Controlador) o derivados y similares

Servicios genéricos
  -users.js
    -getUsers()
    -createUser(user)
  -books.js
    -getBooks()
    -createBook(book)*/

// Modelo para la entidad Usuario
const UserModel = (id, nombre, correo) => ({ id, nombre, correo });

// Modelo para la entidad Libro
const BookModel = (id, titulo, autor) => ({ id, titulo, autor });

// Servicio genérico para usuarios
const userService = {
  getUsers: () => {
    // Simulación de solicitud a la API para obtener usuarios
    return fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(usersData => usersData.map(user => UserModel(user.id, user.nombre, user.correo)));
  },
  createUser: (user) => {
    // Simulación de solicitud a la API para crear un usuario
    return fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(createdUserData => UserModel(createdUserData.id, createdUserData.nombre, createdUserData.correo));
  },
};

// Servicio genérico para libros
const bookService = {
  getBooks: () => {
    // Simulación de solicitud a la API para obtener libros
    return fetch('https://api.example.com/books')
      .then(response => response.json())
      .then(booksData => booksData.map(book => BookModel(book.id, book.titulo, book.autor)));
  },
  createBook: (book) => {
    // Simulación de solicitud a la API para crear un libro
    return fetch('https://api.example.com/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then(response => response.json())
      .then(createdBookData => BookModel(createdBookData.id, createdBookData.titulo, createdBookData.autor));
  },
};

// Ejemplo de uso
userService.getUsers().then(users => {
  console.log('Usuarios obtenidos:', users);
});

bookService.getBooks().then(books => {
  console.log('Libros obtenidos:', books);
});

const newUser = UserModel(null, 'Nuevo Usuario', 'nuevo.usuario@example.com');
userService.createUser(newUser).then(createdUser => {
  console.log('Nuevo usuario creado:', createdUser);
});

const newBook = BookModel(null, 'Nuevo Libro', 'Autor Desconocido');
bookService.createBook(newBook).then(createdBook => {
  console.log('Nuevo libro creado:', createdBook);
});
/*------------------------------------------------------------------------------------------------------------------------------
Creación de pseudo-interceptores
  -Un interceptor de una petición es una función que se ejecuta ya sea antes de la petición o a la hora de su resolución
  -Los interceptores permiten generalizar determinadas lógicas para todas las peticiones salientes
  -Fetch no proporciona soporte para interceptores de forma nativa, pero hay muchas maneras de emular el mismo comportamiento
  -La propuesta aquí es una de las soluciones más simples posibles */