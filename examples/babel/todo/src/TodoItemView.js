(function(app, owl) {
    class TodoItemView extends owl.View{
        constructor(options) {
            super({
                className: 'v-todo',
                // you can use any template engine here
                template: function (data) {
                    return (
                        '<label class="checkbox">' +
                        '<input data-element="checkbox" type="checkbox" ' + (data.isDone ? 'checked="checked"' : '') + ' />' +
                        '<span>' + data.title + '</span>' +
                        '</label>'
                    );
                },
                events: {
                    'change $checkbox': 'change'
                },
                model: options.model
            });
            // update links to data-element
            // and update special events (submit, focus, blur)
            this.render();
            this.initListeners();
        }
        render() {
            this.el.innerHTML = this.template(this.model.getData());
            this.update();
        };
        change(element, event) {
            event.preventDefault();
            this.model.patch({
                isDone: element.checked
            });
        };
        initListeners() {
            this.model.on('change', () => {
                this.render();
            });
        };
    }
    app.TodoItemView = TodoItemView;
})(app, owl);
