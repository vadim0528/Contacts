var temp = [];

if(localStorage.getItem('numberOfContacts')!=null)
    var numberOfContacts = localStorage.getItem('numberOfContacts');
else {
    var numberOfContacts = 0;
    localStorage.setItem('numberOfContacts', '0');
}

function showAddContact(){
    document.getElementById('nameField').value='';
    document.getElementById('numberField').value='';
    document.getElementById('addContactWindow').style.display='block';
}

function hideAddContact(){
    document.getElementById('errorName').style.display='none';
    document.getElementById('errorNumber').style.display='none';
    document.getElementById('addContactWindow').style.display='none';
}

function addContact(){
    document.getElementById('errorName').style.display='none';
    document.getElementById('errorNumber').style.display='none';

    if(document.getElementById('nameField').value=='')
        document.getElementById('errorName').style.display='block';
    else if(document.getElementById('numberField').value=='')
        document.getElementById('errorNumber').style.display='block';
    else {
        numberOfContacts++;
        localStorage.setItem('numberOfContacts', numberOfContacts);
        temp = "contact" + numberOfContacts;
        localStorage.setItem(temp, document.getElementById('nameField').value + "," + document.getElementById('numberField').value);
        document.getElementById('addContactWindow').style.display='none';

        refreshList();
    }
}

function refreshList(){
    document.getElementById('contacts').innerHTML = '';
    for(var i=1; i<=numberOfContacts; i++){
        temp = localStorage.getItem('contact'+i).split(",");

        document.getElementById('contacts').innerHTML += '<div class="contact" id="div'+i+'" style="margin-top:'+i*7*10+'">' +
            '<p style="position: absolute; left: 7%;">' + temp[0] + '</p>' +
            '<p style="position: absolute; left: 56%;">' + temp[1] + '</p>' +
            '<input type="checkbox" id="che'+i+'" style="position: absolute; left: 70%; top:25%; width:45%; height:45%;">';
    }
}

function deleteContact(){
    for(var i=1; i<=numberOfContacts; i++){
        if(document.getElementById('che'+i).checked){
            for(var j=i; j<numberOfContacts; j++){
                localStorage.setItem('contact'+j,localStorage.getItem('contact'+(j+1)));
            }
            localStorage.removeItem('contact'+numberOfContacts);
            numberOfContacts--;
            localStorage.setItem('numberOfContacts', numberOfContacts);
        }
    }
    refreshList();

}

function contactSearch(){
    if(document.getElementById('searchField').value == '')
        refreshList();
    else{
        var j=1;
        document.getElementById('contacts').innerHTML = '';
        for(var i=1; i<=numberOfContacts; i++){
            temp = localStorage.getItem('contact'+i).split(",");
            if(temp[0].includes(document.getElementById('searchField').value) || temp[1].includes(document.getElementById('searchField').value)){
                document.getElementById('contacts').innerHTML += '<div class="contact" id="div'+i+'" style="margin-top:'+j*7*10+'">' +
                    '<p style="position: absolute; left: 7%;">' + temp[0] + '</p>' +
                    '<p style="position: absolute; left: 56%;">' + temp[1] + '</p>' +
                    '<input type="checkbox" id="che'+i+'" style="position: absolute; left: 70%; top:25%; width:45%; height:45%;">';
                j++;
            }
        }
    }

}





































