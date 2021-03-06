'use strict';
const swal = require('sweetalert');

const EditFilesCtrl = (app) => {

  app.controller('EditFilesCtrl', ['$window', '$scope', '$rootScope', 'Upload', 'editFilesRESTResource', ($window, $scope, $rootScope, Upload, resource) => {
    $scope.errors = [];
    $scope.files = [];
    $scope.filesToDelete = {};
    const imageExtensions = [ '.tif', 'tiff', '.gif', 'jpeg', '.jpg', '.jif', '.jfif', '.jp2', '.jpx', '.j2k', '.j2c', '.fpx', '.pcd', '.png'];
    $scope.fileDisplayHeight = { 'height': 'auto' };
    const FileResources = resource();

    $scope.getAllFiles = () => {
      FileResources.getAllFiles( (err, data) => {
        if (err) {
          return $scope.errors.push({msg: 'could not retrieve files'});
        }
        $scope.files.length = 0;
        for (let i = 0, len = data.length; i < len; i++) {
          let fileExtension = data[i].slice(-4).toLowerCase();
          let isImage = true;
          if (imageExtensions.indexOf(fileExtension) === -1) {
            isImage = false;
          }
          $scope.files.push({fileName: data[i], fileLink: '/uploads/' + data[i], isImage: isImage});
        }
      })
    }

    $scope.deleteFiles = (files) => {
      let deleteCount = 0;
      let fileList = '';
      for (let key in files) {
        if (files[key] === true) {
          deleteCount++;
          fileList += key + '\n';
        }
      }
      swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false,
        customClass: 'sweet-alert-hide-input'
      },
      function(){
        FileResources.deleteFiles (files, (err, data) => {
          if (err) {
            return $scope.errors.push({msg: 'could not delete files'});
          }
          deleteCount = 0;
          fileList = '';
          $scope.files.length = 0;
          $scope.getAllFiles();
        })
        swal({
          title: 'Deleted!', 
          text: 'Your imaginary file has been deleted.',
          type: 'success',
          customClass: 'sweet-alert-hide-input'
        });
      });
      /*let testQuestion = $window.confirm(`Are you sure you want to delete ${deleteCount} files?\n ${fileList}`);
      if (testQuestion) {
        
      }
*/
    }

  }]);
};

module.exports = EditFilesCtrl;