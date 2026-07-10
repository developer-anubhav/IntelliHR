import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-content">
                <div className="brand">
                    <h1 className="brand-title">IntelliHR</h1>
                    <p className="brand-tagline">
                        Simplifying Human Resource Management
                    </p>
                </div>

                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/employees">Employees</a>
                    <a href="/departments">Departments</a>
                    <a href="/login">Login</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;