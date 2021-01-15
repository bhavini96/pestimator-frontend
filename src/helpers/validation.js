
export function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  export function stripUrl(url = '') {
    return url.replace(/[//]+/g, '/').replace(':/', '://');
  }
  
  export function parseNullItem(data) {
    data = { ...data };
    Object.keys(data).map((key) => {
      if (data[key] === null || data[key] === 'null') {
        delete data[key];
      }
      return null
    });
    return data;
  }
  
  export function isPhoneValid(phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
  }
  
  export function isURLValid(url) {
    return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(url);
  }
  
  export function validateAllowBlank(text) {
    return false;
  }
  
  export function validateRequired(text) {
    if (!isNaN(text)) {
      text = text.toString();
    }
    if (text.trim() === "") {
      return "This field is required"
    }
    return false;
  }
  
  export function validatePhoneWithRequired(text) {
    if (text != undefined) {
      if (text.trim() === "") {
        return "This field is required";
      }
      else {
        if (!isPhoneValid(text)) {
          return 'Please enter valid mobile number';
        }
      }
    }
    else {
      return "This field is required";
    }
    return false;
  }
  
  export function validatePhone(text) {
    if (text.trim() === "") {
      return false;
    }
    else {
      if (!isPhoneValid(text)) {
        return 'Please enter valid mobile number';
      }
    }
    return false;
  }
  
  export function validateTextWithRequired(text) {
    if (text != undefined) {
      let pattern = /^[A-Za-z\s]+$/;
      if (text.trim() === "") {
        return 'This field is required';
      }
      else if (!pattern.test(text)) {
        return 'Invalid Text';
      }
    }
    else {
      return "This field is required";
    }
    return false;
  }
  
  export function validateNumbersWithRequired(text) {
    if (text !== undefined) {
      if (!isNaN(text)) {
        text = text.toString();
      }
      let pattern = /^-?\d*(\.\d+)?$/;
      if (text.trim() === "") {
        return 'This field is required';
      }
      else if (!pattern.test(text)) {
        return "Please enter number only";
      }
    }
    return false;
  }
  
  export function validateNumber(text) {
    console.log("text - ", text);
    text = "" + text;
    let pattern = /^[0-9]*$/;
    if (text.trim() === "") {
      return false;
    }
    else if (!pattern.test(text)) {
      return "Please enter number only";
    }
    return false;
  }
  
