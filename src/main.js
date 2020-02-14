import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./doctor";

$(document).ready(function(){
    $("#illnessForm").submit(function(event){
        event.preventDefault();
        
        (async () => {
            let doctor = new Doctor;
            const response = await doctor.getIllness();
            getElements(response);
        })();
        function getElements(response){
            let doctorArray = [];
            console.log(response); // at this point response is false, why?
            for(let i = 0; i<10; i++){
                doctorArray.push()
            }
            if(response){
                $("#outputHere").text(response.data);
            }
        }
    });

    $("#doctorForm").submit(function(event){
        event.preventDefault();


        (async () => {
            let doctor = new Doctor;
            const answer = await doctor.getDoctor();
            getElements(answer);
        })();
        function getElements(answer){
            if(answer){
                $("#otherOutput").text(answer.data);
            }
        }
    });
})
