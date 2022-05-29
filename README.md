# Polling-API

# Features
    - Create a question (you can add as many questions as you want)
    - Add options to a question
    - Add a vote to an option of question
    - Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
    - Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
    - View a question with it’s options and all the votes given to it
    - View all questions and options



# Routes
    - / (To get all the questions and options)
    - /questions/create  (To create a question)
    - /questions/:id/options/create  (To add options to a specific question)
    - /questions/:id/delete (To delete a question)
    - /options/:id/delete (To delete an option)
    - /options/:id/add_vote (To increment the count of votes)
    - /questions/:id (To view a question and it’s options)


# Demo 
```
[
    {
        "_id":"62933b7906bccf8007bff2d1","title":"what is your fav programming language",
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

## Git Clone
To use this repository in your local system-

<a href="https://github.com/PranjalAgrawal1/polling-API.git" target="_blank">https://github.com/PranjalAgrawal1/polling-API.git </a>


or run this command in your GitHub CLI

###### `gh repo clone PranjalAgrawal1/polling-API`
<br>




# Hosted URL 
https://polling-api-0.herokuapp.com/
