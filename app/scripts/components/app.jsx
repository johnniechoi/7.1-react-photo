var React = require('react');
var Image = require('../models/model.js').Image;
var ImageCollection = require('../models/model.js').ImageCollection;
var FormComponent = require('../components/form.jsx').Navigation;
var Listing = require('../components/listing.jsx').ImageListing;


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageCollection = new ImageCollection();

    imageCollection.fetch().then(function(){
      self.setState({collection: imageCollection});

    });

    return {
      imageToEdit: false,
      collection: imageCollection,
      showForm: false
    };
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
    // this.forceUpdate();
  },
  deleteImage: function(image){
    image.destroy();
    this.setState({collection: this.state.collection});
  },
  render: function(){
    var self = this;
    this.setState.FormComponent

    var imageList
    var imageList = this.state.collection.map(function(image){
      return (
        <Listing
          key={image.get("_id")}
          model={image}
          editImage={self.editImage}
          deleteImage={self.deleteImage}

        />
      );
    });

    return(
      <div>
        <header className="container-fluid main-header">
          <a className="add-image" href="#" onClick={this.handleToggleForm}></a>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FormComponent model={this.state.imageToEdit} addImage={this.addImage} editImage={this.editImage}/>
            </div>
          </div>

          <div className="row col-md-offset-2 col-md-8 well">
            {imageList}
          </div>

        </div>
      </div>
      )
  }

});

module.exports = {
  AppComponent: AppComponent
}
