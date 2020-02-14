import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./doctor";

$(document).ready(function(){
$("#illnessForm").submit(function(event){
        event.preventDefault();
        const name = $("#inputtedDoctor").val();
        const symptom = $("#inputtedSymptom").val();
        const city = $("#inputtedCity").val();
    
        (async () => {
                let doctor = new Doctor;
                const response = await doctor.getDoctor(symptom, name, city);
                console.log(response);
                getElements(response);
            })();
            
            const getElements = function(response){
                  if(response === false){
                      $("#outputHere").text('error in handling request');
                  } else if (response.data.length>0){
                      response.data.forEach(function(doctor){
                        $("ul#nameResult").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.practices[0].visit_address.city} ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.zip} </li>`);
                      })
                  }          
     };
    // $("#doctorForm").submit(function(event){
    //     event.preventDefault();
        
    //     (async () => {
    //         let doctor = new Doctor;
    //         const response = await doctor.getDoctor(name, city);
    //         getElements(response);
    //     })();


    //     const getElements = function(response){
    //         if(response === false){
    //             $("#otherOutput").text('error in handling request');
    //         } else if (response.data.length>0){
    //             response.data.forEach(function(doctor){
    //                 $("ul#nameResult").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.practices[0].visit_address.city} ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.zip} </li>`);
    //             })
    //         }
    //     }
    // });
})
})
