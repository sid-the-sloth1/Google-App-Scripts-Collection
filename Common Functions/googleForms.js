let form = FormApp.getActiveForm();
//Can use this function with a specific date-time trigger if there is a deadline for the responses
function closeForm() {
  form.setAcceptingResponses(false);
  mailSend();
}
//Close if number of required responses met
function closeIfEnoughResponses() {
  let responses = form.getResponses();
  let numOfResponses = responses.length;
  if (numOfResponses >= 40) {
    closeForm();
  }
}
function mailSend() {
  MailApp.sendEmail("xyz@gmail.com", "Alert", "Form has been closed.");
}
