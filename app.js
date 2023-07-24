<!-- JavaScript Code -->
<script>
  // Get the form element
  const form = document.getElementById("yhteydenotot");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Do something with the data (e.g., display an alert)
    alert(
      `Kiitos, ${name}! Otan yhteyttä sähköpostitse osoitteeseen ${email} mahdollisimman pian!\n\nViesti: ${message}`
    );

    // Optionally, you can send the data to a server using AJAX/fetch if you want to store it or perform further processing.
  });
</script>