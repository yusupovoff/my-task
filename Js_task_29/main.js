// console.log(yearInp_one);
let yearInp_one=document.getElementById("yearInp").value
let monthInp_two=document.getElementById("monthInp").value
function kabisaYili(yearInp_one,monthInp_two){
    if (yearInp_one%4===0){
        document.getElementById("yearKabisa").innerHTML=(yearInp_one,"bu yil kabisa yili");
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
            document.getElementById("answer").innerHTML=(monthInp_two,"bunday oy yo'q");
                break;
        }
    }
    else {
        document.getElementById("yearKabisa").innerHTML=(yearInp_one,"kabisa yili emas");
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
}
kabisaYili(yearInp_one,monthInp_two)