export class Doctor {
    async getIllness(){
        let illness = $("#inputtedSymptom").val();
        try{
            let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?query=${illness}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}
            `);
            let jsonifiedResponse;
            if (response.ok && response.status == 200){
                jsonifiedResponse = await response.json();
            } else {
                jsonifiedResponse = false;
            }
            return jsonifiedResponse;
        } catch(error) {
            return false;
        }
    }

    async getDoctor(){
        let drName = $('#inputtedDoctor').val();
        try{
            let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=${drName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}
            `);
            let jsonifiedResponse;
            if (response.ok && response.status == 200){
                jsonifiedResponse = await response.json();
            } else {
                jsonifiedResponse = false;
            }
            return jsonifiedResponse;
        } catch(error) {
            return false;
        }
    }

}