<script>
let cart = [];

function addToCart(id, name) {
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  if (!startDate || !endDate) {
    alert("Merci de sélectionner les dates.");
    return;
  }

  cart.push({ id, name, startDate, endDate });
  updateCartDisplay();
}

function updateCartDisplay() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.startDate} ➝ ${item.endDate})`;
    list.appendChild(li);
  });
}

function clearCart() {
  cart = [];
  updateCartDisplay();
}

function submitReservation() {
  const tel = prompt("Entrez votre numéro de téléphone pour confirmer :");
  if (!tel) return;

  // Simule l'envoi
  console.log("Réservation envoyée !", cart, tel);
  alert("Réservation envoyée !");
  clearCart();
}
</script>
