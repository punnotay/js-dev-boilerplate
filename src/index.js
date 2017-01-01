import './style.css';
import { getUsers, deleteUser } from './api/userApi';

getUsers().then(result => {
  var usersBody = '';
  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id=${user.id} class="deleteUser">Delete</td>
      <td>${user.id}</td>
      <td>${user.firstName} ${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
   });
   global.document.getElementById('users').innerHTML = usersBody;

   const delLinks = global.document.getElementByClassName('deleteUser');

   Array.from(delLinks, link => {
     link.onClick = (event) => {
       const elem = event.target;
       event.preventDefault();
       deleteUser(elem.attributes['data-id'].value);
       const row = elem.parentNode.parentNode;
       row.parentNode.removeChild(row);
     };
   });
});
