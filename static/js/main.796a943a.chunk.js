(this["webpackJsonpcollege-navigator"]=this["webpackJsonpcollege-navigator"]||[]).push([[0],{47:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var o=s(1),c=s(2),n=s.n(c),a=s(37),r=s.n(a),l=(s(47),s(9)),i=s(10),d=s(12),h=s(11),u=s(19),j=s(4),b=s(14),p=s.n(b),v=s(38),m=s.n(v),O=s(23);s(64);O.a.initializeApp({apiKey:"AIzaSyCx_22IVNfxHM8TyjNoRqbqbf30j2flMgU",authDomain:"collegenavigator-40c76.firebaseapp.com",projectId:"collegenavigator-40c76",storageBucket:"collegenavigator-40c76.appspot.com",messagingSenderId:"497329332909",appId:"1:497329332909:web:c15591a2de202a9fe99c24"});var x=O.a,y=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return e.setState({redirect:!1}),Object(o.jsx)(j.a,{to:"/project6CollegeNavigator"})},e.state={favouriteLength:[],redirect:!1},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.database().ref().on("value",(function(t){var s,o=t.val().Favourites,c=[];for(var n in o)s=o[n],c.push(s);e.setState({favouritesLength:c.length-1})}))}},{key:"render",value:function(){var e=this.props,t=e.schoolHandler,s=e.radiusHandler,c=e.handleCityInput,n=e.handleCountryInput,a=e.submitHandler;return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"College Navigator"}),Object(o.jsx)("form",{action:"submit",onSubmit:a,children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"cityInputs",children:[Object(o.jsx)("input",{onChange:c,type:"text",placeholder:"City",id:"citySearch",required:!0}),Object(o.jsx)("label",{className:"srOnly",htmlFor:"citySearch",children:"Please enter a city to search"}),Object(o.jsx)("input",{onChange:n,type:"text",placeholder:"Province/State OR Country",id:"countrySearch",required:!0}),Object(o.jsx)("label",{className:"srOnly",htmlFor:"countrySearch",children:"Please enter the country the city is in"})]}),Object(o.jsxs)("div",{className:"radiusInputs",children:[Object(o.jsx)("legend",{children:"Search Radius"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:s,type:"radio",id:"shortRadius",name:"radius",value:"5000",required:!0}),Object(o.jsx)("label",{htmlFor:"shortRadius",children:"5KM"}),Object(o.jsx)("input",{onChange:s,type:"radio",id:"mediumRadius",name:"radius",value:"10000"}),Object(o.jsx)("label",{htmlFor:"mediumRadius",children:"10KM"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:s,type:"radio",id:"longRadius",name:"radius",value:"25000"}),Object(o.jsx)("label",{htmlFor:"longRadius",children:"25KM"}),Object(o.jsx)("input",{onChange:s,type:"radio",id:"xlongRadius",name:"radius",value:"50000"}),Object(o.jsx)("label",{htmlFor:"xlongRadius",children:"50KM"})]})]}),Object(o.jsxs)("div",{className:"schoolTypeInputs",children:[Object(o.jsx)("legend",{children:"School Type"}),Object(o.jsx)("input",{onChange:t,type:"radio",id:"university",name:"schoolType",value:"4bf58dd8d48988d1ae941735",required:!0}),Object(o.jsx)("label",{htmlFor:"university",children:"University"}),Object(o.jsx)("input",{onChange:t,type:"radio",id:"college",name:"schoolType",value:"4bf58dd8d48988d1a2941735"}),Object(o.jsx)("label",{htmlFor:"college",children:"College"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onChange:t,type:"radio",id:"tradeSchool",name:"schoolType",value:"4bf58dd8d48988d1ad941735"}),Object(o.jsx)("label",{htmlFor:"tradeSchool",children:"Trade School"})]})]}),this.renderRedirect(),Object(o.jsx)("button",{onClick:this.setRedirect,children:"Find Schools!"})]})}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(u.b,{activeClassName:"active",exact:!0,to:"/project6CollegeNavigator",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsxs)(u.b,{activeClassName:"active",to:"/project6CollegeNavigator/favourites",children:["Favourite Schools (",this.state.favouritesLength,")"]})}),Object(o.jsx)("li",{children:Object(o.jsx)(u.b,{activeClassName:"active",to:"/project6CollegeNavigator/addSchool",children:"Add School"})})]})})]})}}]),s}(c.Component),f=s(40),g=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).removeSchool=function(e){x.database().ref("NewSchools").child(e).remove(),p.a.fire({title:"Institution Removed",text:"thank you",icon:"success",confirmButtonText:"Ok"})},e.handleAddFav=function(e,t){var s=x.database().ref("Favourites"),o={schoolName:e,schoolAddress:Object(f.a)(t),schoolNotes:""};s.push(o),p.a.fire({title:"Institution Added",text:"thank you",icon:"success",confirmButtonText:"Ok"})},e.state={savedSchool:{schoolName:"",schoolAddress:[]}},e.sectionRef=n.a.createRef(),e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.sectionRef.current.scrollIntoView()}},{key:"render",value:function(){var e=this;return Object(o.jsx)(c.Fragment,{children:Object(o.jsxs)("div",{className:"combinedSchools",children:[Object(o.jsxs)("div",{className:"searchedSchools",children:[Object(o.jsxs)("h2",{ref:this.sectionRef,children:["Search results: ",Object(o.jsxs)("span",{children:[this.props.userCityInput,", ",this.props.userCountryInput]})]}),this.props.schoolResults.map((function(t){return Object(o.jsxs)("div",{className:"schoolResults",children:[Object(o.jsxs)("details",{children:[Object(o.jsx)("summary",{children:t.name}),Object(o.jsx)("p",{children:t.location.formattedAddress.join(", ")})]},t.id),Object(o.jsx)("button",{onClick:function(){e.handleAddFav(t.name,t.location.formattedAddress)},children:"Add to favourites"})]})}))]}),Object(o.jsxs)("div",{className:"addedSchool",children:[Object(o.jsx)("h2",{children:"User's Added Institutions"}),this.props.schoolsAdded.map((function(t){return Object(o.jsxs)("div",{className:"schoolResults",children:[Object(o.jsxs)("details",{children:[Object(o.jsx)("summary",{children:t.schoolName}),Object(o.jsx)("p",{children:t.schoolAddress.join(", ")})]},t.id),Object(o.jsxs)("div",{className:"buttonFlex",children:[Object(o.jsx)("button",{onClick:function(){e.handleAddFav(t.schoolName,t.schoolAddress)},children:"Add to favourites"}),Object(o.jsx)("button",{onClick:function(){e.removeSchool(t.id)},children:"Remove School"})]})]})}))]})]})})}}]),s}(c.Component),C=(s(71),s(41)),N=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).addSchool=function(t){t.preventDefault();var s=[e.state.schoolAddress.street,e.state.schoolAddress.city+" "+e.state.schoolAddress.province+" "+e.state.schoolAddress.postalCode,e.state.schoolAddress.country],o=x.database().ref("NewSchools"),c={schoolName:e.state.schoolName,schoolType:e.state.schoolType,schoolAddress:s,schoolNote:e.state.schoolNote};o.push(c),p.a.fire({title:"New institution added",text:"Thank You",icon:"success",confirmButtonText:"Ok"}),e.setState({schoolName:"",schoolNote:"",schoolType:"",schoolAddress:{street:"",city:"",province:"",postalCode:"",country:""}})},e.updateAddress=function(t,s){var o=Object(C.a)({},e.state.schoolAddress);o[s]=t.target.value,e.setState({schoolAddress:o})},e.state={schoolName:"",schoolType:"",schoolNote:"",schoolAddress:{street:"",city:"",province:"",postalCode:"",country:""}},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(o.jsx)(c.Fragment,{children:Object(o.jsx)("div",{className:"addSchoolForm",children:Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{htmlFor:"newSchoolName",children:"School Name"}),Object(o.jsx)("input",{type:"text",id:"newSchoolName",value:this.state.schoolName,onChange:function(t){return e.setState({schoolName:t.target.value})}}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"schoolTypeInputs",children:[Object(o.jsx)("legend",{children:"School Type"}),Object(o.jsx)("input",{type:"radio",id:"university",name:"schoolType",value:"University",required:!0,checked:"University"===this.state.schoolType,onChange:function(t){return e.setState({schoolType:t.target.value})}}),Object(o.jsx)("label",{htmlFor:"university",children:"University"}),Object(o.jsx)("input",{type:"radio",id:"college",name:"schoolType",value:"Community College",checked:"Community College"===this.state.schoolType,onChange:function(t){return e.setState({schoolType:t.target.value})}}),Object(o.jsx)("label",{htmlFor:"college",children:"College"}),Object(o.jsx)("input",{type:"radio",id:"tradeSchool",name:"schoolType",value:"Trade School",checked:"Trade School"===this.state.schoolType,onChange:function(t){return e.setState({schoolType:t.target.value})}}),Object(o.jsx)("label",{htmlFor:"tradeSchool",children:"Trade School"}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{className:"addressInputs",children:[Object(o.jsxs)("div",{className:"addressInput",children:[Object(o.jsx)("label",{htmlFor:"newSchoolAddress",children:"Address"}),Object(o.jsx)("input",{type:"text",id:"newSchoolAddress",value:this.state.schoolAddress.street,onChange:function(t){return e.updateAddress(t,"street")}})]}),Object(o.jsxs)("div",{className:"addressInput",children:[Object(o.jsx)("label",{htmlFor:"newSchoolCity",children:"City"}),Object(o.jsx)("input",{type:"text",id:"newSchoolCity",value:this.state.schoolAddress.city,onChange:function(t){return e.updateAddress(t,"city")}})]}),Object(o.jsxs)("div",{className:"addressInput",children:[Object(o.jsx)("label",{htmlFor:"newSchoolProvince",children:"Province"}),Object(o.jsx)("input",{type:"text",id:"newSchoolProvince",value:this.state.schoolAddress.province,onChange:function(t){return e.updateAddress(t,"province")}})]}),Object(o.jsxs)("div",{className:"addressInput",children:[Object(o.jsx)("label",{htmlFor:"newSchoolPostal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"newSchoolPostal",value:this.state.schoolAddress.postalCode,onChange:function(t){return e.updateAddress(t,"postalCode")}})]}),Object(o.jsxs)("div",{className:"addressInput",children:[Object(o.jsx)("label",{htmlFor:"newSchoolCountry",children:"Country"}),Object(o.jsx)("input",{type:"text",id:"newSchoolCountry",value:this.state.schoolAddress.country,onChange:function(t){return e.updateAddress(t,"country")}})]})]}),Object(o.jsx)("label",{htmlFor:"addNote",children:"Note"}),Object(o.jsx)("textarea",{value:this.state.schoolNote,onChange:function(t){return e.setState({schoolNote:t.target.value})}}),Object(o.jsx)("button",{className:"addSchoolButton",onClick:this.addSchool,children:"Add new school"})]})})})}}]),s}(c.Component),S=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).removeSchool=function(e){x.database().ref("Favourites").child(e).remove(),p.a.fire({title:"Institution Removed",text:"Your favourite list has been updated",icon:"success",confirmButtonText:"Ok"})},e.handleAddNotes=function(t){x.database().ref("Favourites").child(t).update({schoolNotes:e.state.schoolNotes}),e.setState({schoolNotes:""}),p.a.fire({title:"Note Added",text:"Added",icon:"success",confirmButtonText:"Ok"})},e.state={schoolNotes:"",schoolId:""},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this,t=this.props.school,s=t.id,c=t.schoolName,n=t.schoolAddress,a=t.schoolNotes;return Object(o.jsxs)("li",{className:"favoritesFlex",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsx)("p",{children:n}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Notes: "}),a]}),Object(o.jsx)("label",{htmlFor:"notes",className:"srOnly",children:"Notes: type below to add"}),Object(o.jsx)("textarea",{placeholder:"Type here to add notes",value:this.state.schoolNotes,name:"notes",id:"notes",onChange:function(t){return e.setState({schoolNotes:t.target.value,schoolId:s})}}),Object(o.jsxs)("div",{className:"buttonFlex",children:[Object(o.jsx)("button",{onClick:function(){e.handleAddNotes(s)},children:"Add Notes"}),Object(o.jsx)("button",{onClick:function(){e.removeSchool(s)},children:"Remove School"})]})]},s)}}]),s}(c.Component),A=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={favourites:[],schoolNotes:"",schoolId:""},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.database().ref().on("value",(function(t){var s,o=t.val().Favourites,c=[];for(var n in o)(s=o[n]).id=n,s.notes=e.state.schoolNotes,c.push(s);e.setState({favourites:c})}))}},{key:"render",value:function(){return Object(o.jsx)(c.Fragment,{children:Object(o.jsxs)("div",{className:"favorites",children:[Object(o.jsx)("h2",{children:"Favourites"}),Object(o.jsx)("ul",{children:this.state.favourites.map((function(e){return Object(o.jsx)(c.Fragment,{children:Object(o.jsx)(S,{school:e})})}))})]})})}}]),s}(c.Component);s(2).Fragment;var I=function(){return Object(o.jsxs)("footer",{children:[Object(o.jsxs)("p",{children:["Juno College 2020 Created by ",Object(o.jsx)("span",{children:"Clarke, Erzhena, Harry and Kyle \xa9"})]}),Object(o.jsx)("p",{children:Object(o.jsxs)("span",{children:["Photo by ",Object(o.jsx)("a",{href:"https://unsplash.com/@iemyoung?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Emily Karakis"})," on ",Object(o.jsx)("a",{href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})})]})},T="",F="",R=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).getData=function(){m()({method:"GET",responseType:"json",url:"https://api.foursquare.com/v2/venues/search",params:{client_id:"SMUUEFGVRENHIW3EQX5ICCFCTNQPPIWVXP21E2BQVRH421OF",client_secret:"EVNPHQ3EYKNQKZMOAKRVUTT0KDHXXGNUWUCY0LFZTVRE2BAF",near:e.state.cityInput+" "+e.state.countryInput,categoryId:e.state.schoolTypeId,radius:e.state.radius,v:20201205}}).then((function(t){var s=t.data.response.venues.filter((function(e){return e.name.includes("University")||"Community College"===e.categories[0].name||"Trade School"===e.categories[0].name&&e.location.formattedAddress.length>2}));e.setState({schoolResults:s,isActive:!0})})).catch((function(t){e.setState({isActive:!1}),p.a.fire({title:"No schools found",text:"Please Try Another City and Province/Country",icon:"error",confirmButtonText:"Ok"})})),x.database().ref().on("value",(function(t){var s,o=t.val().NewSchools,c=[];for(var n in o)(s=o[n]).id=n,c.push(s);var a="";"4bf58dd8d48988d1ae941735"===e.state.schoolTypeId?a="University":"4bf58dd8d48988d1a2941735"===e.state.schoolTypeId?a="Community College":"4bf58dd8d48988d1ad941735"===e.state.schoolTypeId&&(a="Trade School");var r=c.filter((function(t){var s=t.schoolAddress[1].toLowerCase(),o=t.schoolAddress[2].toLowerCase();return t.schoolType===a&&s.includes(e.state.cityInput.toLowerCase())&&o.includes(e.state.countryInput.toLowerCase())}));e.setState({newSchool:r})})),T=e.state.cityInput,F=e.state.countryInput},e.handleSubmit=function(t){t.preventDefault(),e.getData()},e.handleSchoolType=function(t){e.setState({schoolTypeId:t.target.value})},e.handleRadius=function(t){e.setState({radius:t.target.value})},e.handleCityInput=function(t){e.setState({cityInput:t.target.value})},e.handleCountryInput=function(t){e.setState({countryInput:t.target.value})},e.state={schoolResults:[],favourites:[],radius:"",schoolTypeId:"",cityInput:"",countryInput:"",formattedAddress:[],newSchool:[],favouriteLength:"",isActive:!1},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(o.jsxs)(u.a,{children:[Object(o.jsx)(y,{schoolHandler:this.handleSchoolType,radiusHandler:this.handleRadius,handleCityInput:this.handleCityInput,handleCountryInput:this.handleCountryInput,submitHandler:this.handleSubmit}),Object(o.jsxs)("div",{className:"wrapper",children:[this.state.isActive?Object(o.jsx)(j.b,{exact:!0,path:"/project6CollegeNavigator",render:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(g,{schoolResults:e.state.schoolResults,schoolsAdded:e.state.newSchool,userCityInput:T,userCountryInput:F})})}}):null,Object(o.jsx)(j.b,{path:"/project6CollegeNavigator/addSchool",component:N}),Object(o.jsx)(j.b,{path:"/project6CollegeNavigator/favourites",component:A})]}),Object(o.jsx)(I,{})]})}}]),s}(c.Component),k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,73)).then((function(t){var s=t.getCLS,o=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),o(e),c(e),n(e),a(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root")),k()}},[[72,1,2]]]);
//# sourceMappingURL=main.796a943a.chunk.js.map