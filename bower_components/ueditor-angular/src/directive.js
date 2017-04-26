angular.module('ueditor-angular', [])
    .directive('ueditorAngular', ["$timeout", function ($timeout) {
        return {
            restrict: 'E',
            require: 'ngModel',
            template: '<textarea></textarea>',
            scope: {
                setting: '=',
                onReady: "&",
                onContentChange: "&"
            },
            link: function ($scope, element, attrs,  ctrl) {
                var ueditorAngular = (function(){
                    function ueditorAngular(element, setting){
                        this._element = element;
                        this._setting = setting || {};
                        this.init();
                        this.bindRender();
                        this.bindDestroy();
                    }

                    ueditorAngular.prototype.init = function(){
                        var _this = this;
                        if(typeof UE === 'undefined'){
                            console.error('UEditor is missing');
                            return;
                        }
                        var ueditor =  new UE.ui.Editor(this._setting);
                        ueditor.render(this._element);
                        ueditor.addListener('ready', function(){
                            _this._ueditor = ueditor;
                            $scope.onReady({
                                $ueditor: ueditor
                            });
                        });
                        ueditor.addListener('contentChange', function(){
                            $timeout(function(){
                                ctrl.$setViewValue(ueditor.getContent());
                                $scope.onContentChange({
                                    $content: ueditor.getContent()
                                });
                            });
                        });
                    };
                    ueditorAngular.prototype.setContent = function(content){
                        if(this._ueditor){
                            this._ueditor.setContent(content);
                        }
                    };
                    ueditorAngular.prototype.bindRender = function(){
                        var _this = this;
                        ctrl.$render = function(){
                            _this.setContent(ctrl.$isEmpty(ctrl.$viewValue) ? '':ctrl.$viewValue);
                        }
                    };
                    ueditorAngular.prototype.bindDestroy = function(){
                        var _this = this;
                        $scope.$on('$destroy', function () {
                            if(_this._ueditor){
                                _this._ueditor.destroy();
                                _this._ueditor = null;
                            }
                        });
                    };
                    return ueditorAngular;
                })();

                var container = element.children()[0] || element[0];
                new ueditorAngular(container, $scope.setting);
            }
        }
    }]);