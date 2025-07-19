document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const summary = document.getElementById("summary").value;

  const resumeContent = `
    Name: ${name}\n
    Email: ${email}\n
    Summary: ${summary}
  `;

  const blob = new Blob([resumeContent], { type: "application/pdf" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = `${name.replace(" ", "_")}_Resume.pdf`;
  link.click();
});
