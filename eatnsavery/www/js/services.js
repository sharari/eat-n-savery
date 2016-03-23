angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
      $scope.dis = [
                    {
                        "id":1,
                         "title" : 'Chester Cab Pizza',
                         "iconoff":'ion-ios-photos',
                         "iconon":'ion-ios-photos',
                         "url":'chester',
                         "tabname":"tab-dash",
                         "imageurl":"img/restaurants/chester.png",
						 "admins":[
							 "joe@aol.com",
							 "bob@aol.com",
							 "joe@aol.com",
						 ],
                    },
                    {
                        "id":2,
                         "title" : 'Deli Sandros',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/deli1.png"
                    },
                    {
                        "id":3,
                         "title" : 'Hans',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/hans.png"
                    },
                    {
                        "id":4,
                         "title" : 'Hogans Hideaway',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/hogans.png"
                    },
                    {
                        "id":5,
                         "title" : 'Jines Restaurant',
                         "iconoff":'ion-android-contact',
                         "iconon":'ion-android-contact',
                         "url":'cenquiry',
                         "tabname":'tab-chats',
                         "imageurl":"img/restaurants/jines.png"
                    },
                    {
                        "id":6,
                         "title" : 'Mozzeroni',
                         "iconoff":'ion-android-star-half',
                         "iconon":'ion-android-star-half',
                         "url":'top5',
                         "tabname":'tab-top5',
                         "imageurl":"img/restaurants/mozzeroni.png"
                    }
  ];
	
	
	return $resource('http://localhost:3000/sessions/:sessionId');
});