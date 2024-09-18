function displayDateTime() {
    const now = new Date();
    const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get date components
    const date = now.getDate();
    const month = now.getMonth() +1; // Months are 0-based
    const year = now.getFullYear();
    const dayName = dayOfWeek[now.getDay()];

    // Get time components
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format date and time strings
    const dayString = `${date}`;
    const monthString = `${month}`;
    const yearString = `${year}`;
    const weekString = `${dayName}`;
    const hoursString = `${hours}`;
    const minutessString = `${minutes}`;
    const secondssString = `${seconds}`;

    // Update the clock element in the HTML
    document.getElementById("hour").textContent = `${hoursString}`;
    document.getElementById("minute").textContent = `${minutessString}`;
    document.getElementById("second").textContent = `${secondssString}`;
    document.getElementById("day").textContent = `${dayName}`;
}

// Call the displayDateTime function initially
displayDateTime();

// Update the clock every second
setInterval(displayDateTime, 1000);