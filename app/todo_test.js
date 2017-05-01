describe('todo', function() {
  beforeEach(module('app'));

  describe('todo controller', function() {

    it('should format name', inject(function($componentController) {
      var todo = {
        name: 'name',
        done: false
      };

      var todoCtrl = $componentController('todo', {}, {todo: todo});
      var changes = new StubChanges().addInitialChange('todo', todo).build();
      todoCtrl.$onChanges(changes);
      todoCtrl.$onInit();

      expect(todoCtrl.formattedTodoName).toBe('Name');
    }));
  });
});
