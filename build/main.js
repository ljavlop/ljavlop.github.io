webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arcgis_arcgis__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldsProvider = (function () {
    function FieldsProvider(arcgisProvider) {
        var _this = this;
        this.arcgisProvider = arcgisProvider;
        this.featureSetPromise = new Promise(function (resolve, reject) {
            _this.arcgisProvider.loadModules(['esri/tasks/FeatureSet']).then(function (_a) {
                var FeatureSet = _a[0];
                _this.featureSet = new FeatureSet(FIELDS);
                resolve(_this.featureSet);
            });
        });
    }
    FieldsProvider.prototype.getFields = function () {
        return this.featureSetPromise.then(function (featureSet) {
            return featureSet.features;
        });
    };
    FieldsProvider.prototype.getFieldByFieldId = function (fieldId) {
        return this.featureSetPromise.then(function (featureSet) {
            var graphic = featureSet.features.find(function (g) { return g.attributes["FIELDID"] === fieldId; });
            return graphic;
        });
    };
    FieldsProvider.prototype.getFieldLayerConstructorDetails = function () {
        return {
            featureCollection: {
                featureSet: this.featureSet,
                layerDefinition: FIELD_LAYER_DEFINITION
            },
            options: FIELD_LAYER_OPTIONS
        };
    };
    FieldsProvider.prototype.getSelectionLayerConstructorDetails = function () {
        return {
            featureCollection: {
                featureSet: null,
                layerDefinition: SELECTION_LAYER_DEFINITION
            },
            options: SELECTION_LAYER_OPTIONS
        };
    };
    FieldsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__arcgis_arcgis__["a" /* ArcgisProvider */]])
    ], FieldsProvider);
    return FieldsProvider;
}());

var FIELD_LAYER_OPTIONS = {
    id: "Fields"
};
var SELECTION_LAYER_OPTIONS = {
    id: "Selection"
};
var FIELD_LAYER_DEFINITION = {
    "geometryType": "esriGeometryPolygon",
    "minScale": 50000,
    "maxScale": 0,
    "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
    },
    "drawingInfo": {
        "renderer": {
            "type": "simple",
            "symbol": {
                "type": "esriSFS",
                "style": "esriSFSSolid",
                //"color": [200, 0, 200, 35],
                "color": [255, 128, 0, 51],
                "outline": {
                    "type": "esriSLS",
                    "style": "esriSLSSolid",
                    //"color": [200, 0, 200, 255],
                    "color": [255, 128, 0, 255],
                    "width": 2
                }
            },
            "label": "",
            "description": ""
        },
        "transparency": 0,
        "labelingInfo": [
            {
                "labelPlacement": "esriServerPolygonPlacementAlwaysHorizontal",
                "where": null,
                "labelExpression": "[FIELDID]",
                "useCodedValues": true,
                "symbol": {
                    "type": "esriTS",
                    "color": [255, 255, 255, 255],
                    "backgroundColor": null,
                    "borderLineColor": null,
                    "borderLineSize": null,
                    "verticalAlignment": "bottom",
                    "horizontalAlignment": "center",
                    "rightToLeft": false,
                    "angle": 0,
                    "xoffset": 0,
                    "yoffset": 0,
                    "kerning": true,
                    "haloColor": [0, 0, 0, 255],
                    "haloSize": 1,
                    "font": {
                        "family": "Arial",
                        "size": 9,
                        "style": "normal",
                        "weight": "bold",
                        "decoration": "none"
                    }
                },
                "minScale": 10000,
                "maxScale": 0
            }
        ]
    },
    "hasM": false,
    "hasZ": false,
    "allowGeometryUpdates": true,
    "hasAttachments": false,
    "supportsApplyEditsWithGlobalIds": false,
    "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
    "objectIdField": "OBJECTID",
    "globalIdField": "",
    "displayField": "FIELDID",
    "fields": [
        {
            "name": "OBJECTID",
            "type": "esriFieldTypeOID",
            "alias": "OBJECTID",
            "domain": null,
            "editable": false,
            "nullable": false
        },
        {
            "name": "FIELDID",
            "type": "esriFieldTypeString",
            "alias": "FIELDID",
            "domain": null,
            "editable": true,
            "nullable": true,
            "length": 255
        },
        {
            "name": "LANDTYPE",
            "type": "esriFieldTypeString",
            "alias": "LANDTYPE",
            "domain": {
                "type": "codedValue",
                "name": "landtype",
                "codedValues": [
                    {
                        "name": "SDA",
                        "code": "SDA"
                    },
                    {
                        "name": "DA",
                        "code": "DA"
                    },
                    {
                        "name": "LL",
                        "code": "LL"
                    },
                    {
                        "name": "UNK",
                        "code": "UNK"
                    }
                ]
            },
            "editable": true,
            "nullable": true,
            "length": 3
        },
        {
            "name": "FNC_CALC_AREA_HA",
            "type": "esriFieldTypeDouble",
            "alias": "FNC_CALC_AREA_HA",
            "domain": null,
            "editable": true,
            "nullable": true
        },
        {
            "name": "FNC_MEA_AREA_HA",
            "type": "esriFieldTypeDouble",
            "alias": "FNC_MEA_AREA_HA",
            "domain": null,
            "editable": true,
            "nullable": true
        },
        {
            "name": "FIELD_CLASSIFICATION",
            "type": "esriFieldTypeString",
            "alias": "FIELD_CLASSIFICATION",
            "domain": null,
            "editable": true,
            "nullable": true,
            "length": 10
        },
        {
            "name": "TOWNLAND",
            "type": "esriFieldTypeString",
            "alias": "TOWNLAND",
            "domain": null,
            "editable": true,
            "nullable": true,
            "length": 90
        },
    ],
};
var SELECTION_LAYER_DEFINITION = {
    "geometryType": "esriGeometryPolygon",
    "minScale": 50000,
    "maxScale": 0,
    "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
    },
    "drawingInfo": {
        "renderer": {
            "type": "simple",
            "symbol": {
                "type": "esriSFS",
                "style": "esriSFSSolid",
                "color": [0, 255, 255, 35],
                "outline": {
                    "type": "esriSLS",
                    "style": "esriSLSSolid",
                    "color": [0, 255, 255, 255],
                    "width": 2
                }
            },
            "label": "",
            "description": ""
        },
        "transparency": 0,
        "labelingInfo": [
            {
                "labelPlacement": "esriServerPolygonPlacementAlwaysHorizontal",
                "where": null,
                "labelExpression": "[FIELDID]",
                "useCodedValues": true,
                "symbol": {
                    "type": "esriTS",
                    "color": [255, 255, 255, 255],
                    "backgroundColor": null,
                    "borderLineColor": null,
                    "borderLineSize": null,
                    "verticalAlignment": "bottom",
                    "horizontalAlignment": "center",
                    "rightToLeft": false,
                    "angle": 0,
                    "xoffset": 0,
                    "yoffset": 0,
                    "kerning": true,
                    "haloColor": [0, 0, 0, 255],
                    "haloSize": 1,
                    "font": {
                        "family": "Arial",
                        "size": 9,
                        "style": "normal",
                        "weight": "bold",
                        "decoration": "none"
                    }
                },
                "minScale": 10000,
                "maxScale": 0
            }
        ]
    },
    "hasM": false,
    "hasZ": false,
    "allowGeometryUpdates": true,
    "hasAttachments": false,
    "supportsApplyEditsWithGlobalIds": false,
    "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
    "objectIdField": "OBJECTID",
    "globalIdField": "",
    "displayField": "FIELDID",
    "fields": [
        {
            "name": "OBJECTID",
            "type": "esriFieldTypeOID",
            "alias": "OBJECTID",
            "domain": null,
            "editable": false,
            "nullable": false
        },
        {
            "name": "FIELDID",
            "type": "esriFieldTypeString",
            "alias": "FIELDID",
            "domain": null,
            "editable": true,
            "nullable": true,
            "length": 255
        }
    ],
};
var FIELDS = {
    "displayFieldName": "OVERRIDENAME",
    "fieldAliases": {
        "OBJECTID": "OBJECTID",
        "FIELDID": "FIELDID",
        "LANDTYPE": "LANDTYPE",
        "FNC_CALC_AREA_HA": "FNC_CALC_AREA_HA",
        "FNC_MEA_AREA_HA": "FNC_MEA_AREA_HA",
        "FIELD_CLASSIFICATION": "FIELD_CLASSIFICATION",
        "TOWNLAND": "TOWNLAND"
    },
    "geometryType": "esriGeometryPolygon",
    "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
    },
    "fields": [
        {
            "name": "OBJECTID",
            "type": "esriFieldTypeOID",
            "alias": "OBJECTID"
        },
        {
            "name": "FIELDID",
            "type": "esriFieldTypeString",
            "alias": "FIELDID",
            "length": 255
        },
        {
            "name": "LANDTYPE",
            "type": "esriFieldTypeString",
            "alias": "LANDTYPE",
            "length": 3
        },
        {
            "name": "FNC_CALC_AREA_HA",
            "type": "esriFieldTypeDouble",
            "alias": "FNC_CALC_AREA_HA"
        },
        {
            "name": "FNC_MEA_AREA_HA",
            "type": "esriFieldTypeDouble",
            "alias": "FNC_MEA_AREA_HA"
        },
        {
            "name": "FIELD_CLASSIFICATION",
            "type": "esriFieldTypeString",
            "alias": "FIELD_CLASSIFICATION",
            "length": 10
        },
        {
            "name": "TOWNLAND",
            "type": "esriFieldTypeString",
            "alias": "TOWNLAND",
            "length": 90
        }
    ],
    "features": [
        {
            "attributes": {
                "OBJECTID": 8,
                "FIELDID": "3/033/533/2/A",
                "LANDTYPE": "SDA",
                "FNC_CALC_AREA_HA": 1.476,
                "FNC_MEA_AREA_HA": 1.44,
                "FIELD_CLASSIFICATION": "PC",
                "TOWNLAND": "Listullycurran"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -684145.06190000102,
                            7342179.9818999991
                        ],
                        [
                            -684149.59690000117,
                            7342197.1696999967
                        ],
                        [
                            -684170.38100000098,
                            7342283.0172000006
                        ],
                        [
                            -684180.35909999907,
                            7342321.3880999982
                        ],
                        [
                            -684183.19159999862,
                            7342334.7722999975
                        ],
                        [
                            -684184.90089999884,
                            7342342.8532000035
                        ],
                        [
                            -684186.61789999902,
                            7342350.9692000002
                        ],
                        [
                            -684177.00659999996,
                            7342352.0393999964
                        ],
                        [
                            -684163.34549999982,
                            7342354.9848000035
                        ],
                        [
                            -684153.91660000011,
                            7342357.2304000035
                        ],
                        [
                            -684129.16149999946,
                            7342363.5669
                        ],
                        [
                            -684105.72929999977,
                            7342369.7523000017
                        ],
                        [
                            -684076.33909999952,
                            7342377.7170000002
                        ],
                        [
                            -684035.36329999939,
                            7342388.5583999977
                        ],
                        [
                            -684011.88850000128,
                            7342394.0502000004
                        ],
                        [
                            -684002.7938000001,
                            7342392.6450000033
                        ],
                        [
                            -683993.68609999865,
                            7342357.2203999981
                        ],
                        [
                            -683982.29520000145,
                            7342360.1563000008
                        ],
                        [
                            -683978.4822999984,
                            7342348.0903000012
                        ],
                        [
                            -683974.59699999914,
                            7342330.0393000022
                        ],
                        [
                            -683977.25109999999,
                            7342326.9965000004
                        ],
                        [
                            -683977.49549999833,
                            7342327.1369000003
                        ],
                        [
                            -683978.4140000008,
                            7342326.2690000013
                        ],
                        [
                            -683983.94099999964,
                            7342319.3266000003
                        ],
                        [
                            -683981.5373999998,
                            7342310.0775000006
                        ],
                        [
                            -683972.51480000094,
                            7342273.5458000004
                        ],
                        [
                            -683963.55220000073,
                            7342239.3395999968
                        ],
                        [
                            -683949.09760000184,
                            7342180.3194999993
                        ],
                        [
                            -683945.83920000121,
                            7342168.1590000018
                        ],
                        [
                            -683957.48449999839,
                            7342165.7673999965
                        ],
                        [
                            -684000.8489000015,
                            7342156.1692999974
                        ],
                        [
                            -684032.14869999886,
                            7342149.1359999999
                        ],
                        [
                            -684108.93079999834,
                            7342131.4799999967
                        ],
                        [
                            -684131.56960000098,
                            7342126.4650999978
                        ],
                        [
                            -684145.06190000102,
                            7342179.9818999991
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 4,
                "FIELDID": "2/022/122/3/C",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 0.1480,
                "FNC_MEA_AREA_HA": 0.12,
                "FIELD_CLASSIFICATION": "PC",
                "TOWNLAND": "Crossnamuckley"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683840.33790000156,
                            7342354.735799998
                        ],
                        [
                            -683835.65989999846,
                            7342364.8716000021
                        ],
                        [
                            -683836.9673999995,
                            7342368.9085000008
                        ],
                        [
                            -683829.43420000002,
                            7342370.8614000008
                        ],
                        [
                            -683832.30680000037,
                            7342382.9060000032
                        ],
                        [
                            -683828.24650000036,
                            7342384.3911999986
                        ],
                        [
                            -683803.37350000069,
                            7342385.0724999979
                        ],
                        [
                            -683801.8478000015,
                            7342378.0033999979
                        ],
                        [
                            -683799.53269999847,
                            7342366.7303000018
                        ],
                        [
                            -683796.82519999892,
                            7342352.8430000022
                        ],
                        [
                            -683790.97709999979,
                            7342320.7801000029
                        ],
                        [
                            -683781.67419999838,
                            7342274.8781000003
                        ],
                        [
                            -683821.04529999942,
                            7342267.9384000003
                        ],
                        [
                            -683821.08359999955,
                            7342272.4545999989
                        ],
                        [
                            -683840.33790000156,
                            7342354.735799998
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 5,
                "FIELDID": "2/022/122/11",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 0.9450,
                "FNC_MEA_AREA_HA": 0.91,
                "FIELD_CLASSIFICATION": "PC",
                "TOWNLAND": "Crossnamuckley"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683949.09760000184,
                            7342180.3194999993
                        ],
                        [
                            -683963.55220000073,
                            7342239.3395999968
                        ],
                        [
                            -683972.51480000094,
                            7342273.5458000004
                        ],
                        [
                            -683981.5373999998,
                            7342310.0775000006
                        ],
                        [
                            -683983.94099999964,
                            7342319.3266000003
                        ],
                        [
                            -683977.2509999983,
                            7342326.9981999993
                        ],
                        [
                            -683974.59699999914,
                            7342330.0393000022
                        ],
                        [
                            -683952.57899999991,
                            7342336.0983000025
                        ],
                        [
                            -683897.48290000111,
                            7342350.3171000034
                        ],
                        [
                            -683890.0159999989,
                            7342352.0631999969
                        ],
                        [
                            -683868.371199999,
                            7342357.1283000037
                        ],
                        [
                            -683865.59149999917,
                            7342348.5231000036
                        ],
                        [
                            -683844.34439999983,
                            7342353.2509000003
                        ],
                        [
                            -683840.33790000156,
                            7342354.735799998
                        ],
                        [
                            -683821.08359999955,
                            7342272.4545999989
                        ],
                        [
                            -683821.04529999942,
                            7342267.9384000003
                        ],
                        [
                            -683781.67419999838,
                            7342274.8781000003
                        ],
                        [
                            -683781.37009999901,
                            7342273.3847000003
                        ],
                        [
                            -683768.01579999924,
                            7342208.055399999
                        ],
                        [
                            -683764.81289999932,
                            7342195.5797000006
                        ],
                        [
                            -683810.16730000079,
                            7342184.1832000017
                        ],
                        [
                            -683834.0476000011,
                            7342177.9064000025
                        ],
                        [
                            -683855.15610000119,
                            7342172.6933000013
                        ],
                        [
                            -683858.04850000143,
                            7342172.0571999997
                        ],
                        [
                            -683886.59349999949,
                            7342174.9605000019
                        ],
                        [
                            -683919.90370000154,
                            7342173.4092999995
                        ],
                        [
                            -683945.83920000121,
                            7342168.1590000018
                        ],
                        [
                            -683949.09760000184,
                            7342180.3194999993
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 1,
                "FIELDID": "1/011/711/6/A",
                "LANDTYPE": "DA",
                "FNC_CALC_AREA_HA": 0.8540,
                "FNC_MEA_AREA_HA": 0.83,
                "FIELD_CLASSIFICATION": "AR",
                "TOWNLAND": "Drummuck"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683781.67419999838,
                            7342274.8781000003
                        ],
                        [
                            -683790.97709999979,
                            7342320.7801000029
                        ],
                        [
                            -683796.82519999892,
                            7342352.8430000022
                        ],
                        [
                            -683799.53269999847,
                            7342366.7303000018
                        ],
                        [
                            -683801.8478000015,
                            7342378.0033999979
                        ],
                        [
                            -683802.5549999997,
                            7342381.4416999966
                        ],
                        [
                            -683804.57169999927,
                            7342390.6145000011
                        ],
                        [
                            -683804.57479999959,
                            7342390.6284999996
                        ],
                        [
                            -683805.53180000186,
                            7342394.9918000028
                        ],
                        [
                            -683809.09849999845,
                            7342409.6603000015
                        ],
                        [
                            -683816.42179999873,
                            7342436.4821999967
                        ],
                        [
                            -683816.84450000152,
                            7342438.2797999978
                        ],
                        [
                            -683814.99819999933,
                            7342438.7316000015
                        ],
                        [
                            -683809.02120000124,
                            7342440.3728
                        ],
                        [
                            -683712.93510000035,
                            7342459.807099998
                        ],
                        [
                            -683709.79320000112,
                            7342436.3800999969
                        ],
                        [
                            -683702.0271999985,
                            7342391.431400001
                        ],
                        [
                            -683698.12249999866,
                            7342371.2524000034
                        ],
                        [
                            -683694.89400000125,
                            7342355.4188999981
                        ],
                        [
                            -683689.36829999834,
                            7342329.939000003
                        ],
                        [
                            -683685.23849999905,
                            7342317.0800999999
                        ],
                        [
                            -683675.52270000055,
                            7342288.6207000017
                        ],
                        [
                            -683665.3702000007,
                            7342257.0574000031
                        ],
                        [
                            -683661.56689999998,
                            7342245.8317999989
                        ],
                        [
                            -683654.47929999977,
                            7342223.2396000028
                        ],
                        [
                            -683709.75710000098,
                            7342209.2223000005
                        ],
                        [
                            -683764.81289999932,
                            7342195.5797000006
                        ],
                        [
                            -683768.01579999924,
                            7342208.055399999
                        ],
                        [
                            -683781.37009999901,
                            7342273.3847000003
                        ],
                        [
                            -683781.67419999838,
                            7342274.8781000003
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 11,
                "FIELDID": "3/033/533/4/E",
                "LANDTYPE": "DA",
                "FNC_CALC_AREA_HA": 1.5430,
                "FNC_MEA_AREA_HA": 1.52,
                "FIELD_CLASSIFICATION": "PGS",
                "TOWNLAND": "Ballymarlagh"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -684079.50059999898,
                            7341925.3254000023
                        ],
                        [
                            -684090.35139999911,
                            7341965.7648999989
                        ],
                        [
                            -684117.31289999932,
                            7342069.5715999976
                        ],
                        [
                            -684129.88769999892,
                            7342119.7138999999
                        ],
                        [
                            -684131.56960000098,
                            7342126.4650999978
                        ],
                        [
                            -684108.93079999834,
                            7342131.4799999967
                        ],
                        [
                            -684032.14869999886,
                            7342149.1359999999
                        ],
                        [
                            -684000.8489000015,
                            7342156.1692999974
                        ],
                        [
                            -683957.48449999839,
                            7342165.7673999965
                        ],
                        [
                            -683945.83920000121,
                            7342168.1590000018
                        ],
                        [
                            -683942.12849999964,
                            7342153.9428000003
                        ],
                        [
                            -683940.2360999994,
                            7342146.6938000023
                        ],
                        [
                            -683924.22949999943,
                            7342084.3025000021
                        ],
                        [
                            -683911.29170000181,
                            7342034.8131000027
                        ],
                        [
                            -683882.57259999961,
                            7341921.2040999979
                        ],
                        [
                            -683897.89959999919,
                            7341919.4776000008
                        ],
                        [
                            -683956.06720000133,
                            7341913.5415000021
                        ],
                        [
                            -684023.41120000184,
                            7341905.3703999966
                        ],
                        [
                            -684073.52320000157,
                            7341900.7446999997
                        ],
                        [
                            -684079.50059999898,
                            7341925.3254000023
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 6,
                "FIELDID": "2/022/122/44",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 0.8180,
                "FNC_MEA_AREA_HA": 0.79,
                "FIELD_CLASSIFICATION": "NL",
                "TOWNLAND": "Crossnamuckley"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683911.29170000181,
                            7342034.8131000027
                        ],
                        [
                            -683924.22949999943,
                            7342084.3025000021
                        ],
                        [
                            -683940.2360999994,
                            7342146.6938000023
                        ],
                        [
                            -683942.12849999964,
                            7342153.9428000003
                        ],
                        [
                            -683945.83920000121,
                            7342168.1590000018
                        ],
                        [
                            -683919.90370000154,
                            7342173.4092999995
                        ],
                        [
                            -683886.59349999949,
                            7342174.9605000019
                        ],
                        [
                            -683858.04850000143,
                            7342172.0571999997
                        ],
                        [
                            -683855.15610000119,
                            7342172.6933000013
                        ],
                        [
                            -683833.95179999992,
                            7342107.123300001
                        ],
                        [
                            -683817.88969999924,
                            7342058.7906000018
                        ],
                        [
                            -683775.95270000026,
                            7341934.2775999978
                        ],
                        [
                            -683800.32200000063,
                            7341931.1325000003
                        ],
                        [
                            -683828.61459999904,
                            7341928.0672999993
                        ],
                        [
                            -683882.57259999961,
                            7341921.2040999979
                        ],
                        [
                            -683911.29170000181,
                            7342034.8131000027
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 7,
                "FIELDID": "2/022/122/5/D",
                "LANDTYPE": "SDA",
                "FNC_CALC_AREA_HA": 1.7940,
                "FNC_MEA_AREA_HA": 1.77,
                "FIELD_CLASSIFICATION": "PG",
                "TOWNLAND": "Glenhugh"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683817.88969999924,
                            7342058.7906000018
                        ],
                        [
                            -683833.95179999992,
                            7342107.123300001
                        ],
                        [
                            -683855.15610000119,
                            7342172.6933000013
                        ],
                        [
                            -683834.0476000011,
                            7342177.9064000025
                        ],
                        [
                            -683810.16730000079,
                            7342184.1832000017
                        ],
                        [
                            -683764.81289999932,
                            7342195.5797000006
                        ],
                        [
                            -683709.75710000098,
                            7342209.2223000005
                        ],
                        [
                            -683654.47929999977,
                            7342223.2396000028
                        ],
                        [
                            -683651.15289999917,
                            7342212.2215000018
                        ],
                        [
                            -683634.75169999897,
                            7342161.3324000016
                        ],
                        [
                            -683623.75490000099,
                            7342126.0877000019
                        ],
                        [
                            -683570.22459999844,
                            7341957.3938999996
                        ],
                        [
                            -683602.08130000159,
                            7341954.2783000022
                        ],
                        [
                            -683662.78869999945,
                            7341948.4554999992
                        ],
                        [
                            -683698.75919999927,
                            7341945.2959000021
                        ],
                        [
                            -683742.92320000008,
                            7341938.4984000027
                        ],
                        [
                            -683775.95270000026,
                            7341934.2775999978
                        ],
                        [
                            -683817.88969999924,
                            7342058.7906000018
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 3,
                "FIELDID": "1/011/711/23",
                "LANDTYPE": "DA",
                "FNC_CALC_AREA_HA": 1.3960,
                "FNC_MEA_AREA_HA": 1.36,
                "FIELD_CLASSIFICATION": "PGS",
                "TOWNLAND": "Drummuck"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683490.83999999985,
                            7341971.181599997
                        ],
                        [
                            -683507.76929999888,
                            7341967.6792000011
                        ],
                        [
                            -683537.55649999902,
                            7341960.3467999995
                        ],
                        [
                            -683553.49210000038,
                            7341958.4527999982
                        ],
                        [
                            -683558.26289999858,
                            7341960.0094999969
                        ],
                        [
                            -683560.4571999982,
                            7341960.3061000034
                        ],
                        [
                            -683564.00769999996,
                            7341957.8840000033
                        ],
                        [
                            -683570.22459999844,
                            7341957.3938999996
                        ],
                        [
                            -683623.75490000099,
                            7342126.0877000019
                        ],
                        [
                            -683601.46200000122,
                            7342137.6828999966
                        ],
                        [
                            -683562.74439999834,
                            7342158.4798000008
                        ],
                        [
                            -683541.55829999968,
                            7342169.4974000007
                        ],
                        [
                            -683517.44220000133,
                            7342182.757100001
                        ],
                        [
                            -683482.87260000035,
                            7342201.0362000018
                        ],
                        [
                            -683452.02079999819,
                            7342218.0471000001
                        ],
                        [
                            -683446.81060000136,
                            7342205.1018999964
                        ],
                        [
                            -683445.29500000179,
                            7342201.3363000005
                        ],
                        [
                            -683443.06839999929,
                            7342195.9532999992
                        ],
                        [
                            -683441.74929999933,
                            7342192.757600002
                        ],
                        [
                            -683440.82499999925,
                            7342190.5182000026
                        ],
                        [
                            -683429.2109999992,
                            7342162.4213000014
                        ],
                        [
                            -683424.37550000101,
                            7342150.2775999978
                        ],
                        [
                            -683417.1763000004,
                            7342132.7749999985
                        ],
                        [
                            -683408.92749999836,
                            7342109.8963000029
                        ],
                        [
                            -683396.89200000092,
                            7342079.3040999994
                        ],
                        [
                            -683386.15100000054,
                            7342052.7119000033
                        ],
                        [
                            -683377.88720000163,
                            7342031.2556999996
                        ],
                        [
                            -683368.30730000138,
                            7342004.9223999977
                        ],
                        [
                            -683362.58810000122,
                            7341990.5813999996
                        ],
                        [
                            -683410.81810000166,
                            7341983.0800999999
                        ],
                        [
                            -683450.31170000136,
                            7341977.6972000003
                        ],
                        [
                            -683490.83999999985,
                            7341971.181599997
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 2,
                "FIELDID": "1/011/711/2",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 1.9890,
                "FNC_MEA_AREA_HA": 1.95,
                "FIELD_CLASSIFICATION": "PC",
                "TOWNLAND": "Drummuck"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683634.75169999897,
                            7342161.3324000016
                        ],
                        [
                            -683651.15289999917,
                            7342212.2215000018
                        ],
                        [
                            -683654.47929999977,
                            7342223.2396000028
                        ],
                        [
                            -683661.56689999998,
                            7342245.8317999989
                        ],
                        [
                            -683665.3702000007,
                            7342257.0574000031
                        ],
                        [
                            -683675.52270000055,
                            7342288.6207000017
                        ],
                        [
                            -683685.23849999905,
                            7342317.0800999999
                        ],
                        [
                            -683689.36829999834,
                            7342329.939000003
                        ],
                        [
                            -683694.89400000125,
                            7342355.4188999981
                        ],
                        [
                            -683698.12249999866,
                            7342371.2524000034
                        ],
                        [
                            -683702.0271999985,
                            7342391.431400001
                        ],
                        [
                            -683709.79320000112,
                            7342436.3800999969
                        ],
                        [
                            -683712.93510000035,
                            7342459.807099998
                        ],
                        [
                            -683681.28119999915,
                            7342466.9813999981
                        ],
                        [
                            -683664.42399999872,
                            7342470.6758999974
                        ],
                        [
                            -683623.76990000159,
                            7342479.9481000006
                        ],
                        [
                            -683605.98919999972,
                            7342483.8457000032
                        ],
                        [
                            -683604.84939999878,
                            7342486.9096999988
                        ],
                        [
                            -683599.19489999861,
                            7342488.1001999974
                        ],
                        [
                            -683595.82719999924,
                            7342486.1058999971
                        ],
                        [
                            -683573.66209999844,
                            7342490.808600001
                        ],
                        [
                            -683570.27089999989,
                            7342492.6454999968
                        ],
                        [
                            -683553.61290000007,
                            7342496.2876999974
                        ],
                        [
                            -683542.46480000019,
                            7342498.4919999987
                        ],
                        [
                            -683541.23409999907,
                            7342492.9368000031
                        ],
                        [
                            -683536.67029999942,
                            7342487.3554999977
                        ],
                        [
                            -683533.72069999948,
                            7342476.1366000026
                        ],
                        [
                            -683528.21299999952,
                            7342455.9477000013
                        ],
                        [
                            -683519.87029999867,
                            7342426.3118999973
                        ],
                        [
                            -683510.90509999916,
                            7342396.7204999998
                        ],
                        [
                            -683505.13089999929,
                            7342376.0516000018
                        ],
                        [
                            -683497.5262000002,
                            7342352.5579999983
                        ],
                        [
                            -683491.65569999814,
                            7342332.2519000024
                        ],
                        [
                            -683476.67760000005,
                            7342282.8937000036
                        ],
                        [
                            -683470.51040000096,
                            7342266.1209999993
                        ],
                        [
                            -683458.66730000079,
                            7342236.1752000004
                        ],
                        [
                            -683452.02079999819,
                            7342218.0471000001
                        ],
                        [
                            -683482.87260000035,
                            7342201.0362000018
                        ],
                        [
                            -683517.44220000133,
                            7342182.757100001
                        ],
                        [
                            -683541.55829999968,
                            7342169.4974000007
                        ],
                        [
                            -683562.74439999834,
                            7342158.4798000008
                        ],
                        [
                            -683601.46200000122,
                            7342137.6828999966
                        ],
                        [
                            -683623.75490000099,
                            7342126.0877000019
                        ],
                        [
                            -683634.75169999897,
                            7342161.3324000016
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 10,
                "FIELDID": "3/033/533/9",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 2.2589,
                "FNC_MEA_AREA_HA": 2.23,
                "FIELD_CLASSIFICATION": "AR",
                "TOWNLAND": "Ballymarlagh"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -684211.97170000151,
                            7341736.6140000001
                        ],
                        [
                            -684219.48020000011,
                            7341759.8659000024
                        ],
                        [
                            -684230.12889999896,
                            7341798.6503000036
                        ],
                        [
                            -684252.61800000072,
                            7341878.5434999987
                        ],
                        [
                            -684263.05189999938,
                            7341916.8652999997
                        ],
                        [
                            -684288.19709999859,
                            7341986.695600003
                        ],
                        [
                            -684296.28330000117,
                            7342008.5251000002
                        ],
                        [
                            -684307.48380000144,
                            7342040.1127000004
                        ],
                        [
                            -684312.0960999988,
                            7342054.4463
                        ],
                        [
                            -684321.85370000079,
                            7342080.6110000014
                        ],
                        [
                            -684332.06469999999,
                            7342108.6018999964
                        ],
                        [
                            -684310.72819999978,
                            7342109.5890000015
                        ],
                        [
                            -684295.5036999993,
                            7342110.5764999986
                        ],
                        [
                            -684257.70679999888,
                            7342112.1042999998
                        ],
                        [
                            -684217.37209999934,
                            7342114.0496999994
                        ],
                        [
                            -684175.15839999914,
                            7342116.5658999979
                        ],
                        [
                            -684129.88769999892,
                            7342119.7138999999
                        ],
                        [
                            -684117.31289999932,
                            7342069.5715999976
                        ],
                        [
                            -684090.35139999911,
                            7341965.7648999989
                        ],
                        [
                            -684079.50059999898,
                            7341925.3254000023
                        ],
                        [
                            -684073.52320000157,
                            7341900.7446999997
                        ],
                        [
                            -684065.746199999,
                            7341875.9112000018
                        ],
                        [
                            -684046.67139999941,
                            7341817.7088000029
                        ],
                        [
                            -684040.52730000019,
                            7341799.8338000029
                        ],
                        [
                            -684037.12029999867,
                            7341789.0300000012
                        ],
                        [
                            -684034.58379999921,
                            7341781.6614999995
                        ],
                        [
                            -684096.54129999876,
                            7341765.9032000005
                        ],
                        [
                            -684188.35909999907,
                            7341742.2779000029
                        ],
                        [
                            -684211.97170000151,
                            7341736.6140000001
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 9,
                "FIELDID": "3/033/533/26",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 1.6680,
                "FNC_MEA_AREA_HA": 1.63,
                "FIELD_CLASSIFICATION": "AR",
                "TOWNLAND": "Listullycurran"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -684340.18989999965,
                            7342134.1599999964
                        ],
                        [
                            -684347.79019999877,
                            7342157.5144999996
                        ],
                        [
                            -684354.49109999835,
                            7342178.9858999997
                        ],
                        [
                            -684362.15949999914,
                            7342201.9337000027
                        ],
                        [
                            -684367.64110000059,
                            7342223.1155000031
                        ],
                        [
                            -684374.06379999965,
                            7342244.1501000002
                        ],
                        [
                            -684375.2126000002,
                            7342245.9250999987
                        ],
                        [
                            -684376.63269999996,
                            7342246.628899999
                        ],
                        [
                            -684379.18560000136,
                            7342247.5452999994
                        ],
                        [
                            -684381.87730000168,
                            7342247.8027999997
                        ],
                        [
                            -684385.98800000176,
                            7342247.889200002
                        ],
                        [
                            -684387.57919999957,
                            7342255.1251000017
                        ],
                        [
                            -684390.19370000064,
                            7342270.4704999998
                        ],
                        [
                            -684395.97170000151,
                            7342300.4123999998
                        ],
                        [
                            -684401.68050000072,
                            7342332.7823999971
                        ],
                        [
                            -684404.5009999983,
                            7342347.2950000018
                        ],
                        [
                            -684389.41360000148,
                            7342347.8690000027
                        ],
                        [
                            -684359.15500000119,
                            7342348.383100003
                        ],
                        [
                            -684319.47480000183,
                            7342349.8126000017
                        ],
                        [
                            -684268.76990000159,
                            7342349.3856000006
                        ],
                        [
                            -684237.52180000022,
                            7342348.7929999977
                        ],
                        [
                            -684213.24489999935,
                            7342348.6617000028
                        ],
                        [
                            -684209.46209999919,
                            7342348.7735000029
                        ],
                        [
                            -684202.76220000163,
                            7342345.4702000022
                        ],
                        [
                            -684202.24240000173,
                            7342341.5621000007
                        ],
                        [
                            -684194.79839999974,
                            7342342.1159000024
                        ],
                        [
                            -684183.19159999862,
                            7342334.7722999975
                        ],
                        [
                            -684180.35909999907,
                            7342321.3880999982
                        ],
                        [
                            -684170.38100000098,
                            7342283.0172000006
                        ],
                        [
                            -684149.59690000117,
                            7342197.1696999967
                        ],
                        [
                            -684145.06190000102,
                            7342179.9818999991
                        ],
                        [
                            -684131.56960000098,
                            7342126.4650999978
                        ],
                        [
                            -684129.88769999892,
                            7342119.7138999999
                        ],
                        [
                            -684175.15839999914,
                            7342116.5658999979
                        ],
                        [
                            -684217.37209999934,
                            7342114.0496999994
                        ],
                        [
                            -684257.70679999888,
                            7342112.1042999998
                        ],
                        [
                            -684295.5036999993,
                            7342110.5764999986
                        ],
                        [
                            -684310.72819999978,
                            7342109.5890000015
                        ],
                        [
                            -684332.06469999999,
                            7342108.6018999964
                        ],
                        [
                            -684340.18989999965,
                            7342134.1599999964
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 14,
                "FIELDID": "4/044/944/1",
                "LANDTYPE": "SDA",
                "FNC_CALC_AREA_HA": 1.2270,
                "FNC_MEA_AREA_HA": 1.19,
                "FIELD_CLASSIFICATION": "NL",
                "TOWNLAND": "Glenhugh"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683823.72509999946,
                            7341732.6982999966
                        ],
                        [
                            -683778.77079999819,
                            7341637.9243000001
                        ],
                        [
                            -683739.0353000015,
                            7341552.2030000016
                        ],
                        [
                            -683834.74890000001,
                            7341516.4583000019
                        ],
                        [
                            -683883.85310000181,
                            7341498.6823000014
                        ],
                        [
                            -683899.81219999865,
                            7341492.7136000022
                        ],
                        [
                            -683912.68989999965,
                            7341488.8888999969
                        ],
                        [
                            -683930.58159999922,
                            7341530.5500999987
                        ],
                        [
                            -683948.50329999998,
                            7341575.8017999977
                        ],
                        [
                            -683956.43290000036,
                            7341574.5777999982
                        ],
                        [
                            -683977.40890000015,
                            7341628.5561000034
                        ],
                        [
                            -683994.75910000131,
                            7341674.5738999993
                        ],
                        [
                            -683953.62359999865,
                            7341688.2444999963
                        ],
                        [
                            -683855.35469999909,
                            7341722.3913000003
                        ],
                        [
                            -683823.72509999946,
                            7341732.6982999966
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 18,
                "FIELDID": "5/055/655/21",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 1.2800,
                "FNC_MEA_AREA_HA": 1.26,
                "FIELD_CLASSIFICATION": "PGS",
                "TOWNLAND": "Unshinagh Mountain"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683840.25979999825,
                            7341299.9438999966
                        ],
                        [
                            -683855.7965000011,
                            7341339.2233999968
                        ],
                        [
                            -683865.15210000053,
                            7341354.8491000012
                        ],
                        [
                            -683869.58399999887,
                            7341364.8743999973
                        ],
                        [
                            -683874.28170000017,
                            7341377.7067999989
                        ],
                        [
                            -683883.9924999997,
                            7341417.8143000007
                        ],
                        [
                            -683898.997299999,
                            7341458.4575999975
                        ],
                        [
                            -683908.64330000058,
                            7341479.1850000024
                        ],
                        [
                            -683912.68989999965,
                            7341488.8888999969
                        ],
                        [
                            -683899.81219999865,
                            7341492.7136000022
                        ],
                        [
                            -683883.85310000181,
                            7341498.6823000014
                        ],
                        [
                            -683834.74890000001,
                            7341516.4583000019
                        ],
                        [
                            -683739.0353000015,
                            7341552.2030000016
                        ],
                        [
                            -683721.60220000148,
                            7341515.8681999967
                        ],
                        [
                            -683703.0196999982,
                            7341475.4368999973
                        ],
                        [
                            -683676.88219999894,
                            7341420.4015000015
                        ],
                        [
                            -683654.22320000082,
                            7341370.577200003
                        ],
                        [
                            -683676.21460000053,
                            7341361.9557000026
                        ],
                        [
                            -683708.66759999841,
                            7341350.256099999
                        ],
                        [
                            -683788.56679999828,
                            7341320.3145999983
                        ],
                        [
                            -683840.25979999825,
                            7341299.9438999966
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 19,
                "FIELDID": "5/055/655/18",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 0.7399,
                "FNC_MEA_AREA_HA": 0.71,
                "FIELD_CLASSIFICATION": "PG",
                "TOWNLAND": "Ardina"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683704.9085999988,
                            7341248.7998000011
                        ],
                        [
                            -683705.54980000108,
                            7341215.1557999998
                        ],
                        [
                            -683705.89229999855,
                            7341213.1006999984
                        ],
                        [
                            -683712.67980000004,
                            7341201.3304999992
                        ],
                        [
                            -683729.53730000183,
                            7341180.8756999969
                        ],
                        [
                            -683752.09059999883,
                            7341155.8630999997
                        ],
                        [
                            -683760.40949999914,
                            7341151.6498000026
                        ],
                        [
                            -683770.29450000077,
                            7341147.3356000036
                        ],
                        [
                            -683771.63610000163,
                            7341150.7294000015
                        ],
                        [
                            -683780.77739999816,
                            7341148.3552000001
                        ],
                        [
                            -683820.45650000125,
                            7341251.7479000017
                        ],
                        [
                            -683840.25979999825,
                            7341299.9438999966
                        ],
                        [
                            -683788.56679999828,
                            7341320.3145999983
                        ],
                        [
                            -683708.66759999841,
                            7341350.256099999
                        ],
                        [
                            -683676.21460000053,
                            7341361.9557000026
                        ],
                        [
                            -683654.22320000082,
                            7341370.577200003
                        ],
                        [
                            -683632.17619999871,
                            7341322.0441000015
                        ],
                        [
                            -683631.14209999889,
                            7341317.2427999973
                        ],
                        [
                            -683640.59090000018,
                            7341310.7545000017
                        ],
                        [
                            -683649.20219999924,
                            7341305.316200003
                        ],
                        [
                            -683676.28170000017,
                            7341289.4033999965
                        ],
                        [
                            -683704.35810000077,
                            7341272.5301999971
                        ],
                        [
                            -683704.6763000004,
                            7341258.8134000003
                        ],
                        [
                            -683704.9085999988,
                            7341248.7998000011
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 21,
                "FIELDID": "6/066/166/5/D",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 1.0860,
                "FNC_MEA_AREA_HA": 1.07,
                "FIELD_CLASSIFICATION": "UC",
                "TOWNLAND": "Islandbane"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683561.76159999892,
                            7341365.0377999991
                        ],
                        [
                            -683603.75149999931,
                            7341442.5851999968
                        ],
                        [
                            -683637.76630000025,
                            7341426.7048000023
                        ],
                        [
                            -683666.82209999859,
                            7341412.7739999965
                        ],
                        [
                            -683682.10860000178,
                            7341445.3610000014
                        ],
                        [
                            -683755.34980000183,
                            7341602.8021000028
                        ],
                        [
                            -683767.32149999961,
                            7341628.0944999978
                        ],
                        [
                            -683768.2675999999,
                            7341631.8796999976
                        ],
                        [
                            -683768.43609999865,
                            7341634.4284999967
                        ],
                        [
                            -683767.85379999876,
                            7341636.6947999969
                        ],
                        [
                            -683743.46999999881,
                            7341645.9905999973
                        ],
                        [
                            -683710.60869999975,
                            7341657.2069000006
                        ],
                        [
                            -683678.66250000149,
                            7341668.4649000019
                        ],
                        [
                            -683649.77100000158,
                            7341678.0561000034
                        ],
                        [
                            -683616.92819999903,
                            7341589.1605999991
                        ],
                        [
                            -683599.73559999838,
                            7341547.4387999997
                        ],
                        [
                            -683593.76110000163,
                            7341534.996299997
                        ],
                        [
                            -683570.70499999821,
                            7341484.7778000012
                        ],
                        [
                            -683547.07229999825,
                            7341432.6208000034
                        ],
                        [
                            -683524.25679999962,
                            7341386.8942999989
                        ],
                        [
                            -683555.24740000069,
                            7341369.1059999987
                        ],
                        [
                            -683561.76159999892,
                            7341365.0377999991
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 20,
                "FIELDID": "6/066/166/2",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 1.3730,
                "FNC_MEA_AREA_HA": 1.34,
                "FIELD_CLASSIFICATION": "PG",
                "TOWNLAND": "Islandbane"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683897.89959999919,
                            7341919.4792999998
                        ],
                        [
                            -683882.57259999961,
                            7341921.2040999979
                        ],
                        [
                            -683828.61459999904,
                            7341928.0672999993
                        ],
                        [
                            -683800.32200000063,
                            7341931.1325000003
                        ],
                        [
                            -683775.95270000026,
                            7341934.2775999978
                        ],
                        [
                            -683742.92320000008,
                            7341938.4984000027
                        ],
                        [
                            -683731.34540000185,
                            7341904.0219999999
                        ],
                        [
                            -683715.4076000005,
                            7341858.9006000012
                        ],
                        [
                            -683692.21020000055,
                            7341796.6520000026
                        ],
                        [
                            -683678.33060000092,
                            7341755.798299998
                        ],
                        [
                            -683661.89559999853,
                            7341713.6174999997
                        ],
                        [
                            -683652.27369999886,
                            7341686.0305999964
                        ],
                        [
                            -683649.77100000158,
                            7341678.0561000034
                        ],
                        [
                            -683678.66250000149,
                            7341668.4649000019
                        ],
                        [
                            -683710.60869999975,
                            7341657.2069000006
                        ],
                        [
                            -683743.46999999881,
                            7341645.9905999973
                        ],
                        [
                            -683767.85379999876,
                            7341636.6947999969
                        ],
                        [
                            -683775.07259999961,
                            7341644.0989999995
                        ],
                        [
                            -683799.02980000153,
                            7341694.7626999989
                        ],
                        [
                            -683818.21629999951,
                            7341734.635300003
                        ],
                        [
                            -683835.09109999985,
                            7341770.3977999985
                        ],
                        [
                            -683869.50569999963,
                            7341850.4506999999
                        ],
                        [
                            -683886.2265000008,
                            7341890.2809000015
                        ],
                        [
                            -683897.89959999919,
                            7341919.4792999998
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 13,
                "FIELDID": "4/044/944/17",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 1.3070,
                "FNC_MEA_AREA_HA": 1.27,
                "FIELD_CLASSIFICATION": "AR",
                "TOWNLAND": "Esker"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683818.21629999951,
                            7341734.635300003
                        ],
                        [
                            -683823.72509999946,
                            7341732.6982999966
                        ],
                        [
                            -683855.35469999909,
                            7341722.3913000003
                        ],
                        [
                            -683953.62359999865,
                            7341688.2444999963
                        ],
                        [
                            -683994.75910000131,
                            7341674.5738999993
                        ],
                        [
                            -684007.31579999998,
                            7341706.9774999991
                        ],
                        [
                            -684022.16719999909,
                            7341748.7431999967
                        ],
                        [
                            -684034.58379999921,
                            7341781.6614999995
                        ],
                        [
                            -684037.12029999867,
                            7341789.0300000012
                        ],
                        [
                            -684040.52730000019,
                            7341799.8338000029
                        ],
                        [
                            -684046.67139999941,
                            7341817.7088000029
                        ],
                        [
                            -684065.746199999,
                            7341875.9112000018
                        ],
                        [
                            -684073.52320000157,
                            7341900.7446999997
                        ],
                        [
                            -684023.41120000184,
                            7341905.3703999966
                        ],
                        [
                            -683956.06720000133,
                            7341913.5415000021
                        ],
                        [
                            -683897.89959999919,
                            7341919.4792999998
                        ],
                        [
                            -683886.2265000008,
                            7341890.2809000015
                        ],
                        [
                            -683869.50569999963,
                            7341850.4506999999
                        ],
                        [
                            -683835.09109999985,
                            7341770.3977999985
                        ],
                        [
                            -683818.21629999951,
                            7341734.635300003
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 23,
                "FIELDID": "6/066/166/31",
                "LANDTYPE": "DA",
                "FNC_CALC_AREA_HA": 0.8520,
                "FNC_MEA_AREA_HA": 0.83,
                "FIELD_CLASSIFICATION": "PG",
                "TOWNLAND": "Grange Of Umgall"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683399.42720000073,
                            7341401.0800999999
                        ],
                        [
                            -683401.72150000185,
                            7341399.628200002
                        ],
                        [
                            -683405.06010000035,
                            7341397.5147999972
                        ],
                        [
                            -683423.15740000084,
                            7341386.058799997
                        ],
                        [
                            -683442.96409999952,
                            7341374.9676000029
                        ],
                        [
                            -683467.82420000061,
                            7341360.3206999972
                        ],
                        [
                            -683501.58929999918,
                            7341342.5996999964
                        ],
                        [
                            -683510.67559999973,
                            7341359.3263999969
                        ],
                        [
                            -683524.25679999962,
                            7341386.8942999989
                        ],
                        [
                            -683547.07229999825,
                            7341432.6208000034
                        ],
                        [
                            -683570.70499999821,
                            7341484.7778000012
                        ],
                        [
                            -683593.76110000163,
                            7341534.996299997
                        ],
                        [
                            -683599.73559999838,
                            7341547.4387999997
                        ],
                        [
                            -683550.29580000043,
                            7341568.0197999999
                        ],
                        [
                            -683525.8172999993,
                            7341577.8724000007
                        ],
                        [
                            -683486.06289999932,
                            7341595.1979999989
                        ],
                        [
                            -683482.01819999889,
                            7341583.2815999985
                        ],
                        [
                            -683476.96930000186,
                            7341569.1854000017
                        ],
                        [
                            -683466.01190000027,
                            7341535.2589000016
                        ],
                        [
                            -683458.91670000181,
                            7341513.7901000008
                        ],
                        [
                            -683455.4012000002,
                            7341503.8373999968
                        ],
                        [
                            -683435.61969999969,
                            7341464.0465999991
                        ],
                        [
                            -683399.42720000073,
                            7341401.0800999999
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 22,
                "FIELDID": "6/066/166/8/A",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 1.7470,
                "FNC_MEA_AREA_HA": 1.72,
                "FIELD_CLASSIFICATION": "AR",
                "TOWNLAND": "Islandbane"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683599.73559999838,
                            7341547.4387999997
                        ],
                        [
                            -683616.92819999903,
                            7341589.1605999991
                        ],
                        [
                            -683649.77100000158,
                            7341678.0561000034
                        ],
                        [
                            -683652.27369999886,
                            7341686.0305999964
                        ],
                        [
                            -683661.89559999853,
                            7341713.6174999997
                        ],
                        [
                            -683678.33060000092,
                            7341755.798299998
                        ],
                        [
                            -683692.21020000055,
                            7341796.6520000026
                        ],
                        [
                            -683715.4076000005,
                            7341858.9006000012
                        ],
                        [
                            -683731.34540000185,
                            7341904.0219999999
                        ],
                        [
                            -683742.92320000008,
                            7341938.4984000027
                        ],
                        [
                            -683698.75919999927,
                            7341945.2959000021
                        ],
                        [
                            -683662.78869999945,
                            7341948.4554999992
                        ],
                        [
                            -683602.08130000159,
                            7341954.2783000022
                        ],
                        [
                            -683582.08170000091,
                            7341891.1537000015
                        ],
                        [
                            -683563.41660000011,
                            7341834.188699998
                        ],
                        [
                            -683545.75930000097,
                            7341781.3778999969
                        ],
                        [
                            -683525.07339999825,
                            7341717.7318999991
                        ],
                        [
                            -683518.61140000075,
                            7341696.5143000036
                        ],
                        [
                            -683511.41869999841,
                            7341675.5676999986
                        ],
                        [
                            -683498.4550999999,
                            7341636.6673000008
                        ],
                        [
                            -683486.06289999932,
                            7341595.1979999989
                        ],
                        [
                            -683525.8172999993,
                            7341577.8724000007
                        ],
                        [
                            -683550.29580000043,
                            7341568.0197999999
                        ],
                        [
                            -683599.73559999838,
                            7341547.4387999997
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 24,
                "FIELDID": "7/077/277/13",
                "LANDTYPE": "SDA",
                "FNC_CALC_AREA_HA": 1.5610,
                "FNC_MEA_AREA_HA": 1.53,
                "FIELD_CLASSIFICATION": "PG",
                "TOWNLAND": "Grange Of Umgall"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683362.61300000176,
                            7341618.7317000031
                        ],
                        [
                            -683359.09079999849,
                            7341609.2986999974
                        ],
                        [
                            -683357.60289999843,
                            7341596.6398999989
                        ],
                        [
                            -683360.08439999819,
                            7341596.3112000003
                        ],
                        [
                            -683398.69339999929,
                            7341586.9157000035
                        ],
                        [
                            -683438.16450000182,
                            7341578.1186000034
                        ],
                        [
                            -683471.09369999915,
                            7341571.3436999992
                        ],
                        [
                            -683476.96930000186,
                            7341569.1854000017
                        ],
                        [
                            -683482.01819999889,
                            7341583.2815999985
                        ],
                        [
                            -683486.06289999932,
                            7341595.1979999989
                        ],
                        [
                            -683498.4550999999,
                            7341636.6673000008
                        ],
                        [
                            -683511.41869999841,
                            7341675.5676999986
                        ],
                        [
                            -683518.61140000075,
                            7341696.5143000036
                        ],
                        [
                            -683525.07339999825,
                            7341717.7318999991
                        ],
                        [
                            -683545.75930000097,
                            7341781.3778999969
                        ],
                        [
                            -683563.41660000011,
                            7341834.188699998
                        ],
                        [
                            -683582.08170000091,
                            7341891.1537000015
                        ],
                        [
                            -683602.08130000159,
                            7341954.2783000022
                        ],
                        [
                            -683570.22459999844,
                            7341957.3938999996
                        ],
                        [
                            -683564.00769999996,
                            7341957.8840000033
                        ],
                        [
                            -683560.4571999982,
                            7341960.3061000034
                        ],
                        [
                            -683558.26289999858,
                            7341960.0094999969
                        ],
                        [
                            -683553.49210000038,
                            7341958.4527999982
                        ],
                        [
                            -683537.55649999902,
                            7341960.3467999995
                        ],
                        [
                            -683507.76929999888,
                            7341967.6792000011
                        ],
                        [
                            -683490.83999999985,
                            7341971.181599997
                        ],
                        [
                            -683456.73490000144,
                            7341877.1630999967
                        ],
                        [
                            -683436.4199000001,
                            7341822.188699998
                        ],
                        [
                            -683407.95059999824,
                            7341743.6735000014
                        ],
                        [
                            -683385.90239999816,
                            7341683.7371999994
                        ],
                        [
                            -683362.61300000176,
                            7341618.7317000031
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 26,
                "FIELDID": "7/077/277/3/C",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 0.4250,
                "FNC_MEA_AREA_HA": 0.39,
                "FIELD_CLASSIFICATION": "PG",
                "TOWNLAND": "Kilmacanty"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683399.42720000073,
                            7341401.0800999999
                        ],
                        [
                            -683435.61969999969,
                            7341464.0465999991
                        ],
                        [
                            -683455.4012000002,
                            7341503.8373999968
                        ],
                        [
                            -683458.91670000181,
                            7341513.7901000008
                        ],
                        [
                            -683466.01190000027,
                            7341535.2589000016
                        ],
                        [
                            -683476.96930000186,
                            7341569.1854000017
                        ],
                        [
                            -683471.09369999915,
                            7341571.3436999992
                        ],
                        [
                            -683438.16450000182,
                            7341578.1186000034
                        ],
                        [
                            -683430.04949999973,
                            7341544
                        ],
                        [
                            -683425.65089999884,
                            7341544.8392999992
                        ],
                        [
                            -683420.09470000118,
                            7341531.8183000013
                        ],
                        [
                            -683414.43439999968,
                            7341520.1040999964
                        ],
                        [
                            -683410.18499999866,
                            7341516.500500001
                        ],
                        [
                            -683404.01790000126,
                            7341513.0979000032
                        ],
                        [
                            -683395.64299999923,
                            7341509.5235000029
                        ],
                        [
                            -683389.65680000186,
                            7341508.0056999996
                        ],
                        [
                            -683375.68230000138,
                            7341508.2211999968
                        ],
                        [
                            -683335.89110000059,
                            7341515.0336999968
                        ],
                        [
                            -683317.1865000017,
                            7341458.1583999991
                        ],
                        [
                            -683317.23209999874,
                            7341454.5458000004
                        ],
                        [
                            -683318.21269999817,
                            7341450.4189999998
                        ],
                        [
                            -683321.29879999906,
                            7341445.6770000011
                        ],
                        [
                            -683340.9653000012,
                            7341433.6674999967
                        ],
                        [
                            -683398.75869999826,
                            7341399.8536000028
                        ],
                        [
                            -683399.42720000073,
                            7341401.0800999999
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 25,
                "FIELDID": "7/077/277/1",
                "LANDTYPE": "SDA",
                "FNC_CALC_AREA_HA": 1.3410,
                "FNC_MEA_AREA_HA": 1.31,
                "FIELD_CLASSIFICATION": "PGS",
                "TOWNLAND": "Kilmacanty"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683490.83999999985,
                            7341971.181599997
                        ],
                        [
                            -683450.31170000136,
                            7341977.6972000003
                        ],
                        [
                            -683410.81810000166,
                            7341983.0800999999
                        ],
                        [
                            -683362.58810000122,
                            7341990.5813999996
                        ],
                        [
                            -683353.01029999927,
                            7341958.938500002
                        ],
                        [
                            -683343.73420000076,
                            7341925.6758999974
                        ],
                        [
                            -683319.48279999942,
                            7341841.1931999996
                        ],
                        [
                            -683306.80909999833,
                            7341793.6801000014
                        ],
                        [
                            -683297.68400000036,
                            7341750.6253999993
                        ],
                        [
                            -683292.7415000014,
                            7341725.4670000002
                        ],
                        [
                            -683288.31320000067,
                            7341699.0459999964
                        ],
                        [
                            -683285.73119999841,
                            7341681.9125000015
                        ],
                        [
                            -683285.2846999988,
                            7341665.3909000009
                        ],
                        [
                            -683286.61250000075,
                            7341659.2331999987
                        ],
                        [
                            -683288.36659999937,
                            7341655.7129999995
                        ],
                        [
                            -683290.56760000065,
                            7341652.8115999997
                        ],
                        [
                            -683294.36050000042,
                            7341648.8395999968
                        ],
                        [
                            -683300.32499999925,
                            7341644.3150999993
                        ],
                        [
                            -683303.93340000138,
                            7341641.9312999994
                        ],
                        [
                            -683314.40610000119,
                            7341637.8660999984
                        ],
                        [
                            -683331.98750000075,
                            7341633.3712000027
                        ],
                        [
                            -683337.21279999986,
                            7341631.5244000033
                        ],
                        [
                            -683341.74599999934,
                            7341629.6678000018
                        ],
                        [
                            -683347.6790000014,
                            7341626.7858999968
                        ],
                        [
                            -683355.62640000135,
                            7341622.2795000002
                        ],
                        [
                            -683362.61300000176,
                            7341618.7317000031
                        ],
                        [
                            -683385.90239999816,
                            7341683.7371999994
                        ],
                        [
                            -683407.95059999824,
                            7341743.6735000014
                        ],
                        [
                            -683436.4199000001,
                            7341822.188699998
                        ],
                        [
                            -683456.73490000144,
                            7341877.1630999967
                        ],
                        [
                            -683490.83999999985,
                            7341971.181599997
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 15,
                "FIELDID": "5/055/655/17",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 0.9929,
                "FNC_MEA_AREA_HA": 0.96,
                "FIELD_CLASSIFICATION": "AR",
                "TOWNLAND": "Unshinagh Mountain"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -684063.63309999928,
                            7341305.0780000016
                        ],
                        [
                            -684080.25490000099,
                            7341361.5732000023
                        ],
                        [
                            -684097.53590000048,
                            7341421.8915000036
                        ],
                        [
                            -684092.77100000158,
                            7341424.3822999969
                        ],
                        [
                            -684105.30189999938,
                            7341459.4690999985
                        ],
                        [
                            -684121.99969999865,
                            7341500.9676000029
                        ],
                        [
                            -684136.74280000106,
                            7341538.2369000018
                        ],
                        [
                            -684136.69040000066,
                            7341540.0232999995
                        ],
                        [
                            -684135.67579999939,
                            7341541.7771999985
                        ],
                        [
                            -684081.16560000181,
                            7341552.1731999964
                        ],
                        [
                            -684026.15159999952,
                            7341562.9188999981
                        ],
                        [
                            -684003.3478000015,
                            7341506.132600002
                        ],
                        [
                            -683978.05669999868,
                            7341444.4042000026
                        ],
                        [
                            -683955.34560000151,
                            7341385.0593999997
                        ],
                        [
                            -683933.48479999974,
                            7341326.9707000032
                        ],
                        [
                            -683944.65680000186,
                            7341323.7946000025
                        ],
                        [
                            -683953.3300999999,
                            7341321.9974000007
                        ],
                        [
                            -684006.16869999841,
                            7341313.8642000034
                        ],
                        [
                            -684053.59939999878,
                            7341307.0097000003
                        ],
                        [
                            -684063.63309999928,
                            7341305.0780000016
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 16,
                "FIELDID": "5/055/655/9",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 0.6250,
                "FNC_MEA_AREA_HA": 0.61,
                "FIELD_CLASSIFICATION": "AR",
                "TOWNLAND": "Unshinagh Mountain"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683956.43290000036,
                            7341574.5777999982
                        ],
                        [
                            -683948.50329999998,
                            7341575.8017999977
                        ],
                        [
                            -683930.58159999922,
                            7341530.5500999987
                        ],
                        [
                            -683912.68989999965,
                            7341488.8888999969
                        ],
                        [
                            -683908.64330000058,
                            7341479.1850000024
                        ],
                        [
                            -683898.997299999,
                            7341458.4575999975
                        ],
                        [
                            -683883.9924999997,
                            7341417.8143000007
                        ],
                        [
                            -683874.28170000017,
                            7341377.7067999989
                        ],
                        [
                            -683869.58399999887,
                            7341364.8743999973
                        ],
                        [
                            -683865.15210000053,
                            7341354.8491000012
                        ],
                        [
                            -683903.51669999957,
                            7341337.8347000033
                        ],
                        [
                            -683933.48479999974,
                            7341326.9707000032
                        ],
                        [
                            -683955.34560000151,
                            7341385.0593999997
                        ],
                        [
                            -683978.05669999868,
                            7341444.4042000026
                        ],
                        [
                            -684003.3478000015,
                            7341506.132600002
                        ],
                        [
                            -684026.15159999952,
                            7341562.9188999981
                        ],
                        [
                            -684000.29459999874,
                            7341567.5102000013
                        ],
                        [
                            -683956.43290000036,
                            7341574.5777999982
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 17,
                "FIELDID": "5/055/655/4/B",
                "LANDTYPE": "DA",
                "FNC_CALC_AREA_HA": 1.3030,
                "FNC_MEA_AREA_HA": 1.29,
                "FIELD_CLASSIFICATION": "PG",
                "TOWNLAND": "Unshinagh Mountain"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -684063.63309999928,
                            7341305.0780000016
                        ],
                        [
                            -684053.59939999878,
                            7341307.0097000003
                        ],
                        [
                            -684006.16869999841,
                            7341313.8642000034
                        ],
                        [
                            -683953.3300999999,
                            7341321.9974000007
                        ],
                        [
                            -683944.65680000186,
                            7341323.7946000025
                        ],
                        [
                            -683933.48479999974,
                            7341326.9707000032
                        ],
                        [
                            -683903.51669999957,
                            7341337.8347000033
                        ],
                        [
                            -683865.15210000053,
                            7341354.8491000012
                        ],
                        [
                            -683855.7965000011,
                            7341339.2233999968
                        ],
                        [
                            -683840.25979999825,
                            7341299.9438999966
                        ],
                        [
                            -683820.45650000125,
                            7341251.7479000017
                        ],
                        [
                            -683780.77739999816,
                            7341148.3552000001
                        ],
                        [
                            -683778.25670000166,
                            7341141.9807000011
                        ],
                        [
                            -683770.55700000003,
                            7341121.0398000032
                        ],
                        [
                            -683776.91860000044,
                            7341117.3483000025
                        ],
                        [
                            -683778.65379999951,
                            7341117.2832000032
                        ],
                        [
                            -683799.20639999956,
                            7341120.1809
                        ],
                        [
                            -683811.08830000088,
                            7341122.2951000035
                        ],
                        [
                            -683814.04569999874,
                            7341125.8725999966
                        ],
                        [
                            -683841.61250000075,
                            7341134.5790000036
                        ],
                        [
                            -683900.06129999831,
                            7341153.5318000019
                        ],
                        [
                            -683925.20100000128,
                            7341161.5091999993
                        ],
                        [
                            -683948.92579999939,
                            7341169.059299998
                        ],
                        [
                            -683976.69949999824,
                            7341178.1533999965
                        ],
                        [
                            -683985.48889999837,
                            7341182.5205999985
                        ],
                        [
                            -683989.37539999932,
                            7341183.7107999995
                        ],
                        [
                            -684007.28950000182,
                            7341185.5430999994
                        ],
                        [
                            -684030.67920000106,
                            7341186.2810000032
                        ],
                        [
                            -684063.63309999928,
                            7341305.0780000016
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 12,
                "FIELDID": "4/044/944/3",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 1.3120,
                "FNC_MEA_AREA_HA": 1.24,
                "FIELD_CLASSIFICATION": "PC",
                "TOWNLAND": "Esker"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -683994.75910000131,
                            7341674.5738999993
                        ],
                        [
                            -683977.40890000015,
                            7341628.5561000034
                        ],
                        [
                            -683956.43290000036,
                            7341574.5777999982
                        ],
                        [
                            -684000.29459999874,
                            7341567.5102000013
                        ],
                        [
                            -684026.15159999952,
                            7341562.9188999981
                        ],
                        [
                            -684081.16560000181,
                            7341552.1731999964
                        ],
                        [
                            -684135.67579999939,
                            7341541.7771999985
                        ],
                        [
                            -684136.69040000066,
                            7341540.0232999995
                        ],
                        [
                            -684136.74280000106,
                            7341538.2369000018
                        ],
                        [
                            -684143.93499999866,
                            7341537.6626000032
                        ],
                        [
                            -684155.98140000179,
                            7341572.9752999991
                        ],
                        [
                            -684167.97040000185,
                            7341608.8188000023
                        ],
                        [
                            -684185.26280000061,
                            7341658.9041000009
                        ],
                        [
                            -684199.68320000172,
                            7341701.5777999982
                        ],
                        [
                            -684211.97170000151,
                            7341736.6140000001
                        ],
                        [
                            -684188.35909999907,
                            7341742.2779000029
                        ],
                        [
                            -684096.54129999876,
                            7341765.9032000005
                        ],
                        [
                            -684034.58379999921,
                            7341781.6614999995
                        ],
                        [
                            -684022.16719999909,
                            7341748.7431999967
                        ],
                        [
                            -684007.31579999998,
                            7341706.9774999991
                        ],
                        [
                            -683994.75910000131,
                            7341674.5738999993
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 27,
                "FIELDID": "8/088/488/5",
                "LANDTYPE": "SDA",
                "FNC_CALC_AREA_HA": 1.6820,
                "FNC_MEA_AREA_HA": 1.65,
                "FIELD_CLASSIFICATION": "NL",
                "TOWNLAND": "Tullymore"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -685089.16560000181,
                            7344021.6226999983
                        ],
                        [
                            -685087.86850000173,
                            7344030.6137999967
                        ],
                        [
                            -685086.04300000146,
                            7344038.7053999975
                        ],
                        [
                            -685072.41070000082,
                            7344092.2368000001
                        ],
                        [
                            -685067.74159999937,
                            7344109.572800003
                        ],
                        [
                            -685059.82869999856,
                            7344132.3691999987
                        ],
                        [
                            -685048.91600000113,
                            7344159.195600003
                        ],
                        [
                            -685039.62920000032,
                            7344180.8285000026
                        ],
                        [
                            -685028.65870000049,
                            7344201.8011000007
                        ],
                        [
                            -685019.55160000175,
                            7344215.2849000022
                        ],
                        [
                            -685014.40989999846,
                            7344214.369599998
                        ],
                        [
                            -684994.95670000091,
                            7344212.1102000028
                        ],
                        [
                            -684877.09420000017,
                            7344196.1186999977
                        ],
                        [
                            -684875.53790000081,
                            7344190.3608999997
                        ],
                        [
                            -684871.58650000021,
                            7344178.3237000033
                        ],
                        [
                            -684851.8396999985,
                            7344112.8288000003
                        ],
                        [
                            -684839.2322999984,
                            7344072.7104000002
                        ],
                        [
                            -684800.60269999877,
                            7343947.9856999964
                        ],
                        [
                            -684798.55449999869,
                            7343940.5415000021
                        ],
                        [
                            -684801.93349999934,
                            7343938.5851000026
                        ],
                        [
                            -684808.12620000169,
                            7343931.3589999974
                        ],
                        [
                            -684819.87999999896,
                            7343942.0018000007
                        ],
                        [
                            -684836.61789999902,
                            7343959.5351999998
                        ],
                        [
                            -684872.36760000139,
                            7343998.6318000033
                        ],
                        [
                            -684886.93899999931,
                            7343977.9605000019
                        ],
                        [
                            -684915.6959999986,
                            7343935.3796999976
                        ],
                        [
                            -684936.92190000042,
                            7343949.127700001
                        ],
                        [
                            -684982.40900000185,
                            7343977.3753999993
                        ],
                        [
                            -685017.22260000184,
                            7343999.309299998
                        ],
                        [
                            -685051.88580000028,
                            7344020.8355000019
                        ],
                        [
                            -685057.24689999968,
                            7344021.0625
                        ],
                        [
                            -685089.16560000181,
                            7344021.6226999983
                        ]
                    ]
                ]
            }
        },
        {
            "attributes": {
                "OBJECTID": 28,
                "FIELDID": "9/099/399/17",
                "LANDTYPE": "LL",
                "FNC_CALC_AREA_HA": 3.8640,
                "FNC_MEA_AREA_HA": 3.83,
                "FIELD_CLASSIFICATION": "UC",
                "TOWNLAND": "Gulladoo"
            },
            "geometry": {
                "rings": [
                    [
                        [
                            -681937.60720000044,
                            7340382.1991999969
                        ],
                        [
                            -681939.16730000079,
                            7340390.3703000024
                        ],
                        [
                            -681935.24879999831,
                            7340390.858099997
                        ],
                        [
                            -681931.5075000003,
                            7340391.5940999985
                        ],
                        [
                            -681928.60709999874,
                            7340392.8100000024
                        ],
                        [
                            -681925.16869999841,
                            7340394.6165999994
                        ],
                        [
                            -681917.45389999822,
                            7340397.2509000003
                        ],
                        [
                            -681890.82200000063,
                            7340405.804399997
                        ],
                        [
                            -681860.68739999831,
                            7340413.8290999979
                        ],
                        [
                            -681843.32459999993,
                            7340417.6841999963
                        ],
                        [
                            -681758.25600000098,
                            7340447.8388999999
                        ],
                        [
                            -681712.97690000013,
                            7340463.1005000025
                        ],
                        [
                            -681689.00699999928,
                            7340471.8171000034
                        ],
                        [
                            -681664.93389999866,
                            7340480.1083000004
                        ],
                        [
                            -681612.92190000042,
                            7340496.7586999983
                        ],
                        [
                            -681569.16499999911,
                            7340512.3664999977
                        ],
                        [
                            -681562.29089999944,
                            7340496.0221000016
                        ],
                        [
                            -681552.25939999893,
                            7340469.2952999994
                        ],
                        [
                            -681433.36789999902,
                            7340507.8857000023
                        ],
                        [
                            -681422.75129999965,
                            7340511.1231999993
                        ],
                        [
                            -681421.80139999837,
                            7340505.9087999985
                        ],
                        [
                            -681393.78440000117,
                            7340440.8545000032
                        ],
                        [
                            -681404.3460999988,
                            7340429.881099999
                        ],
                        [
                            -681405.85399999842,
                            7340414.9760000035
                        ],
                        [
                            -681407.54140000045,
                            7340388.3105000034
                        ],
                        [
                            -681408.57229999825,
                            7340368.7968000025
                        ],
                        [
                            -681409.7976000011,
                            7340358.1583999991
                        ],
                        [
                            -681421.69420000166,
                            7340358.9443999976
                        ],
                        [
                            -681439.6090000011,
                            7340361.891900003
                        ],
                        [
                            -681483.27560000122,
                            7340368.1037999988
                        ],
                        [
                            -681496.9776000008,
                            7340369.8285000026
                        ],
                        [
                            -681535.52459999919,
                            7340345.8878000006
                        ],
                        [
                            -681563.34640000015,
                            7340328.8558999971
                        ],
                        [
                            -681592.60049999878,
                            7340312.0414000005
                        ],
                        [
                            -681598.39730000123,
                            7340307.8866000026
                        ],
                        [
                            -681600.62070000172,
                            7340305.7136999965
                        ],
                        [
                            -681606.55900000036,
                            7340301.1939999983
                        ],
                        [
                            -681613.76799999923,
                            7340293.7281000018
                        ],
                        [
                            -681622.32789999992,
                            7340285.5125999972
                        ],
                        [
                            -681632.49219999835,
                            7340275.4309
                        ],
                        [
                            -681640.46649999917,
                            7340265.8171999976
                        ],
                        [
                            -681643.06810000166,
                            7340262.2824999988
                        ],
                        [
                            -681644.41450000182,
                            7340260.0737999976
                        ],
                        [
                            -681647.17790000141,
                            7340254.4481000006
                        ],
                        [
                            -681650.22019999847,
                            7340248.7708000019
                        ],
                        [
                            -681655.24430000037,
                            7340238.6014999971
                        ],
                        [
                            -681658.61639999971,
                            7340229.2849999964
                        ],
                        [
                            -681670.86160000041,
                            7340202.3091000021
                        ],
                        [
                            -681648.86529999971,
                            7340192.9874000028
                        ],
                        [
                            -681633.92799999937,
                            7340185.1108999997
                        ],
                        [
                            -681620.91560000181,
                            7340180.0612000003
                        ],
                        [
                            -681605.90199999884,
                            7340174.7176999971
                        ],
                        [
                            -681600.34800000116,
                            7340173.1112999991
                        ],
                        [
                            -681591.20419999957,
                            7340171.1911000013
                        ],
                        [
                            -681585.40650000051,
                            7340170.5883999988
                        ],
                        [
                            -681578.96519999951,
                            7340170.5631000027
                        ],
                        [
                            -681570.28970000148,
                            7340171.1106000021
                        ],
                        [
                            -681562.10669999942,
                            7340171.9253000021
                        ],
                        [
                            -681551.70210000128,
                            7340174.1982000023
                        ],
                        [
                            -681542.5438000001,
                            7340177.2906000018
                        ],
                        [
                            -681531.79259999841,
                            7340180.3888000026
                        ],
                        [
                            -681487.99379999936,
                            7340197.1697999984
                        ],
                        [
                            -681471.34369999915,
                            7340203.8946999982
                        ],
                        [
                            -681455.06749999896,
                            7340210.8488000035
                        ],
                        [
                            -681438.80050000176,
                            7340218.0412999988
                        ],
                        [
                            -681419.50910000131,
                            7340227.0582000017
                        ],
                        [
                            -681423.14479999989,
                            7340162.2316000015
                        ],
                        [
                            -681424.0036999993,
                            7340156.0732000023
                        ],
                        [
                            -681426.316300001,
                            7340128.4099999964
                        ],
                        [
                            -681435.38610000163,
                            7340014.002700001
                        ],
                        [
                            -681449.70879999921,
                            7340019.1521999985
                        ],
                        [
                            -681469.00079999864,
                            7340025.8383999988
                        ],
                        [
                            -681482.41110000014,
                            7340031.177199997
                        ],
                        [
                            -681493.70289999992,
                            7340036.3268000036
                        ],
                        [
                            -681499.01170000061,
                            7340038.1440000013
                        ],
                        [
                            -681512.27809999883,
                            7340043.4179999977
                        ],
                        [
                            -681521.33669999987,
                            7340050.1385999992
                        ],
                        [
                            -681527.4737999998,
                            7340056.1389999986
                        ],
                        [
                            -681534.45740000159,
                            7340063.8347999975
                        ],
                        [
                            -681540.26280000061,
                            7340069.7880999967
                        ],
                        [
                            -681542.08929999918,
                            7340071.9428000003
                        ],
                        [
                            -681549.23910000175,
                            7340079.0675999969
                        ],
                        [
                            -681550.48930000141,
                            7340080.1305999979
                        ],
                        [
                            -681564.42720000073,
                            7340088.9680000022
                        ],
                        [
                            -681576.10810000077,
                            7340097.0248999968
                        ],
                        [
                            -681583.76559999958,
                            7340103.5930000022
                        ],
                        [
                            -681593.99909999967,
                            7340111.1467000023
                        ],
                        [
                            -681607.92040000111,
                            7340121.9728000015
                        ],
                        [
                            -681613.78510000184,
                            7340126.3592000008
                        ],
                        [
                            -681621.67009999976,
                            7340132.5333999991
                        ],
                        [
                            -681623.97679999843,
                            7340134.5724999979
                        ],
                        [
                            -681637.71669999883,
                            7340144.5295000002
                        ],
                        [
                            -681645.03029999882,
                            7340149.1026000008
                        ],
                        [
                            -681650.809799999,
                            7340152.1391000003
                        ],
                        [
                            -681653.24969999865,
                            7340153.9312999994
                        ],
                        [
                            -681654.9822999984,
                            7340154.927199997
                        ],
                        [
                            -681657.1865000017,
                            7340156.7131000012
                        ],
                        [
                            -681664.82899999991,
                            7340160.4742999971
                        ],
                        [
                            -681676.09930000082,
                            7340167.8698000014
                        ],
                        [
                            -681677.51429999992,
                            7340168.3476999998
                        ],
                        [
                            -681693.83740000054,
                            7340178.9008999988
                        ],
                        [
                            -681756.42449999973,
                            7340227.8188999966
                        ],
                        [
                            -681759.50499999896,
                            7340229.8596000001
                        ],
                        [
                            -681764.83720000088,
                            7340233.8577999994
                        ],
                        [
                            -681776.09019999951,
                            7340240.8684
                        ],
                        [
                            -681784.46480000019,
                            7340247.1670000032
                        ],
                        [
                            -681791.48099999875,
                            7340252.1649999991
                        ],
                        [
                            -681795.37260000035,
                            7340255.6045999974
                        ],
                        [
                            -681810.58579999954,
                            7340266.1469999999
                        ],
                        [
                            -681816.88210000098,
                            7340271.2717999965
                        ],
                        [
                            -681818.97179999948,
                            7340272.7362999991
                        ],
                        [
                            -681833.60750000179,
                            7340286.1948999986
                        ],
                        [
                            -681852.26249999925,
                            7340299.3562000021
                        ],
                        [
                            -681858.92460000142,
                            7340307.1564000025
                        ],
                        [
                            -681861.35339999944,
                            7340308.5275000036
                        ],
                        [
                            -681864.1688000001,
                            7340310.9487999976
                        ],
                        [
                            -681869.39519999921,
                            7340310.7273999974
                        ],
                        [
                            -681875.02569999918,
                            7340308.8945000023
                        ],
                        [
                            -681885.01949999854,
                            7340305.3737000003
                        ],
                        [
                            -681899.83830000088,
                            7340299.1290000007
                        ],
                        [
                            -681900.88859999925,
                            7340303.9756999984
                        ],
                        [
                            -681920.76529999822,
                            7340351.6198000014
                        ],
                        [
                            -681924.01379999891,
                            7340357.9633999988
                        ],
                        [
                            -681925.61950000003,
                            7340360.7868999988
                        ],
                        [
                            -681929.98580000177,
                            7340366.5275000036
                        ],
                        [
                            -681932.66699999943,
                            7340369.6216000021
                        ],
                        [
                            -681934.20749999955,
                            7340372.4243000001
                        ],
                        [
                            -681936.38800000027,
                            7340378.0244999975
                        ],
                        [
                            -681937.60720000044,
                            7340382.1991999969
                        ]
                    ]
                ]
            }
        }
    ]
};
//# sourceMappingURL=fields.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		154
	],
	"../pages/actions/actions.module": [
		156
	],
	"../pages/filters/filters.module": [
		158
	],
	"../pages/help/help.module": [
		160
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    AboutPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-list-header no-lines>\n      Built with\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/ionic.svg" item-start>\n      </ion-avatar>\n      <h2>Ionic 3.19.0</h2>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/angular.svg" item-start>\n      </ion-avatar>\n      <h2>Angular 5.0.3</h2>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/earth.svg">\n      </ion-avatar>\n      <h2>ArcGIS API for JavaScript 3.23</h2>\n    </ion-item>\n  </ion-list>\n  <br>\n  <button ion-button small outline block (click)="closeModal()"><ion-icon name="close"></ion-icon>&nbsp;Close</button>\n\n</ion-content>\n\n'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsPageModule", function() { return ActionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActionsPageModule = (function () {
    function ActionsPageModule() {
    }
    ActionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ActionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ActionsPage */]),
            ],
        })
    ], ActionsPageModule);
    return ActionsPageModule;
}());

//# sourceMappingURL=actions.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionsPage = (function () {
    function ActionsPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fieldId = null;
    }
    ActionsPage.prototype.ionViewWillLoad = function () {
        this.fieldId = this.navParams.get('fieldId');
    };
    ActionsPage.prototype.closePopover = function (op) {
        op.fieldId = this.fieldId;
        this.viewCtrl.dismiss(op);
    };
    ActionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actions',template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\actions\actions.html"*/'<ion-list no-lines>\n  <ion-list-header>Actions</ion-list-header>\n  <ion-item>\n    <button ion-button block (click)="closePopover({ \'id\':\'view\', \'title\':\'View on map\', \'tool\': null })"><ion-icon name="eye"></ion-icon>&nbsp;View</button>\n  </ion-item>\n  <ion-item>\n    <button ion-button block (click)="closePopover({ \'id\':\'split\', \'title\':\'Split a field in two\', \'tool\': \'POLYLINE\' })"><ion-icon name="cut"></ion-icon>&nbsp;Split</button>\n  </ion-item>\n  <ion-item>\n    <button ion-button block (click)="closePopover({ \'id\':\'merge\', \'title\':\'Merge two fields\', \'tool\': \'POINT\' })"><ion-icon name="copy"></ion-icon>&nbsp;Merge</button>\n  </ion-item>\n  <ion-item>\n    <button ion-button block (click)="closePopover({ \'id\':\'reshape\', \'title\':\'Change a field boundary\', \'tool\': \'POLYGON\' })"><ion-icon name="create"></ion-icon>&nbsp;Reshape</button>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\actions\actions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ActionsPage);
    return ActionsPage;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function() { return FiltersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FiltersPageModule = (function () {
    function FiltersPageModule() {
    }
    FiltersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */]),
            ],
        })
    ], FiltersPageModule);
    return FiltersPageModule;
}());

//# sourceMappingURL=filters.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersPage = (function () {
    function FiltersPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FiltersPage.prototype.ionViewWillLoad = function () {
        // options
        var options = this.navParams.get('options');
        this.farmSurveyNumbers = options.farmSurveyNumbers;
        this.fieldNumbers = options.fieldNumbers;
        this.classifications = options.classifications;
        this.landTypes = options.landTypes;
        this.townlands = options.townlands;
        // filters
        var filters = this.navParams.get('filters');
        this.farmSurveyNumber = filters.farmSurveyNumber;
        this.fieldNumber = filters.fieldNumber;
        this.classification = filters.classification;
        this.landType = filters.landType;
        this.townland = filters.townland;
    };
    FiltersPage.prototype.closeModal = function () {
        var filters = {
            farmSurveyNumber: this.farmSurveyNumber,
            fieldNumber: this.fieldNumber,
            classification: this.classification,
            landType: this.landType,
            townland: this.townland
        };
        this.viewCtrl.dismiss({ filters: filters });
    };
    FiltersPage.prototype.clearFilters = function () {
        this.farmSurveyNumber = null;
        this.fieldNumber = null;
        this.classification = null;
        this.landType = null;
        this.townland = null;
    };
    FiltersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filters',template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\filters\filters.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>Filter By</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Farm Survey Number</ion-label>\n      <ion-select [(ngModel)]="farmSurveyNumber">\n        <ion-option *ngFor="let f of farmSurveyNumbers" [value]="f">{{f}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Field Number</ion-label>\n      <ion-select [(ngModel)]="fieldNumber">\n        <ion-option *ngFor="let n of fieldNumbers" [value]="n">{{n}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Classification</ion-label>\n      <ion-select [(ngModel)]="classification">\n        <ion-option *ngFor="let c of classifications" [value]="c">{{c}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Land Type</ion-label>\n      <ion-select [(ngModel)]="landType">\n        <ion-option *ngFor="let l of landTypes" [value]="l">{{l}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Townland</ion-label>\n      <ion-select [(ngModel)]="townland">\n        <ion-option *ngFor="let t of townlands" [value]="t">{{t}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <br>\n  <button ion-button small block (click)="clearFilters()"><ion-icon name="refresh"></ion-icon>&nbsp;Reset</button>\n  <br>\n  <button ion-button small outline block (click)="closeModal()"><ion-icon name="close"></ion-icon>&nbsp;Close</button>\n\n</ion-content>\n'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\filters\filters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FiltersPage);
    return FiltersPage;
}());

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = (function () {
    function HelpPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.title = null;
        this.text = null;
    }
    HelpPage.prototype.ionViewWillLoad = function () {
        this.title = this.navParams.get('title');
        this.text = this.navParams.get('text');
    };
    HelpPage.prototype.closePopover = function (op) {
        this.viewCtrl.dismiss(op);
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\help\help.html"*/'<ion-content text-justify style="padding: 8px;" >\n    <p><strong>{{title}}</strong></p>\n    <p>{{text}}</p>\n    <br>\n    <button ion-button small outline block><ion-icon name="refresh"></ion-icon>&nbsp;Redraw</button>\n</ion-content>'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_form__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__form_form__["a" /* FormPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        // Hide tabs bar
        var tabs = document.querySelectorAll('.tabbar');
        Object.keys(tabs).map(function (key) {
            tabs[key].style.display = 'none';
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Form" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_filters__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_actions__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_arcgis_arcgis__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fields_fields__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_state_state__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, popoverCtrl, loadingCtrl, toastCtrl, arcgisProvider, fieldsProvider, stateProvider, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.arcgisProvider = arcgisProvider;
        this.fieldsProvider = fieldsProvider;
        this.stateProvider = stateProvider;
        this.events = events;
        this.loading = null;
        this.modalOptions = {
            enableBackdropDismiss: false
        };
        this.navOptions = {
            updateUrl: false,
            isNavRoot: false
        };
        this.filterOptions = {
            farmSurveyNumbers: [],
            fieldNumbers: [],
            classifications: [],
            landTypes: [],
            townlands: []
        };
        this.filters = {
            farmSurveyNumber: null,
            fieldNumber: null,
            classification: null,
            landType: null,
            townland: null
        };
        this.visibleFields = [];
        this.events.subscribe('fields:updating', function (fields) {
            _this.loading = _this.loadingCtrl.create({ content: 'Loading...' });
            _this.loading.present();
        });
        this.events.subscribe('fields:updated:success', function (fields) {
            _this.refreshList(fields);
            _this.filterList();
            _this.loading.dismiss();
            _this.showToast({ message: 'Save successful. Changes applied successfully.', type: 'toast-success' });
        });
        this.events.subscribe('fields:updated:failure', function (changeDate, changeReason) {
            _this.loading.dismiss();
            _this.showToast({ message: 'Save failed. Unable to apply changes.', type: 'toast-error' });
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fieldsProvider.getFields().then(function (fields) {
            _this.refreshList(fields);
            _this.filterList();
        });
    };
    HomePage.prototype.refreshList = function (fields) {
        // Update field list
        this.fields = fields.sort(this.compareTwoFieldIds);
        // Update filters
        var farms = [];
        var fieldNumbers = [];
        var classifications = [];
        var landTypes = [];
        var townlands = [];
        fields.forEach(function (field) {
            if (farms.indexOf(field.attributes.FIELDID.substring(0, 9)) === -1) {
                farms.push(field.attributes.FIELDID.substring(0, 9));
            }
            if (fieldNumbers.indexOf(field.attributes.FIELDID.substring(10)) === -1) {
                fieldNumbers.push(field.attributes.FIELDID.substring(10));
            }
            if (classifications.indexOf(field.attributes.FIELD_CLASSIFICATION) === -1) {
                classifications.push(field.attributes.FIELD_CLASSIFICATION);
            }
            if (landTypes.indexOf(field.attributes.LANDTYPE) === -1) {
                landTypes.push(field.attributes.LANDTYPE);
            }
            if (townlands.indexOf(field.attributes.TOWNLAND) === -1) {
                townlands.push(field.attributes.TOWNLAND);
            }
        });
        this.filterOptions.farmSurveyNumbers = farms.sort();
        this.filterOptions.fieldNumbers = fieldNumbers.sort(this.compareTwoFieldIdRemainders);
        this.filterOptions.classifications = classifications.sort();
        this.filterOptions.landTypes = landTypes.sort();
        this.filterOptions.townlands = townlands.sort();
    };
    HomePage.prototype.filterList = function () {
        var _this = this;
        this.visibleFields = this.fields.slice(0);
        if (this.filters.farmSurveyNumber) {
            this.visibleFields = this.visibleFields.filter(function (f) { return f.attributes.FIELDID.substring(0, 9) === _this.filters.farmSurveyNumber; });
        }
        if (this.filters.fieldNumber) {
            this.visibleFields = this.visibleFields.filter(function (f) { return f.attributes.FIELDID.substring(10) === _this.filters.fieldNumber; });
        }
        if (this.filters.classification) {
            this.visibleFields = this.visibleFields.filter(function (f) { return f.attributes.FIELD_CLASSIFICATION === _this.filters.classification; });
        }
        if (this.filters.landType) {
            this.visibleFields = this.visibleFields.filter(function (f) { return f.attributes.LANDTYPE === _this.filters.landType; });
        }
        if (this.filters.townland) {
            this.visibleFields = this.visibleFields.filter(function (f) { return f.attributes.TOWNLAND === _this.filters.townland; });
        }
    };
    HomePage.prototype.onChangesApplied = function (fields) {
        this.refreshList(fields);
        this.filterList();
        //this.modalWindow.closeModal();
    };
    HomePage.prototype.compareTwoFieldIds = function (graphic1, graphic2) {
        var fsn1 = graphic1.attributes.FIELDID.toLocaleLowerCase().substring(0, 9);
        var fsn2 = graphic2.attributes.FIELDID.toLocaleLowerCase().substring(0, 9);
        var remainder1 = graphic1.attributes.FIELDID.toLocaleLowerCase().substring(10);
        var remainder2 = graphic2.attributes.FIELDID.toLocaleLowerCase().substring(10);
        var number1 = parseInt(remainder1.indexOf("/") === -1 ? remainder1 : remainder1.substring(0, remainder1.indexOf("/")));
        var number2 = parseInt(remainder2.indexOf("/") === -1 ? remainder2 : remainder2.substring(0, remainder2.indexOf("/")));
        if (fsn1 !== fsn2) {
            return fsn1.localeCompare(fsn2);
        }
        else if (number1 !== number2) {
            return number1 - number2;
        }
        else {
            return remainder1.localeCompare(remainder2);
        }
    };
    HomePage.prototype.compareTwoFieldIdRemainders = function (remainder1, remainder2) {
        var number1 = parseInt(remainder1.indexOf("/") === -1 ? remainder1 : remainder1.substring(0, remainder1.indexOf("/")));
        var number2 = parseInt(remainder2.indexOf("/") === -1 ? remainder2 : remainder2.substring(0, remainder2.indexOf("/")));
        if (number1 !== number2) {
            return number1 - number2;
        }
        else {
            return remainder1.localeCompare(remainder2);
        }
    };
    HomePage.prototype.openAboutModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */], null, this.modalOptions);
        modal.present();
    };
    HomePage.prototype.openFiltersModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filters_filters__["a" /* FiltersPage */], { options: this.filterOptions, filters: this.filters }, this.modalOptions);
        modal.present();
        modal.onWillDismiss(function (data) {
            _this.filters = data.filters;
            _this.filterList();
        });
    };
    HomePage.prototype.openActionsPopover = function (evt) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__actions_actions__["a" /* ActionsPage */], { fieldId: evt.currentTarget.id });
        popover.present({ ev: evt });
        popover.onWillDismiss(function (data) {
            if (data != null) {
                var operation = {
                    id: data.id,
                    title: data.title,
                    tool: data.tool,
                    fieldId: data.fieldId
                };
                _this.stateProvider.setOperation(operation);
                _this.navCtrl.parent.select(1);
            }
        });
    };
    HomePage.prototype.showToast = function (notification) {
        var toast = this.toastCtrl.create({
            message: notification.message,
            duration: 3000,
            position: 'middle',
            showCloseButton: true,
            cssClass: notification.type
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color=\'primary\'>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="openAboutModal()"><ion-icon name="information-circle"></ion-icon></button>\n        </ion-buttons>\n        <ion-title text-center>\n            <ion-icon name="map"></ion-icon>\n            My Fields\n        </ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="openFiltersModal()"><ion-icon name="options"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button (click)="this.showToast({ message: \'Save successful. Changes applied successfully.\', type: \'toast-success\' });">Success</button>\n    <button ion-button (click)="this.showToast({ message: \'Save successful. Changes applied successfully.\', type: \'toast-error\' });">Error</button>\n    <ion-list>\n        <ion-item *ngFor="let field of visibleFields">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <h2 ion-text color="primary"><strong>{{ field.attributes.FIELDID }}</strong></h2>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <p>Area: <strong>{{ field.attributes.FNC_CALC_AREA_HA | number:\'1.4-4\' }} Ha</strong></p>\n                    </ion-col>\n                    <ion-col>\n                        <p>MEA: <strong>{{ field.attributes.FNC_MEA_AREA_HA | number:\'1.2-2\' }} Ha</strong></p>\n                    </ion-col>\n                    <ion-col>\n                        <p>Land Type: <strong>{{ field.attributes.LANDTYPE }}</strong></p>\n                    </ion-col>\n                    <ion-col>\n                        <p>Classification: <strong>{{ field.attributes.FIELD_CLASSIFICATION }}</strong></p>\n                    </ion-col>\n                    <ion-col>\n                        <p>Townland: <strong>{{ field.attributes.TOWNLAND }}</strong></p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <button ion-button icon-only clear item-end id="{{ field.attributes.FIELDID }}" (click)="openActionsPopover($event)"><ion-icon name="more"></ion-icon></button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_arcgis_arcgis__["a" /* ArcgisProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_fields_fields__["a" /* FieldsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_state_state__["a" /* StateProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_state_state__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__help_help__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = (function () {
    function MapPage(navCtrl, popoverCtrl, stateProvider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.stateProvider = stateProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loading = null;
        this.step = 1;
        this.operation = null;
        this.drawExists = false;
        this.drawIsValid = false;
        //this.isTabletOrDesktop = this.platform.is('core') || this.platform.is('tablet');
        // <button ion-fab color="primary" [attr.mini]="!isTabletOrDesktop ? '' : null">
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loading = this.loadingCtrl.create({ content: 'Loading...' });
        this.loading.present();
    };
    MapPage.prototype.onMapLoaded = function () {
        this.loading.dismiss();
        this.loading = null;
    };
    MapPage.prototype.ionViewWillEnter = function () {
        this.operation = this.stateProvider.getOperation();
        var previousTab = this.navCtrl.parent.getSelected();
        if (previousTab.index === 0) {
            this.step = 1;
            this.drawExists = false;
            this.drawIsValid = false;
        }
    };
    MapPage.prototype.openHelpPopover = function (evt) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__help_help__["a" /* HelpPage */], { title: 'Reshaping ' + this.operation.fieldId, text: 'Step 1. Please draw the line ...Please draw the line ...Please draw the line ...' });
        popover.present({ ev: evt });
    };
    MapPage.prototype.onDrawExistenceChanged = function (existence) {
        this.drawExists = existence;
    };
    MapPage.prototype.onDrawValidityChanged = function (validity) {
        this.drawIsValid = validity;
    };
    MapPage.prototype.showToast = function (notification) {
        var toast = this.toastCtrl.create({
            message: notification.message,
            duration: 5000,
            position: 'middle',
            showCloseButton: true,
            cssClass: notification.type
        });
        toast.present();
    };
    MapPage.prototype.cancel = function () {
        this.stateProvider.clearStatus();
        this.navCtrl.parent.select(0);
    };
    MapPage.prototype.reset = function () {
        this.mapComponent.resetDraw();
    };
    MapPage.prototype.previous = function () {
        if (this.step === 2) {
            this.mapComponent.onStepOneEnter();
            this.step = 1;
        }
    };
    MapPage.prototype.next = function () {
        if (this.step === 1) {
            this.mapComponent.onStepTwoEnter();
            this.step = 2;
        }
        else if (this.step === 2) {
            this.stateProvider.setOperation(this.mapComponent.getOperation());
            this.navCtrl.parent.select(2);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_map_map__["a" /* MapComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_map_map__["a" /* MapComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_map_map__["a" /* MapComponent */]) === "function" && _a || Object)
    ], MapPage.prototype, "mapComponent", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\map\map.html"*/'<ion-header>\n    <ion-navbar color=\'primary\'>\n        <ion-title text-center>{{ operation?.title }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <map [operation]="operation" (mapLoaded)="onMapLoaded($event);" (drawExistenceChanged)="onDrawExistenceChanged($event);"\n        (drawValidityChanged)="onDrawValidityChanged($event);" (eventNotified)="showToast($event);"></map>\n    <ion-fab top right>\n        <button ion-fab mini color="light" (click)="openHelpPopover($event)"><ion-icon name="help"></ion-icon></button>\n    </ion-fab>\n    <ion-fab bottom left *ngIf="operation?.id !== \'view\' && step === 2">\n        <button ion-fab mini color="primary" (click)="previous()"><ion-icon name="arrow-back"></ion-icon></button>\n    </ion-fab>\n    <ion-fab bottom center [ngStyle]="{\'left\': operation?.id !== \'view\' && step === 1 ? \'40%\' : null }">\n        <button ion-fab mini color="light" (click)="cancel()"><ion-icon name="close"></ion-icon></button>\n    </ion-fab>\n    <ion-fab bottom center [ngStyle]="{\'left\': operation?.id !== \'view\' ? \'60%\' : null }" *ngIf="operation?.id !== \'view\' && step === 1">\n        <button ion-fab mini color="secondary" (click)="reset()" [disabled]="!drawExists"><ion-icon name="refresh"></ion-icon></button>\n    </ion-fab>\n    <ion-fab bottom right *ngIf="operation?.id !== \'view\'">\n        <button ion-fab mini color="primary" (click)="next()" [disabled]="!drawIsValid"><ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_state_state__["a" /* StateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_state_state__["a" /* StateProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _f || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_arcgis_arcgis__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fields_fields__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_interfaces__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__interfaces_interfaces__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = (function () {
    function MapComponent(arcgisProvider, fieldsProvider, events) {
        var _this = this;
        this.arcgisProvider = arcgisProvider;
        this.fieldsProvider = fieldsProvider;
        this.events = events;
        this.mapLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](true);
        this.drawExistenceChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](true);
        this.drawValidityChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](true);
        this.eventNotified = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](true);
        this.events.subscribe('fields:updating', function (changeDate, changeReason) {
            _this.save();
        });
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arcgisProvider.loadModules([
            'esri/Color',
            'esri/map',
            'esri/symbols/SimpleFillSymbol',
            'esri/symbols/SimpleLineSymbol',
            'esri/symbols/SimpleMarkerSymbol',
            'esri/toolbars/draw',
            'esri/toolbars/edit'
        ]).then(function (_a) {
            var Color = _a[0], Map = _a[1], SimpleFillSymbol = _a[2], SimpleLineSymbol = _a[3], SimpleMarkerSymbol = _a[4], Draw = _a[5], Edit = _a[6];
            var mapOptions = {
                center: [-5.9301, 54.5973],
                zoom: 12,
                basemap: "hybrid",
                showAttribution: false,
                showLabels: true
            };
            _this.map = new Map(_this.mapEl.nativeElement, mapOptions);
            _this.mapLoadListener = _this.map.on("load", _this.mapLoad.bind(_this));
            // Draw toolbar fill symbols
            _this.drawFillSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0, 1]), 2), new Color([0, 0, 0, 0.4]));
            var drawFillSymbol_dash = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new Color([255, 0, 0, 1]), 2), new Color([0, 0, 0, 0.4]));
            // Draw toolbar line symbols
            _this.drawLineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0, 1]), 2);
            var drawLineSymbol_dash = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new Color([255, 0, 0, 1]), 2);
            // Draw toolbar marker symbol
            _this.drawMarkerSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 18, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0, 1]), 2), new Color([0, 0, 0, 0.4]));
            // Draw toolbar
            _this.drawToolbar = new Draw(_this.map, { showTooltips: false });
            _this.drawToolbar.setFillSymbol(drawFillSymbol_dash);
            _this.drawToolbar.setLineSymbol(drawLineSymbol_dash);
            _this.drawToolbar.on("draw-complete", _this.drawComplete.bind(_this));
            // Edit toolbar marker symbol
            _this.editVertexSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 18, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0, 1]), 2), new Color([255, 0, 0, 1]));
            _this.editGhostVertexSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 18, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 255, 255, 0.25]), 2), new Color([0, 0, 0, 0.25]));
            // Edit toolbar
            _this.editToolbar = new Edit(_this.map);
            _this.editToolbar.on("vertex-move-stop", _this.vertexMoveStop.bind(_this));
        });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        if (this.map && this.map.loaded && changes.operation) {
            this.init();
        }
    };
    MapComponent.prototype.init = function () {
        var _this = this;
        var field = this.fieldsFeatureLayer.graphics.find(function (g) { return g.attributes["FIELDID"] === _this.operation.fieldId; });
        this.operation.field = field;
        this.clearGraphics();
        this.setSelection();
        this.zoomToField();
        this.activateDraw();
    };
    MapComponent.prototype.mapLoad = function () {
        var _this = this;
        this.mapLoadListener.remove();
        this.arcgisProvider.loadModules(["esri/layers/FeatureLayer"]).then(function (_a) {
            var FeatureLayer = _a[0];
            // Add Fields Feature Layer
            var fieldDetails = _this.fieldsProvider.getFieldLayerConstructorDetails();
            _this.fieldsFeatureLayer = new FeatureLayer(fieldDetails.featureCollection, fieldDetails.options);
            _this.map.addLayer(_this.fieldsFeatureLayer);
            // Add Selection Feature Layer
            var selectionDetails = _this.fieldsProvider.getSelectionLayerConstructorDetails();
            _this.selectionFeatureLayer = new FeatureLayer(selectionDetails.featureCollection, selectionDetails.options);
            _this.map.addLayer(_this.selectionFeatureLayer);
            // Initialize edit operation
            _this.init();
            // Notify map page
            _this.mapLoaded.emit();
        });
    };
    MapComponent.prototype.mapClick = function (evt) {
        var _this = this;
        if (evt.mapPoint) {
            this.arcgisProvider.loadModules(["esri/graphic"]).then(function (_a) {
                var Graphic = _a[0];
                _this.map.graphics.add(new Graphic(evt.mapPoint, _this.drawMarkerSymbol, null, null));
            });
        }
    };
    MapComponent.prototype.zoomToField = function () {
        var expandFactor = 1.1;
        if (this.operation.id === "merge") {
            expandFactor = 2;
        }
        this.map.setExtent(this.operation.field.geometry.getExtent().expand(expandFactor), true);
    };
    MapComponent.prototype.clearGraphics = function () {
        this.map.graphics.clear();
    };
    /******
      DRAW
     ******/
    MapComponent.prototype.activateDraw = function () {
        var _this = this;
        this.arcgisProvider.loadModules(["esri/toolbars/draw",]).then(function (_a) {
            var Draw = _a[0];
            switch (_this.operation.id) {
                case "split":
                case "merge":
                case "reshape":
                    _this.drawToolbar.activate(Draw[_this.operation.tool]);
                    _this.mapClickListener = _this.map.on("click", _this.mapClick.bind(_this));
                    break;
                case "view":
                    if (_this.mapClickListener) {
                        _this.mapClickListener.remove();
                    }
                    _this.drawToolbar.deactivate();
                    break;
            }
        });
    };
    MapComponent.prototype.deactivateDraw = function () {
        this.mapClickListener.remove();
        this.drawToolbar.deactivate();
    };
    MapComponent.prototype.resetDraw = function () {
        this.drawValidityChanged.emit(false);
        this.drawExistenceChanged.emit(false);
        this.clearGraphics();
        this.activateDraw();
    };
    MapComponent.prototype.drawComplete = function (evt) {
        this.drawExistenceChanged.emit(true);
        this.deactivateDraw();
        this.clearGraphics();
        this.displayDraw(evt.geometry);
        this.validateEdit(evt.geometry);
    };
    MapComponent.prototype.displayDraw = function (geometry) {
        var _this = this;
        this.arcgisProvider.loadModules(["esri/graphic"]).then(function (_a) {
            var Graphic = _a[0];
            var graphic = null;
            switch (_this.operation.tool) {
                case "POLYLINE":
                    graphic = new Graphic(geometry, _this.drawLineSymbol, null, null);
                    _this.map.graphics.add(graphic);
                    _this.activateEdit(graphic);
                    break;
                case "POINT":
                    graphic = new Graphic(geometry, _this.editVertexSymbol, null, null);
                    _this.map.graphics.add(graphic);
                    break;
                case "POLYGON":
                    graphic = new Graphic(geometry, _this.drawFillSymbol, null, null);
                    _this.map.graphics.add(graphic);
                    _this.activateEdit(graphic);
                    break;
            }
        });
    };
    MapComponent.prototype.activateEdit = function (graphic) {
        var _this = this;
        this.arcgisProvider.loadModules(["esri/toolbars/edit"]).then(function (_a) {
            var Edit = _a[0];
            var tool = Edit.EDIT_VERTICES.toString();
            var options = {
                allowAddVertices: true,
                allowDeleteVertices: true,
                vertexSymbol: _this.editVertexSymbol,
                ghostVertexSymbol: _this.editGhostVertexSymbol
            };
            _this.map.disableMapNavigation();
            _this.editToolbar.activate(tool, graphic, options);
        });
    };
    MapComponent.prototype.deactivateEdit = function () {
        this.editToolbar.deactivate();
        this.map.enableMapNavigation();
    };
    MapComponent.prototype.vertexMoveStop = function (evt) {
        this.validateEdit(evt.graphic.geometry);
    };
    MapComponent.prototype.validateEdit = function (geometry) {
        switch (this.operation.id) {
            case "split":
                this.split(geometry);
                break;
            case "merge":
                this.merge(geometry);
                break;
            case "reshape":
                this.reshape(geometry);
                break;
        }
    };
    /***********
      SELECTION
     ***********/
    MapComponent.prototype.setSelection = function () {
        var _this = this;
        this.arcgisProvider.loadModules(["esri/graphic", "esri/geometry/geometryEngine"]).then(function (_a) {
            var Graphic = _a[0], geometryEngine = _a[1];
            var selectionSet = [];
            switch (_this.operation.id) {
                case "split":
                case "reshape":
                    selectionSet.push(new Graphic(_this.operation.field.toJson()));
                    break;
                case "merge":
                    var intersectingFields = _this.fieldsFeatureLayer.graphics
                        .filter(function (graphic) { return geometryEngine.intersects(_this.operation.field.geometry, graphic.geometry); })
                        .filter(function (graphic) { return _this.operation.field.attributes.OBJECTID !== graphic.attributes.OBJECTID; });
                    intersectingFields.forEach(function (graphic) { selectionSet.push(new Graphic(graphic.toJson())); });
                    //if(intersectingFields.length === 0) { this.toastr.warning("This field has no contiguous fields and cannot be merged.", "Warning."); }
                    break;
            }
            _this.operation.selectionSet = selectionSet;
            _this.displaySelection();
            // if (this.operation.id === "merge" && selectionSet.length > 0) { this.zoomToSelection(); }
        });
    };
    MapComponent.prototype.displaySelection = function () {
        var _this = this;
        // Fields
        var objectIds = this.operation.selectionSet.map(function (graphic) { return graphic.attributes.OBJECTID; });
        this.fieldsFeatureLayer.graphics.forEach(function (graphic) { graphic.visible = objectIds.indexOf(graphic.attributes.OBJECTID) === -1; });
        this.fieldsFeatureLayer.redraw();
        // Selection
        this.selectionFeatureLayer.clear();
        this.operation.selectionSet.forEach(function (graphic) { _this.selectionFeatureLayer.add(graphic); });
        this.selectionFeatureLayer.refresh();
    };
    MapComponent.prototype.clearSelection = function () {
        // Fields
        this.fieldsFeatureLayer.graphics.forEach(function (graphic) { graphic.visible = true; });
        this.fieldsFeatureLayer.redraw();
        // Selection
        this.selectionFeatureLayer.clear();
        this.selectionFeatureLayer.refresh();
    };
    MapComponent.prototype.zoomToSelection = function () {
        var _this = this;
        this.arcgisProvider.loadModules(["esri/graphic", "esri/graphicsUtils"]).then(function (_a) {
            var Graphic = _a[0], graphicsUtils = _a[1];
            var graphics = _this.operation.selectionSet.slice(0);
            graphics.push(new Graphic(_this.operation.field.toJson()));
            var extent = graphicsUtils.graphicsExtent(graphics);
            _this.map.setExtent(extent, false);
        });
    };
    /******
      EDIT
     ******/
    MapComponent.prototype.split = function (geometry) {
        var _this = this;
        this.arcgisProvider.loadModules(["esri/graphic", "esri/geometry/geometryEngine"])
            .then(function (_a) {
            var Graphic = _a[0], geometryEngine = _a[1];
            // Validation (disjoint)
            var intersects = geometryEngine.intersects(geometry, _this.operation.field.geometry);
            if (intersects !== true) {
                _this.drawValidityChanged.emit(false);
                _this.eventNotified.emit({ message: 'Invalid geometry. The line drawn does not intersect with the target field.', type: 'toast-error' });
                return;
            }
            // Validation (multiple rings). Cut() always returns two geometries.
            var parts = geometryEngine.cut(_this.operation.field.geometry, geometry);
            var multiRingParts = parts.filter(function (item) { return item.rings.length > 1; });
            if (multiRingParts.length > 0) {
                _this.drawValidityChanged.emit(false);
                _this.eventNotified.emit({ message: 'Invalid geometry. The resulting geometry cannot have multiple parts or contain holes.', type: 'toast-error' });
                return;
            }
            /*** PRESET EDIT ***/
            _this.operation.geometry = geometry;
            // Get field number(s)
            var fieldSurveyNumber = _this.operation.field.attributes.FIELDID.substring(0, 9);
            var remainder = _this.operation.field.attributes.FIELDID.substring(10);
            var fieldNumber = remainder.indexOf("/") === -1 ? remainder : remainder.substring(0, remainder.indexOf("/"));
            var newLetterA = "A";
            var newLetterB = "B";
            if (remainder.indexOf("/") !== -1) {
                var existingLetters = _this.fieldsFeatureLayer.graphics
                    .map(function (graphic) { return graphic.attributes.FIELDID; })
                    .filter(function (fieldId) { return fieldId.indexOf(fieldSurveyNumber + "/" + fieldNumber) !== -1; })
                    .map(function (fieldId) { return fieldId.substring(fieldId.lastIndexOf("/") + 1); })
                    .sort();
                newLetterA = String.fromCharCode(existingLetters[existingLetters.length - 1].charCodeAt(0) + 1);
                newLetterB = String.fromCharCode(existingLetters[existingLetters.length - 1].charCodeAt(0) + 2);
            }
            // Get area(s)
            var area = geometryEngine.geodesicArea(_this.operation.field.geometry, "hectares");
            var areaA = geometryEngine.geodesicArea(parts[0], "hectares");
            var areaB = geometryEngine.geodesicArea(parts[1], "hectares");
            var mea = _this.operation.field.attributes.FNC_MEA_AREA_HA;
            var meaA = (areaA / area) * mea;
            var meaB = (areaB / area) * mea;
            // Preset adds, updates and deletes
            var addedFeature = new Graphic(_this.operation.field.toJson()).setGeometry(parts[0]);
            addedFeature.attributes.FIELDID = fieldSurveyNumber + "/" + fieldNumber + "/" + newLetterA;
            addedFeature.attributes.FNC_CALC_AREA_HA = areaA;
            addedFeature.attributes.FNC_MEA_AREA_HA = meaA;
            var updatedFeature = new Graphic(_this.operation.field.toJson()).setGeometry(parts[1]);
            updatedFeature.attributes.FIELDID = fieldSurveyNumber + "/" + fieldNumber + "/" + newLetterB;
            updatedFeature.attributes.FNC_CALC_AREA_HA = areaB;
            updatedFeature.attributes.FNC_MEA_AREA_HA = meaB;
            _this.operation.adds = [addedFeature];
            _this.operation.updates = [updatedFeature];
            _this.drawValidityChanged.emit(true);
        });
    };
    MapComponent.prototype.merge = function (geometry) {
        var _this = this;
        this.arcgisProvider.loadModules(["esri/graphic", "esri/geometry/geometryEngine"])
            .then(function (_a) {
            var Graphic = _a[0], geometryEngine = _a[1];
            var buffer = geometryEngine.buffer(geometry, 3, "meters");
            // Validation (invalid selection)
            var intersectingFields = _this.operation.selectionSet
                .filter(function (graphic) { return geometryEngine.intersects(buffer, graphic.geometry); });
            if (intersectingFields.length === 0) {
                _this.drawValidityChanged.emit(false);
                _this.eventNotified.emit({ message: 'Invalid selection. The location clicked does not intersect with any valid field.', type: 'toast-error' });
                return;
            }
            else if (intersectingFields.length > 1) {
                _this.drawValidityChanged.emit(false);
                _this.eventNotified.emit({ message: 'Invalid selection. The location clicked intersects with more than one valid field.', type: 'toast-error' });
                return;
            }
            // Validation (multiple rings).
            var union = geometryEngine.union([_this.operation.field.geometry, intersectingFields[0].geometry]);
            if (union.rings.length > 1) {
                union.rings.length;
                _this.eventNotified.emit({ message: 'Invalid geometry. The resulting geometry cannot have multiple parts or contain holes.', type: 'toast-error' });
                _this.drawValidityChanged.emit(false);
                return;
            }
            /*** PRESET EDIT ***/
            _this.operation.geometry = geometry;
            // Get field number(s)
            var fieldSurveyNumberA = _this.operation.field.attributes.FIELDID.substring(0, 9);
            var remainderA = _this.operation.field.attributes.FIELDID.substring(10);
            var fieldNumberA = parseInt(remainderA.indexOf("/") === -1 ? remainderA : remainderA.substring(0, remainderA.indexOf("/")));
            var fieldSurveyNumberB = intersectingFields[0].attributes.FIELDID.substring(0, 9);
            var remainderB = intersectingFields[0].attributes.FIELDID.substring(10);
            var fieldNumberB = parseInt(remainderB.indexOf("/") === -1 ? remainderB : remainderB.substring(0, remainderB.indexOf("/")));
            var newFieldId = _this.operation.field.attributes.FIELDID;
            if (fieldSurveyNumberA === fieldSurveyNumberB && fieldNumberA > fieldNumberB) {
                newFieldId = intersectingFields[0].attributes.FIELDID;
            }
            // Get area(s)
            var areaA = _this.operation.field.attributes.FNC_CALC_AREA_HA;
            var meaA = _this.operation.field.attributes.FNC_MEA_AREA_HA;
            var areaB = intersectingFields[0].attributes.FNC_CALC_AREA_HA;
            var meaB = intersectingFields[0].attributes.FNC_MEA_AREA_HA;
            var area = areaA + areaB;
            var mea = meaA + meaB;
            // Preset adds, updates and deletes
            var updatedFeature = new Graphic(_this.operation.field.toJson()).setGeometry(union);
            updatedFeature.attributes.FIELDID = newFieldId;
            updatedFeature.attributes.FNC_CALC_AREA_HA = area;
            updatedFeature.attributes.FNC_MEA_AREA_HA = mea;
            var deletedFeature = new Graphic(intersectingFields[0].toJson());
            _this.operation.updates = [updatedFeature];
            _this.operation.deletes = [deletedFeature];
            _this.drawValidityChanged.emit(true);
        });
    };
    MapComponent.prototype.reshape = function (geometry) {
        var _this = this;
        this.arcgisProvider.loadModules(["esri/graphic", "esri/geometry/geometryEngine"])
            .then(function (_a) {
            var Graphic = _a[0], geometryEngine = _a[1];
            // Validation (disjoint)
            var intersects = geometryEngine.intersects(geometry, _this.operation.field.geometry);
            if (intersects !== true) {
                _this.drawValidityChanged.emit(false);
                _this.eventNotified.emit({ message: 'Invalid geometry. The area drawn does not intersect with the target field.', type: 'toast-error' });
                return;
            }
            // Validation (multiple rings). Cut() always returns two geometries.
            var diff = geometryEngine.difference(_this.operation.field.geometry, geometry);
            if (diff.rings.length > 1) {
                _this.drawValidityChanged.emit(false);
                _this.eventNotified.emit({ message: 'Invalid geometry. The resulting geometry cannot have multiple parts or contain holes.', type: 'toast-error' });
                return;
            }
            /*** PRESET EDIT ***/
            _this.operation.geometry = geometry;
            // Get area(s)
            var prevArea = _this.operation.field.attributes.FNC_CALC_AREA_HA;
            var prevMea = _this.operation.field.attributes.FNC_MEA_AREA_HA;
            var area = geometryEngine.geodesicArea(diff, "hectares");
            var mea = (area / prevArea) * prevMea;
            // Preset adds, updates and deletes
            var updatedFeature = new Graphic(_this.operation.field.toJson()).setGeometry(diff);
            updatedFeature.attributes.FNC_CALC_AREA_HA = area;
            updatedFeature.attributes.FNC_MEA_AREA_HA = mea;
            _this.operation.updates = [updatedFeature];
            _this.drawValidityChanged.emit(true);
        });
    };
    MapComponent.prototype.onStepOneEnter = function () {
        this.displaySelection();
        this.displayDraw(this.operation.geometry);
    };
    MapComponent.prototype.onStepTwoEnter = function () {
        var _this = this;
        this.clearGraphics();
        // Fields
        var objectIds = [this.operation.field.attributes.OBJECTID];
        if (this.operation.deletes) {
            this.operation.deletes.forEach(function (graphic) { objectIds.push(graphic.attributes.OBJECTID); });
        }
        // // TODO for 'Add land to this field'
        // if (this.operation.impactedFields) {
        //   this.operation.impactedFields.forEach((graphic: Graphic) => { objectIds.push(graphic.attributes.OBJECTID); });
        // }
        this.fieldsFeatureLayer.graphics.forEach(function (graphic) { graphic.visible = objectIds.indexOf(graphic.attributes.OBJECTID) === -1; });
        this.fieldsFeatureLayer.redraw();
        // Selection      
        this.selectionFeatureLayer.clear();
        if (this.operation.adds) {
            this.operation.adds.forEach(function (graphic) { _this.selectionFeatureLayer.add(graphic); });
        }
        if (this.operation.updates) {
            this.operation.updates.forEach(function (graphic) { _this.selectionFeatureLayer.add(graphic); });
        }
        this.selectionFeatureLayer.refresh();
    };
    /******
      SAVE
     ******/
    MapComponent.prototype.save = function () {
        this.fieldsFeatureLayer.applyEdits(this.operation.adds, this.operation.updates, this.operation.deletes, function () {
            this.clearSelection();
            this.events.publish('fields:updated:success', this.fieldsFeatureLayer.graphics);
        }.bind(this), function () {
            this.events.publish('fields:updated:failure');
        });
    };
    /*******
      UTILS
     *******/
    MapComponent.prototype.getOperation = function () {
        return this.operation;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapDiv'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], MapComponent.prototype, "mapEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__interfaces_interfaces__["IOperation"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__interfaces_interfaces__["IOperation"]) === "function" && _b || Object)
    ], MapComponent.prototype, "operation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]) === "function" && _c || Object)
    ], MapComponent.prototype, "mapLoaded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]) === "function" && _d || Object)
    ], MapComponent.prototype, "drawExistenceChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]) === "function" && _e || Object)
    ], MapComponent.prototype, "drawValidityChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]) === "function" && _f || Object)
    ], MapComponent.prototype, "eventNotified", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\components\map\map.html"*/'<div #mapDiv></div>'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\components\map\map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__providers_arcgis_arcgis__["a" /* ArcgisProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_arcgis_arcgis__["a" /* ArcgisProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__providers_fields_fields__["a" /* FieldsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_fields_fields__["a" /* FieldsProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _j || Object])
    ], MapComponent);
    return MapComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_state_state__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormPage = (function () {
    function FormPage(navCtrl, stateProvider, events) {
        this.navCtrl = navCtrl;
        this.stateProvider = stateProvider;
        this.events = events;
        this.operation = null;
    }
    FormPage.prototype.ionViewWillEnter = function () {
        this.operation = this.stateProvider.getOperation();
    };
    FormPage.prototype.cancel = function () {
        this.stateProvider.clearStatus();
        this.navCtrl.parent.select(0);
    };
    FormPage.prototype.previous = function () {
        this.navCtrl.parent.select(1);
    };
    FormPage.prototype.save = function () {
        this.events.publish('fields:updating', this.changeDate, this.changeReason);
        this.stateProvider.clearStatus();
        this.navCtrl.parent.select(0);
    };
    FormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form',template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\form\form.html"*/'<ion-header>\n    <ion-navbar color=\'primary\'>\n        <ion-title text-center>{{ operation?.title }}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab top right (click)="openHelpPopover($event)">\n        <button ion-fab mini color="light"><ion-icon name="help"></ion-icon></button>\n    </ion-fab>\n    <ion-fab bottom left (click)="previous()" *ngIf="operation?.id !== \'view\'">\n        <button ion-fab mini color="primary"><ion-icon name="arrow-back"></ion-icon></button>\n    </ion-fab>\n    <ion-fab bottom center (click)="cancel()" [ngStyle]="{\'left\': operation?.id !== \'view\' ? \'40%\' : null }">\n        <button ion-fab mini color="dark"><ion-icon name="close"></ion-icon></button>\n    </ion-fab>\n    <ion-fab bottom center (click)="save()" [ngStyle]="{\'left\': operation?.id !== \'view\' ? \'60%\' : null }" *ngIf="operation?.id !== \'view\'">\n        <button ion-fab mini color="danger"><ion-icon name="checkmark"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\pages\form\form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_state_state__["a" /* StateProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], FormPage);
    return FormPage;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_form_form__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_arcgis_arcgis__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_actions_actions_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_filters_filters_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_fields_fields__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_state_state__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_form_form__["a" /* FormPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/actions/actions.module#ActionsPageModule', name: 'ActionsPage', segment: 'actions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filters/filters.module#FiltersPageModule', name: 'FiltersPage', segment: 'filters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_actions_actions_module__["ActionsPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_filters_filters_module__["FiltersPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help_module__["HelpPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_form_form__["a" /* FormPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_arcgis_arcgis__["a" /* ArcgisProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_fields_fields__["a" /* FieldsProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_state_state__["a" /* StateProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"d:\Profiles\ljLopez\Desktop\Mobile\ionic-tabs-map\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

;
;
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArcgisProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_esri_loader__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_esri_loader__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArcgisProvider = (function () {
    function ArcgisProvider() {
        this.arcgisApiPromise = __WEBPACK_IMPORTED_MODULE_1_esri_loader__["loadScript"]({ url: '//js.arcgis.com/3.23compact/' });
    }
    ArcgisProvider.prototype.loadModules = function (modules) {
        return this.arcgisApiPromise.then(function () {
            return __WEBPACK_IMPORTED_MODULE_1_esri_loader__["loadModules"](modules);
        });
    };
    ArcgisProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ArcgisProvider);
    return ArcgisProvider;
}());

//# sourceMappingURL=arcgis.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateProvider = (function () {
    function StateProvider() {
        this.operation = null;
    }
    StateProvider.prototype.getOperation = function () {
        return this.operation;
    };
    StateProvider.prototype.setOperation = function (operation) {
        this.operation = operation;
    };
    StateProvider.prototype.clearStatus = function () {
        this.operation = null;
    };
    StateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StateProvider);
    return StateProvider;
}());

//# sourceMappingURL=state.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map