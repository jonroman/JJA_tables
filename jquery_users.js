$(document).ready(function() {

  var usersJQ = [
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
  displayUsersJQ();
  $("#add_user").on("click", addUserJQ);
  $(document).on("click", '.delete-user', function() {
    var tr_id = $(this).attr("name");
    var user_id = $(this).attr("id");
    console.log(tr_id + " and " + user_id);
    deleteUserJQ(tr_id, user_id);
  });

  function addUserJQ() {
    var name = $("#name_2").val();
    var address = $("#address_2").val();
    var email = $("#email_2").val();
    var password = $("#password_2").val();

    if (name.length == 0 || address.length == 0 || email.length == 0 || password.length == 0) {
      return false;
    }
    var new_userJQ = {
      id : users.length+1,
      name : name,
      address : address,
      email : email,
      password : password
    }
    usersJQ.push(new_userJQ);
    clearFormJQ();
    appendRowJQ(new_userJQ);
  }

  function clearFormJQ() {
    $("#name_2").val(''),
    $("#address_2").val(''),
    $("#email_2").val(''),
    $("#password_2").val('')
  }

  function displayUsersJQ() {
    usersJQ.forEach(appendRowJQ);
  }

  function appendRowJQ(user) {
    var tr = '<tr id="tr_'+user.id+'">';
    tr += "<td>"+user.name+"</td>";
    tr += "<td>"+user.address+"</td>";
    tr += "<td>"+user.email+"</td>";
    tr += "<td>"+user.password+"</td>";
    tr += '<td><button id="'+user.id+'" name="tr_'+user.id+'" class="btn btn-sm btn-danger delete-user">Delete</button></td>';
    tr += "</tr>";
    $('#table_2').append(tr);
  }

  function deleteUserJQ(tr_id, user_id) {
    var index = usersJQ.indexOf(user_id);
    usersJQ.splice(index, 1);
    $("#"+tr_id).remove();
  }
  
});