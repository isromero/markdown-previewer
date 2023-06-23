marked.setOptions({
    gfm: true,
    breaks: true,
});

const renderer = new marked.Renderer();

const Editor = ({text, handleText}) => {
    return (
        <div className="container-editor">
            <textarea id="editor" onChange={handleText} value={text}/>
        </div>
    )
}

const Previewer = ({text}) => {
    const getMarkDownText = () => {
        return {__html: marked(text, { renderer: renderer })};
    }
    return (
        <div className="container-preview">
            <div id="preview" dangerouslySetInnerHTML={getMarkDownText()}/>
        </div>
    )
}

const App = () => {
    const [text, setText] = React.useState(`# Bienvenido a mi Markdown Previewer en React!

## Esto es un subencabezado...
### Y aquí hay otras cosas geniales:
    
Aquí hay código, \`<div></div>\`, entre 2 comillas invertidas.
    
\`\`\`
// Este es un código de múltiples líneas:

function otroEjemplo(primerLinea, ultimaLinea) {
    if (primerLinea === '\`\`\`' && ultimaLinea === '\`\`\`') {
    return codigoMultilinea;
    }
}
\`\`\`

También puedes hacer el texto **negrita**... ¡vaya!
O _cursiva_.
O... espera... ¡**_ambos!_**
Siéntete libre de tachar ~~cosas~~.

También hay [enlaces](https://www.miweb.com), y
> Citas en bloque!

Y si quieres volverte realmente loco, incluso tablas:

Encabezado Loco | Encabezado Salvaje | ¿Otro Encabezado?
------------ | ------------- | -------------
Tu contenido puede | estar aquí, y | aquí también....
Y aquí. | Vale. | Creo que lo entendemos.

- Y por supuesto, también hay listas.
    - Algunas son con viñetas.
        - Con diferentes niveles de sangría.
        - Que se ven así.


1. Y también hay listas numeradas.
1. ¡Usa solo 1s si quieres!
1. Y por último, no olvidemos las imágenes incrustadas:

![Foto de un mono feliz(juro que no soy yo programando)](https://infovaticana.com/blogs/wp-content/uploads/sites/3/2021/02/unnamed.jpg)`);
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="containers">
            <Editor text={text} handleText={handleChange}/>
            <Previewer text={text}/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);