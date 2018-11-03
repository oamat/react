import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; //llamadas HTTP, como un HTTPClient

class Post extends React.Component {

    componentDidMount() {
        this.props.getPost(); //Va a buscar la info de Post
        console.log("componentDidMount()");
    }

    componentWillUnmount() {
        this.props.clear(); //Limpia la info en DOM
        console.log("componentWillUnmount()");
    }
    render() {
        return (
            <div className='Post'>
                <h2>Post</h2>
                <h4>{this.props.showPost.title}{this.props.errorPost}</h4>
                <h4>BODY: {this.props.showPost.body}</h4>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => { // Para poder leer las props, hay que añadir en reducers de store la propiedad
    return {
        showPost: state.showPost,
        errorPost: state.errorPost
    }
}

const mapDispatchToProps = (dispatch, ownProps) => { //Para llamar métodos del store: dispatch, nos da sincronia, nos esperaremos hasta realizar las llamadas. 
    return {
        getPost: () => {
            console.log(ownProps);
            let idPost = parseInt(ownProps.match.params.id);
            //dispatch(actionCreator);
            axios.get(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`) //devuelve un json con la info.  De este estilo:
                //[{"id":6,"title":"Este es otro post de prueba","body":"Este es otro post que sirve para probar las funcionalidades de la App","created_at":"2017-08-01T02:41:17.120Z","updated_at":"2017-08-01T02:41:17.120Z","user_id":4},{"id":7,"title":"Post creado para  los alumnos","body":"Este es el primer post que se crea en los vídeos para la implementación de una aplicación con react, redux y otras librerías. ","created_at":"2017-08-10T21:10:04.126Z","updated_at":"2017-08-10T21:10:04.126Z","user_id":7},{"id":8,"title":"Este es otro post","body":"el cuerpo de este post señala la facilidad de crear componentes y funciones con Js y React","created_at":"2017-08-10T21:19:40.481Z","updated_at":"2017-08-10T21:19:40.481Z","user_id":7}]
                //axios funciona a través de promesas then, catch
                .then(function (response) {
                    console.log(response);
                    dispatch({ type: 'GET_POST', data: response.data }); //mirar store.js
                })
                .catch(function (error) {
                    dispatch({ type: 'ERROR_GET_POST'});
                    console.log(error);
                })

        },
        clear: () => {
            dispatch({type: 'CLEAR_POST'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);