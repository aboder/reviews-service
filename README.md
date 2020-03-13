# Air Tree n Tree Reviews Service

---

## API Spec

`GET /api/reviews/:roomid/?review_group=[0 || selected pagination]`

### Parameters

| Params | Type |
| --- | --- |
| :roomId | `String` |
| selected pagination | `Number` |

### Response:

| Field | Type |
| ----- | ---- |
| roomId | `Number` | 
| reviews| [`Reviews[]`](#Reviews) |
| averageRating| [`AverageRating{}`](#Average-Rating)|

#### Response Property: Reviews
| Field | Type |
| ----- | ---- |
|revieweeName|`String`|
|revieweePhoto|`URL`|
|createdAt|`Date`|
|text|`String`|

#### Response Property: Average-Rating
| Field | Type |
| ----- | ---- |
|Overall| `Number(1-5)`|
|Check-in| `Number(1-5)`|
|Communication| `Number(1-5)`|
|Accuracy| `Number(1-5)`|
|Location| `Number(1-5)`|
|Cleanliness| `Number(1-5)`|
|Value| `Number(1-5)`|

```
    {
        "roomId": 123456789,
        "reviews": [
                      {
                         "revieweeName": "Alex Mitchell",
                         "revieweePhoto: "somelink.com/6g4137823erg",
                         "createdAt": "11/22/2019",
                         "text": "This place is awesome"
                      },
                      {
                         "revieweeName": "Jin Cai",
                         "revieweePhoto: "somelink.com/6g4asdsd3erg",
                         "createdAt": "11/19/2019",
                         "text": "This place sucks"
                      }
                   ]
        "averageRating": {
                            "Overall": 2.7,
                            "CheckIn": 2.3,
                            "Communication": 3.4,
                            "Accuracy": 2.5,
                            "Location": 3.6,
                            "Cleanliness": 2.4,
                            "Value": 2.5
                         }
    }
```
---
