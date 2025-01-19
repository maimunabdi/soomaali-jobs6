












///home page



function home(){
document.addEventListener("DOMContentLoaded", function() {
    const jobs = [
        {
            title: "Senior Software ",
            company: "Tech Solutions Ltd",
            location: "Mogadishu.",
            jobType: "Full-time",
         
            category: "Technology",
            image: "./tecnolo.jpg",
            applyLink: "../html/job.html",
        },
        {
            title: "Medical Doctor",
            company: "Somali Health ",
            location: "Hargeisa,",
            jobType: "Full-time",
          
            category: "Healthcare",
            image: "./health.jpg",
            applyLink: "../html/job.html",
        },
        {
            title: "Project Manager",
            company: "International Aid NGO",
            location: "Kismayo.",
            jobType: "Contract",
    
            category: "NGO",
            image: "./marketing.jpg",
            applyLink: "../html/job.html",
        }
    ];


    jobs.style=" height: 150px;";
    const jobContainer = document.querySelector(".featured-jobs .row");
    const searchButton = document.querySelector(".search-box button");
    const jobTitleInput = document.querySelector(".search-box input[placeholder='Job title or keyword']");
    const locationInput = document.querySelector(".search-box input[placeholder='Location']");

    function renderJobs(filteredJobs) {
        jobContainer.innerHTML = ""; // Clear previous job cards
        if (filteredJobs.length === 0) {
            jobContainer.innerHTML = `<p class="text-center">No jobs found matching your criteria.</p>`;
            return;
        }
        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('col-md-4');
            
            jobCard.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <img src="${job.image}" alt="Company Logo" class="rounded-circle">
                        </div>
                        <h5 class="card-title">${job.title}</h5>
                        <p class="card-text">${job.company}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                        <p><i class="fas fa-briefcase"></i> ${job.jobType}</p>
                        <p><i class="fas fa-dollar-sign"></i> ${job.salary}</p>
                        <a href="${job.applyLink}" class="btn btn-primary w-100">Apply Now</a>
                    </div>
                </div>
            `;
            
            jobContainer.appendChild(jobCard);
        });
    }

    searchButton.addEventListener("click", function() {
        const jobTitle = jobTitleInput.value.toLowerCase();
        const location = locationInput.value.toLowerCase();

        const filteredJobs = jobs.filter(job => 
            (job.title.toLowerCase().includes(jobTitle) || job.company.toLowerCase().includes(jobTitle)) &&
            job.location.toLowerCase().includes(location)
        );

        renderJobs(filteredJobs);
    });

    // Initial render with all jobs
    renderJobs(jobs);
});







}




home()




     

///QAYBTA ABOUT US


function aboutUs(){
  
///QAYBTA ABOUT US
document.addEventListener("DOMContentLoaded", () => {
  // SECTION - ABOUT US
  const aboutUs = document.getElementById("about-us");
  aboutUs.style.display = "flex";
  aboutUs.style.justifyContent = "space-around";
  aboutUs.style.padding = "20px";
  aboutUs.style.backgroundColor = "#f9f9f9";
  aboutUs.style.flexWrap = "wrap"; // Enable wrapping for responsiveness

  // Common styles for both persons
  const commonStyles = (person) => {
      person.style.border = "1px solid #ddd";
      person.style.borderRadius = "10px";
      person.style.padding = "20px";
      person.style.backgroundColor = "white";
      person.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
      person.style.width = "40%";
      person.style.marginBottom = "20px"; // Add spacing between rows
      person.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth animation

      // Add hover effect
      person.addEventListener("mouseenter", () => {
          person.style.transform = "translateY(-10px)";
          person.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
      });
      person.addEventListener("mouseleave", () => {
          person.style.transform = "translateY(0)";
          person.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
      });
  };

  // Person 1 - Maymuun
  const person1 = document.createElement("div");
  person1.classList.add("person");
  person1.innerHTML = `
      <h2>Maymuun❤️</h2>
      <h4>Shaqada Websideka</h4>
      <h5>Analyze / Fikradkeenaha</h5>
      <p>Hello! My name is Maymuun, and I am a student with a passion for creativity. I love drawing and painting🎨, which allow me to express myself and bring ideas to life through art.</p>
      <p>My favorite subject is Math because I enjoy solving problems and exploring the beauty of numbers and patterns.</p>
      <p>In my free time, I also enjoy coding and working on projects that combine my creative and analytical skills.</p>
  `;

  // Add image to Person 1
  const img1 = document.createElement("img");
  img1.src = "./images/maymuun.jpg";
  img1.style.width = "50%";
  img1.style.height = "auto";
  img1.style.borderRadius = "10px";
  img1.style.marginBottom = "10px";
  person1.prepend(img1);

  commonStyles(person1); // Apply common styles

  // Person 2 - Ikhlaas
  const person2 = document.createElement("div");
  person2.classList.add("person");
  person2.innerHTML = `
      <h2>Ikhlaas❤️</h2>
      <h4>Shaqada Websideka</h4>
      <h5>Writer / Qoraayga</h5>
      <p>Hello! My name is Ikhlaas, and I am passionate about learning and exploring new opportunities. I enjoy solving problems, collaborating with others, and achieving great results in all that I do.</p>
      <p>In my free time, I like reading👨‍💻, coding, and working on projects that make a positive impact.</p>
  `;

  // Add image to Person 2
  const img2 = document.createElement("img");
  img2.src = "./images/ikhlaas.jpg";
  img2.style.width = "50%";
  img2.style.height = "auto";
  img2.style.borderRadius = "10px";
  img2.style.marginBottom = "10px";
  person2.prepend(img2);

  commonStyles(person2); // Apply common styles

  // Add both persons to the about-us section
  aboutUs.appendChild(person1);
  aboutUs.appendChild(person2);
});



}
aboutUs();
       
///QAYBTA CONTENT

  function comtantus(){
document.addEventListener("DOMContentLoaded", () => {
     
  

    // CONTACT SECTION
    const sectionTitle = document.getElementById("section-title");
    const sectionDescription = document.getElementById("section-description");

    sectionTitle.textContent = "Nagala Soo Xiriir";
    sectionTitle.style.textAlign = "center";
    sectionTitle.style.color = "#4caf50";
    sectionTitle.style.fontSize = "28px";

    sectionDescription.textContent = "Waxaad nagala soo xiriiri kartaa adoo buuxinaya foomka hoose. Waxaan kuugu soo jawaabi doonaa sida ugu dhaqsiyaha badan.";
    sectionDescription.style.textAlign = "center";
    sectionDescription.style.color = "#555";
    sectionDescription.style.marginBottom = "20px";

    const contactSection = document.getElementById("contact-section");
    contactSection.style.margin = "20px auto";
    contactSection.style.width = "80%";
    contactSection.style.padding = "20px";
    contactSection.style.backgroundColor = "#f9f9f9";
    contactSection.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    contactSection.style.borderRadius = "10px";

    // FORM STYLING
    const form = document.getElementById("contact-form");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "15px";
    form.style.marginTop = "20px";

    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.style.padding = "10px";
        input.style.border = "1px solid #ddd";
        input.style.borderRadius = "5px";
        input.style.fontSize = "16px";
        input.style.width = "100%";
        input.style.boxSizing = "border-box";
    });

    const submitButton = document.getElementById("submit-button");
    submitButton.style.padding = "10px";
    submitButton.style.border = "none";
    submitButton.style.borderRadius = "5px";
    submitButton.style.backgroundColor = "#4caf50";
    submitButton.style.color = "white";
    submitButton.style.fontSize = "16px";
    submitButton.style.cursor = "pointer";
    submitButton.style.transition = "all 0.3s ease";

    submitButton.addEventListener("mouseover", () => {
        submitButton.style.backgroundColor = "#45a049";
        submitButton.style.transform = "scale(1.05)";
    });

    submitButton.addEventListener("mouseout", () => {
        submitButton.style.backgroundColor = "#4caf50";
        submitButton.style.transform = "scale(1)";
    });

    // FORM SUBMIT ALERT
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Fariintaada waa la diray! Waad ku mahadsan tahay xiriirkaaga.");
        form.reset();
    });

});
        

  }

  comtantus();

























    /// Assignment
  
    // Chapter 2: Arithmetic Operators with Input and Condition Check
    const chapter123 = document.getElementById("chapter123");
  
    function promptForNumber(message) {
      let num;
      do {
        num = parseFloat(prompt(message));
        if (isNaN(num)) {
          alert("Please enter a valid number.");
        }
      } while (isNaN(num));
      return num;
    }
  
    function chapter2arith() {
      let a = promptForNumber("Enter the first number (can be negative or positive):");
      let b = promptForNumber("Enter the second number (can be negative or positive):");
      chapter123.textContent = `
        Addition: ${a + b}
        Subtraction: ${a - b}
        Multiplication: ${a * b}
        Division: ${a / b}
        Modulus: ${a % b}
      `;
    }
  
    function chapter2comp() {
      let a = 10,
        b = 5;
      chapter123.textContent = `
        a < b: ${a < b}
        a > b: ${a > b}
        a == b: ${a == b}
        a != b: ${a != b}
      `;
    }
  
    function chapter2logic() {
      let isTrue = true,
        isFalse = false;
      chapter123.textContent = `
        AND (true && false): ${isTrue && isFalse}
        OR (true || false): ${isTrue || isFalse}
        NOT (!true): ${!isTrue}
      `;
    }
  
    // Chapter 3: Conditions and Loops
    const chapter3id = document.getElementById("chapter3id");
  
    function chapter3age() {
      let age = parseInt(prompt("Enter your age:"));
      let output = age >= 18 ? "You are an adult.<br>" : "You are not an adult.<br>";
      chapter3id.innerHTML = output;
    }
  
    function chapter3for() {
      let forLoopResult = "<b>For Loop:</b><br>";
      for (let i = 0; i < 5; i++) {
        forLoopResult += `Count: ${i}<br>`;
      }
      chapter3id.innerHTML = forLoopResult;
    }
  
    function chapter3while() {
      let emoji = "🚚";
      let count = 0;
      let whileLoopResult = "<b>While Loop:</b><br>";
      while (count < 5) {
        whileLoopResult += `Count ${count + 1}: ${emoji}<br>`;
        emoji += "🚚";
        count++;
      }
      chapter3id.innerHTML = whileLoopResult;
    }
  
    function nestedloop() {
      let output = "<b>Nested Loop Output:</b><br>";
      for (let i = 1; i <= 3; i++) {
        output += `Outer Loop [i = ${i}]: 😊<br>`;
        for (let j = 1; j <= 5; j++) {
          output += `&nbsp;&nbsp;Inner Loop [j = ${j}] 🚀<br>`;
        }
      }
      chapter3id.innerHTML = output;
    }
    
    
   
   
  
    
  
 
  
  // Chapter 4: Functions
    const chapter4 = document.getElementById("chapter4id");

    function normalfun() {
      function greet(name) {
        return `Hello, ${name}!`;
      }
      chapter4.innerHTML = greet("Mahamed");
    }

    function funpara() {
      function add(a, b) {
        return a + b;
      }
      chapter4.innerHTML = `The sum of 3 and 5 is ${add(3, 5)}`;
    }

    function global() {
      var globalvariable = "I am in global scope.";
      chapter4.innerHTML = globalvariable;
    }

    function local() {
      function localvar() {
        let localvariable = "I am in local scope.";
        return localvariable;
      }
      chapter4.innerHTML = localvar();
    }

    function arrowfun() {
      const arrow = () => "Hello, world!";
      chapter4.innerHTML = arrow();
    }

    function blockscope() {
      if (true) {
        let blockscope = "I am in block scope.";
        chapter4.innerHTML = blockscope;
      }
    }

    function callbackfun() {
      function dosomething(callback) {
        let message = "Doing something...<br>";
        callback(message);
      }

      function oncomplete(message) {
        chapter4.innerHTML = message + "Operation complete.";
      }

      dosomething(oncomplete);
    }

    function anonymouses() {
      setTimeout(function () {
        chapter4.innerHTML = "This is a callback executed after 2 seconds.";
      }, 2000);
    }

    function arowasanonymouses() {
      setTimeout(() => {
        chapter4.innerHTML = "This is an arrow function callback executed after 2 seconds.";
      }, 2000);
    }
    
// chapter5
//array
// Clear the single container before each operation
// Clear the single container before each operation

    // Function to clear the output container
    function clearOutput() {
      document.getElementById("outputContainer").innerText = "";
    }

    // Array Examples
    function literalArray() {
      clearOutput();
      const names = ["Ahmed", "Mahamed", "Ali"];
      document.getElementById("outputContainer").innerText = `Literal Array: ${names}`;
    }

    function constructorArray() {
      clearOutput();
      const fruits = new Array("Apple", "Banana", "Mango");
      document.getElementById("outputContainer").innerText = `Constructor Array: ${fruits}`;
    }

    function arrayFromExample() {
      clearOutput();
      const str = "hello";
      const array = Array.from(str);
      document.getElementById("outputContainer").innerText = `Array.from(): ${array}`;
    }

    function arrayOfExample() {
      clearOutput();
      const numbers = Array.of(1, 2, 3, 4);
      document.getElementById("outputContainer").innerText = `Array.of(): ${numbers}`;
    }

    function spreadOperatorExample() {
      clearOutput();
      const source = [1, 2, 3];
      const newArray = [...source];
      document.getElementById("outputContainer").innerText = `Spread Operator: ${newArray}`;
    }

    function mapExample() {
      clearOutput();
      const numbers = [1, 2, 3];
      const squared = numbers.map(num => num * num);
      document.getElementById("outputContainer").innerText = `Map Example (Squares): ${squared}`;
    }

    function filterExample() {
      clearOutput();
      const numbers = [1, 2, 3, 6, 8, 9];
      const greaterThanFive = numbers.filter(num => num > 5);
      document.getElementById("outputContainer").innerText = `Filter Example: ${greaterThanFive}`;
    }

    function reduceExample() {
      clearOutput();
      const numbers = [1, 2, 3, 4, 5];
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      document.getElementById("outputContainer").innerText = `Reduce Example (Sum): ${sum}`;
    }

    function everyExample() {
      clearOutput();
      const numbers = [2, 4, 6, 8];
      const allPositive = numbers.every(num => num > 0);
      document.getElementById("outputContainer").innerText = `Every Example (All > 0): ${allPositive}`;
    }

    function someExample() {
      clearOutput();
      const numbers = [1, 3, 5, 8];
      const hasEven = numbers.some(num => num % 2 === 0);
      document.getElementById("outputContainer").innerText = `Some Example (Has Even): ${hasEven}`;
    }
      
     



        // JSON Example
        function jsonExample() {
          let output = ""; // Initialize output variable

          // JavaScript Object
          const jsonData = {
              name: "Maimun",
              age: 30,
              city: "Mogadishu",
          };
          output += `<p>JSON Data: Name: ${jsonData.name}, Age: ${jsonData.age}, City: ${jsonData.city}</p>`;

          // Parsing JSON String to Object
          const jsonString = '{"name": "Maimun Abdi", "age": 30}';
          const jsonObject = JSON.parse(jsonString);
          output += `<p>Parsed JSON: Name: ${jsonObject.name}, Age: ${jsonObject.age}</p>`;

          // Stringifying JavaScript Object to JSON String
          const personObject = { name: "Mahamed Ali", age: 30 };
          const jsonStringified = JSON.stringify(personObject);
          output += `<p>Stringified JSON: ${jsonStringified}</p>`;

          // Display Results
          document.getElementById("output").innerHTML = output;
      }







      const outputDiv = document.getElementById("output"); // Initialize output div

      // Plain Object
      function plainob() {
          let output = ""; // Clear previous output
          const person = {
              firstname: "Maimun",
              lastname: "Andi",
              age: 20,
          };
          output += `<p>Person: ${person.firstname} ${person.lastname}, Age: ${person.age}</p>`;
          outputDiv.innerHTML = output;
      }

      // Constructor Function
      function constructorob() {
          let output = ""; 
          function Maimuna(firstname, lastname, age) {
              this.firstname = firstname;
              this.lastname = lastname;
              this.age = age;
          }
          const personInstance = new Maimuna("Maimun", "Andi", 20);
          output += `<p>Constructor Object: ${personInstance.firstname} ${personInstance.lastname}, Age: ${personInstance.age}</p>`;
          outputDiv.innerHTML = output;
      }

      // Class Object
      function classob() {
          let output = "";
          class Jamiila {
              constructor(firstname, lastname, age) {
                  this.firstname = firstname;
                  this.lastname = lastname;
                  this.age = age;
              }
          }
          const xusnid = new Jamiila("Maimun", "Andi", 20);
          output += `<p>Class Object: ${xusnid.firstname} ${xusnid.lastname}, Age: ${xusnid.age}</p>`;
          outputDiv.innerHTML = output;
      }

      // Object with Method
      function objectmethod() {
          let output = "";
          const xasnaa = {
              firstname: "Abdi",
              lastname: "Sheeqa",
              getFullName: function () {
                  return `${this.firstname} ${this.lastname}`;
              },
          };
          output += `<p>Full Name: ${xasnaa.getFullName()}</p>`;
          outputDiv.innerHTML = output;
      }

      // For...in Loop in Object
      function forinloop() {
          let output = "";
          const value = {
              name: "Amina",
              educ_level: "Bachelor",
              hra_status: "Active",
          };
          for (let key in value) {
              output += `<p>${key}: ${value[key]}</p>`;
          }
          outputDiv.innerHTML = output;
      }





   
          

// Chapter 6: DOM Manipulation

    // Chapter 6: DOM Manipulation
    function byid() {
      let contentelement = document.getElementById("content");
      contentelement.style.background = "blue";
      contentelement.style.color = "white";
    }

    function byclass() {
      let boxElements = document.getElementsByClassName("box");
      for (let element of boxElements) {
        element.style.border = "3px dashed black";
      }
    }

    function bytagename() {
      let paragraphElements = document.getElementsByTagName("p");
      for (let element of paragraphElements) {
        element.style.fontStyle = "italic";
        element.style.margin = "10px";
      }
    }

    function byquery() {
      let firstParagraph = document.querySelector("p");
      let firstBox = document.querySelector(".box");

      if (firstParagraph) {
        firstParagraph.style.color = "green";
        firstParagraph.style.fontWeight = "bold";
      }

      if (firstBox) {
        firstBox.style.color = "pink";
        firstBox.style.padding = "10px";
      }
    }

    // Updated byallquery() function
    function byallquery() {
      let allParagraphs = document.querySelectorAll("p");

      if (allParagraphs.length > 0) {
        allParagraphs.forEach(paragraph => {
          paragraph.style.backgroundColor = "purple";  // Change color of each paragraph
        });
      } else {
        alert("No paragraphs found on the page!");
      }
    }

    function bycreate() {
      let newElement = document.createElement("div");
      newElement.innerHTML = "New Element Created";
      newElement.style.backgroundColor = "yellow";
      document.body.appendChild(newElement);
    }

    function guji() {
      alert("Guji button clicked!");
    }

    function Change() {
      let firstParagraph = document.getElementById("firstParagraph");
      firstParagraph.innerText = "This text has been changed!";
    }

    function Remove() {
      let paragraphToRemove = document.getElementById("paragraph");
      paragraphToRemove.remove();
    }

    function newSpan() {
      let firstParagraph = document.getElementById("firstParagraph");
      let newSpan = document.createElement("span");
      newSpan.innerText = "This is a new span added!";
      firstParagraph.appendChild(newSpan);
    }




///cjapter7

document.addEventListener("DOMContentLoaded", function () {
  // Handle button click with id and event listener
function id_onclik(){
    const element = document.getElementById("mybutton");
    element.addEventListener("click", myfunction);

    function myfunction() {
      alert("Button click using id");
    }
  


}
  // Mouseover and mouseout effects on element
  function mouse() {
    const element2 = document.getElementById("myelement");
    element2.addEventListener("mouseover", function () {
      element2.style.background = "green";
    });
    element2.addEventListener("mouseout", function () {
      element2.style.background = "blue";
    });
  }

  // Handle key events
  function key() {
    const textinput = document.getElementById("textinput");
    const outputdiv = document.getElementById("output");

    textinput.addEventListener("keydown", function (event) {
      outputdiv.innerText = `keydown: ${event.key}`;
    });

    textinput.addEventListener("keypress", function (event) {
      outputdiv.innerText += `\nkeypress: ${event.key}`;
    });

    textinput.addEventListener("keyup", function (event) {
      outputdiv.innerText += `\nkeyup: ${event.key}`;
    });
  }

  // Handle focus and blur events
  function foc_blu() {
    const focudtinput = document.getElementById("focudtinput");
    const outputfb = document.getElementById("outputfb");

    focudtinput.addEventListener("focus", function () {
      updateoutput("Element focused", "focused");
    });

    focudtinput.addEventListener("blur", function () {
      updateoutput("Element blurred", "blurred");
    });

    function updateoutput(message, classname) {
      outputfb.innerText = message;
      outputfb.className = classname;
    }
  }

  // Handle form submission and dynamic input change validation
  function form() {
    const forminput = document.getElementById("forminput");
    const outputform = document.getElementById("outputform");
    const myform = document.getElementById("myform");

    forminput.addEventListener("input", function () {
      if (forminput.value !== "") {
        updateoutput("Input changed!", "valid");
      } else {
        updateoutput("Input changed with empty", "invalid");
      }
    });

    myform.addEventListener("submit", function (event) {
      event.preventDefault();
      updateoutput("Form submitted", "valid");
    });

    function updateoutput(message, classname) {
      outputform.innerText = message;
      outputform.className = classname;
    }
  }

  // List click event delegation
  function  delegation(){
    const parentlist = document.getElementById("parentlist");

    parentlist.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        alert("Clicked on: " + event.target.innerText);
      }
    });
  }

  // Call the functions to bind event listeners

  id_onclik()
  mouse()
  key()
  foc_blu()
  form()
  delegation()
});



////lab

function myName() {
  let output = "My name is:<br>";
  output += "Maimun<br>";
  output += "Abdi<br>";
  output += "Abdullahi<br>";
  document.getElementById("output").innerHTML = output;
}

function switchss() {
  let date = prompt("Please enter your new date (e.g., 2024-12-19):");
  let hour = prompt("Please enter your current hour (24-hour format):");

  // Convert hour to a number for comparison
  hour = Number(hour);

  // Check if input is valid
  if (isNaN(hour) || hour < 0 || hour >= 24) {
      alert("Please enter a valid hour (0-23).");
      return;
  }

  let output = `Date: ${date}<br>`;

  switch (true) {
      case hour >= 5 && hour < 12:
          output += "Good Morning!<br>";
          break;
      case hour >= 12 && hour < 17:
          output += "Good Afternoon!<br>";
          break;
      case hour >= 17 && hour < 21:
          output += "Good Evening!<br>";
          break;
      default:
          output += "It's night time!<br>";
  }

  document.getElementById("output").innerHTML = output;
}



// Function to get a valid number from the user
function getValidNumber() {
  const userInput = prompt("Please enter a valid number (positive or negative):");
  const num = Number(userInput); // Convert input to a number

  if (isNaN(num)) {
      alert("Invalid input. Please enter a valid number.");
      return getValidNumber(); // Recursively call the function for invalid input
  }

  return num; // Return the valid number
}

// Functions to generate code for various program types
function generateIfCode(num) {
  return `let num = ${num};\nif (num > 5) {\n  // The number is greater than 5\n}`;
}

function generateIfElseCode(num) {
  return `let num = ${num};\nif (num > 5) {\n  // The number is greater than 5\n} else {\n  // The number is 5 or less\n}`;
}

function generateNestedIfCode(num) {
  return `let num = ${num};\nif (num > 0) {\n  if (num % 2 === 0) {\n      // The number is positive and even\n  } else {\n      // The number is positive but odd\n  }\n} else {\n  // The number is not positive\n}`;
}

function generateSwitchCode() {
  return `let day = 3;\nswitch(day) {\n  case 1:\n      // Sunday\n      break;\n  case 2:\n      // Monday\n      break;\n  case 3:\n      // Tuesday\n      break;\n  default:\n      // Invalid day\n}`;
}

function generateTernaryCode(num) {
  return `let num = ${num};\nlet result = (num > 5) ? "The number is greater than 5." : "The number is 5 or less.";`;
}

function generateForCode(num) {
  return `for (let i = 0; i < ${num}; i++) {\n  // Iteration number: i\n}`;
}

function generateWhileCode(num) {
  return `let i = 0;\nwhile (i < ${num}) {\n  // Iteration number: i\n  i++;\n}`;
}

function generateNestedCode(num) {
  return `for (let i = 0; i < ${num}; i++) {\n  for (let j = 0; j < 2; j++) {\n      // Nested loop: i and j\n  }\n}`;
}

function generateDoWhileCode(num) {
  return `let i = 0;\ndo {\n  // Iteration number: i\n  i++;\n} while (i < ${num});`;
}

function generateBreakCode(num) {
  return `for (let i = 0; i < 10; i++) {\n  if (i === ${num}) {\n      break; // Exit the loop\n  }\n  // Iteration: i\n}`;
}

function generateContinueCode(num) {
  return `for (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) {\n      continue; // Skip even numbers\n  }\n  // Iteration: i\n}`;
}

// Main function to display the program
function displayProgram(programType) {
  const num = getValidNumber(); // Validate and get the number
  let code = "";

  // Use the appropriate function to generate code
  switch (programType) {
      case "if":
          code = generateIfCode(num);
          break;
      case "ifElse":
          code = generateIfElseCode(num);
          break;
      case "nestedIf":
          code = generateNestedIfCode(num);
          break;
      case "switch":
          code = generateSwitchCode();
          break;
      case "ternary":
          code = generateTernaryCode(num);
          break;
      case "for":
          code = generateForCode(num);
          break;
      case "while":
          code = generateWhileCode(num);
          break;
      case "nested":
          code = generateNestedCode(num);
          break;
      case "doWhile":
          code = generateDoWhileCode(num);
          break;
      case "break":
          code = generateBreakCode(num);
          break;
      case "continue":
          code = generateContinueCode(num);
          break;
  }

  // Display the generated code in the preformatted text area
  document.getElementById("programOutput").textContent = code;
} 













//jobs

const jobListings = document.getElementById('job-listings');
const modal = document.getElementById('apply-modal');
const jobTitle = document.getElementById('job-title');
const closeModal = document.getElementById('close-modal');
const applyForm = document.getElementById('apply-form');

const jobs = [
    
  
    { title: "Technology and Programming", location: "Hargeisa", company: "Hormuuda", description: "Software development, internet service IT companies, media and content creation", category: "technology", image: "./tecnolo.jpg" },
    { title: "Agriculture and Livestock", location: "Mudug", company: "SATG", description: "Farming, livestock care and trade, fishing", category: "agriculture", image: "./agricul.jpg" },
    { title: "Skilled Trades", location: "Garowe", company: "Simad iLab", description: "Construction and building maintenance, electrical work and vehicle mechanics, furniture making", category: "skilled-trades", image: "./skill.jpg" },
    { title: "Business and Marketing", location: "Mogadishu", company: "SBH", description: "Small-scale businesses and shops, marketing of goods and service, tourism and hospitality services", category: "business", image: "./marketing.jpg" },
    { title: "arts", category: "arts", location: "mogadisho", description: " art and photography, interior decoration.",image: "./arts.jpg" },
    { title: "Community Services and International Organization", location: "Hargeisa", company: "Bilan Group", description: "Nonprofit and humanitarian organization, training and community services roles, development project", category: "community", image: "./community.jpg" },
    { title: "Government Jobs", location: "Mogadishu", company: "Somali Ports Authority", description: "Teachers, police and military, administrative roles in government offices", category: "government", image: "./government.jpg" },
    { title: "Health Care Jobs", location: "Mogadishu", company: "Deva Hospital", description: "Doctors and nurses, pharmacists, public health and sanitation service", category: "health", image: "./health.jpg" },
    { title: "Beauty and Arts", location: "Mogadishu", company: "BPS", description: "Beauty service(salons), art and photography, interior decoration", category: "beauty", image: "./beauty.jpg" },
    { title: "High School Teacher", category: "Education", location: "Mogadishu", description: "Teach students in secondary school, prepare lesson plans, and assess student progress." ,image: "./school.jpeg"},
    { title: "General Doctor", category: "general-doctor", location: "Hargeisa", description: "Provide general medical care to patients, including diagnosis, treatment, and preventive care.",image: "./General..jpeg" },
    { title: "Software Engineer", category: "software", location: "Garowe", description: "Develop software applications, write clean and efficient code, and maintain systems." ,image: "./Software.jpeg"},
    { title: "Financial Accountant", category: "Finance", location: "Kismayo", description: "Manage financial records, prepare reports, and ensure the accuracy of financial transactions.",image: "./Financial .jpeg" },
    { title: "Construction Engineer", category: "Construction", location: "Baydhabo", description: "Oversee construction projects, manage teams, and ensure projects meet safety and quality standards." ,image: "./construcyion.jpeg"},
    { title: "Security Officer", category: "Security", location: "Boosaaso", description: "Ensure the safety and security of property and individuals, conduct security checks, and monitor surveillance systems.",image: "./securaty.jpeg" }
  
];




// Display Jobs Function
function displayJobs(jobsList) {
    if (jobsList.length === 0) {
        jobListings.innerHTML = `<p>No jobs found. Try searching with different keywords or categories.</p>`;
        return;
    }
    jobListings.innerHTML = jobsList.map((job, index) => `
        <div class="job-card" data-title="${job.title}">
            <img src="${job.image}" alt="${job.title}">
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Company:</strong> ${job.company || 'N/A'}</p>
            <p>${job.description}</p>
            <button onclick="applyForJob(${index})">Apply</button>
        </div>
    `).join('');
}

// Open Modal for Apply
function applyForJob(index) {
    const job = jobs[index];
    jobTitle.innerText = `Apply for ${job.title}`;
    modal.style.display = 'flex';
    applyForm.dataset.jobId = index;
}

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Handle Form Submission
applyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your application has been submitted!');
    modal.style.display = 'none';
    applyForm.reset();
});
// Function: Filter jobs by category
function filterByCategory(category) {
    if (category === 'all') {
        displayJobs(jobs); // Show all jobs
    } else {
        const filteredJobs = jobs.filter(job => job.category.toLowerCase() === category.toLowerCase());
        displayJobs(filteredJobs); // Show only the filtered jobs
    }
}

// Search Functionality
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById('job-search').value.toLowerCase().trim();
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm) ||
        (job.company && job.company.toLowerCase().includes(searchTerm))
    );
    displayJobs(filteredJobs);
});

// Initial Display
displayJobs(jobs);


// Job listings data
const jobListingss = document.getElementById('job-list');



const text = "Welcome to Somali Jobs!";
let index = 0;

function typeEffect() {
    const header = document.querySelector("h1");
    if (index < text.length) {
        header.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100); // Adjust speed here
    }
}

window.addEventListener("load", typeEffect);

















