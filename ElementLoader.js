/*
Copyright (c) 2013 growlScript

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
THE SOFTWARE.
*/

/*jslint vars: true, plusplus: true, eqeq: true, devel: true, nomen: true,  regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, $, document */
define(function (require, exports, module) {
    "use strict";
    
    var _loader = $(document.createElement("iframe")).attr("href", "about:blank").hide();
    _loader.appendTo(document.body);
    
    /**
     * @constructor
     * HTMLElement loader space
     */
    function ElementLoader() {
        this._loader = _loader[0].contentDocument.body;
    }
    
    /**
     * Element append target
     * @type {HTMLBodyElement}
     */
    ElementLoader.prototype._loader = null;
    
    /**
     * Load element
     * @param {HTMLElement} element
     * @param {function(event)} callback
     */
    ElementLoader.prototype.load = function (element, callback) {
        if (typeof element === "string") {
            element = $.parseHTML(element);
        }
        
        $(element).load(callback).appendTo(this._loader);
    };
    
    /**
     * @param {HTMLElement}
     */
    ElementLoader.prototype.unload = function (element) {
        element.remove();
    };
    
    return new ElementLoader();
});