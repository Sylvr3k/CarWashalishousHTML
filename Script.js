
  
 function data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
     }    
    };


   function submitForm() {
      // Handle form submission logic here (e.g., send data to server or show an alert)
      console.log('Form submitted:', this.form);
      alert('Thank you for contacting us!');
      
      // Clear the form after submission
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    };
  
