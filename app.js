var inpDay = document.querySelector("#inpDay");
var inpMonth = document.querySelector("#inpMonth");
var inpYear = document.querySelector("#inpYear");
var day = document.querySelector(".day");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var span = document.querySelector(".haha")
var form = document.querySelector("form");
function checkDay(){
    inpDay.addEventListener("blur",()=>{
        var valDay = inpDay.value;
        if(valDay.length > 2){
            alert("Vui lòng nhập đúng định dạng ngày")
            inpDay.value = ''
            day.innerHTML = '';
        }
        else{
            day.innerHTML = valDay;
            return true;
        }
    })
}
checkDay();
function checkMonth(){
    inpMonth.addEventListener("blur",()=>{
        var valMonth = inpMonth.value;
        if(valMonth.length > 2){
            alert("Vui lòng nhập đúng định dạng tháng")
            inpMonth.value = ''
            month.innerHTML = '';
        }
        else{
            month.innerHTML = valMonth;
            return true;
        }
    })
}
checkMonth();
function checkYear(){
    inpYear.addEventListener("blur",()=>{
        var valYear = inpYear.value;
        if(valYear.length > 4){
            alert("Vui lòng nhập đúng định dạng năm")
            inpYear.value = ''
            year.innerHTML = '';
        }
        else{
            year.innerHTML = valYear;
            return true;
        }
    })
}
checkYear();
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    var textBoy = document.querySelector("#textBoy")
    var textBoyimg = document.querySelector("#textBoyimg");
    var textGirl = document.querySelector("#textGirl")
    var textGirlimg = document.querySelector("#textGirlimg");
    if(inpDay.value.trim()=="" || inpMonth.value.trim()=="" || inpYear.value.trim()=="" || textBoy.value == "" || textGirl.value ==""){
        alert("Yêu cầu nhập đầy đủ thông tin")
        return false;
    }
    else{
        textBoyimg.innerText = textBoy.value;
        textGirlimg.innerText = textGirl.value;
    }
    checkDay();
    checkMonth();
    checkYear();
    var valYear = inpYear.value;
    var valMonth = inpMonth.value;
    var valDay = inpDay.value;
    var dateEle = ''+valDay+'-'+valMonth+'-'+valYear+''
    var arr = dateEle.split('-');
    var newDate = arr[2]+'-'+arr[1]+'-'+arr[0]
    var dateNew = new Date(newDate).getTime();
    function setTimeBox(){
        var now = new Date().getTime()
        var D = now - dateNew
        var months = Math.floor(D/(1000*60*60*24*30))
        var textdays = Math.floor(D/(1000*60*60*24))
        var days = Math.floor(((D/(1000*60*60*24))-(months*(30))+1))
        var hours = Math.floor(D/(1000*60*60))
        var minutes = Math.floor(D/(1000*60))
        var seconds = Math.floor(D/(1000))
        hours %=24
        minutes %=60
        seconds %=60
        document.getElementById("itemNumberMonths").innerText = months
        document.getElementById("itemNumberDays").innerText = days
        document.getElementById("textDay").innerText = textdays
        document.getElementById("itemNumberHours").innerText = hours
        document.getElementById("itemNumberMinutes").innerText = minutes
        document.getElementById("itemNumberSeconds").innerText = seconds
        if(inpMonth.value >= '3'){
            var apartFrom3 = nowDate - dateNew
            var month3 = Math.floor(apartFrom3/(1000*60*60*24*30))
            var dayMonth3 = Math.floor(((apartFrom3/(1000*60*60*24))-(month3*(30))))
            document.getElementById("itemNumberDays").innerHTML = dayMonth3
        }
        if(inpMonth.value == '2'){
            var apartFrom2 = nowDate - dateNew
            var month2 = Math.floor(apartFrom2/(1000*60*60*24*30))
            var dayMonth2 = Math.floor(((apartFrom2/(1000*60*60*24))-(month2*(29)))+1)
            document.getElementById("itemNumberDays").innerHTML = dayMonth2
        }
    }
    var x = setInterval(() => {
        return setTimeBox();
    })
    
    var input = document.querySelectorAll(".form-date input");
    input.forEach((item)=>{
        item.addEventListener("click",()=>{
            clearInterval(x);
        })
    })
    var nowDate = new Date().getTime()
    if(dateNew > nowDate){
        alert("Không được điền quá ngày hiện tại")
        clearInterval(x)
        day.innerHTML = ''
        month.innerHTML = ''
        year.innerHTML = ''
        textBoyimg.innerHTML = ''
        textGirlimg.innerHTML = ''
        input.forEach((ele)=>{
            ele.value = ''
        })
    }
})
function imageUser(){
    var userLove = document.querySelector("#userLove1");
    var btnUser = document.querySelector("#btnUser1");
    var userLove2 = document.querySelector("#userLove2");
    var btnUser2 = document.querySelector("#btnUser2");
    btnUser.addEventListener("click",()=>{
        userLove.click()
    })
    btnUser2.addEventListener("click",()=>{
        userLove2.click()
    })
    userLove.addEventListener("change", function(){
        const file = this.files[0];
        var spanText = document.querySelector("#textUser1")
        var img1 = document.querySelector("#image1 img")
        spanText.innerHTML = file.name
        if(file){
            const reader = new FileReader();
            reader.onload = function(){
                const result = reader.result;
                img1.src = result
            }
            reader.readAsDataURL(file);
        }
    })
    userLove2.addEventListener("change", function(){
        const file2 = this.files[0];
        var spanText2 = document.querySelector("#textUser2")
        var img2 = document.querySelector("#image2 img")
        spanText2.innerHTML = file2.name
        if(file2){
            const reader2 = new FileReader()
            reader2.onload = function(){
                const result2 = reader2.result
                img2.src = result2
            }
            reader2.readAsDataURL(file2);
        }
    })
}
imageUser()






