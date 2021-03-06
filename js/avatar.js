'use strict';

(function () {
  var typesOfFile = [
    'gif',
    'jpg',
    'jpeg',
    'png'
  ];

  var imageSizes = {
    WIDTH: '140',
    HEIGHT: '140'
  };

  var fileAvatarChooser = document.querySelector('.notice__photo input[type=file]');
  var filePhotoChooser = document.querySelector('.form__photo-container input[type=file]');
  var avatarPreview = document.querySelector('.notice__preview img');
  var photoPreview = document.querySelector('.form__photo-container');

  var imageInserting = {
    'avatar': function (imageSource) {
      avatarPreview.src = imageSource;
    },
    'images': function (imageSource) {
      var image = document.createElement('img');
      image.src = imageSource;
      image.width = imageSizes.WIDTH;
      image.height = imageSizes.HEIGHT;
      photoPreview.appendChild(image);
    }
  };

  var onInputChange = function (evt) {
    var file = evt.target.files[0];
    if (file) {
      var fileName = file.name;
      var matches = typesOfFile.some(function (item) {
        return fileName.endsWith(item);
      });
    }

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        imageInserting[evt.target.id](reader.result);
      });

      reader.readAsDataURL(file);
    }
  };

  fileAvatarChooser.addEventListener('change', onInputChange);
  filePhotoChooser.addEventListener('change', onInputChange);
}());
