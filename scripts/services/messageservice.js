'use strict';

angular.module('chattyApp')
  .factory('MessageService', function MessageService($q, $http) {

    return {

      getMessages: function(){
        var deferred = $q.defer();
        $http({
          method: 'GET',
           url:'http://localhost:8887'
         }).success(function(data){

          deferred.resolve(data);
        });
        return deferred.promise;
      },

      addMessage: function(newMessage) {


        var date = new Date();
        var hours = date.getHours();
        var end = '';

        if(hours < 12){
          end = 'am';}
        else if(hours > 12){
          end = 'pm';
          hours = (hours - 12);
        }
        var mins = date.getMinutes();
        if(mins.toString().length == 1){ mins = "0" + mins.toString();}
        var nowTime = hours.toString() + ':' + mins.toString() + end;




        var deferred = $q.defer();
        $http({
          method: "POST",
          url: 'http://localhost:8887',
          data: {message: newMessage, time: nowTime}

        }).success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      }


    };
  });
