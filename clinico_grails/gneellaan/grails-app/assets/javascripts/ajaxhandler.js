/**
 * Ajax Handler Class 
 *
 * @author  José Carlos S.A. Tissei <z.94@live.com>
 * @link    https://github.com/alleen94/AjaxHandlerClass-
 * @version 1.0
 * @see     http://www.w3schools.com/ajax/ajax_examples.asp
 * @see     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
 */
function AjaxHandler(element, url, method, after, transition, alert, log, params) {
	try {
		/**
		  * The XMLHttpRequest object is used to exchange data with a server behind the scenes.
		  *
		  * @see http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp
		  *
		  * @var object
		  */
		try {
			/**
			  * code for IE7+, Firefox, Chrome, Opera, Safari
			  */
			this.xmlhttp = new XMLHttpRequest();
		} catch (e) {
			try {
				/**
				  *code for IE6, IE5
				  */
				this.xmlhttp = new ActiveXObject(Microsoft.XMLHTTP);
			} catch (e) {
				this.alertIf("Unable to create XMLHTTP object!(" + e.message + ").");
				throw "";
			}
		}
        /**
         * Checks if the constructor params have been informed has an object and
         * set the data in their respective variables.
         */
        try {
            if (( !!element ) && ( element.constructor === Object )) {
                url = element.url;
                method = element.method;
                after = element.after;
                alert = element.alert;
                log = element.log;
                params = element.params;
                transition = element.transition;
                element = element.element;
            }
        } catch (e) {
            this.alertIf(e.message);
            this.logIf(e.message);
        }
		/**
		  * The element id that should receive the .innerHTML content
		  * or you can set it as '$var' to return you responseText.
		  *
		  * @var string
		  */
		try {
			if (( element === "" ) || ( element === null )) {
                throw "the element attribute can't be null.";
            } else if ( element === undefined ) {
                throw "the element attribute can't be undefined.";
            } else {
                /**
                 * Will be set as true if its value is '$var', so it will return the
                 * responseText value instead of sending it to an element innerHTML.
                 */
                if ( element === '$var' ) {
                    this.element = false;
                    this.response = {};
                } else {
                    this.element = element + '';
                }
            }
		} catch (e) {
			this.alertIf(e);
			throw "";
		}
		/**
		  * The location of the file on the server.
		  *
		  * @see http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp
		  *
		  * @var string
		  */
		try {
			if (( url === "" ) || ( url === null )) {
                throw "the url attribute can't be null.";
            } else if ( url === undefined ) {
                throw "the url attribute can't be undefined.";
            } else {
                this.url = url;
            }
		} catch (e) {
			this.alertIf(e);
			throw "";
		}
		/**
		  * The type of request: GET or POST.
		  *
		  * It will be set like GET by default, if set like null or undefined.
		  *
		  * @var string
		  */
		try {
			if ( !method ) {
                this.method = 'GET';
            } else if ( ( ( method = method.toUpperCase() ) === 'GET' ) || ( ( method = method.toUpperCase() ) === 'POST' ) ) {
                this.method = method;
            } else {
                throw "invalid method, it has to be set like GET or POST.";
            }    
		} catch (e) {
			this.alertIf(e);
			throw "";
		}
		/**
		  * A function to be executed after te response has been received.
		  *
		  * @var function
		  */
		try {
			if ( after != null && after != undefined ) {
                this.after = after;
            } else {
                throw "invalid parameter, a function is resquested to this atribute";
            }    
		} catch (e) {
			this.alertIf(e);
			throw "";
		}
        /**
         * Checks if the trasition param has been informed, if not
         * it will be set has false by default;
         */
        try {
            if ( !transition ) {
                this.transition = false;
            } else {
                this.transition = !!transition;
            }
        } catch(e){
            this.alertIf( e.message );
			throw "";
        }
        /**
         * Checks if the exception messages will be showed in a alert window
         * 
         * @var bool, if null or undefined it will be set as false by default
         */
        try {
            if ( alert ) {
                this.alert = !!alert;
            } else {
                this.alert = false;
            }
        } catch (e) {
            this.alertIf( e.message );
			throw "";
        }
        /**
         * Checks if the logs are enabled
         * 
         * @var bool, if null or undefined it will be set as false by default
         */
        try {
            if ( log ) {
                this.log = !!log;
            } else {
                this.log = false;
            }
        } catch (e) {
            this.alertIf( e.message );
			throw "";
        }
		/**
		  * The parameters sent to other file in server.
		  *
		  * Has to be formatted like the GET atributes. ex.:(name=jack&age=18).
		  *
		  * It can also be set in the sendRequest method.
		  *
		  * @var string, it also can be null or undefined
		  */
		try {
            if ( params ) {
                this.params = this.transformParam(params);
            }
		} catch (e) {
			this.alertIf( e.message );
			throw "";
		}
		this.logIf("Ajax object instance initialized.");
	} catch (e) {
		this.alertIf("The object instance has been initialized with errors.");
		this.logIf("The object instance has been initialized with errors.");
	}
};
/**
  * Sends a request to the server and use the handleChange method to handle the response.
  *
  * @param  params  the parameter sent to a server file.
  */
AjaxHandler.prototype.sendRequest = function( params ) {
	try {
		this.element.innerHTML = "";
		this.xmlhttp.onreadystatechange = this.handleChange();
		if ( params ) {
            this.params = this.transformParam( params );
            if( this.method === 'GET' ){
                this.params = '?' + this.params;
            }
        }else{
            this.params = '';
        }
		if ( this.method === 'GET' ){
			this.xmlhttp.open( this.method, this.url + this.params, true );
            this.xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			this.xmlhttp.send();
		}else if( this.method === 'POST' ){
			this.xmlhttp.open( this.method, this.url, true );
			this.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            this.xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			this.xmlhttp.send( this.params );
		}
        this.logIf("Request sent to server.");
	} catch (e) {
		this.alertIf( e.message );
        this.logIf( e.message );
	}
};
/**
  * Checks the readyState and the status of the object, when the readyState is 4 and
  * and status 200 triggers the handleServerResponse method.
  *
  * @see http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp
  */
AjaxHandler.prototype.handleChange = function() {
	/**
	  * to understand why the use of self see the link below
	  *
	  * @see http://stackoverflow.com/questions/8299299/object-oriented-javascript-ajax-class
	  *
	  */
    try {
        var self = this;
        return function(){
            if (( self.xmlhttp.readyState === 4 ) && ( self.xmlhttp.status === 200 )) {
                self.logIf("Response received from server.");
                self.handleServerResponse();
            }
        };
    } catch (e) {
        this.alertIf( e.message );
        this.logIf( e.message );
    }
};
/**
  * Sends the responseText to an element innerHTML
  */
AjaxHandler.prototype.handleServerResponse = function() {
	try {
          if ( !this.element ) {
              this.logIf("Response sent.");
              this.response = JSON.parse(this.xmlhttp.responseText);
              this.after(this.response);
        } else {
            var element = document.getElementById( this.element ),
                xhr = this.xmlhttp;
            if ( !this.transition ) {
                element.innerHTML = xhr.responseText;
            } else {
                element.addEventListener(
                    "transitionend", 
                    function(){
                        if ( element.style.opacity == 0 ) {
                            element.innerHTML = xhr.responseText;
                            element.style.opacity = 1;
                        }
                }, true);
                document.getElementById( this.element ).style.opacity = 0;
            }
            this.after(this.response);
            this.logIf("The element has received the responseText.");
        }
	} catch (e) {
		this.alertIf("unable to read server response!(" + e.message + ")");
        console.log(e);
	}
};
/**
 * Creates an alert window if this.alert is true
 */
AjaxHandler.prototype.alertIf = function( message ) {
    if ( this.alert ) {
        alert( message );
    }
};
/**
 * Generates console logs if this.log value is true
 */
AjaxHandler.prototype.logIf = function( message ) {
    if ( this.log ) {
        console.log( message );
        if ( this.element ) {
		  console.log( "element: " + this.element );
        }
        if ( this.url ) {
            console.log( "url: " + this.url );
        }
        if ( this.method ) {
            console.log( "method: " + this.method );
        }
        if ( this.params ) {
            console.log( "params: " + this.params );
        }
    }
};
/**
 * Checks if a variable is an object
 * 
 * @return bool
 */
AjaxHandler.prototype.isObject = function( params ) {
    try {
        return ( !!params ) && ( params.constructor === Object );
    } catch (e) {
        this.alertIf(e.message);
        this.logIf(e.message);
    }
};
/**
 * Checks if a variable is an array object
 * 
 * @return bool
 */
AjaxHandler.prototype.isArray = function( params ) {
    try {
        return ( !!params ) && ( params.constructor === Array );
    } catch (e) {
        this.alertIf(e.message);
        this.logIf(e.message);
    }
};
/**
 * Checks if the param informed is an object or array, and 
 * convert it to an GET or POST query format.
 * 
 * @return string GET query format
 */
AjaxHandler.prototype.transformParam = function( params ) {
    try {
        if( this.isObject( params ) || this.isArray( params )){
            var param,
                data;
            for ( param in params ) {
                data = data + param + '=' + params[param] + '&';
            }	
            return data;
        } else {
            return params;
        }    
    } catch (e) {
        this.alertIf(e.message);
        this.logIf(e.message);
    }
};