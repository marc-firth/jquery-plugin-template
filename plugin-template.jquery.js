/*
 * Plugin Template for jQuery
 *
 */
(function($) {

    /**
     * The Main Class
     * @param {DOM Element} t The Document
     * @param {JSON} p The properties that will override the defaults below.
     */
    $.addCountryPicker = function(t, p) {

        /* return if we have already instantiated this plugin */
        if (t.grid) return false;

        /**
         * Apply default properties and override them with any that have been passed at runtime.
         * @type {JSON}
         */
        p = $.extend({
            sample: "#var"
        }, p);

        /**
         * Create grid class.
         * You can use another name other than "grid" or "g" if you prefer, but you must change it throughout the plugin.
         */
        var g = {
            someValue: null,
            init: function() {
                g.someValue = true; //example assignment
                g.anotherFunction('value'); //example method call
            },
            anotherFunction: function(arg_name) {

            }
        };

        /**
         * Make the properties and grid functions externally accessible.
         */
        t.p = p;
        t.grid = g;

        /**
         * Initialize the plugin (i.e.: Call the function above)
         * You can add additional code here to be run when the doc is ready.
         */
        g.init();

        return t;
    };

    /**
     * Standard variables for doc load
     */
    var docloaded = false;

    $(document).ready(function() {
        docloaded = true
    });

    /*
     * This is the main function call. Here we extend jquery to make this plugin callable.
     *
     * $("#div_id").countryPicker();
     *
     */
    $.fn.countryPicker = function(p) {
        return this.each(function() {
            if (!docloaded) {
                var t = this;
                $(document).ready(function() {
                    $.addCountryPicker(t, p);
                });
            } else {
                $.addCountryPicker(this, p);
            }
        });
    };

    /*
     * An additional function binding example. This enables you to call the following:
     *
     * $("#div_id").countryPicker();
     * $("#div_id").exampleExternalFunc();
     *
     */
    $.fn.exampleExternalFunc = function (p) {
        return this.each(function () {
            var t = this;
            $(document).ready(function() {
                if (t.grid) t.grid.anotherFunction(); // See function call above
            });
        });
    }; //end

})(jQuery);

