const cumpleaneroImage = document.getElementById("cumpleanero-image");

cumpleaneroImage.addEventListener("mouseenter", () => {
    cumpleaneroImage.style.transform = "scale(1.1)";
});

cumpleaneroImage.addEventListener("mouseleave", () => {
    cumpleaneroImage.style.transform = "scale(1)";
});
