/*
pkmn_roms MongoDB Database Script
---------------------------------

To load this data in production:
$ npm run load-db

To load this data in development:
$ npm run import-db
*/

try {
  // if using ssl
  conn = new Mongo('server1.pokerom.dev:44380');
  printjson(conn);
} catch (e) {
  // if using ssh
  conn = new Mongo('localhost');
  printjson(conn);
}

db = db.getSiblingDB('pkmn_roms');
printjson(db);

try {
  // if production
  adminUser = db.createUser({
    user: 'admin',
    pwd: '123456',
    db: 'admin',
    roles: [{ role: 'root', db: 'admin' }]
  });
  printjson(adminUser);
} catch (e) {
  // if development
  users = db.getUsers();
  printjson(users);
}

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
        'logo_url',
        'is_favorite'
      ],
      properties: {
        user_id: {
          bsonType: 'objectId',
          description: 'user_id is required and must be an ObjectId.'
        },
        order_number: {
          bsonType: 'int',
          minimum: 0,
          maximum: 88,
          description:
            'order_number is required and must be an integer between 0 and 88.'
        },
        rom_type: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 5,
          pattern: '^(core|hack)$',
          description:
            'rom_type is required, needs to be a string between 4 and 5 characters, and must be either "core" or "hack".'
        },
        file_name: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 80,
          description:
            'file_name is required and must be a string between 3 and 80 characters.'
        },
        file_size: {
          bsonType: 'int',
          minimum: 64,
          maximum: 16000000,
          description:
            'file_size is required must be an integer between 64 and 16000000 kilobytes.'
        },
        file_type: {
          bsonType: 'string',
          pattern: '^(?:\\.?(gb[ca]?|[n3]ds|xci))$',
          description:
            'file_type is required and must be a string that matches the following: .[gb, gbc, gba, nds, 3ds, xci]'
        },
        download_link: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 1000,
          pattern:
            '^(?:(http(s)?)://(www.)?[a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$',
          description:
            'download_link is required and needs to be a valid URL string between 8 and 1000 characters.'
        },
        generation: {
          bsonType: 'int',
          minimum: 1,
          maximum: 8,
          description:
            'generation is required and needs to be an integer between 1 and 8.'
        },
        box_art_url: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 1000,
          pattern:
            '^(?:(http(s)?)://(www.)?[a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$',
          description:
            'box_art_url is required and needs to be a valid URL string between 8 and 1000 characters.'
        },
        game_name: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 42,
          description:
            'game_name is required and must be a string between 3 and 42 characters.'
        },
        region: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 10,
          description:
            'region is required and must be a string between 3 and 10 characters.'
        },
        platform: {
          bsonType: 'string',
          minLength: 2,
          maxLength: 50,
          description:
            'platform is required and must be a string between 2 and 50 characters.'
        },
        description: {
          bsonType: 'string',
          minLength: 5,
          maxLength: 8000,
          description:
            'description is required and must be a string between 5 and 8000 characters.'
        },
        date_released: {
          bsonType: 'date',
          description: 'date_released is required and must be a valid ISO Date.'
        },
        genre: {
          bsonType: ['string', 'null'],
          minLength: 2,
          maxLength: 20,
          description:
            'genre can only be a string between 2 and 20 characters or null.'
        },
        logo_url: {
          bsonType: 'string',
          pattern:
            '^(?:(http(s)?)://(www.)?[a-zA-Z0-9@:%._+~#;=]{2,256}.[a-zA-Z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=;]*))$',
          description:
            'logo_url is required and needs to be a valid URL string between 8 and 1000 characters.'
        },
        is_favorite: {
          bsonType: 'bool',
          description: 'is_favorite is required and must be a boolean.'
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
      required: ['username', 'password'],
      properties: {
        name: {
          bsonType: ['string', 'null'],
          minLength: 1,
          maxLength: 100,
          description:
            'name can only be a string between 1 and 100 characters or null.'
        },
        username: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 22,
          description:
            'username is required and must be a string between 3 and 22 characters.'
        },
        password: {
          bsonType: 'string',
          minLength: 8,
          maxLength: 256,
          description:
            'password is required and must be a string between 8 and 256 characters.'
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
          maxLength: 10,
          description:
            'name is required and must be a string between 3 and 10 characters.'
        },
        up: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 20,
          description:
            'up is required and must be a string between 4 and 20 characters.'
        },
        down: {
          bsonType: 'string',
          minLength: 4,
          maxLength: 20,
          description:
            'down is required and must be a string between 4 and 20 characters.'
        },
        usage: {
          bsonType: 'string',
          minLength: 5,
          maxLength: 40,
          description:
            'usage is required and must be a string between 5 and 20 characters.'
        },
        flavor: {
          bsonType: ['string', 'null'],
          minLength: 4,
          maxLength: 14,
          description:
            'flavor can only be a string between 4 and 14 characters or null.'
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
          maximum: 10,
          description:
            'rating is required and must be an integer between 1 and 10.'
        },
        message: {
          bsonType: ['string', 'null'],
          maxLength: 1000,
          description:
            'message can only be a string with 1000 characters at max or null.'
        },
        date_time: {
          bsonType: 'date',
          description: 'date_time is required and must be a valid ISO Date.'
        }
      }
    }
  }
});
printjson(ratingsCollection);
