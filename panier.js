<script>
let cart = [];

function addToCart(id, nom) {
  const startDate = document.getElementById("date-debut").value;
  const endDate = document.getElementById("date-fin").value;

  if (!startDate || !endDate) {
    alert("Merci de sélectionner les dates.");
    return;
  }

  cart.push({ id, nom, startDate, endDate });
  updateCartDisplay();
}

function updateCartDisplay() {
  const liste = document.getElementById("cart-liste");
  liste.innerHTML = "";

  cart.forEach((article) => {
    const li = document.createElement("li");
    li.textContent = `${article.nom} (${article.startDate} → ${article.endDate})`;
    liste.appendChild(li);
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
  console.log("Réservation envoyée :", cart, tel);
  alert("Réservation envoyée !");
  clearCart();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.dataset.id;
      const nom = this.dataset.nom;
      addToCart(id, nom);
    });
  });
});
</script>
