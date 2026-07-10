import "./Home.css";

function Home() {
    return (
        <main className="home">

            <section className="hero">
                <h1>Welcome to IntelliHR</h1>

                <p className="subtitle">
                    A simple and efficient Human Resource Management System
                    designed to streamline employee management and
                    organizational workflows.
                </p>
            </section>

            <section className="about">
                <h2>About IntelliHR</h2>

                <p>
                    IntelliHR is a web-based Human Resource Management System
                    that helps organizations manage employee information
                    through a centralized platform. It simplifies day-to-day
                    HR activities by providing an organized and user-friendly
                    interface.
                </p>

                <p>
                    This application enables HR administrators to maintain
                    employee records, update employee details, and monitor
                    workforce information efficiently while reducing manual
                    paperwork.
                </p>
            </section>

            <section className="features">
                <h2>Key Features</h2>

                <div className="feature-grid">

                    <div className="feature-card">
                        <h3>Employee Management</h3>
                        <p>
                            Add, update, view, and remove employee records
                            with ease.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Centralized Data</h3>
                        <p>
                            Store employee information in a MongoDB
                            database.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Fast & Reliable</h3>
                        <p>
                            Built using React, Node.js, Express, and MongoDB
                            for a responsive experience.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Home;