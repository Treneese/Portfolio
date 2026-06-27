import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer__brand">
                <h2>Treneese Johnson</h2>
                <p>
                    Software Engineer • Founder • Artist
                </p>
            </div>

            <div className="footer__links">

                <a
                    href="https://github.com/Treneese"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/treneese-johnson-b55b3926a"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>

                <a href="mailto:treneesejohnson9012@gmail.com">
                    Email:treneesejohnson9012@gmail.com
                </a>

            </div>

            <div className="footer__copyright">
                © {new Date().getFullYear()} Treneese Johnson
            </div>

        </footer>
    );
}

export default Footer;