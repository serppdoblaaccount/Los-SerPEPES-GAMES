# Los SerPEPES GAMES

Plataforma web de minijuegos para jugar con amigos en salas, con juegos 2D y algunos 3D. El diseño está pensado para móvil, escritorio y una futura integración con Discord Activities.

## Estado actual

- [x] Primera interfaz adaptable para móvil y ordenador.
- [x] Catálogo visual inicial con propuestas de juegos 2D y 3D.
- [x] Campos y botones de interfaz para crear y unirse a salas.
- [ ] Salas reales sincronizadas entre diferentes usuarios.
- [ ] Identidad de jugador, lista de participantes y estado de partida.
- [ ] Primer juego 2D jugable en multijugador.
- [ ] Primer juego 3D jugable.
- [ ] Integración con Discord Embedded App SDK y configuración de la aplicación.
- [ ] Despliegue HTTPS y pruebas dentro de Discord.

## Desarrollo

La primera versión está en `index.html` y no necesita un proceso de compilación. Se puede previsualizar abriendo ese archivo en el navegador.

Los botones de salas son de demostración; todavía no crean partidas compartidas entre dispositivos. Para hacer salas reales habrá que añadir un backend en tiempo real y definir el sistema de salas. La integración con Discord Activities necesita una aplicación de Discord configurada y su Application ID.

## Catálogo inicial propuesto

- **Bloques Locos (2D):** plataformas y obstáculos.
- **Cohetes en Caos (2D):** carreras arcade.
- **Mini Kart Party (3D):** carreras en circuitos pequeños.
- **Reto Relámpago (2D):** pruebas rápidas.
- **Dibujo Secreto (2D):** dibujar y adivinar.
- **Exploradores 3D (3D):** explorar una arena en grupo.

## Publicación

Puede alojarse como sitio estático en GitHub Pages para previsualizar la interfaz. Para salas multijugador y Discord Activities se necesitará además un servicio HTTPS y un backend compatible con conexiones en tiempo real.
