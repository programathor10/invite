// Generar campos invitados
document.getElementById("num-personas").addEventListener("change", function () {
  const num = parseInt(this.value);
  const container = document.getElementById("campos-invitados");
  let html = "";
  for (let i = 1; i <= num; i++) {
    html += `
      <div class="invitado">
        <h3>Invitado </h3>
        <input type="text" placeholder="Nombre" required class="input-elegante">
        <input type="text" placeholder="Apellido" required class="input-elegante">
        <select class="select-elegante">
          <option value="ninguno">Ninguno</option>
          <option value="vegetariano">Vegetariano</option>
          <option value="vegano">Vegano</option>
          <option value="sin-gluten">Sin gluten</option>
        </select>
      </div>
    `;
  }
  container.innerHTML = html;
});

// Contador regresivo
const eventDate = new Date("2025-12-06T20:00:00").getTime();
setInterval(() => {
  const now = Date.now();
  const diff = eventDate - now;
  if (diff > 0) {
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
  }
}, 1000);

// Botón WhatsApp
document.getElementById("whatsapp-btn").addEventListener("click", function () {
  const personas = document.getElementById("num-personas").value;
  const mensaje = encodeURIComponent(`Hola, confirmo asistencia para ${personas} personas a la fiesta de Lua.`);
  this.href = `https://wa.me/5491112345678?text=${mensaje}`;
});
