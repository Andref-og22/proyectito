document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Validar los campos
    if (name === "" || email === "") {
      document.getElementById("form-message").textContent = "Por favor, completa todos los campos.";
      document.getElementById("form-message").style.color = "red";
    } else {
      document.getElementById("form-message").textContent = "¡Formulario enviado exitosamente!";
      document.getElementById("form-message").style.color = "#28a745"; // Mensaje verde
      // Aquí puedes hacer algo con los datos, como enviarlos a un servidor
      // Por ahora solo mostramos el mensaje de éxito
    }
  });
  