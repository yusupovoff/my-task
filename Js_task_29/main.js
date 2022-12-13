function kabisaYili(year,month){
    if (year%4===0){
        document.getElementById("answer").innerHTML=(year,"bu yil kabisa yili");
        switch (month){
            case "yanvar":
            case "mart":
            case "may":
            case "iyul":
            case "avgust":
            case "oktabr":
            case "dekabr":
                document.getElementById("answer").innerHTML=(month,"bu oyda 31 kun bor");
                break;
            case "fevral":
                document.getElementById("answer").innerHTML=(month,"bu oyda 29 kun bor");
                break;
            case "aprel":
            case "iyun":
            case "sentabr":
            case "noyabr":
                document.getElementById("answer").innerHTML=(month,"bu oyda 30 kun bor");
                break;
            default :
            console.log("bunday yoq");
                break;
        }
    }
    else {
        document.getElementById("answer").innerHTML=(year,"kabisa yili emas");
        switch (month){
        case "yanvar":
        case "mart":
        case "may":
        case "iyul":
        case "avgust":
        case "oktabr":
        case "dekabr":
            document.getElementById("answer").innerHTML=(month,"bu oyda 31 kun bor");
            break;
        case "fevral":
            document.getElementById("answer").innerHTML=(month,"bu oyda 28 kun bor");
        }
    }
}
kabisaYili(document.getElementById("yearInp").innerText,document.getElementById("monthInp").innerText)