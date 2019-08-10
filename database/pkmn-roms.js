conn = new Mongo();
printjson(conn);

db = conn.getDB('pkmn-roms');
db = db.getSiblingDB('pkmn-roms');
printjson(db);

// uncomment the following if running this script locally for the first time
//--------------------------
// dbUserInsertQuery = db.createUser({
//   user: 'Broccolini',
//   pwd: '12345678',
//   roles: ['readWrite', 'dbAdmin']
// });
// printjson(dbUserInsertQuery);
//--------------------------

romsCollection = db.createCollection('roms', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'user_id',
        'order_number',
        'rom_type',
        'file_size',
        'file_type',
        'file_name',
        'download_link',
        'generation',
        'box_art_url',
        'game_name',
        'region',
        'platform',
        'description',
        'date_released',
        'logo_url'
      ],
      properties: {
        user_id: {
          bsonType: 'objectId'
        },
        order_number: {
          bsonType: 'int',
          minimum: 0,
          maximum: 88
        },
        rom_type: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 5,
          pattern: '^(core|hack)$'
        },
        file_name: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 80
        },
        file_size: {
          bsonType: 'int',
          minimum: 64,
          maximum: 12000000
        },
        file_type: {
          bsonType: 'string',
          pattern: '^(?:.?(gb[ca]?|[n3]ds|xci))$' // i
        },
        download_link: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 1000,
          pattern:
            '^(?:[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$' // i
        },
        generation: {
          bsonType: 'int',
          minimum: 1,
          maximum: 8
        },
        box_art_url: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 1000,
          pattern:
            '^(?:[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$' // i
        },
        game_name: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 42
        },
        region: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 10
        },
        platform: {
          bsonType: 'string',
          minLength: 2,
          maxLength: 50
        },
        description: {
          bsonType: 'string',
          minLength: 5,
          maxLength: 8000
        },
        date_released: {
          bsonType: 'date'
        },
        genre: {
          bsonType: ['string', 'null'],
          minLength: 2,
          maxLength: 20
        },
        logo_url: {
          bsonType: 'string',
          pattern:
            '^(?:[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$' // i
        },
        is_favorite: {
          bsonType: 'bool'
        }
      }
    }
  }
});
printjson(romsCollection);

usersCollection = db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['email', 'username', 'password'],
      properties: {
        name: {
          bsonType: ['string', 'null'],
          minLength: 1,
          maxLength: 100
        },
        email: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 55,
          pattern:
            '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        },
        username: {
          bsonType: 'string',
          minLength: 5,
          maxLength: 22
        },
        password: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 256
        }
      }
    }
  }
});
printjson(usersCollection);

naturesCollection = db.createCollection('natures', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'up', 'down', 'usage'],
      properties: {
        name: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 10
        },
        up: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 20
        },
        down: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 20
        },
        usage: {
          bsonType: 'string',
          minLength: 5,
          maxLength: 40
        },
        flavor: {
          bsonType: ['string', 'null'],
          minLength: 4,
          maxLength: 14
        }
      }
    }
  }
});
printjson(naturesCollection);

ratingsCollection = db.createCollection('ratings', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['rating', 'date_time'],
      properties: {
        rating: {
          bsonType: 'int',
          minimum: 1,
          maximum: 10
        },
        message: {
          bsonType: ['string', 'null'],
          maxLength: 1000
        },
        date_time: {
          bsonType: 'date'
        }
      }
    }
  }
});
printjson(ratingsCollection);
