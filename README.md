# Air Tree n Tree Reviews Service

## API spec
`GET /api/reviews/:roomid/?review_group=[selected pagination number]`

### Response

| Field | Type |
|--------| ----------- |
| id | String |
| reviews  | [Reviews](#Reviews)[] |

#### Reviews

```
   [
      {
         reviewee: String, 
         rating: Number (1-5), 
         text: String
      },
      ...
   ]
```

#### Example Response
```
    {
        "id": "123456789abcdef",
        reviews: [
                    {
                       "reviewee": "John Wilburth",
                       "rating": 5,
                       "text": "This house rules"
                    },
                    {
                       "reviewee": "Jin Cai",
                       "rating": 1,
                       "text": "How did I get here?"
                    }
                 ]                  
    }
```
