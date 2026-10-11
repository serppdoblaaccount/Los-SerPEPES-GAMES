import { DiscordSDK } from "@discord/embedded-app-sdk";
import "./style.css";

const statusElement = document.querySelector("#activityStatus");
const setStatus = (message) => {
  if (statusElement) statusElement.textContent = message;
};

const announce = (message) => window.alert(message);

document.querySelector("#createRoom")?.addEventListener("click", () => {
  announce("La interfaz está lista para el siguiente paso. Las salas compartidas necesitan un servidor multijugador en tiempo real.");
});

document.querySelector("#joinRoom")?.addEventListener("click", () => {
  const code = document.querySelector("#roomCode")?.value.trim().toUpperCase();
  if (!code) {
    announce("Escribe primero el código de la sala.");
    return;
  }
  announce("Código introducido: " + code + "\nLa conexión a las salas online se añadirá al implementar el servidor multijugador.");
});

document.querySelector("#browseGames")?.addEventListener("click", () => {
  document.querySelector("#gameSection")?.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll("[data-game]").forEach((button) => {
  button.addEventListener("click", () => {
    announce(button.dataset.game + "\nEste juego está en el catálogo inicial; su jugabilidad todavía debe implementarse.");
  });
});

document.querySelector("#roomCode")?.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/[^a-z0-9]/gi, "").toUpperCase();
});

async function connectDiscordActivity() {
  const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;

  if (!clientId) {
    setStatus("Vista web · Discord sin configurar");
    console.info("Discord Activity SDK: configura VITE_DISCORD_CLIENT_ID para probar dentro de Discord.");
    return;
  }

  try {
    setStatus("Conectando con Discord…");
    const discordSdk = new DiscordSDK(clientId);
    await discordSdk.ready();
    setStatus("Discord Activity · Conectada");
    document.documentElement.dataset.discordActivity = "true";
    console.info("Los SerPEPES GAMES: Discord Embedded App SDK listo.");
  } catch (error) {
    setStatus("Vista web · Discord no conectado");
    console.error("No se pudo iniciar Discord Embedded App SDK.", error);
  }
}

connectDiscordActivity();
