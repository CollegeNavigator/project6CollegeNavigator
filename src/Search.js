import { Component } from 'react';
import axios from 'axios'


//Grab array of things and filter again for category name including university, college etc to get only schools/post secondary institutes
class Search extends Component {
    componentDidMount(){
        console.log('ITS ATTACHED');
        axios({
            method: 'GET',
            responseType: 'json',
            url: 'https://api.foursquare.com/v2/venues/search',
            params: {
                client_id:'SMUUEFGVRENHIW3EQX5ICCFCTNQPPIWVXP21E2BQVRH421OF',
                client_secret:'EVNPHQ3EYKNQKZMOAKRVUTT0KDHXXGNUWUCY0LFZTVRE2BAF',
                near: 'Toronto, ON',
                q:'Harvard',
                v: 20201205
            }
        }).then((res) => {
            console.log(res.data.response.venues);
        }).catch((err) => {
            console.log(err, 'It aint working');
        })
    }

    render(){
        return(
            <h1>Some stuff</h1>
        )
    }
}

export default Search;