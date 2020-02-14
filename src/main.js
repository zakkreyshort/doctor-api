import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./doctor";

$(document).ready(function(){
$("#illnessForm").submit(function(event){
        event.preventDefault();
        const name = $("#inputtedDoctor").val();
        const city = $("#inputtedCity").val();
        
        (async () => {
            let doctor = new Doctor;
            const response = await doctor.getDoctor(name, city);
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
        
    });
    
    $("#symptomForm").submit(function(event){
        event.preventDefault();
        const symptom = $("#inputtedSymptom").val();

        (async () => {
            let doctor = new Doctor;
            const response = await doctor.checkSymptom(symptom);
            getElements(response);
        })();

        const getElements = function(response){
            if(response === false){
                $("#otherOutputHere").text('error in handling request');
            } else if (response.data.length>0){
                response.data.forEach(function(doctor){
                    $("ul#otherNameResult").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.practices[0].visit_address.city} ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.zip} </li>`);
                })
            }  
        };
})
})
