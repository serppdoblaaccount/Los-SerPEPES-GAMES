# Los SerPEPES GAMES

Plataforma web de minijuegos 2D y 3D para jugar con amigos. La aplicación se está preparando para funcionar como una Discord Activity mediante el paquete oficial `@discord/embedded-app-sdk`.

## Estado actual

- [x] Interfaz adaptable para móvil y ordenador.
- [x] Catálogo visual inicial de juegos 2D y 3D.
- [x] Proyecto configurado con Vite.
- [x] Integración inicial del Embedded App SDK: intenta conectar cuando se proporciona el Application ID y muestra el estado.
- [x] Configuración base para desplegar con Vercel.
- [ ] Salas online reales sincronizadas entre usuarios.
- [ ] Autenticación opcional y lista de jugadores.
- [ ] Juegos 2D y 3D jugables.
- [ ] Pruebas dentro de Discord en web, escritorio y móvil.

**Importante:** los botones de crear/unirse a salas y las tarjetas de juegos todavía son una interfaz de demostración. La conexión del SDK no crea por sí sola el multijugador; para eso se necesita un backend en tiempo real.

## Desarrollo local

Necesitas Node.js compatible con Vite 8.

```bash
npm install
cp .env.example .env.local
npm run dev
```

En `.env.local`, sustituye el valor de ejemplo por el **Application ID** de tu aplicación en Discord:

```env
VITE_DISCORD_CLIENT_ID=TU_APPLICATION_ID
```

El Application ID no es un token secreto. **Nunca** pongas un Bot Token ni un OAuth2 Client Secret en variables `VITE_*` o en el frontend.

Para compilar y previsualizar la versión de producción:

```bash
npm run build
npm run preview
```

## Configurar Discord Activities

1. Abre el [Discord Developer Portal](https://discord.com/developers/applications) y crea o selecciona la aplicación de Los SerPEPES GAMES.
2. Copia el **Application ID** de General Information.
3. En la configuración de Activities, habilita **Enable Activities**.
4. Despliega este repositorio en un host HTTPS, por ejemplo Vercel.
5. Añade `VITE_DISCORD_CLIENT_ID` a las variables de entorno del proyecto de Vercel y vuelve a desplegar.
6. En **Activities → URL Mappings**, configura el prefijo `/` para que apunte al dominio de tu despliegue, sin `https://` y sin una ruta de archivo.
7. En Supported Platforms, habilita las plataformas donde quieras probarla. Durante el desarrollo, abre Discord con Developer Mode y lanza la Activity desde el App Launcher.

Consulta la [guía oficial de Discord para crear una Activity](https://discord.com/developers/docs/activities/building-an-activity) y la [guía de desarrollo local](https://discord.com/developers/docs/activities/development-guides/local-development).

## Próxima fase: multijugador real

Para que varios amigos compartan una misma partida, habrá que añadir un servidor de salas en tiempo real. El servidor gestionará códigos de sala, participantes, estado del juego y desconexiones. La elección del backend y su URL se hará antes de conectar la lógica de las partidas.

## Catálogo inicial propuesto

- **Bloques Locos (2D):** plataformas y obstáculos.
- **Cohetes en Caos (2D):** carreras arcade.
- **Mini Kart Party (3D):** carreras en circuitos pequeños.
- **Reto Relámpago (2D):** pruebas rápidas.
- **Dibujo Secreto (2D):** dibujar y adivinar.
- **Exploradores 3D (3D):** explorar una arena en grupo.
