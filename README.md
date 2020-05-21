# Air Tree n Tree Reviews Service

---

![](https://i.imgur.com/gBLJM78.png)

## Getting Started

This service is supported on Node v12.16.1

Install package dependencies.

`npm install`

------

Install mongodb server community edition if not already installed.
https://www.mongodb.com/download-center/community

Version 4.2.3 of mongod is supported.

---
## scripts

`build`:

Builds the webpack bundle of client module.

---

`boot-dev`:

Starts and watches the proxy service server.

__`nodemon` is required for the script, `boot-dev`, and is not included in the package dependencies. `nodemon` must be installed separately or globally.__ 

---

`boot-prod`:

Starts the service server locally.

---

`seed`:

Creates a mongo database `aboder`


Creates and seeds collections, `room` and `review`,
with 100 rooms and 5000 reviews.

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
| rating| [`Rating{}`](#Response-Property:-Rating)|
|numOfReviews| `Number`|
| reviews| [`Reviews[]`](#Response-Property:-Reviews)|
|visibleReviews| `Number`|

#### Response Property: Rating
| Field | Type |
| ----- | ---- |
|Overall| `Number(1-5)`|
|Check-in| `Number(1-5)`|
|Communication| `Number(1-5)`|
|Accuracy| `Number(1-5)`|
|Location| `Number(1-5)`|
|Cleanliness| `Number(1-5)`|
|Value| `Number(1-5)`|

#### Response Property: Reviews
| Field | Type |
| ----- | ---- |
|roomId|`Number`|
|author|`String`|
|authorsAvatar|`URL`|
|createdAt|`Date`|
|text|`String`|

```
	{
		"rating": {
			"communication":4,
			"location":4,
			"value":3,
			"checkin":4,
			"accuracy":4,
			"cleanliness":3,
			"overall":3.6666666666666665
		},
		"numOfReviews":50,
		"reviews":[
			{
				"author":"Matilda",
				"authorsAvatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jitachi/128.jpg",
				"createdAt":"2020-04-17T00:38:16.081Z",
				"text":"Harum asperiores vitae et. Sed ipsam est id ipsa iusto itaque atque ut. Rem sequi ut qui perferendis aspernatur."
			},
			...,
			...,
			...,
		],
		"visibleReviews":4
	}
```
---
