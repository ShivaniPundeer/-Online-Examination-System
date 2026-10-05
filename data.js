const exams = [
  {
    id: "web-development",
    name: "Web Development Fundamentals",
    category: "Technology",
    icon: "💻",
    duration: 10,
    difficulty: "Easy",
    description: "Test your knowledge of HTML, CSS and JavaScript basics.",
    questions: [
      {q:"Which language is primarily used to structure content on web pages?", options:["HTML","CSS","Python","SQL"], answer:0},
      {q:"Which CSS property is used to change text color?", options:["font-style","color","text-size","background"], answer:1},
      {q:"Which keyword declares a block-scoped variable in JavaScript?", options:["var","let","define","dim"], answer:1},
      {q:"Which HTML element is used to create a hyperlink?", options:["<link>","<a>","<href>","<url>"], answer:1},
      {q:"Which symbol starts a single-line comment in JavaScript?", options:["<!--","//","##","**"], answer:1},
      {q:"What does CSS stand for?", options:["Computer Style Sheets","Cascading Style Sheets","Creative Styling System","Colorful Style Syntax"], answer:1},
      {q:"Which method adds an element to the end of an array?", options:["push()","pop()","shift()","join()"], answer:0},
      {q:"Which HTML tag defines the largest heading?", options:["<head>","<h6>","<h1>","<title>"], answer:2},
      {q:"Which value makes an element a flex container?", options:["display:flex","position:flex","flex:display","layout:flex"], answer:0},
      {q:"Which operator is used for strict equality in JavaScript?", options:["=","==","===","!="], answer:2}
    ]
  },
  {
    id: "quantitative-aptitude",
    name: "Quantitative Aptitude",
    category: "Aptitude",
    icon: "🧮",
    duration: 8,
    difficulty: "Medium",
    description: "Challenge yourself with numbers, percentages and reasoning.",
    questions: [
      {q:"What is 15% of 200?", options:["20","25","30","35"], answer:2},
      {q:"If x + 12 = 30, what is x?", options:["16","18","20","22"], answer:1},
      {q:"What is the average of 10, 20 and 30?", options:["15","20","25","30"], answer:1},
      {q:"A train travels 60 km in 2 hours. What is its speed?", options:["20 km/h","30 km/h","40 km/h","120 km/h"], answer:1},
      {q:"What is 12 × 8?", options:["86","96","108","112"], answer:1},
      {q:"Which number is a prime number?", options:["21","27","29","33"], answer:2},
      {q:"A product costs ₹500 and gets a 10% discount. Sale price?", options:["₹450","₹460","₹480","₹490"], answer:0},
      {q:"What is the next number: 2, 4, 8, 16, ?", options:["20","24","30","32"], answer:3},
      {q:"If 5 workers finish a task in 10 days, this simple-rate model gives 10 workers in?", options:["2 days","4 days","5 days","20 days"], answer:2},
      {q:"What is the square root of 144?", options:["10","11","12","14"], answer:2}
    ]
  },
  {
    id: "general-knowledge",
    name: "General Knowledge",
    category: "General Knowledge",
    icon: "🌍",
    duration: 7,
    difficulty: "Easy",
    description: "Explore questions about science, geography, history and more.",
    questions: [
      {q:"What is the capital of India?", options:["Mumbai","New Delhi","Kolkata","Chennai"], answer:1},
      {q:"Which planet is known as the Red Planet?", options:["Venus","Jupiter","Mars","Mercury"], answer:2},
      {q:"How many continents are there?", options:["5","6","7","8"], answer:2},
      {q:"Which gas do plants mainly absorb for photosynthesis?", options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"], answer:2},
      {q:"Who wrote the Indian national anthem?", options:["Rabindranath Tagore","Bankim Chandra Chattopadhyay","Sarojini Naidu","Subhas Chandra Bose"], answer:0},
      {q:"Which is the largest ocean?", options:["Atlantic","Indian","Arctic","Pacific"], answer:3},
      {q:"How many days are there in a leap year?", options:["364","365","366","367"], answer:2},
      {q:"Which organ pumps blood through the human body?", options:["Lungs","Brain","Heart","Kidney"], answer:2},
      {q:"What is the chemical symbol for gold?", options:["Ag","Au","Gd","Go"], answer:1},
      {q:"Which is the fastest land animal?", options:["Lion","Horse","Cheetah","Tiger"], answer:2}
    ]
  },
  {
    id: "computer-science",
    name: "Computer Science Basics",
    category: "Technology",
    icon: "🖥️",
    duration: 9,
    difficulty: "Hard",
    description: "Check your understanding of programming and computer concepts.",
    questions: [
      {q:"What does CPU stand for?", options:["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processing User"], answer:0},
      {q:"Which data structure follows FIFO?", options:["Stack","Queue","Tree","Graph"], answer:1},
      {q:"Which language is commonly used for data analysis and AI?", options:["Python","HTML","CSS","XML"], answer:0},
      {q:"1 byte equals how many bits?", options:["4","8","16","32"], answer:1},
      {q:"Which is an operating system?", options:["Oracle","Linux","Chrome","Python"], answer:1},
      {q:"What is a database query language?", options:["SQL","SVG","CSS","HTTP"], answer:0},
      {q:"Which protocol is commonly used to transfer web pages securely?", options:["FTP","HTTP","HTTPS","SMTP"], answer:2},
      {q:"What is RAM?", options:["Permanent storage","Volatile memory","A processor","An input device"], answer:1},
      {q:"Which number system uses only 0 and 1?", options:["Decimal","Hexadecimal","Binary","Octal"], answer:2},
      {q:"Which algorithmic notation describes an upper bound on growth?", options:["Big O","Big X","Little Q","Alpha"], answer:0}
    ]
  }
];