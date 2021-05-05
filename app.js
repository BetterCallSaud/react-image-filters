class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid">
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
            <div class="row">
                <h1 id="h1" class="text-center">Image Filters</h1>
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
                <img class="img-responsive" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.xcitefun.net%2Fusers%2F2013%2F11%2F343308%2Cxcitefun-lofoten-6.jpg&f=1&nofb=1' id="img"></img>
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
            <div class="row">
                <div class="col-md-12 text-center">
                    <button onClick={grayScale} id="button" class="btn btn-primary">Grayscale</button>
                </div>
                <div class="col-md-12 text-center">
                    <button onClick={blur} id="button" class="btn btn-primary">Blur</button>
                </div>
                <div class="col-md-12 text-center">
                    <button onClick={sepia} id="button" class="btn btn-primary">Sepia</button>
                </div>
                <div class="col-md-12 text-center">
                    <button onClick={hc} id="button" class="btn btn-primary">High Contrast</button>
                </div>
                <div class="col-md-12 text-center">
                    <button onClick={reset} id="button" class="btn btn-primary">Reset</button>
                </div>
            </div>
        );
    }
}

function grayScale() {
    document.getElementById("img").style.cssText = 'display: block;margin-left: auto;margin-right: auto;width: 75%; filter: grayscale(80%);'
}

function blur() {
    document.getElementById("img").style.cssText = 'display: block;margin-left: auto;margin-right: auto;width: 75%; filter: blur(3px);'
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

function bold() {

}

ReactDOM.render(<App />,document.getElementById("root"));