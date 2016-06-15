import {Control} from '@angular/common';

export class CustomValidator {

  static validUserNameCheck(control: Control) {
    if(control.value.indexOf(" ") < 0) {
      return null;
    }
    return {usernotvalid: true}
  }

  static usernameTaken(control: Control) {

   /* let q = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "Komal") {
          resolve({"usernameTaken": true});
      } else {
        resolve(null);
      }
    }, 1000)
  });
*/

    return new Promise((resolve) => {
      setTimeout(() => {
        if(control.value == 'Komal') {
          console.log("I MA HER");
          resolve({usernamenotunique: true});
        }else {
          resolve(null);
        }
      }, 1000)
    });
}

}
