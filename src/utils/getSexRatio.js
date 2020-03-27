export default (data) => {
    let male = 0;
    let female = 0;
    for(const patient of data){
        if(patient.gender === "F")
            female++;
        else
            male++;
    }
    // return { male: male / data.length, female: female / data.length }
    return { male, female }
}