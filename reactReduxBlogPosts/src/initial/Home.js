import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Link, Switch } from 'react-router-dom';
import axios from 'axios'; //llamadas HTTP, como un HTTPClient

// const Home = (props) => { // sin componentes.

//     const posts = props.allPosts.map((post) => {
//         return <h4 key={post.id}> {post.title}  </h4>;
//     });

//     return (
//         <div className='Home'>
//             <h2>Home</h2>
//             {posts}
//         </div>
//     );
// }



class Home extends Component {  //en este caso necesitamos el Component React, usaremos métodos de estado.

    componentDidMount() { //llama sólo una vez al server.
        console.log("componentDidMount() load data");
        this.props.load();  //al ser this.props  mirar en mapDispatchToProps 
    }
    componentWillUnmount() { //llama sólo cuando marchemos de la pàgina.
        console.log("componentWillUnmount() clear data");
        this.props.clear();  //al ser this.props  mirar en mapDispatchToProps 
    }


    allPosts = () => {
        const posts = this.props.allPosts.map((post) => { // corresponde a const mapStateProps.allPosts.
            console.log("post.id=" + post.id);
            return (
                <Link to={`/post/${ post.id}`} key={post.id}>
                    <h4 key={post.id}> {post.title}  </h4>
                </Link>
            );
        });
        console.log(posts);
        return posts;
    }

    render() {
        return (
            <div className='Home'>
                <h2>Home</h2>
                {this.allPosts()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        allPosts: state.allPosts  // hay que añadir en reducers de store la propiedad
    }
}


const mapDispatchToProps = (dispatch) => {  //hacer las llamadas aquí nos da sincronia, nos esperaremos hasta realizar las llamadas. 
    return {
        load: () => {
            //dispatch(actionCreator);
            axios.get('https://blog-api-u.herokuapp.com/v1/posts') //devuelve un json con la info.  De este estilo:
                //[{"id":6,"title":"Este es otro post de prueba","body":"Este es otro post que sirve para probar las funcionalidades de la App","created_at":"2017-08-01T02:41:17.120Z","updated_at":"2017-08-01T02:41:17.120Z","user_id":4},{"id":7,"title":"Post creado para  los alumnos","body":"Este es el primer post que se crea en los vídeos para la implementación de una aplicación con react, redux y otras librerías. ","created_at":"2017-08-10T21:10:04.126Z","updated_at":"2017-08-10T21:10:04.126Z","user_id":7},{"id":8,"title":"Este es otro post","body":"el cuerpo de este post señala la facilidad de crear componentes y funciones con Js y React","created_at":"2017-08-10T21:19:40.481Z","updated_at":"2017-08-10T21:19:40.481Z","user_id":7}]
                //axios funciona a través de promesas then, catch
                .then(function (response) {
                    console.log(response);
                    dispatch({ type: 'LOAD_DATA', data: response.data }); //mirar store.js
                })
                .catch(function (error) {
                    console.log(error);
                })
        },

        clear: () => {
            dispatch({ type: 'CLEAR_DATA' }); //mirar store.js
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home;

