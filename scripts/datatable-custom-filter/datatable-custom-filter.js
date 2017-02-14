(function($) {
    $.fn.customDataTableSearch = function(options = null) {
        //Selector for datatable.
        if (options !== null) {
            if (options.dataTable !== undefined && options.dataTable !== null) {
                this.on('keyup', function(e) {
                    options.dataTable.fnFilter(this.val());
                });
            }
            if (options.hideDefault) {
                $(".dataTables_filter").addClass('hide');
            }
        }
        return this;
    };
}(jQuery));