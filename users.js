var users = [
  {
    id : 1,
    name : "Yellow Roman",
    address : "123 Yellow brick road",
    email : 'yellow@color.com',
    password : 'cleartext:)'
  },
  {
    id : 2,
    name : "Purple Roman",
    address : "123 Purple brick road",
    email : 'purple@color.com',
    password : 'cleartextpassword:)'
  }
];

displayUsers();

function addUser() {
  var new_id = users.length > 0 ? users.length+1 : 1;
  var name = document.getElementById("name_1").value;
  var address = document.getElementById("address_1").value;
  var email = document.getElementById("email_1").value;
  var password = document.getElementById("password_1").value;

  if (new_id.length == 0 || name.length == 0 || address.length == 0 || email.length == 0 || password.length == 0) {
    return;
  }

  var new_user = {
    id : new_id,
    name : name,
    address : address,
    email : email,
    password : password
  }
  users.push(new_user);
  var table_1 = document.getElementById("table_1");
  _createTR(table_1, new_user)
  clearForm();
}

function clearForm () {
  document.getElementById("name_1").value = '';
  document.getElementById("address_1").value = '';
  document.getElementById("email_1").value = '';
  document.getElementById("password_1").value = '';
}

function deleteUser(row, user_id) {
  var index = users.indexOf(user_id);
  users.splice(index, 1);
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementById("table_1").deleteRow(i);
}

function displayUsers() {
  if (users.length > 0) {
    var table_1 = document.getElementById("table_1");
    for (i=0; i < users.length; i++) {
      _createTR(table_1, users[i]);
    }
  }
  return false;
}

function _createTR(table_1, user) {
  var td_id;
  var td_name;
  var td_address;
  var td_email;
  var td_password;
  var td_delete;
  var row = table_1.insertRow(-1);
  td_id = row.insertCell(0);
  td_id.innerHTML = user.id;

  td_name = row.insertCell(1);
  td_name.innerHTML = user.name;

  td_address = row.insertCell(2);
  td_address.innerHTML = user.address;
  
  td_email = row.insertCell(3);
  td_email.innerHTML = user.email;

  td_password = row.insertCell(4);
  td_password.innerHTML = user.password;

  td_delete = row.insertCell(5);
  td_delete.innerHTML = '<button onclick="deleteUser(this, '+user.id+')">Delete</button>';
}