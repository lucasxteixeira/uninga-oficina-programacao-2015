/**
 * Grails Date Class 
 *
 * @author  José Carlos S.A. Tissei <z.94@live.com>
 * @link    https://github.com/alleen94/GrailsDate
 * @version 1.0
 * @see     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
 */

function GrailsDate(date) {
	this.year = date.substring(0,4);
	this.month = date.substring(5,7);
	this.day = date.substring(8,10);
	this.hours = date.substring(11,13);
	this.minutes = date.substring(14,16);
	this.seconds = date.substring(17,19);

};

GrailsDate.prototype.setYear = function(year) {
    try {
        if (year.length == 4 && parseInt(year) > 1000 && parseInt(year) <= 3000) {
            this.year = year;
        } else {
            throw "invalid year.";
        }
    } catch(e) {
        console.log(e.message);
    }
};

GrailsDate.prototype.getYear = function() {
    return this.year;
};

GrailsDate.prototype.setMonth = function(month) {
    try {
        if ((month.length == 2 || month.length == 1) && parseInt(month) > 0 && parseInt(month) <= 12) {
            this.month = month;
        } else {
            throw "invalid month.";
        }
    } catch(e) {
        console.log(e.message);
    }
};

GrailsDate.prototype.getMonth = function() {
    return this.month;
};

GrailsDate.prototype.setDay = function(day) {
    try {
        if ((day.length == 2 || day.length == 1) && parseInt(day) > 0 && parseInt(day) <= 31) {
            this.day = day;
        } else {
            throw "invalid day.";
        }
    } catch(e) {
        console.log(e.message);
    } 
};

GrailsDate.prototype.getDay = function() {
    return this.day;
};
        
GrailsDate.prototype.setHours = function(hours) {
    try {
        if ((hours.length == 2 || hours.length == 1) && parseInt(hours) > -1 && parseInt(hours) <= 24) {
            this.hours = hours;
        } else {
            throw "invalid hour.";
        }
    } catch(e) {
        console.log(e.message);
    } 
};

GrailsDate.prototype.getHours = function() {
    return this.hours;
};

GrailsDate.prototype.setMinutes = function(minutes) {
    try {
        if ((minutes.length == 2 || minutes.length == 1) && parseInt(minutes) > -1 && parseInt(minutes) <= 59) {
            this.minutes = minutes;
        } else {
            throw "invalid minutes.";
        }
    } catch(e) {
        console.log(e.message);
    } 
};

GrailsDate.prototype.getMinutes = function() {
    return this.minutes;
};
        
GrailsDate.prototype.setSeconds = function(seconds) {
    try {
        if ((seconds.length == 2 || seconds.length == 1) && parseInt(seconds) > -1 && parseInt(seconds) <= 59) {
            this.seconds = seconds;
        } else {
            throw "invalid seconds.";
        }
    } catch(e) {
        console.log(e.message);
    } 
};

GrailsDate.prototype.getSeconds = function() {
    return this.seconds;
};
      
GrailsDate.prototype.getDate =  function(mask) {
    if(!mask) mask = 'dd-mm-yyyy';
    var s = mask.substring(2,3);
    switch(mask) {
        case 'dd-mm-yyyy':
            return this.day + s + this.month + s + this.year;
        case 'dd-yyyy-mm':
            return this.day + s + this.year + s + this.month;
        case 'yyyy-mm-dd':
            return this.year + s + this.month + s + this.day;
        case 'yyyy-dd-mm':
            return this.year + s + this.day + s + this.month;
        case 'mm-dd-yyyy':
            return this.month + s + this.day + s + this.year;
        case 'mm-yyyy-dd':
            return this.month + s + this.year + s + this.day;
    }
};
      
GrailsDate.prototype.getTime = function() {
    return this.hours + ':' + this.minutes + ':' + this.seconds;
};

GrailsDate.prototype.datePickerUpdate = function(select, type) {
    type = type.charAt(0).toUpperCase() + type.slice(1);
    for (var i = 0; i <= select.length-1; i++) {
        if (select.options[i].selected && parseInt(select.options[i].value) != parseInt(this['get'+type]())) {
            select.options[i].selected = false;
        } else if (!select.options[i].selected && parseInt(select.options[i].value) == parseInt(this['get'+type]())) {
            select.options[i].selected = true;
        }
    }; 
};