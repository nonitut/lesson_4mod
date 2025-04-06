document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Форма отправлена!"); // Проверка

    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;

    const data = `First Name: ${firstName}\nLast Name: ${lastName}`;

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "form_data.txt";
    link.click();
    URL.revokeObjectURL(url);

    const message = document.getElementById("successMessage");
    message.classList.remove("hidden");
    message.classList.add("show");

    setTimeout(() => {
    message.classList.remove("show");
    message.classList.add("hidden");
    }, 3000);
});
});
