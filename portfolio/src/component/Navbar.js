import logo from '../image/72ppi/logo.png'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 fixed-top">
            <a className="navbar-brand" href="/"><img src={logo} width="50" alt="logo_Nav"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" activeClassName="nav-link active" href="webdesign">Website design</a></li>
                    <li className="nav-item"><a className="nav-link" href="/graphicdesign">Graphic design</a></li>
                    <li className="nav-item"><a className="nav-link" href="animationandmodel">Animation & Model</a></li>
                    <li className="nav-item"><a className="nav-link" href="activity">Activity</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;