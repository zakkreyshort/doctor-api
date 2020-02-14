import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./doctor";

// $("#illnessForm").submit(function(event){
    //     event.preventDefault();
    
    //     (async () => {
        //         let doctor = new Doctor;
        //         const response = await doctor.getIllness();
        //         getElements(response);
        //     })();
        //     function getElements(response){
            //         let doctorArray = [];
            //         console.log(response); // at this point response is false, why?
            //         for(let i = 0; i<10; i++){
                //             doctorArray.push()
                //         }
                //         if(response){
                    //             $("#outputHere").text(response.data);
                    //         } else{
                        //             $("#outputHere").text('error in handling request');
                        //         }
                        //     }
                        // });
$(document).ready(function(){
    $("#doctorForm").submit(function(event){
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
                $("#otherOutput").text('error in handling request');
            } else if (response.data.length>0){
                response.data.forEach(function(doctor){
                    console.log(doctor);
                    $("ul#nameResult").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} ${doctor.practices[0].visit_address.city} ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.zip} </li>`);
                })
            }
        }
    });
})
