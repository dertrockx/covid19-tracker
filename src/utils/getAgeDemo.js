export default (patients) => {
    let teens = 0, twenties = 0, thirties = 0, fourties = 0, fifties = 0, sixties = 0;
    for(let i = 0; i < patients.length; i++){
        const age = Math.floor(patients[i].age / 10);

        if(age === 2)
            twenties++;
        else if(age <= 1)
        {
            console.log(patients[i].age);
            teens++;
        }
        else if(age === 3)
            thirties++;
        else if(age === 4)
            fourties++;
        else if(age === 5)
            fifties++;
        else if(age >= 6)
            sixties++;
    }
    return {
        'Teens': teens,
        '20s': twenties,
        '30s': thirties,
        '40s': fourties,
        '50s': fifties,
        '60s and above': sixties
    }
}