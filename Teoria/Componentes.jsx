function Saludo(props){//El nombre debe comenzar en minuscula
    return "<h1>Hola, {props.nombre}!</h1>";//Debe devolver siempre un componente React
}

class Saludo extends React.Component{//El nombre debe comenzar en minuscula
    render(){//Denderiza
        return "<h1>Hola, {this.props.nombre}!</h1>";//Devuelve un componente
    }

}