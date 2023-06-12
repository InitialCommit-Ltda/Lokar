function Cadastro() {
    return (
        <div className="App">
            <div className="Page">
                <div className="Page-content">
                    <h1>
                        CADASTRO
                    </h1>
                    <p>
                        <input type="text" placeholder="Username"></input>
                    </p>
                    <p>
                        <input type="text" placeholder="E-mail"></input>
                    </p>
                    <p>
                        <input type="Text" placeholder="Password"></input>
                    </p>
                    <button id="meuBotao">Finalizar</button>
                </div>
            </div>
        </div>

    );
}

export default Cadastro;