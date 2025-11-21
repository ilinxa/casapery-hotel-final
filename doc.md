

## Read Only Api token:
```
48517bf2f6a62302ef425d0a131c1aa8859fd06896ed21935ef4f5b2bf1f0306a06a41b746736119b3d460f81494d062a3d08a630026b990aff5bc1020c6e8f12643d746aa31f046b9d1f347ca03fedb1bd9bb6c71c1962a98bdbe23d4d7e77996b6b82b5cad6354ff6c03493902aa0f84c7a523a1bbc00e2d03acce2e92df34
```
## we have 3 pages: 
1. landing page:
### endpoints
* turkish:
GET: http://localhost:1337/api/landing-page?locale=tr

* English
GET: http://localhost:1337/api/landing-page?locale=en

### note: as you can see we have 2 end point for changinge website language (handeled in backend)

### response (en): 
```json
{
    "data": {
        "id": 14,
        "documentId": "fcmms7zpcqg2r01wmn3vzmnt",
        "title": "page title en",
        "description": "page des",
        "createdAt": "2025-08-24T21:23:47.832Z",
        "updatedAt": "2025-08-29T09:23:03.514Z",
        "publishedAt": "2025-08-29T09:23:03.579Z",
        "locale": "en",
        "blocks": [
            {
                "__component": "blocks.hero",
                "id": 13,
                "tagLine": "Luxury Lifestyle FROM strapi",
                "title": "GALVESTAM REHIAL FELGOR FROM strapi",
                "heroImg": {
                    "id": 3,
                    "documentId": "yabijv6docvqpwf400pgw0ua",
                    "alternativeText": null,
                    "url": "/uploads/heroimg_f3e4d560b7.jpeg"
                },
                "herocard": [
                    {
                        "id": 43,
                        "title": null,
                        "description": null,
                        "image": [
                            {
                                "id": 4,
                                "documentId": "kg8mpa49ifbs2wbaw105iqf9",
                                "alternativeText": null,
                                "url": "/uploads/pexels_photo_271624_e5a414fb08.webp"
                            }
                        ]
                    },
                    {
                        "id": 44,
                        "title": null,
                        "description": null,
                        "image": [
                            {
                                "id": 8,
                                "documentId": "erfap0mzt7yhku1tplpaavq9",
                                "alternativeText": null,
                                "url": "/uploads/pexels_photo_1174732_9aa11e4ba8.jpeg"
                            }
                        ]
                    },
                    {
                        "id": 45,
                        "title": "1234",
                        "description": "1234sdfsdf",
                        "image": [
                            {
                                "id": 3,
                                "documentId": "yabijv6docvqpwf400pgw0ua",
                                "alternativeText": null,
                                "url": "/uploads/heroimg_f3e4d560b7.jpeg"
                            }
                        ]
                    }
                ]
            },
            {
                "__component": "blocks.headline",
                "id": 8,
                "title": "headline title en",
                "tagline": "headline tagline en",
                "description": "headline description en",
                "background_image": {
                    "id": 3,
                    "documentId": "yabijv6docvqpwf400pgw0ua",
                    "alternativeText": null,
                    "url": "/uploads/heroimg_f3e4d560b7.jpeg"
                }
            },
            {
                "__component": "blocks.about-us",
                "id": 6,
                "tagline": "about us en",
                "title": "about us title ",
                "bottomTagline": "about us bottom line en",
                "description_1": "this is the first paragraph data",
                "description_2": "this is the second paragraph data ",
                "image_1": {
                    "id": 4,
                    "documentId": "kg8mpa49ifbs2wbaw105iqf9",
                    "alternativeText": null,
                    "url": "/uploads/pexels_photo_271624_e5a414fb08.webp"
                },
                "image_2": {
                    "id": 8,
                    "documentId": "erfap0mzt7yhku1tplpaavq9",
                    "alternativeText": null,
                    "url": "/uploads/pexels_photo_1174732_9aa11e4ba8.jpeg"
                },
                "cta": {
                    "id": 29,
                    "label": "Cta link",
                    "isExternal": false,
                    "href": "905522407770",
                    "pageLink": null,
                    "isButtonLink": false,
                    "btnType": null
                }
            },
            {
                "__component": "blocks.room",
                "id": 6,
                "tagline": "room tagline",
                "title": "roomtitle",
                "room": [
                    {
                        "id": 11,
                        "name": "lkjhl",
                        "category": "jkhlkj",
                        "price": "kjlhlkj",
                        "priceUnit": "jklhlk",
                        "size": "jhkjhl",
                        "occupancy": "ljkhlkj",
                        "description": "khgkjhgk",
                        "popular": true,
                        "rating": 1,
                        "features": null,
                        "image": {
                            "id": 8,
                            "documentId": "erfap0mzt7yhku1tplpaavq9",
                            "alternativeText": null,
                            "url": "/uploads/pexels_photo_1174732_9aa11e4ba8.jpeg"
                        }
                    },
                    {
                        "id": 12,
                        "name": "kjhlkjh",
                        "category": "kjhlkj",
                        "price": "hlkjhlkj",
                        "priceUnit": "lkjhlkuuytiu",
                        "size": "ytiuytiuyt",
                        "occupancy": "iuytiuytiu",
                        "description": "ytuytiuyti",
                        "popular": true,
                        "rating": 5,
                        "features": null,
                        "image": null
                    }
                ],
                "cta": {
                    "id": 31,
                    "label": "Room Cta",
                    "isExternal": false,
                    "href": "905522407770",
                    "pageLink": null,
                    "isButtonLink": false,
                    "btnType": null
                }
            },
            {
                "__component": "blocks.event-card",
                "id": 4,
                "title": "Event Card title",
                "description": "Event description",
                "isActive": false,
                "image": {
                    "id": 3,
                    "documentId": "yabijv6docvqpwf400pgw0ua",
                    "alternativeText": null,
                    "url": "/uploads/heroimg_f3e4d560b7.jpeg"
                },
                "bgImage": {
                    "id": 8,
                    "documentId": "erfap0mzt7yhku1tplpaavq9",
                    "alternativeText": null,
                    "url": "/uploads/pexels_photo_1174732_9aa11e4ba8.jpeg"
                },
                "buletPoints": [
                    {
                        "id": 9,
                        "text": "first line"
                    },
                    {
                        "id": 10,
                        "text": "second line"
                    },
                    {
                        "id": 11,
                        "text": "third line"
                    }
                ],
                "cta": {
                    "id": 30,
                    "label": "event link",
                    "isExternal": false,
                    "href": "905522407770",
                    "pageLink": null,
                    "isButtonLink": false,
                    "btnType": null
                }
            },
            {
                "__component": "blocks.travel-experiences",
                "id": 4,
                "tagline": "travel experiences tag line",
                "title": "We have a party",
                "notes": [
                    {
                        "id": 6,
                        "date": "2025-08-20",
                        "title": "best nature",
                        "note": "this place for our customer note",
                        "name": "hessam",
                        "image": {
                            "id": 8,
                            "documentId": "erfap0mzt7yhku1tplpaavq9",
                            "alternativeText": null,
                            "url": "/uploads/pexels_photo_1174732_9aa11e4ba8.jpeg"
                        }
                    },
                    {
                        "id": 7,
                        "date": "2025-08-09",
                        "title": "best room ",
                        "note": "other custemer note here",
                        "name": "shayan",
                        "image": {
                            "id": 4,
                            "documentId": "kg8mpa49ifbs2wbaw105iqf9",
                            "alternativeText": null,
                            "url": "/uploads/pexels_photo_271624_e5a414fb08.webp"
                        }
                    }
                ]
            },
            {
                "__component": "blocks.bottom-card",
                "id": 3,
                "tagline": null,
                "title": null,
                "description": null,
                "file": null
            },
            {
                "__component": "blocks.journals-section",
                "id": 2,
                "title": "journals section title here",
                "tagline": "journals section tagline here",
                "journals": [
                    {
                        "id": 7,
                        "documentId": "clsmiww0fpx44eleyt9oo2w0",
                        "title": "blog1",
                        "ShortContent": "jkahsdl kjahsld kjahsdlkajs hdlakjs hdlaksjd",
                        "createdAt": "2025-08-26T11:16:17.271Z",
                        "updatedAt": "2025-08-26T12:52:24.696Z",
                        "publishedAt": "2025-08-26T12:52:24.714Z",
                        "locale": "en",
                        "category": "edited",
                        "featured": true,
                        "date": "2025-08-26",
                        "creator": "hessam hezaveh",
                        "readTime": 15,
                        "slug": "blog1",
                        "blockText": [
                            {
                                "type": "heading",
                                "children": [
                                    {
                                        "type": "text",
                                        "text": "hi"
                                    }
                                ],
                                "level": 1
                            },
                            {
                                "type": "heading",
                                "children": [
                                    {
                                        "type": "text",
                                        "text": "how are you"
                                    }
                                ],
                                "level": 3
                            },
                            {
                                "type": "paragraph",
                                "children": [
                                    {
                                        "type": "text",
                                        "text": "hjkjhkjhkjh"
                                    }
                                ]
                            }
                        ],
                        "image": {
                            "id": 8,
                            "documentId": "erfap0mzt7yhku1tplpaavq9",
                            "url": "/uploads/pexels_photo_1174732_9aa11e4ba8.jpeg"
                        },
                        "journal_tags": [
                            {
                                "id": 2,
                                "documentId": "liwkbjw4etmbq7j06gc47gos",
                                "title": "j tag 2",
                                "description": "jkhldkjfhg kjdfh glkjdh slkdjfhgsldkfj",
                                "createdAt": "2025-08-26T12:48:34.887Z",
                                "updatedAt": "2025-08-26T12:48:34.887Z",
                                "publishedAt": "2025-08-26T12:48:34.880Z",
                                "locale": "en"
                            },
                            {
                                "id": 1,
                                "documentId": "eqncduracyila2jfxkzfgdjg",
                                "title": "j tag 1",
                                "description": "jkhakjsd h",
                                "createdAt": "2025-08-26T12:48:17.592Z",
                                "updatedAt": "2025-08-26T12:48:17.592Z",
                                "publishedAt": "2025-08-26T12:48:17.587Z",
                                "locale": "en"
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "documentId": "d4zy2r5vksq6qkrzzkg0jthe",
                        "title": "blog 2 ",
                        "ShortContent": "this is short description",
                        "createdAt": "2025-08-29T09:21:51.066Z",
                        "updatedAt": "2025-08-29T09:22:53.412Z",
                        "publishedAt": "2025-08-29T09:22:53.428Z",
                        "locale": "en",
                        "category": "nature",
                        "featured": true,
                        "date": "2025-08-06",
                        "creator": "hessam",
                        "readTime": 15,
                        "slug": "blog-2",
                        "blockText": [
                            {
                                "type": "paragraph",
                                "children": [
                                    {
                                        "type": "text",
                                        "text": "this is long text"
                                    }
                                ]
                            }
                        ],
                        "image": {
                            "id": 8,
                            "documentId": "erfap0mzt7yhku1tplpaavq9",
                            "url": "/uploads/pexels_photo_1174732_9aa11e4ba8.jpeg"
                        },
                        "journal_tags": [
                            {
                                "id": 2,
                                "documentId": "liwkbjw4etmbq7j06gc47gos",
                                "title": "j tag 2",
                                "description": "jkhldkjfhg kjdfh glkjdh slkdjfhgsldkfj",
                                "createdAt": "2025-08-26T12:48:34.887Z",
                                "updatedAt": "2025-08-26T12:48:34.887Z",
                                "publishedAt": "2025-08-26T12:48:34.880Z",
                                "locale": "en"
                            },
                            {
                                "id": 1,
                                "documentId": "eqncduracyila2jfxkzfgdjg",
                                "title": "j tag 1",
                                "description": "jkhakjsd h",
                                "createdAt": "2025-08-26T12:48:17.592Z",
                                "updatedAt": "2025-08-26T12:48:17.592Z",
                                "publishedAt": "2025-08-26T12:48:17.587Z",
                                "locale": "en"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "meta": {}
}
```
2. journals page:
### endpoints
* turkish:
GET: http://localhost:1337/api/journal-page?locale=tr

* English
GET: http://localhost:1337/api/journal-page?locale=en

### note: as you can see we have 2 end point for changinge website language (handeled in backend)

