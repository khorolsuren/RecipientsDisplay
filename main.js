$('#email').change(function(e){
    checkEmail()
})
$('#email').keydown(function(e){
    if(e.keyCode == 32){
        checkEmail()
    }
})
$('#email').focusout(function(e){
    checkTotalMails()
})

function checkTotalMails(){
    var limit = 50
    const mails = $('#email').val()
    const mailList = mails.split(" ")
    var inputValue = ""
    var counter = 0
    var total = 0
    if(mailList.length < 6){
        mailList.forEach(element => {
            if(element.length <= limit){
                limit = limit - element.length
                inputValue = inputValue + element + " "
                counter++
            }
        })
        inputValue = inputValue + "..."
        $('#email').val(inputValue)
        total = mailList.length - counter
        console.log(total);
        $('span.total').text(total)
        $('span.total').css("display","block")
    }
    else{
        alert("We accept only 5 emails!")
        return (false)
    }
}
function checkEmail(){
    const mails = $('#email').val()
    const mailList = mails.split(" ")
    mailList.forEach(element => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.trim()))
        {
            return (true)
        }
        alert("You have entered an invalid email address!")
    })
}
