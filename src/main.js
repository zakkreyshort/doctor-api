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
            if(response){
                $("#outputHere").text(response.data);
            }
        }
    });
    $("#doctorForm").submit(function(){
        (async () => {
            let doctor = new Doctor;
            const response = await doctor.getDoctor();
            getElements(response);
        })();
        function getElements(response){
            if(response){
                $("#otherOutput").text(response.data);
            }
        }
    });
    })
