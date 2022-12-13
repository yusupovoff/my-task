function kabisaYili(year,month){
    if (year%4===0){
        console.log(year,"bu yil kabisa yili");
        switch (month){
            case "yanvar":
            case "mart":
            case "may":
            case "iyul":
            case "avgust":
            case "oktabr":
            case "dekabr":
                console.log(month,"bu oyda 31 kun bor");
                break;
            case "fevral":
                console.log(month,"bu oyda 28 kun bor");
            case "aprel":
            case "iyun":
            case "sentabr":
            case "noyabr":
                console.log(month,"bu oyda 30 kun bor");
                break;
            default :
            console.log("bunday yoq");
                break;
        }
    }
    else {
        console.log(year,"kabisa yili emas");
        switch (month){
        case "yanvar":
        case "mart":
        case "may":
        case "iyul":
        case "avgust":
        case "oktabr":
        case "dekabr":
            console.log(month,"bu oyda 31 kun bor");
            break;
        case "fevral":
            console.log(month,"bu oyda 28 kun bor");
        case "aprel":
        case "iyun":
        case "sentabr":
        case "noyabr":
            console.log(month,"bu oyda 30 kun bor");
            break;
        }
     }
}
kabisaYili(2001,"fevral")