(function() {
  var root;
  root = typeof $toolkit != "undefined" && $toolkit !== null ? $toolkit : this;
  $self.tool = function() {
    var toolName, toolOrdering;
    root.command.selectionTools.tool.apply(this, [toolName = 'uri', toolOrdering = 5700]);
    this.getSupportedTransformers = function() {
      return ['encode', 'decode'];
    };
    this.trigger = function(transformer, string) {
      switch (transformer) {
        case 'encode':
          return encodeURIComponent(string);
        case 'decode':
          return decodeURIComponent(string);
      }
      return null;
    };
    return this;
  };
  $self.registerAll = function() {
    return new $self.tool().register();
  };
}).call(this);
