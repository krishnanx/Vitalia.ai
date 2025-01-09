import { nutriScore } from "nutri-score";
const calcScore = (result) => {
    

    const response = nutriScore.calculateClass({
        energy: result.Nutri[0].value,
        fibers: result.Nutri[8].value,
        fruit_percentage: result.Nutri[3].value,
        proteins: result.Nutri[4].value,
        saturated_fats: result.Nutri[5].value,
        sodium:result.Nutri[6].value,
        sugar: result.Nutri[7].value
    });

    return response
}

export default calcScore