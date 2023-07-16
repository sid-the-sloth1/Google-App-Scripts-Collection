let form = FormApp.getActiveForm();
//Can use this function with a specific date-time trigger if there is a deadline for the responses
function closeForm() {
  form.setAcceptingResponses(false);
  mailSend();
}
function mailSend() {
  MailApp.sendEmail("xyz@gmail.com", "Alert", "Form has been closed.");
}
