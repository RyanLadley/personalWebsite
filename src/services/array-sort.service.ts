import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ArraySort {

    sort(array, property, ascending, type = null) {
        if (array.length <= 1) {
            return array;
        }

        //This finds out what the type of the property is, then sort accordingly
        //We loop through the array to find the frst none null value to sort by
        if (type == null) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][property] != null) {
                    type = typeof array[i][property];
                    break;
                }
            }
        }
        switch (type) {
            case "string":
                return this._sortByString(array, property, ascending);

            case "date":
                return this._sortByDate(array, property, ascending);

            case "number":
                return this._sortByNumber(array, property, ascending);
            default:
                console.log("Unknown Type, Unable To Sort")
                return array;
        }
    }

    private _sortByString(array, property, ascending) {
        array.sort(function (a, b) {
            if (!ascending) {
                var temp = a
                a = b
                b = temp
            }

            if (a[property] == null)
                a[property] = "";

            if (b[property] == null)
                b[property] = "";

            var stringA = a[property].toLowerCase(), stringB = b[property].toLowerCase();

            if (stringA < stringB) {
                return -1;
            }
            if (stringA > stringB) {
                return 1;
            }
            return 0 
        })

        return array;
    }

    private _sortByDate(array, property, ascending) {
        array.sort(function (a, b) {
            if (!ascending) {
                var temp = a
                a = b
                b = temp
            }

            if (a == null) {
                return -1
            }
            else if (b == null) {
                return 1
            }
            else {
                let aDate: Date = new Date(a);
                let bDate: Date = new Date(b);

                return aDate > bDate ? 1 : -1
            }
        });

        return array;
    }

    private _sortByNumber(array, property, ascending) {
        array.sort(function (a, b) {
            if (!ascending) {
                var temp = a
                a = b
                b = temp
            }

            
            if (a == null) {
                return -1
            }
            else if (b  == null) {
                return 1
            }
            else {
                return a[property] - b[property]
            }
        });

        return array;
    }
}