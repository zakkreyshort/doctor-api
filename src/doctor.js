import './../src/main';

export class Doctor {

    
    async getDoctor(name, symptom, city){
        try{
            let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=${city}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
            if (response.status != 200 && response.ok != 200){
                return false;
            } else {
                let jsonifiedResponse = await response.json();
                return jsonifiedResponse; 
            }
        } catch(error) {
            return false;
        }
    }
    
}
