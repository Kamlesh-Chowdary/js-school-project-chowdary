interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOzb69M7hI3v0lYDhJjlt_wNjG4F_GTKZLDRTw8lH3_GFqrCKrACS&usqp=CAE&s"
        alt="Indian Flag Logo"
        className="logo"
        role="img"
        aria-label="Indian Flag Logo"
      />
      <button 
        onClick={toggleTheme} 
        id="theme-toggle"  
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} 
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} 
        tabIndex={0}
      >
        {isDarkMode ? "🌞" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
