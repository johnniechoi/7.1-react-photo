var _ = require('underscore');
var React = require('react');

var Navigation = React.createClass({
  getInitialState: function(){
    return {
      url: '',
      caption: ''
    };
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.model){
      this.setState({
        url: nextProps.model.get('url'),
        caption: nextProps.model.get('caption')
      });
    }
  },
  handleUrlChange: function(e){
    var urlInputValue = e.target.value;
    this.setState({url: urlInputValue});
  },
  handleCaptionChange: function(e){
    var captionValue = e.target.value;
    this.setState({caption: captionValue});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var imageData = {url: this.state.url, caption: this.state.caption};

    if(this.props.model){
      this.props.editImage(this.props.model, imageData);
    }else{
      this.props.addImage(imageData);
    }

    this.setState({url: '', caption: ''});
  },
  handleClick: function(e){
    e.preventDefault();
    this.showForm = !this.showForm;
    this.forceUpdate();
  },
  render: function(){
    // console.warn(this.showForm);

    var display;
    if(this.showForm){
      display = (
        <div className="main-header">
          <form onSubmit={this.handleSubmit} className="well" action="index.html" method="post">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Photo</label>
              <input onChange={this.handleUrlChange} name="photo" type="text" className="form-control" id="formGroupExampleInput" value={this.state.url} placeholder="www.unplash.it/600/600"/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Caption</label>
              <input onChange={this.handleCaptionChange} name="caption" type="text" className="form-control" id="caption" value={this.state.caption} placeholder="Another beautiful day in paradise..."/>
            </div>
            <button type="submit" className="button btn btn-success"> {this.props.model ? 'Edit' : 'Add'}Image</button>
          </form>
        </div>
    );
    }

    return (
      <div className="well main-header">
        {display}
        <span onClick={this.handleClick}>
          <i className="glyphicon glyphicon-plus"></i>
        </span>
      </div>
    );
  }
});

module.exports = {
  Navigation: Navigation
}
