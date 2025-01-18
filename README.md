Para esta actividad construiremos un API HTTP en node utilizando la librería express.js.

El API debe incluir las rutas necesarias para generar una respuesta en formato JSON a los siguientes puntos:

1. GET http://localhost:8000/api/employees

Devolverá un array JSON con el contenido del fichero "employees.json" que se adjunta abajo del enunciado (copiar y pegar en un fichero express.json)

Es posible añadirlo al código fuente con require('/path/to/employees.json') y guardarlo en una constante.

2. GET http://localhost:8000/api/employees?page=1

Devolverá los primeros 2 empleados. Del elemento 0 al elemento 1 del listado

2. GET http://localhost:8000/api/employees?page=2

Devolverá del elemento 2 al elemento 3 del listado

3. GET http://localhost:8000/api/employees?page=N

Devolverá del elemento (2 _ (N - 1)) al (2 _ (N - 1)) + 1.

4. GET http://localhost:8000/api/employees/oldest

Devolverá el objeto individual correspondiente al empleado con más edad. En caso de existir más

de uno, se devolverá la primera ocurrencia

5. GET http://localhost:8000/api/employees?user=true

Devolverá listado de employees con privileges == "user"

6. POST http://localhost:8000/api/employees

Añadirá un elemento al listado en memoria del programa (se perderá cada vez que se reinicie).

Se validará que el body de la petición cumpla el mismo formato JSON que el resto de empleados.

Si no cumpliera dicha validación, se devolverá status 400 con el siguiente contenido:

{"code": "bad_request"}

7. GET http://localhost:8000/api/employees?badges=black

Devolverá listado de employees que incluya "black" en el atributo "badges"

8. GET http://localhost:8000/api/employees/NAME

Devolverá objeto employee cuyo nombre sea igual a NAME. NAME puede tomar diferentes valores:
Sue, Bob, etc.
Si no se encuentra el usuario con name == NAME se devolvera status 404 con el siguiente contenido:
{"code": "not_found"}
BONUS. (Opcional). Incluir test unitarios para cada una de las rutas haciendo uso de la librería

https://github.com/visionmedia/supertest

---

employees.json

```json
[
  {
    "name": "Sue",

    "age": 19,

    "phone": {
      "personal": "555-123-123",

      "work": "555-456-456",

      "ext": "2342"
    },

    "privileges": "user",

    "favorites": {
      "artist": "Picasso",

      "food": "pizza"
    },

    "finished": [
      17,

      3
    ],

    "badges": ["blue", "black"],

    "points": [
      {
        "points": 85,

        "bonus": 20
      },

      {
        "points": 85,

        "bonus": 10
      }
    ]
  },

  {
    "name": "Bob",

    "age": 42,

    "phone": {
      "personal": "555-123-123",

      "work": "555-456-456",

      "ext": "7673"
    },

    "privileges": "admin",

    "favorites": {
      "artist": "Miro",

      "food": "meringue"
    },

    "finished": [
      11,

      25
    ],

    "badges": ["green"],

    "points": [
      {
        "points": 85,

        "bonus": 20
      },

      {
        "points": 64,

        "bonus": 12
      }
    ]
  },

  {
    "name": "Willy",

    "age": 22,

    "phone": {
      "personal": "555-123-123",

      "work": "555-456-456",

      "ext": "8263"
    },

    "privileges": "user",

    "favorites": {
      "artist": "Cassatt",

      "food": "cake"
    },

    "finished": [6],

    "badges": ["blue", "Picasso"],

    "points": [
      {
        "points": 81,

        "bonus": 8
      },

      {
        "points": 55,

        "bonus": 20
      }
    ]
  },

  {
    "name": "John",

    "age": 34,

    "phone": {
      "personal": "555-123-123",

      "work": "555-456-456",

      "ext": "2143"
    },

    "privileges": "admin",

    "favorites": {
      "artist": "Chagall",

      "food": "chocolate"
    },

    "finished": [
      5,

      11
    ],

    "badges": ["Picasso", "black"],

    "points": [
      {
        "points": 53,

        "bonus": 15
      },

      {
        "points": 51,

        "bonus": 15
      }
    ]
  },

  {
    "name": "Steve",

    "age": 23,

    "phone": {
      "personal": "555-123-123",

      "work": "555-456-456",

      "ext": "8253"
    },

    "privileges": "user",

    "favorites": {
      "artist": "Noguchi",

      "food": "nougat"
    },

    "finished": [
      14,

      6
    ],

    "badges": ["orange"],

    "points": [
      {
        "points": 71,

        "bonus": 20
      }
    ]
  },

  {
    "name": "Martin",

    "age": 43,

    "phone": {
      "personal": "555-123-123",

      "work": "555-456-456",

      "ext": "5623"
    },

    "privileges": "user",

    "favorites": {
      "food": "pizza",

      "artist": "Picasso"
    },

    "finished": [
      18,

      12
    ],

    "badges": ["black", "blue"],

    "points": [
      {
        "points": 78,

        "bonus": 8
      },

      {
        "points": 57,

        "bonus": 7
      }
    ]
  }
]
```
