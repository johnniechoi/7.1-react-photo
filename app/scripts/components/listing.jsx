var React = require('react');

var ImageListing = React.createClass({
  handleDelete: function(e){
    this.props.deleteImage(this.props.model);
  },
  handleEdit: function(e){
    this.props.editImage(this.props.model);
  },
  render: function(){
    var imageSrc = this.props.model.get('url');
    console.log(imageSrc);
    var imageCaption = this.props.model.get('caption');

    return (
      <div>
        <img src={imageSrc} alt="image box!"/>
         <div className="lower-box well">
          <div className="caption-box">{imageCaption}
         </div>
         <p><a href="#" onClick={this.handleEdit} className="btn btn-primary" role="button">Edit</a>
            <a href="#" onClick={this.handleDelete} className="btn btn-default" role="button">Remove</a></p>
       </div>
      </div>
    )
  }
});

module.exports = {
  ImageListing: ImageListing
}
