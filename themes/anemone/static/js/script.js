const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Function to update the theme based on the current mode
const updateTheme = (isDarkMode) => {
    const theme = 'dark';
    document.documentElement.setAttribute('data-theme', theme);
};

// Function to toggle the theme
const toggleTheme = () => {
    const isDarkMode = toggleButton.checked;
    updateTheme(isDarkMode);
    localStorage.setItem('theme', 'dark');

    // Add transition class to body for smooth transition
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 300);
};

// Event listener for theme toggle
// toggleButton.addEventListener('change', toggleTheme);

// Function to initialize the theme based on the stored preference
const initializeTheme = () => {
    updateTheme('dark');
};

// Initialize the theme
initializeTheme();

// Listen for changes in system preference
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initializeTheme);
