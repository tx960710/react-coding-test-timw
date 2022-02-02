# Option 2 Shopping Cart 

### Setting up
  This is an react app built using `create-react-app`. After cloning, please `cd` into the folder, run `npm install`, then `npm start` should start the app at your localhost.

### Assumptions made: 
  1. This problem is done under the assumption that a comma-separated string of "orange" and "apple" will be 
  inputted by the user (or the scanner at checkout). Basic cleaning of data has been performed to ensure no errors 
  should be caused by false input.

### Tradeoff discussions:
  1. I considered two methods to execute the calculation: Either by pressing a Calculate button, or by using the useEffect hook 
     and have it track inputs as well as the two offer flags. The button is easy to implement and require less number of invoking the function. 
     However, the useEffect way provides a much more fluid way for the UI to display to the user the real-time total as they type.
     Judging by the fact that such a shopping cart is unlikely to get increbily large, I opted to use the useEffect way in the end. 
