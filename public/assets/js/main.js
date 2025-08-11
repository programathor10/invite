document.getElementById("num-personas").addEventListener("change", function() {
  const numInvitados = parseInt(this.value);
  const container = document.getElementById("campos-invitados");
  container.innerHTML = "";

  for (let i = 1; i <= numInvitados; i++) {
    container.innerHTML += `
      <div class="invitado">
        <h3>Persona ${i}</h3>
        <div class="form-group">
          <label for="nombre${i}">Nombre *</label>
          <input type="text" id="nombre${i}" name="nombre${i}" required class="input-elegante">
        </div>
        <div class="form-group">
          <label for="apellido${i}">Apellido *</label>
          <input type="text" id="apellido${i}" name="apellido${i}" required class="input-elegante">
        </div>
        <div class="form-group">
          <label>¿Algún requerimiento en la alimentación?</label>
          <select name="alimentacion${i}" class="select-elegante">
            <option value="ninguno">Ninguno</option>
            <option value="vegetariano">Vegetariano</option>
            <option value="vegano">Vegano</option>
            <option value="sin-gluten">Sin gluten</option>
          </select>
        </div>
      </div>
    `;
  }
});