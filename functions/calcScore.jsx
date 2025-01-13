import { nutriScore } from "nutri-score";
const calcScore = (result) => {
    

    const response = nutriScore.calculateClass({
        energy: result.Nutri.value[0].value,
        fibers: result.Nutri.value[8].value,
        fruit_percentage: result.Nutri.value[3].value,
        proteins: result.Nutri.value[4].value,
        saturated_fats: result.Nutri.value[5].value,
        sodium:result.Nutri.value[6].value,
        sugar: result.Nutri.value[7].value
    });

    return response
}

export default calcScore