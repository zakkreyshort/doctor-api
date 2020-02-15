import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./doctor";

$(document).ready(function() {
// form for doctor and city/state
    $("#illnessForm").submit(function(event) {
        event.preventDefault();
        const name = $("#inputtedDoctor").val();
        const city = $("#inputtedCity").val();

        (async () => {
            let doctor = new Doctor;
            const response = await doctor.getDoctor(name, city);
            getElements(response);
        })();

        const getElements = function (response) {
            if (response === false) {
                $("#outputHere").text('error in handling request');
            } else if (response.data == 0){
                $("ul#nameResult").append("No results shown")
            } else if (response.data.length > 0) {
                for (let i = 0; i <= response.data.length; i++){
                    response.data.forEach(function (doctor) {
                        $("ul#nameResult").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} <br> ${doctor.practices[i].visit_address.city} <br> ${doctor.practices[i].visit_address.state} <br> ${doctor.practices[i].visit_address.street} <br> ${doctor.practices[i].visit_address.zip} <br>  Accepts new patients: ${doctor.practices[i].accepts_new_patients} <br> Phone: ${doctor.practices[i].phones[0].number}</li>`);
                     })
                }
            }
        };
    });
// separate form for symptoms
    $("#symptomForm").submit(function(event) {
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
            } else if (response.data == 0){
                $("ul#nameResult").append("No results shown") 
            } else if (response.data.length > 0){
                for(let i = 0; i <= response.data.length; i++){
                    response.data.forEach(function(doctor){
                        $("ul#nameResult").append(`<li>${doctor.practices[i].name} <br> ${doctor.practices[i].visit_address.street} <br> ${doctor.practices[i].visit_address.city} <br> ${doctor.practices[i].visit_address.state} <br> ${doctor.practices[i].visit_address.zip} <br>  Accepts new patients: ${doctor.practices[i].accepts_new_patients}<br> Phone: ${doctor.practices[i].phones[0].number}</li>`);
                    })
                }
            }        
        }
    })
});