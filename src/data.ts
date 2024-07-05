// src/data.ts

interface Education {
    institution: string;
    degree: string;
    gpa?: string;
    date: string;
    courses: string[];
  }
  
  interface WorkExperience {
    company: string;
    position: string;
    date: string;
    responsibilities: string[];
  }
  
  interface Project {
    title: string;
    date: string;
    description: string[];
  }
  
  interface Skills {
    programmingLanguages: string[];
    machineLearning: string[];
    toolsAndTechnologies: string[];
    mathAndModels: string[];
    webTechnologies: string[];
  }
  
  export const data = {
    education: [
      {
        institution: 'Northeastern University, Boston, MA',
        degree: 'Master of Science in Data Science',
        gpa: '3.9/4.0',
        date: 'Expected Dec 2024',
        courses: [
          'Supervised & Unsupervised Machine Learning',
          'Large Language Models (LLMs)',
          'Natural Language Processing',
          'Algorithms',
          'DBMS',
          'Data Processing & Management',
        ],
      },
      {
        institution: 'Vellore Institute of Technology, India',
        degree: 'Bachelor of Technology in Electronics Engineering',
        date: 'May 2019',
        courses: [
          'Object Oriented Programming in C++ and Java',
          'Data Visualization',
          'Statistics',
          'Linear Algebra',
          'Image Processing',
        ],
      },
    ] as Education[],
    
    workExperience: [
      {
        company: 'Philips',
        position: 'Software Development Engineer 2',
        date: 'June 2019 - December 2022',
        responsibilities: [
          'Led the development of an application from scratch, significantly deepening knowledge in relational databases (MySQL, PostgreSQL) and gaining expertise in RESTful APIs, RabitMQ, Redis, and Kafka used in microservices.',
          'Developed visually captivating and insightful data visualizations using Highcharts, to present patient health data in an easy-to-understand manner, thus facilitating a deeper understanding of critical health trends.',
          'Mentored junior developers, sharing project insights, and enhancing their technical skills, demonstrating strong teamwork and leadership.',
          'Developed crucial features during the emergence of COVID-19, including a multi-user video conference support in eCareCoordinator (A remote patient monitoring application) using Angular, WebRTC, and Twilio. This directly impacted patient care for COVID-19 positive individuals, enhancing their remote monitoring experience.',
          'Elevated the user interface of a patient monitoring app and finely tuned its performance, resulting in a remarkable 50% reduction in page load time.',
          'Received accolades for embodying key Philips behaviors: "Team up to win" and "Take ownership to deliver fast" reflecting a collaborative and ownership-driven approach.',
        ],
      },
      {
        company: 'Philips',
        position: 'SDE Intern',
        date: 'January 2019 - June 2019',
        responsibilities: [
          'Crafted an automated test suite for an Android application using cutting-edge technologies like Appium, SpecFlow, and C# to enhance testing efficiency.',
          'Optimized development process slashing testing time by an outstanding 75% with Selenium Grid\'s parallel execution.',
        ],
      },
    ] as WorkExperience[],
  
    projects: [
      {
        title: 'Portfolio Optimization Using Financial Models and Machine Learning',
        date: 'Jan. 2024 – Apr. 2024',
        description: [
          'Leveraged advanced financial models such as Markowitz\'s Modern Portfolio Theory and the Black-Litterman model, combined with machine learning algorithms, to optimize investment portfolios, showcasing proficiency in quantitative.',
          'Implemented SLSQP for low-risk portfolios and CG method for medium-risk portfolios, demonstrating proficiency in tailored optimization algorithms.',
        ],
      },
      {
        title: 'Chat with PDF using Large Language Models',
        date: 'Jan. 2024 – Apr. 2024',
        description: [
          'Drove the development of "Chat with PDF using LLMs," revolutionizing PDF document accessibility and usability by leveraging advanced large language models like LLama-2, Gemini, and OpenAI GPT 3.5.',
          'Conducted thorough evaluation studies, showcasing LLama-2\'s superior performance with a ROUGE-N score of 0.782 and latency of 75 seconds, highlighting significant improvements in PDF information retrieval.',
        ],
      },
      {
        title: 'Retail Management System',
        date: 'Sep. 2023 – Dec. 2023',
        description: [
          'Developed a web application using Angular, Spring Boot, and MySQL, optimizing inventory management and streamlining billing processes for enhanced efficiency.',
          'Executed user flow enhancements catering to Store Managers, Employees, and Customers, facilitating seamless inventory management and checkout experiences.',
        ],
      },
    ] as Project[],
  
    skills: {
      programmingLanguages: ['R', 'Python', 'Java', 'JavaScript', 'SQL'],
      machineLearning: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Tensorflow', 'Keras', 'PySpark', 'dplyr', 'Tidyverse', 'LangChain'],
      toolsAndTechnologies: ['Git', 'Tableau', 'Docker', 'Kubernetes', 'Airflow', 'Postgres', 'ETL', 'CI/CD', 'Anaconda', 'RStudio', 'Highcharts'],
      mathAndModels: ['Logistic and Linear Regression', 'Hypothesis Testing', 'CNNs', 'Decision Trees', 'K-means'],
      webTechnologies: ['Angular', 'HTML/CSS', 'Spring Boot', 'RxJS', 'RESTful API'],
    } as Skills,
  };
  