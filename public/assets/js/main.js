// Generar campos invitados
document.getElementById("num-personas").addEventListener("change", function () {
  const num = parseInt(this.value);
  const container = document.getElementById("campos-invitados");
  let html = "";
  if (num != 0) {
    for (let i = 1; i <= num; i++) {
      html += `
      <div class="invitado">
        <h3>Invitado </h3>
        <input type="text" placeholder="Nombre" required class="input-elegante">
        <input type="text" placeholder="Apellido" required class="input-elegante">
        <select class="select-menu">
                <option value="vegetariano">Vegetariano</option>
                <option value="vegano">Vegano</option>
                <option value="sin-gluten">celiaco</option>
                <option value="hipertension">hipertension</option>
                <option value="diabetes">diabetes</option>
        </select>
      </div>
    `;
    }html += `<div class="form-group">
    <label for="musica1">Recomendar música</label>
    <input
      type="text"
      id="musica1"
      name="musica1"
      placeholder="Ej: Canción o artista"
      class="input-elegante"
    />
  </div>`;
  } else {
    html = `
      <div class="invitado">
        <h3>Invitado</h3>
        <input type="text" placeholder="Nombre" required class="input-elegante">
        <input type="text" placeholder="Apellido" required class="input-elegante">
      </div>
    `;
    }
  container.innerHTML = html;
});

// Contador regresivo
const eventDate = new Date("2025-12-06T20:30:00-03:00");
function tick() {
  const now = new Date();
  const diff = Math.max(0, eventDate - now);
  const s = Math.floor(diff / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  const set = (id,val)=>{const el=document.getElementById(id); if(el) el.textContent = String(val).padStart(2,"0");};
  set("dd", d); set("hh", h); set("mm", m); set("ss", ss);
}
tick(); setInterval(tick,1000);
