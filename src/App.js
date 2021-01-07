import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import firebase from './Firebase.js';
import Header from './Header.js';
import SearchResults from './SearchResults.js';
import './App.css';
import AddSchool from './AddSchool';
import Favourites from './Favourites.js';
import Footer from './Footer.js';


let city = "";
let country = "";

class App extends Component {
  constructor() {
    super();

    this.state = {
      schoolResults: [],
      favourites: [],
      radius: '',
      schoolTypeId: '',
      cityInput: '',
      countryInput: '',
      formattedAddress: [],
      newSchool: [],
      favouriteLength: '',
      isActive: false,
    }
  }


 getData = () => {
   axios({
    method: 'GET',
    responseType: 'json',
    url: 'https://api.foursquare.com/v2/venues/search',
    params: {
      client_id:'SMUUEFGVRENHIW3EQX5ICCFCTNQPPIWVXP21E2BQVRH421OF',
      client_secret:'EVNPHQ3EYKNQKZMOAKRVUTT0KDHXXGNUWUCY0LFZTVRE2BAF',
      near: this.state.cityInput + " " + this.state.countryInput,
      categoryId:this.state.schoolTypeId,
      radius:this.state.radius, //its in metres
      v: 20201205
            }
  }).then((res) => {
    const dataArray = res.data.response.venues;

// filter the data array for objects that only contain university, college in there name, and also have a address length that is larger then 2, to filter out objects that lack relevant data
    const filteredArray = dataArray.filter((object => {
      return (object.name.includes("University") || object.categories[0].name === "Community College" || object.categories[0].name === "Trade School") && object.location.formattedAddress.length > 2})
    );

    this.setState({
      schoolResults: filteredArray,
      // if the axios call returns relevant data change isActive to true, to display school results
      isActive:true
    })

  }).catch ((err) => {
    this.setState({
      isActive:false
    })
    // error message when no schools are found
    Swal.fire({
      title: "No schools found",
      text: "Please Try Another City and Province/Country",
      icon: "error",
      confirmButtonText: "Ok",
    })
  })

// Firebase data intiilization 
   const dbRef = firebase.database().ref();
   dbRef.on('value', (data) => {
    //  firebase data object
     const firebaseDataObj = data.val();
    //  this variable contains all of the new schools 
     const newSchoolObject = firebaseDataObj.NewSchools;

     let newSchoolArray = [];
     let userNewSchool;
      
     for (let schoolId in newSchoolObject) {
       userNewSchool = newSchoolObject [schoolId];
       userNewSchool.id = schoolId;

       newSchoolArray.push(userNewSchool);
     }

    // conditional statement that organizes  our schools based on their schooltype ID 
     let userSchoolType= '';
     if (this.state.schoolTypeId === '4bf58dd8d48988d1ae941735'){
       userSchoolType = 'University'
     } else if (this.state.schoolTypeId === '4bf58dd8d48988d1a2941735'){
       userSchoolType = 'Community College'
     } else if (this.state.schoolTypeId === '4bf58dd8d48988d1ad941735'){
        userSchoolType = 'Trade School'
     }

     
     const filteredNewSchoolArray = newSchoolArray.filter((object => {
      //  making inputs and comparison case sensitive
       const addedSchoolCity = object.schoolAddress[1].toLowerCase();
       const addedSchoolCountry = object.schoolAddress[2].toLowerCase();

       return (object.schoolType === userSchoolType && addedSchoolCity.includes(this.state.cityInput.toLowerCase()) && addedSchoolCountry.includes(this.state.countryInput.toLowerCase()))
     })
     );

    //  comparing user input to the search results
     this.setState({
       newSchool: filteredNewSchoolArray
     })
   })


   city = this.state.cityInput;
   country = this.state.countryInput;
 }

// Form functions to update states user input
 handleSubmit = (e) => {
   e.preventDefault();
   this.getData();
 }

 handleSchoolType = (e) => {
   this.setState({
     schoolTypeId: e.target.value
   })
 }

 handleRadius = (e) => {
   this.setState({
     radius: e.target.value
   })
 }

 handleCityInput = (e) => {
  this.setState({
    cityInput: e.target.value
  })
 }

 handleCountryInput = (e) => {
   this.setState({
     countryInput: e.target.value
   })
 }



  render() {
    return(
      <Router>
        
        <Header
        schoolHandler={this.handleSchoolType}
        radiusHandler={this.handleRadius}
        handleCityInput={this.handleCityInput}
        handleCountryInput={this.handleCountryInput}
        submitHandler={this.handleSubmit}
        />
        <div className="wrapper">
          {/* When axios call get data, set state isActive true and display data, if there is an error, or no data is found isActive is false and no routing occurs, nothing is updated */}
        {this.state.isActive 
            ? <Route exact path="/project6CollegeNavigator" render={() => {
          return (
            <>
            <SearchResults 
              schoolResults = {this.state.schoolResults}
              schoolsAdded = {this.state.newSchool}
              userCityInput = {city}
              userCountryInput = {country}
              />
            </>
          )
        }
        }/> 
        : null 
        }

        <Route path="/project6CollegeNavigator/addSchool" component={AddSchool} /> 
        <Route path="/project6CollegeNavigator/favourites" component={Favourites} /> 
        </div>
        <Footer />
      </Router>
    )
  }
}


export default App;
