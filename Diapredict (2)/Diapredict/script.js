function predictDiabetes() {
    // Ambil nilai input dari form
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let bmi = document.getElementById('bmi').value;
    let hypertension = document.getElementById('hypertension').value;
    let heartDisease = document.getElementById('heartDisease').value;
    let smokingHistory = document.getElementById('smokingHistory').value;
    let hba1c = document.getElementById('hba1c').value;
    let glucose = document.getElementById('glucose').value;

    // Rule sederhana untuk prediksi (contoh threshold)
    let diabetesRisk = 0;

    if (age > 45) diabetesRisk += 1;
    if (bmi > 30) diabetesRisk += 1;
    if (hypertension == "1") diabetesRisk += 1;
    if (heartDisease == "1") diabetesRisk += 1;
    if (smokingHistory != "never") diabetesRisk += 1;
    if (hba1c > 6) diabetesRisk += 1;
    if (glucose > 100) diabetesRisk += 1;

    // Menentukan hasil berdasarkan threshold (contoh sederhana)
    let resultMessage = "";
    if (diabetesRisk >= 4) {
        resultMessage = "High risk of diabetes. Please consult a doctor.";
    } else if (diabetesRisk >= 2) {
        resultMessage = "Moderate risk of diabetes.";
    } else {
        resultMessage = "Low risk of diabetes.";
    }

    // Tampilkan hasil
    document.getElementById('result').innerText = resultMessage;
}