# QA-Project-
These test cases cover various scenarios related to providing feedback, searching for different items, and testing the behavior of the feedback form.

Our pages test path => QA-Project-/cypress/e2e/



# Cypress Test Suite for StacksInfo Website

This repository contains a Cypress test suite to test the feedback form and search functionality on the StacksInfo website https://stacksinfo.web.app/.

## Installation

To run the tests locally, you need to have Node.js and npm installed. Then, install Cypress using the following command:
  ```bash
  npm install

  npm init -y

  npm install cypress --save-dev
 ```
 ## Dependencies

- Node.js
- Cypress


## Test Cases for Feedback 

1. **When no feedback is provided:**  
    -Action: Clicks the feedback button and submits the form without providing any feedback.
2. **When no options are selected:**  
    -Action: Clicks the feedback button, selects "Yes," provides feedback in the text area, and submits the form.
3. **TC1: Select Yes and Needs Improvement with Comment:**  
   Action: Selects "Yes," chooses the "Needs Improvement" option, provides feedback in the text area, and submits the form.
4. **TC2: Select Yes and Below Expectations with Comment:**  
    -Action: Selects "Yes," chooses the "Below Expectations" option, provides feedback in the text area, and submits the form.
5. **TC3: Choose Yes and Average with Comment:**  
    -Action: Selects "Yes," chooses the "Average" option, provides feedback in the text area, and submits the form.
6. **TC4: Select Yes and Above Average with Comment:**  
    -Action: Selects "Yes," chooses the "Above Average" option, provides feedback in the text area, and submits the form.
7. **TC5: Select Yes and Outstanding with Comment:**  
    -Action: Selects "Yes," chooses the "Outstanding" option, provides feedback in the text area, and submits the form.
8. **TC6: Select No and Needs Improvement with Comment:**  
    -Action: Clicks the feedback button, selects "No," chooses the "Needs Improvement" option, provides feedback in the text area, and submits the form.
9. **TC7: Select No and Below Expectations with Comment:**  
    -Action: Clicks the feedback button, selects "No," chooses the "Below Expectations" option, provides feedback in the text area, and submits the form.
10. **TC8: Select No and Average with Comment:**  
    -Action: Clicks the feedback button, selects "No," chooses the "Average" option, provides feedback in the text area, and submits the form.
11. **TC9: Select No and Above Average with Suspension:**  
    -Action: Clicks the feedback button, selects "No," chooses the "Above Average" option, provides feedback in the text area, and submits the form.
12. **TC10: Pick No and Outstanding with Comment:**  
    -Action: Clicks the feedback button, selects "No," chooses the "Outstanding" option, provides feedback in the text area, and submits the form.
13. **Not Select Yes. Needs Improvement with Comment just:**  
    -Action: Clicks the feedback button, chooses an option that needs improvement, provides feedback in the text area, and submits the form without selecting "Yes".


## Testing Search Functionality

1. **Search City**: Clicks on the search bar, types "nablus", and waits for the search results.
2. **Search Company**: Clicks on the search bar, types "radix", and waits for the search results.
3. **Search Language**: Clicks on the search bar, types "c++", waits for the search results, then repeats the process for "python".
4. **Check Search at Language**: Types "Flask" in the search bar and waits for the search results.
5. **Check Search at DBA**: Types "DBA" in the search bar and waits for the search results.
6. **Check Search at Backend**: Types "Backend" in the search bar and waits for the search results.
7. **Check Search at Language, Company, and Technology (Negative)**: Types "c++ and EXALT Technologies Ltd and UIUX" in the search bar, waits for the search results, and verifies that no "No result available" message is displayed.
8. **Check Search at Company Name and Technology**: Types "Olivery and frontend" in the search bar and waits for the search results.



## Running Tests

To run the tests, execute the following command :
 ```bash
npx cypress open
```


## Attachment


https://github.com/YazanMoqanasaa/QA-Project-/assets/150680289/77297918-811d-4b0c-93ce-953d2dbd1349


https://github.com/YazanMoqanasaa/QA-Project-/assets/150680289/567cd72e-1f5f-48fd-b553-2339011ca715


## Team Member 
1-Yazan moqanasa
2-marah saadeh
3-hadeel amr

