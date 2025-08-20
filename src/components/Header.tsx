const Header = () => {
  return (
     <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOzb69M7hI3v0lYDhJjlt_wNjG4F_GTKZLDRTw8lH3_GFqrCKrACS&usqp=CAE&s" alt="Indian Flag Wave Logo" className="logo" />
        <section>
            <button id="theme-toggle" aria-label="Toggle theme">🌙</button>
        </section>
    </header>
  )
}

export default Header