class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Buttons/>
                <Image/>
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="col-md-12 text-center">
                <header>
                    <h1 class="header">Image Filters</h1>
                </header>
            </div>
        );
    }
}

class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.xcitefun.net%2Fusers%2F2013%2F11%2F343308%2Cxcitefun-lofoten-6.jpg&f=1&nofb=1' id="img"></img>
            </div>
        );
    }
}

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="buttons btn-group btn-group-lg" id="btn-group">
                <button onClick={grayScale} id="button" class="btn btn-primary">Grayscale</button>
                <button onClick={blur} id="button" class="btn btn-primary">Blur</button>
                <button onClick={sepia} id="button" class="btn btn-primary">Sepia</button>
                <button onClick={hc} id="button" class="btn btn-primary">High Contrast</button>
                <button onClick={reset} id="button" class="btn btn-primary">Reset</button>
            </div>
        );
    }
}

function grayScale() {
    document.getElementById("img").style.cssText = 'display: block;margin-left: auto;margin-right: auto;width: 75%; filter: grayscale(50%);'
}

function blur() {
    document.getElementById("img").style.cssText = 'display: block;margin-left: auto;margin-right: auto;width: 75%; filter: blur(5px);'
}

function sepia() {
    document.getElementById("img").style.cssText = 'display: block;margin-left: auto;margin-right: auto;width: 75%; filter: sepia(100%);'
}

function hc() {
    document.getElementById("img").style.cssText = 'display: block;margin-left: auto;margin-right: auto;width: 75%; filter: contrast(25%);'
}

function reset() {
    document.getElementById("img").style.cssText = 'display: block;margin-left: auto;margin-right: auto;width: 75%;'
}


ReactDOM.render(<App />,document.getElementById("root"));