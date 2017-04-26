var app = angular.module('app');
app.controller('demo', ['$scope', function ($scope) {
    console.log("------");
    $scope.onReady = function ($ueditor) {
        console.log("onReady");
        console.log($ueditor);
    };

    $scope.onContentChange = function ($content) {
        console.log("onContentChange");
        console.log($content);
    }

    $scope.setting = {
        toolbars: [
            ['fullscreen', 'source', 'undo', 'redo', 'bold']
        ],
        autoHeightEnabled: true,
        autoFloatEnabled: true
    };
}]);