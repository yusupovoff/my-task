// console.log(yearInp_one);
function kabisaYili(yearInp_one,monthInp_two){
    let yearInp_one=document.getElementById("yearInp").value
    let monthInp_two=document.getElementById("monthInp").value
    if (yearInp_one%4===0){
        document.getElementById("answer").innerHTML=(yearInp_one,"bu yil kabisa yili");
        switch (monthInp_two){
            case "yanvar":
            case "mart":
            case "may":
            case "iyul":
            case "avgust":
            case "oktabr":
            case "dekabr":
                document.getElementById("answer").innerHTML=(monthInp_two,"bu oyda 31 kun bor");
                break;
            case "fevral":
                document.getElementById("answer").innerHTML=(monthInp_two,"bu oyda 29 kun bor");
                break;
            case "aprel":
            case "iyun":
            case "sentabr":
            case "noyabr":
                document.getElementById("answer").innerHTML=(monthInp_two,"bu oyda 30 kun bor");
                break;
            default :
            console.log("bunday yoq");
                break;
        }
    }
    else {
        document.getElementById("answer").innerHTML=(yearInp_one,"kabisa yili emas");
        switch (monthInp_two){
        case "yanvar":
        case "mart":
        case "may":
        case "iyul":
        case "avgust":
        case "oktabr":
        case "dekabr":
            document.getElementById("answer").innerHTML=(monthInp_two,"bu oyda 31 kun bor");
            break;
        case "fevral":
            document.getElementById("answer").innerHTML=(monthInp_two,"bu oyda 28 kun bor");
        }
    }
}
kabisaYili(yearInp_one,monthInp_two)