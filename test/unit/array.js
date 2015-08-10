'use strict';

var Extenjsons = require('../../src/extenjsons');

var ArrayTests = (function() {

    var _testsPassed = 0;

    var _arr = [1,2,3,4,5];
    var _objArr = [{id: 1,text: 'Test'},{id: 2,text: 'Test'}];

    var _tests = {
        insertBefore: function() {
            var obj = 7;
            Extenjsons.Array.insertBefore(_arr, obj, function(item) {
                return item === 4;
            });

            return Extenjsons.Test.assert(_arr[3] === obj);
        },
        insertBeforeWithId: function() {
            var obj =  {id:3, text: 'Blah'};

            Extenjsons.Array.insertBefore(_objArr, obj, function(item) {
                return item.id === 5;
            });

            return Extenjsons.Test.assert(_objArr[1].id === obj.id, 'IDs are equal');
        },
        toArray: function() {
            var obj = {
                '1': 1,
                '2': 2
            };

            var newArr = Extenjsons.Array.toArray(obj);

            return Extenjsons.Test.assert(Array.isArray(newArr));
        }
    };

    return {
        run: function() {
            for(var key in _tests){
                try {
                    var success = _tests[key]();

                    if(success){
                        _testsPassed++;
                    }
                } catch(err){
                    console.log(err);
                }

            }

            this.getResults();
        },
        getResults: function() {
            var _totalTests = Object.keys(_tests).length;
            console.log('Results: ' + _testsPassed + '/' + _totalTests);
        }
    }
})();

ArrayTests.run();



