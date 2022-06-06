
// problem-1
function anaToVori(ana){
    if(typeof(ana) == 'number'){
        const vori = ana * 0.0625;
        return vori;
    }
    else{
        return "please enter a number";
    }
    
}


// // problem-2
function pandaCost(singara, somucha, jilipi){
    if(typeof(singara) == 'number' && typeof(somucha) == 'number' && typeof(jilipi) == 'number'){
        const singaraPrize = singara * 7;
        const somuchaPrize = somucha * 10;
        const jilipiPrize = jilipi * 15;
        const totalPrize = singaraPrize + somuchaPrize + jilipiPrize;
    
        return totalPrize;
    }
    else{
        return "please enter a valid number";
    }
}


// problem-3

function picnicBudget(postulant){

    if(postulant > 0 && typeof(postulant) == 'number'){
        if(postulant <= 100){
            const totalMony = postulant * 5000;
            return totalMony
        }
        else if(postulant > 100 && postulant <= 200){
            const first100Cost = 100 * 5000;
            const remaining = postulant - 100;
            const secound100Cost = remaining * 4000;
            const totalMony = first100Cost + secound100Cost;
            return totalMony;
    
        }
        else if(postulant > 200){
            const first100Cost = 100 * 5000;
            const secound100Cost = 100 * 400;
            const remaining = postulant -200;
            const offerCost = remaining * 3000;
            const totalMony = first100Cost + secound100Cost + offerCost;
            return totalMony;
        }
    }
    else{
        return "please enter a valid number";
    }
   
}


// porblem 4

function oddFriend(friends){
    if(friends.lenght > 0){
        for(const friend of friends){
            if(friend.lenght % 2 != 0){
                return friend;
                break
            }
        }
    }
    else{
        return "error"
    }
    
}












