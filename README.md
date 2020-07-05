# api-rest-total-p

This repository have the code of the backend of this app: https://recipe-app-total-perform.herokuapp.com/

Link of the api: https://api-rest-total-p.herokuapp.com/

If you want to add a new recipe, you just post a request with the following body to: https://api-rest-total-p.herokuapp.com/api/recipe

Body:

```
{
    "name": "xxx",
    "steps": "xxx",
    "imageURL": "http://XXX.jpg",
	"calification": [],
    "ingredients": [
			{
        "unit": "unit",
        "quantity": 1,
        "name": "xx",
        "type": "xxx"
      }
    ]
  }
```
