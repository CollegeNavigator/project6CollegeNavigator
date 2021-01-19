import { Component, Fragment } from 'react';
import firebase from './Firebase.js';
import Favourite from './Favourite.js';

class Favourites extends Component {
    constructor() {
        super();
        this.state ={
            favourites: [],
            schoolNotes: '',
            schoolId: ''
        }
    }

    componentDidMount() {

        const dbRef = firebase.database().ref();

        dbRef.on('value', (data) => {
            const firebaseDataObj = data.val();
            const favouritesObject = firebaseDataObj.Favourites[firebase.auth().currentUser.uid];

            let favouritesArray = [];
            let userFavourite;
            console.log('in favs', favouritesObject)

            for (let schoolId in favouritesObject) {
                
                userFavourite = favouritesObject[schoolId];
                userFavourite.id = schoolId; 
                userFavourite.notes = this.state.schoolNotes
                favouritesArray.push(userFavourite);
            }
            console.log('a milli',favouritesArray)

            this.setState({
                favourites: favouritesArray
            })
        })
    }


   render() { 
       return (
           <Fragment>
               <div className="favorites">
               <h2>Favourites</h2>
               <ul>
               {
                   this.state.favourites.map((school) => {
                       console.log('showing map',school)
                       return(
                        <Fragment>
                            <Favourite 
                            school={school}
                            />
                        </Fragment>
                       )
                   })
               }
               </ul>
               </div>
           </Fragment>
       )
   }
}
export default Favourites;