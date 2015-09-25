'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {

    $scope.messages = [];
    $scope.newMessage ='';



    MessageService.getMessages().then(function(response){
      console.log(response);
      $scope.messages = response.data;
    })

    $scope.addMessage = function(newMessage){

      MessageService.addMessage(newMessage).then(function(data){

        $scope.messages = data;
    
      });
    };


  });
