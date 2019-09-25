import {request} from '../../utils/axios';

function signOut() {
    request.get("/users/signOut", {method: 'delete'}).then((response) => { #I have also tried replacing delete with get }).then((result) => {
     window.location.href = '/';
   });
}