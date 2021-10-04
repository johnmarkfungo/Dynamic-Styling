new Vue({
  el: '#container',
  data: {
    user: '',
    input: '',
    button: true,
    colorInput: '',
    selectedColor: '',
  },
  methods: {
    /*This function is going to be executed when the user enter a value in the input 1*/
      inputOne(event){
        // This will target the value in the input 1 field
        this.input = event.target.value
        // Here we are going to make conditional
        // It says that if the inputted value in the input 1 field is equal to user1
        if (this.input === 'user1' || this.input === 'User1'){
          // The user data property has a value of 'user1' -- this will be access in the binded class in the paragraph style me
          this.user = 'user1'
          // rather, if the inputted value in the input 1 field is equal to user2
        }else if (this.input === 'user2' || this.input === 'User2'){
          // The user data property has a value of 'user2' -- this will be access in the binded class in the paragraph style me
          this.user = 'user2'
          // and, if none of this condition is executed
        }else{
          // The user data property will have a no value or null value which means there is no value that are going to be binded class in the paragraph style me -- which also means the style will not be changed
          this.user = ''
        }
      },
      // Here in toggleEvent function, it will be executed when the button toggle has been clicked
      toggleEvent(){
        //so, if the button has been clicked, this will be executed -- it means that the current value of the button data property will going to be 
        this.button = !this.button
      },

      pickColors(event){
        this.colorInput = event.target.value
        
        if (this.colorInput === 'red' || this.colorInput === 'Red'){
          this.selectedColor = this.colorInput
        } else if (this.colorInput === 'blue' || this.colorInput === 'Blue'){
          this.selectedColor = this.colorInput
        } else if (this.colorInput === 'yellow' || this.colorInput === 'Yellow'){
          this.selectedColor = this.colorInput
        } else {
          this.selectedColor = ''
      }
    },
  }
})