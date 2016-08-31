'use strict';

const AdminCreateEventCtrl = (app) => {
	app.controller('AdminCreateEventCtrl', ['$rootScope', '$scope', '$http', 'Upload', '$window', 'createEventRESTResource', ($rootScope, $scope, $http, Upload, $window, resource) => {
		$scope.errors = [];
		$scope.theEvents = [];
		$scope.theSpeakers = [];
		$scope.newEvent = {};
		$scope.hideModal = true;
    $scope.hideVenueModal = true;
    $scope.hideEventPreview = true;
    $scope.speakersAdded = 0;
    $scope.displaySpeakerDivStyle = false;
    $scope.previewSpeakers = [];


    let DataForEditingEvents = resource();

    if ($scope.newEvent.newEventName && $scope.newEvent.eventAboutTabText) {
      $scope.displaySpeakerDivStyle = false;

    }

    $scope.getEvents = () => {

      DataForEditingEvents.getAllEvents( (err, data) => {
        if (err) {
          return $scope.errors.push({msg: 'could not retrieve events'});
        };
        
        $scope.theEvents = data;
      })
      
    
    };

    $scope.getAllSpeakers = () => {

      DataForEditingEvents.getAllSpeakers( (err, speakers) => {
        if (err) {
          return $scope.errors.push({msg: 'could not retrieve speakers'});
        }

        $scope.theSpeakers = speakers;
      })
    };

    $scope.createNewEvent = (newEventData) => {
      if ($rootScope.eventHeaderImg.name) {
        newEventData.newEventHeaderImage = $rootScope.eventHeaderImg.name ? $rootScope.eventHeaderImg.size + '-' + $rootScope.eventHeaderImg.name : '';
      }
      if ($rootScope.eventVenueImg.name) {
        newEventData.newEventVenueImg = $rootScope.eventVenueImg.name ? $rootScope.eventVenueImg.size + '-' + $rootScope.eventVenueImg.name : '';
      }

      DataForEditingEvents.createEvent(newEventData, (err, data) => {
        if (err) {
          $scope.errors.push({msg: 'could not save newEvent: ' + $scope.newEvent.eventName});
        }
        if (!err) {

          $scope.newEvent = {};
          $rootScope.eventHeaderImg = undefined;
          $rootScope.eventVenueImg = undefined;

          $window.location.reload();
          alert('Event Saved');
        }
      });
    };

    $scope.closeModalWindow = () => {
      $scope.hideModal = !$scope.hideModal;
    };
    $scope.closeVenueModal = () => {
      $scope.hideVenueModal = !$scope.hideVenueModal;
    };

    $scope.toggleEventPreview = () => {
      $scope.hideEventPreview = !$scope.hideEventPreview;
    };

    $scope.getPreviewSpeakers = (theSpeakers) => {
      if ($scope.newEvent.speakers) {
        $scope.displaySpeakerDivStyle = true;
        let keysArr = Object.keys($scope.newEvent.speakers);
        return $scope.theSpeakers.filter( (speaker) => {
          $scope.speakersAdded++;
          return keysArr.indexOf(speaker.id.toString()) !== -1 && $scope.newEvent.speakers[speaker.id] !== null;
        });
        
      }
    }

   /* $scope.$watchCollection( $scope.previewSpeakers, (newVal, oldVal) => {
      alert('new: ', newVal, '   old:   ', oldVal);
      } )*/

	}])
}

module.exports = AdminCreateEventCtrl;