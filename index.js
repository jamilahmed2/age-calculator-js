document.getElementById('ageCalculator').addEventListener('submit', function (e) {
    e.preventDefault();

    const dob = document.getElementById('dob').value;
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('result').innerHTML = `Your Age Is: ${age}`;
});
