define({ "api": [
  {
    "group": "Decouverte",
    "type": "GET",
    "url": "/look4/user/type/:id",
    "title": "4-Le détail d'un type",
    "description": "<p>Obtenir le détail d'un type</p>",
    "name": "discoverGetType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>L'identifant du type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Le JSON définisant le type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "{\n\tdescription: \"Une adresse\",\n\tfields: {\n\t    city: {\n\t        description: \"La ville\",\n\t        type: \"string\",\n\t        queryable: true,\n\t        boost: 1\n\t    },\n\t        postalCode: {\n\t        description: \"\",\n\t        type: \"string\",\n\t        queryable: true,\n\t        boost: 1\n\t    },\n\t    street: {\n\t        description: \"\",\n\t        type: \"string\",\n\t        queryable: true,\n\t        boost: 1\n\t    },\n\t    number: {\n\t        description: \"\",\n\t        type: \"string\",\n\t        queryable: true,\n\t        boost: 1\n\t    }\n\t},\n\tfulltext_fields: [\n\t    \"city\",\n\t    \"postalCode\",\n\t    \"street\",\n\t    \"number\"\n\t],\n\tid: \"address\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "TypeNotFound",
            "description": "<p>Le type <code>id</code> n'existe pas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "GET /look4/user/discover/type/unknow_id\n{\n  \"code\": 404,\n  \"message\": \"Unknow type id [unknow_id]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/main/js/controller/user/discoverController.js",
    "groupTitle": "Decouverte"
  },
  {
    "group": "Decouverte",
    "type": "GET",
    "url": "/look4/user/discover/:id/type",
    "title": "3-Les types d'un index",
    "description": "<p>Obtenir le détail des types d'un index</p>",
    "name": "discoverGetTypesForIndex",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>L'identifant de l'index.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>L'ensemble des JSON définisant les types de l'index</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "[\n  {\n      description: \"Une adresse\",\n      fields: {\n          city: {\n              description: \"La ville\",\n              type: \"string\",\n              queryable: true,\n              boost: 1\n          },\n              postalCode: {\n              description: \"\",\n              type: \"string\",\n              queryable: true,\n              boost: 1\n          },\n          street: {\n              description: \"\",\n              type: \"string\",\n              queryable: true,\n              boost: 1\n          },\n          number: {\n              description: \"\",\n              type: \"string\",\n              queryable: true,\n              boost: 1\n          }\n      },\n      fulltext_fields: [\n          \"city\",\n          \"postalCode\",\n          \"street\",\n          \"number\"\n      ],\n      id: \"address\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "IndexNotFound",
            "description": "<p>L'index <code>id</code> n'existe pas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "GET /look4/admin/config/unknow_id\n{\n  \"code\": 404,\n  \"message\": \"Unknow index id [unknow_id]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/main/js/controller/user/discoverController.js",
    "groupTitle": "Decouverte"
  },
  {
    "group": "Decouverte",
    "type": "GET",
    "url": "/look4/user/discover/:id",
    "title": "2-Détail d'un index",
    "description": "<p>Obtenir le détail d'un index</p>",
    "name": "discoverIndex",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>L'identifant de l'index.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Le JSON définisant l'index</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "{\n  id: \"localisant\",\n  description: \"Localisant\",\n  types: [\n    \"address\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "404",
            "optional": false,
            "field": "IndexNotFound",
            "description": "<p>L'index <code>id</code> n'existe pas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "GET /look4/admin/config/unknow_id\n{\n  \"code\": 404,\n  \"message\": \"Unknow index id [unknow_id]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/main/js/controller/user/discoverController.js",
    "groupTitle": "Decouverte"
  },
  {
    "group": "Decouverte",
    "type": "GET",
    "url": "/look4/user/discover",
    "title": "1-Liste des index disponibles",
    "description": "<p>Obtenir la liste des index diponibles</p>",
    "name": "discoverIndices",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "body",
            "description": "<p>La liste des identifiants des index.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple",
          "content": "[\n\"annuaire\",\n\"geocatalogue\",\n\"index_todelete\",\n\"localisant\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/main/js/controller/user/discoverController.js",
    "groupTitle": "Decouverte"
  },
  {
    "version": "1.4.6",
    "group": "Recherche",
    "type": "GET",
    "url": "/look4/user/search",
    "title": "Rechercher (GET)",
    "name": "searchGET",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"fuzzy\"",
              "\"prefix\""
            ],
            "optional": false,
            "field": "method",
            "description": "<p>La ou les méthodes de recherche (autocomplétion ou/et recherche)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "indices",
            "description": "<p>Le ou les index à interroger.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nb",
            "defaultValue": "20",
            "description": "<p>Le nombre de résultat attendus (la valeur par défault peut changer selon la configuration du serveur).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "types",
            "description": "<p>Précise les types des documents recherchés dans la phase de matching.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Précise les champs des documents à retourner (parmis ceux du document, ainsi que <code>_id</code>, <code>_score</code>, <code>_importance</code> et <code>_type</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "void",
            "optional": true,
            "field": "nogeom",
            "description": "<p>Ne pas récupérer la géométrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "match",
            "description": "<p>Voir ci-dessous. Doit contenir au moins le fulltext ou un fields</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "filter",
            "description": "<p>Voir ci-dessous.</p>"
          }
        ],
        "match": [
          {
            "group": "match",
            "type": "String",
            "optional": true,
            "field": "fulltext",
            "description": "<p>Texte à recherche sans précision du champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "geometry",
            "description": "<p>Une géométrie sous forme d'un WKT ou d'un GeoJSON</p>"
          }
        ],
        "filter": [
          {
            "group": "filter",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ. Peut être</p> <ul> <li>du simple texte (le champs doit contenir ce texte)</li> <li>une RegExp Javascript (le champ doit matcher cette RegExp)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Match fulltext",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fulltext]=73%20av%20de%20paris%20saint-mandé",
          "type": "json"
        },
        {
          "title": "Match fields",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fields][street]=av%20de%20paris&match[fileds][city]=saint-mandé",
          "type": "json"
        },
        {
          "title": "Match fulltext et filter",
          "content": "GET /look4/user/search?indices=localisant&method=prefix,fuzzy&match[fulltext]=tour%20eiffel&filter[fields][city]=Paris",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongType",
            "description": "<p>Les index demandés ne possèdent pas le/les types demandés</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "ParseFailed",
            "description": "<p>La lecteur du corps de la requête est impossible.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowIndex",
            "description": "<p>Un identifiant d'index est inconnu.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "EmptyMatch",
            "description": "<p>La requête doit avoir au moins un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowField",
            "description": "<p>Un identifiant de champs est inconnu dans un critère de matching, de filtering ou dans le paramètre fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NotQueryable",
            "description": "<p>Le champ n'est pas queryable et ne peut donc pas apparaîre dans un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongNb",
            "description": "<p>Le nombre de réponse demandé est incompatible avec la configuration du serveur.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Erreur interne au serveur</p>"
          }
        ]
      }
    },
    "filename": "src/main/js/controller/user/searchController.js",
    "groupTitle": "Recherche"
  },
  {
    "version": "1.4.0",
    "group": "Recherche",
    "type": "GET",
    "url": "/look4/user/search",
    "title": "Rechercher (GET)",
    "name": "searchGET",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"fuzzy\"",
              "\"prefix\""
            ],
            "optional": false,
            "field": "method",
            "description": "<p>La ou les méthodes de recherche (autocomplétion ou/et recherche)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "indices",
            "description": "<p>Le ou les index à interroger.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nb",
            "defaultValue": "20",
            "description": "<p>Le nombre de résultat attendus (la valeur par défault peut changer selon la configuration du serveur).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "types",
            "description": "<p>Précise les types des documents recherchés dans la phase de matching.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Précise les champs des documents à retourner (parmis ceux du document, ainsi que <code>_id</code>, <code>_score</code> et <code>_type</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "void",
            "optional": true,
            "field": "nogeom",
            "description": "<p>Ne pas récupérer la géométrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "match",
            "description": "<p>Voir ci-dessous. Doit contenir au moins le fulltext ou un fields</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "filter",
            "description": "<p>Voir ci-dessous.</p>"
          }
        ],
        "match": [
          {
            "group": "match",
            "type": "String",
            "optional": true,
            "field": "fulltext",
            "description": "<p>Texte à recherche sans précision du champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "geometry",
            "description": "<p>Une géométrie sous forme d'un WKT ou d'un GeoJSON</p>"
          }
        ],
        "filter": [
          {
            "group": "filter",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ. Peut être</p> <ul> <li>du simple texte (le champs doit contenir ce texte)</li> <li>une RegExp Javascript (le champ doit matcher cette RegExp)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Match fulltext",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fulltext]=73%20av%20de%20paris%20saint-mandé",
          "type": "json"
        },
        {
          "title": "Match fields",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fields][street]=av%20de%20paris&match[fileds][city]=saint-mandé",
          "type": "json"
        },
        {
          "title": "Match fulltext et filter",
          "content": "GET /look4/user/search?indices=localisant&method=prefix,fuzzy&match[fulltext]=tour%20eiffel&filter[fields][city]=Paris",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongType",
            "description": "<p>Les index demandés ne possèdent pas le/les types demandés</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "ParseFailed",
            "description": "<p>La lecteur du corps de la requête est impossible.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowIndex",
            "description": "<p>Un identifiant d'index est inconnu.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "EmptyMatch",
            "description": "<p>La requête doit avoir au moins un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowField",
            "description": "<p>Un identifiant de champs est inconnu dans un critère de matching, de filtering ou dans le paramètre fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NotQueryable",
            "description": "<p>Le champ n'est pas queryable et ne peut donc pas apparaîre dans un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongNb",
            "description": "<p>Le nombre de réponse demandé est incompatible avec la configuration du serveur.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Erreur interne au serveur</p>"
          }
        ]
      }
    },
    "filename": "src/main/js/controller/user/searchController.js",
    "groupTitle": "Recherche"
  },
  {
    "version": "1.1.0",
    "group": "Recherche",
    "type": "GET",
    "url": "/look4/user/search",
    "title": "Rechercher (GET)",
    "name": "searchGET",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"fuzzy\"",
              "\"prefix\""
            ],
            "optional": false,
            "field": "method",
            "description": "<p>La méthode de recherche (autocomplétion ou recherche)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "indices",
            "description": "<p>Le ou les index à interroger.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nb",
            "defaultValue": "20",
            "description": "<p>Le nombre de résultat attendus (la valeur par défault peut changer selon la configuration du serveur).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "types",
            "description": "<p>Précise les types des documents recherchés dans la phase de matching.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Précise les champs des documents à retourner (parmis ceux du document, ainsi que <code>_id</code>, <code>_score</code> et <code>_type</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "void",
            "optional": true,
            "field": "nogeom",
            "description": "<p>Ne pas récupérer la géométrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "match",
            "description": "<p>Voir ci-dessous. Doit contenir au moins le fulltext ou un fields</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "filter",
            "description": "<p>Voir ci-dessous.</p>"
          }
        ],
        "match": [
          {
            "group": "match",
            "type": "String",
            "optional": true,
            "field": "fulltext",
            "description": "<p>Texte à recherche sans précision du champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ.</p>"
          }
        ],
        "filter": [
          {
            "group": "filter",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ. Peut être</p> <ul> <li>du simple texte (le champs doit contenir ce texte)</li> <li>une RegExp Javascript (le champ doit matcher cette RegExp)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Match fulltext",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fulltext]=73%20av%20de%20paris%20saint-mandé",
          "type": "json"
        },
        {
          "title": "Match fields",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fields][street]=av%20de%20paris&match[fileds][city]=saint-mandé",
          "type": "json"
        },
        {
          "title": "Match fulltext et filter",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fulltext]=tour%20eiffel&filter[fields][city]=Paris",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongType",
            "description": "<p>Les index demandés ne possèdent pas le/les types demandés</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "ParseFailed",
            "description": "<p>La lecteur du corps de la requête est impossible.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowIndex",
            "description": "<p>Un identifiant d'index est inconnu.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "EmptyMatch",
            "description": "<p>La requête doit avoir au moins un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowField",
            "description": "<p>Un identifiant de champs est inconnu dans un critère de matching, de filtering ou dans le paramètre fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NotQueryable",
            "description": "<p>Le champ n'est pas queryable et ne peut donc pas apparaîre dans un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongNb",
            "description": "<p>Le nombre de réponse demandé est incompatible avec la configuration du serveur.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Erreur interne au serveur</p>"
          }
        ]
      }
    },
    "filename": "src/main/js/controller/user/searchController.js",
    "groupTitle": "Recherche"
  },
  {
    "version": "1.0.0",
    "group": "Recherche",
    "type": "GET",
    "url": "/look4/user/search",
    "title": "Rechercher (GET)",
    "name": "searchGET",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"fuzzy\"",
              "\"prefix\""
            ],
            "optional": false,
            "field": "method",
            "description": "<p>La méthode de recherche (autocomplétion ou recherche)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "indices",
            "description": "<p>Le ou les index à interroger.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nb",
            "defaultValue": "20",
            "description": "<p>Le nombre de résultat attendus (la valeur par défault peut changer selon la configuration du serveur).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Précise les champs des documents à retourner (parmis ceux du document, ainsi que <code>_id</code>, <code>_score</code> et <code>_type</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "void",
            "optional": true,
            "field": "nogeom",
            "description": "<p>Ne pas récupérer la géométrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "match",
            "description": "<p>Voir ci-dessous. Doit contenir au moins le fulltext ou un fields</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "filter",
            "description": "<p>Voir ci-dessous.</p>"
          }
        ],
        "match": [
          {
            "group": "match",
            "type": "String",
            "optional": true,
            "field": "fulltext",
            "description": "<p>Texte à recherche sans précision du champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ.</p>"
          }
        ],
        "filter": [
          {
            "group": "filter",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ. Peut être</p> <ul> <li>du simple texte (le champs doit contenir ce texte)</li> <li>une RegExp Javascript (le champ doit matcher cette RegExp)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Match fulltext",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fulltext]=73%20av%20de%20paris%20saint-mandé",
          "type": "json"
        },
        {
          "title": "Match fields",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fields][street]=av%20de%20paris&match[fileds][city]=saint-mandé",
          "type": "json"
        },
        {
          "title": "Match fulltext et filter",
          "content": "GET /look4/user/search?indices=localisant&method=fuzzy&match[fulltext]=tour%20eiffel&filter[fields][city]=Paris",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/js/controller/user/searchController.js",
    "groupTitle": "Recherche",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "ParseFailed",
            "description": "<p>La lecteur du corps de la requête est impossible.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowIndex",
            "description": "<p>Un identifiant d'index est inconnu.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "EmptyMatch",
            "description": "<p>La requête doit avoir au moins un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowField",
            "description": "<p>Un identifiant de champs est inconnu dans un critère de matching, de filtering ou dans le paramètre fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NotQueryable",
            "description": "<p>Le champ n'est pas queryable et ne peut donc pas apparaîre dans un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongNb",
            "description": "<p>Le nombre de réponse demandé est incompatible avec la configuration du serveur.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Erreur interne au serveur</p>"
          }
        ]
      }
    }
  },
  {
    "version": "1.4.6",
    "group": "Recherche",
    "type": "POST",
    "url": "/look4/user/search",
    "title": "Rechercher (POST)",
    "name": "searchPOST",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"fuzzy\"",
              "\"prefix\""
            ],
            "optional": false,
            "field": "method",
            "description": "<p>La ou les méthodes de recherche (autocomplétion ou/et recherche)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "indices",
            "description": "<p>Le ou les index à interroger.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nb",
            "defaultValue": "20",
            "description": "<p>Le nombre de résultat attendus (la valeur par défault peut changer selon la configuration du serveur).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "types",
            "description": "<p>Précise les types des documents recherchés dans la phase de matching.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Précise les champs des documents à retourner (parmis ceux du document, ainsi que <code>_id</code>, <code>_score</code>, <code>_importance</code> et <code>_type</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "void",
            "optional": true,
            "field": "nogeom",
            "description": "<p>Ne pas récupérer la géométrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "match",
            "description": "<p>Voir ci-dessous. Doit contenir au moins le fulltext ou un fields</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "filter",
            "description": "<p>Voir ci-dessous.</p>"
          }
        ],
        "match": [
          {
            "group": "match",
            "type": "String",
            "optional": true,
            "field": "fulltext",
            "description": "<p>Texte à recherche sans précision du champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "geometry",
            "description": "<p>Une géométrie sous forme d'un WKT ou d'un GeoJSON</p>"
          }
        ],
        "filter": [
          {
            "group": "filter",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ. Peut être</p> <ul> <li>du simple texte (le champs doit contenir ce texte)</li> <li>une RegExp Javascript (le champ doit matcher cette RegExp)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Match fulltext",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfulltext: \"73 av de paris saint-mandé\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Match fields",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfileds: {\n\t\t\tstreet: \"av de paris\",\n\t\t\tcity: \"saint-mandé\"\n\t\t}\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Match fulltext et filter",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfulltext: \"tour eiffel\"\n\t},\n\tfilter: {\n\t\tcity: \"Paris\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongType",
            "description": "<p>Les index demandés ne possèdent pas le/les types demandés</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "ParseFailed",
            "description": "<p>La lecteur du corps de la requête est impossible.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowIndex",
            "description": "<p>Un identifiant d'index est inconnu.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "EmptyMatch",
            "description": "<p>La requête doit avoir au moins un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowField",
            "description": "<p>Un identifiant de champs est inconnu dans un critère de matching, de filtering ou dans le paramètre fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NotQueryable",
            "description": "<p>Le champ n'est pas queryable et ne peut donc pas apparaîre dans un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongNb",
            "description": "<p>Le nombre de réponse demandé est incompatible avec la configuration du serveur.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Erreur interne au serveur</p>"
          }
        ]
      }
    },
    "filename": "src/main/js/controller/user/searchController.js",
    "groupTitle": "Recherche"
  },
  {
    "version": "1.4.0",
    "group": "Recherche",
    "type": "POST",
    "url": "/look4/user/search",
    "title": "Rechercher (POST)",
    "name": "searchPOST",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"fuzzy\"",
              "\"prefix\""
            ],
            "optional": false,
            "field": "method",
            "description": "<p>La ou les méthodes de recherche (autocomplétion ou/et recherche)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "indices",
            "description": "<p>Le ou les index à interroger.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nb",
            "defaultValue": "20",
            "description": "<p>Le nombre de résultat attendus (la valeur par défault peut changer selon la configuration du serveur).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "types",
            "description": "<p>Précise les types des documents recherchés dans la phase de matching.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Précise les champs des documents à retourner (parmis ceux du document, ainsi que <code>_id</code>, <code>_score</code> et <code>_type</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "void",
            "optional": true,
            "field": "nogeom",
            "description": "<p>Ne pas récupérer la géométrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "match",
            "description": "<p>Voir ci-dessous. Doit contenir au moins le fulltext ou un fields</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "filter",
            "description": "<p>Voir ci-dessous.</p>"
          }
        ],
        "match": [
          {
            "group": "match",
            "type": "String",
            "optional": true,
            "field": "fulltext",
            "description": "<p>Texte à recherche sans précision du champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "geometry",
            "description": "<p>Une géométrie sous forme d'un WKT ou d'un GeoJSON</p>"
          }
        ],
        "filter": [
          {
            "group": "filter",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ. Peut être</p> <ul> <li>du simple texte (le champs doit contenir ce texte)</li> <li>une RegExp Javascript (le champ doit matcher cette RegExp)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Match fulltext",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfulltext: \"73 av de paris saint-mandé\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Match fields",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfileds: {\n\t\t\tstreet: \"av de paris\",\n\t\t\tcity: \"saint-mandé\"\n\t\t}\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Match fulltext et filter",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfulltext: \"tour eiffel\"\n\t},\n\tfilter: {\n\t\tcity: \"Paris\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongType",
            "description": "<p>Les index demandés ne possèdent pas le/les types demandés</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "ParseFailed",
            "description": "<p>La lecteur du corps de la requête est impossible.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowIndex",
            "description": "<p>Un identifiant d'index est inconnu.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "EmptyMatch",
            "description": "<p>La requête doit avoir au moins un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowField",
            "description": "<p>Un identifiant de champs est inconnu dans un critère de matching, de filtering ou dans le paramètre fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NotQueryable",
            "description": "<p>Le champ n'est pas queryable et ne peut donc pas apparaîre dans un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongNb",
            "description": "<p>Le nombre de réponse demandé est incompatible avec la configuration du serveur.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Erreur interne au serveur</p>"
          }
        ]
      }
    },
    "filename": "src/main/js/controller/user/searchController.js",
    "groupTitle": "Recherche"
  },
  {
    "version": "1.1.0",
    "group": "Recherche",
    "type": "POST",
    "url": "/look4/user/search",
    "title": "Rechercher (POST)",
    "name": "searchPOST",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"fuzzy\"",
              "\"prefix\""
            ],
            "optional": false,
            "field": "method",
            "description": "<p>La méthode de recherche (autocomplétion ou recherche)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "indices",
            "description": "<p>Le ou les index à interroger.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nb",
            "defaultValue": "20",
            "description": "<p>Le nombre de résultat attendus (la valeur par défault peut changer selon la configuration du serveur).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "types",
            "description": "<p>Précise les types des documents recherchés dans la phase de matching.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Précise les champs des documents à retourner (parmis ceux du document, ainsi que <code>_id</code>, <code>_score</code> et <code>_type</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "void",
            "optional": true,
            "field": "nogeom",
            "description": "<p>Ne pas récupérer la géométrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "match",
            "description": "<p>Voir ci-dessous. Doit contenir au moins le fulltext ou un fields</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "filter",
            "description": "<p>Voir ci-dessous.</p>"
          }
        ],
        "match": [
          {
            "group": "match",
            "type": "String",
            "optional": true,
            "field": "fulltext",
            "description": "<p>Texte à recherche sans précision du champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ.</p>"
          }
        ],
        "filter": [
          {
            "group": "filter",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ. Peut être</p> <ul> <li>du simple texte (le champs doit contenir ce texte)</li> <li>une RegExp Javascript (le champ doit matcher cette RegExp)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Match fulltext",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfulltext: \"73 av de paris saint-mandé\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Match fields",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfileds: {\n\t\t\tstreet: \"av de paris\",\n\t\t\tcity: \"saint-mandé\"\n\t\t}\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Match fulltext et filter",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfulltext: \"tour eiffel\"\n\t},\n\tfilter: {\n\t\tcity: \"Paris\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongType",
            "description": "<p>Les index demandés ne possèdent pas le/les types demandés</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "ParseFailed",
            "description": "<p>La lecteur du corps de la requête est impossible.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowIndex",
            "description": "<p>Un identifiant d'index est inconnu.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "EmptyMatch",
            "description": "<p>La requête doit avoir au moins un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowField",
            "description": "<p>Un identifiant de champs est inconnu dans un critère de matching, de filtering ou dans le paramètre fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NotQueryable",
            "description": "<p>Le champ n'est pas queryable et ne peut donc pas apparaîre dans un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongNb",
            "description": "<p>Le nombre de réponse demandé est incompatible avec la configuration du serveur.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Erreur interne au serveur</p>"
          }
        ]
      }
    },
    "filename": "src/main/js/controller/user/searchController.js",
    "groupTitle": "Recherche"
  },
  {
    "version": "1.0.0",
    "group": "Recherche",
    "type": "POST",
    "url": "/look4/user/search",
    "title": "Rechercher (POST)",
    "name": "searchPOST",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"fuzzy\"",
              "\"prefix\""
            ],
            "optional": false,
            "field": "method",
            "description": "<p>La méthode de recherche (autocomplétion ou recherche)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "indices",
            "description": "<p>Le ou les index à interroger.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nb",
            "defaultValue": "20",
            "description": "<p>Le nombre de résultat attendus (la valeur par défault peut changer selon la configuration du serveur).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Précise les champs des documents à retourner (parmis ceux du document, ainsi que <code>_id</code>, <code>_score</code> et <code>_type</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "void",
            "optional": true,
            "field": "nogeom",
            "description": "<p>Ne pas récupérer la géométrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "match",
            "description": "<p>Voir ci-dessous. Doit contenir au moins le fulltext ou un fields</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "filter",
            "description": "<p>Voir ci-dessous.</p>"
          }
        ],
        "match": [
          {
            "group": "match",
            "type": "String",
            "optional": true,
            "field": "fulltext",
            "description": "<p>Texte à recherche sans précision du champ.</p>"
          },
          {
            "group": "match",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ.</p>"
          }
        ],
        "filter": [
          {
            "group": "filter",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Texte à recherche dans un champ. Peut être</p> <ul> <li>du simple texte (le champs doit contenir ce texte)</li> <li>une RegExp Javascript (le champ doit matcher cette RegExp)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Match fulltext",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfulltext: \"73 av de paris saint-mandé\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Match fields",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfileds: {\n\t\t\tstreet: \"av de paris\",\n\t\t\tcity: \"saint-mandé\"\n\t\t}\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Match fulltext et filter",
          "content": "POST /look4/user/search\n{\n\tindices: \"localisant\",\n\tmethod: \"fuzzy\",\n\tmatch: {\n\t\tfulltext: \"tour eiffel\"\n\t},\n\tfilter: {\n\t\tcity: \"Paris\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/js/controller/user/searchController.js",
    "groupTitle": "Recherche",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "ParseFailed",
            "description": "<p>La lecteur du corps de la requête est impossible.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowIndex",
            "description": "<p>Un identifiant d'index est inconnu.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "EmptyMatch",
            "description": "<p>La requête doit avoir au moins un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "UnknowField",
            "description": "<p>Un identifiant de champs est inconnu dans un critère de matching, de filtering ou dans le paramètre fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "NotQueryable",
            "description": "<p>Le champ n'est pas queryable et ne peut donc pas apparaîre dans un critère de matching.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "WrongNb",
            "description": "<p>Le nombre de réponse demandé est incompatible avec la configuration du serveur.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Erreur interne au serveur</p>"
          }
        ]
      }
    }
  }
] });
