# Polling-API

## Features
- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it
- View all questions and options


## Tech Stack
- Node Js
- Express Js
- MongoDB
- Heroku

## Routes
- GET  -  / (To get all the questions and options)
- POST -  /questions/create  (To create a question)
- POST -  /questions/:id/options/create  (To add options to a specific question)
- POST -  /questions/:id/delete (To delete a question)
- POST -  /options/:id/delete (To delete an option)
- POST -  /options/:id/add_vote (To increment the count of votes)
- GET  -  /questions/:id (To view a question and it’s options)

## How to add questions / options
```
// to add a new question 
// pass 'title' through body
// and post it to https://polling-api-0.herokuapp.com/questions/create
{
    "title": "vote your Fav Coding platform"
}


// to add new option
// pass 'text' through body
// and post it to https://polling-api-0.herokuapp.com/questions/:id/options/create
{
    "text": "Code Studio"
}
```

## Demo 
```
[
    {
        "_id":"62933b7906bccf8007bff2d1",
        "title":"what is your fav programming language",
        "options": [
            {
                "_id":"62933bbc06bccf8007bff2d4",
                "text":"Java",
                "votes":89,
                "title":"62933b7906bccf8007bff2d1",
                "__v":0,
                "votingUrl":"/options/62933bbc06bccf8007bff2d4/add_vote"
            },
            {
                "_id":"62933bc506bccf8007bff2da",
                "text":"JavaScript",
                "votes":92,
                "title":"62933b7906bccf8007bff2d1",
                "__v":0,
                "votingUrl":"/options/62933bc506bccf8007bff2da/add_vote"
            },
            {
                "_id":"62933bea06bccf8007bff2df",
                "text":"Python",
                "votes":122,
                "title":"62933b7906bccf8007bff2d1",
                "__v":0,
                "votingUrl":"/options/62933bea06bccf8007bff2df/add_vote"
            },
            {
                "_id":"62933bf006bccf8007bff2e4",
                "text":"C++",
                "votes": 82,
                "title":"62933b7906bccf8007bff2d1",
                "__v":0,
                "votingUrl":"/options/62933bf006bccf8007bff2e4/add_vote"
            }
        ]
    }
]
```


## Directory Structure

```
Polling Api
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env
├── config
│   └── mongoose.js
├── controller
│   ├── option-controller.js
│   └── questions-controller.js
├── models
│   ├── option_model.js
│   └── title_model.js
└── routes
    ├── index.js
    ├── options.js
    └── questions.js
```


## Git Clone
To use this repository in your local system-

<a href="https://github.com/PranjalAgrawal1/polling-API.git" target="_blank">https://github.com/PranjalAgrawal1/polling-API.git </a>


or run this command in your GitHub CLI

###### `gh repo clone PranjalAgrawal1/polling-API`
<br>




## Hosted URL 
https://polling-api-0.herokuapp.com/
