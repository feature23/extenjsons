/* The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

'use strict';
var  Extenjsons = Extenjsons || {};
Extenjsons.version = '0.1.0';

Extenjsons.Flux = Extenjsons.Flux || {};
Extenjsons.Flux.uuid = function() {
        var i, random;
        var uuid = '';
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }

            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
        }
        return uuid;
};

Extenjsons.Array = Extenjsons.Array || {};
Extenjsons.Array.remove = function(arr, predicate) {
    var removeIndex = -1;
    var count = arr.length;

    while(count--) {
        if(predicate(arr[count])){
            removeIndex = count;
            break;
        }
    }

    if(removeIndex > -1) {
        arr.splice(removeIndex, 1);
    }
};
Extenjsons.Array.insertBefore = function(arr, obj, predicate) {
    var insertIndex = -1;
    var count = arr.length;

    while(count--) {
        if(predicate(arr[count])){
            insertIndex = count;
            break;
        }
    }

    if(insertIndex > -1) {
        arr.splice(insertIndex - 1, 0, obj);
    }
};
Extenjsons.Array.insertAfter = function(arr, obj, predicate) {
    var insertIndex = -1;
    var count = arr.length;

    while(count--) {
        if(predicate(arr[count])){
            insertIndex = count;
            break;
        }
    }

    if(insertIndex > -1) {
        arr.splice(insertIndex, 0, obj);
    }
};
Extenjsons.Array.toArray = function(obj) {
    var arr = [];

    for(var key in obj) {
        if(obj.hasOwnProperty(key)){
            arr.push(obj[key]);
        }
    }

    return arr;
};

Extenjsons.URL = Extenjsons.URL || {};
Extenjsons.URL.getParameterByName = function(parameterName) {
    parameterName = parameterName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + parameterName + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

Extenjsons.Date = Extenjsons.Date || {};

Extenjsons.Format = Extenjsons.Format || {};
Extenjsons.Format.formatDecimalAsString = function(num, places) {
    if(num) {
        return num.toFixed(places).replace(/(\d)(?=(\d{3})+\.\d\d$)/g,"$1,");
    } else {
        return 0;
    }
};

Extenjsons.Format.formatDecimal = function(num, places) {
    if(num) {
        return parseFloat(num.toFixed(places));
    } else {
        return 0;
    }
};

Extenjsons.Test = Extenjsons.Test || {};
Extenjsons.Test.assert = function(condition, message) {
    if(!condition) {
        message = message || 'Assertion Failed';

        if(typeof Error !== 'undefined') {
            throw new Error('Assertion Failed: ' + message);
        }

        throw message;
    }
};

