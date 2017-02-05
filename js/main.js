
    $(document).ready(function() {

        Handlebars.registerHelper('times', function(n, block) {
            var accum = '';
            for(var i = 0; i < n; ++i)
                accum += block.fn(i);
            return accum;
        });


            var template2 = Handlebars.compile($("#hb-job").html());
        Handlebars.registerPartial("icon", $("#hb-icon-wrapper").html());
        Handlebars.registerPartial("contextCheck", $("#hb-context-check").html());

        var html2 = template2(data2);

        // $('#hb-test').append(html);

        $('#hb-test').append(html2);
    });