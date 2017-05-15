const app = angular.module('myApp', []);

app.filter('myDateFormat', function myDateFormat($filter) {
    return function (text) {
        if (text === undefined) {
            return 'Incorrect Format/Missing data';
        } else {
            let dateObj = new Date(text);
            return $filter('date')(dateObj, "dd MMMM yyyy");
        }
    }
});

app.component('cpmuTable', {
    bindings: {
        'data': '='
    },
    template: '<div class="btn-group pull-left">' +
    '<button ng-hide="vm.showQuarterly" ng-click="vm.quartToggle()" class="btn">Show Quarterly</button>' +
    '<button ng-show="vm.showQuarterly" ng-click="vm.quartToggle()" class="btn">Show Monthly</button>' +
    '<br><br>' +
    '</div>' +
    '<table>' +
    '<thead>' +
    '<tr>' +
    '<th ng-hide="vm.showQuarterly">Month</th>' +
    '<th ng-show="vm.showQuarterly">Quarter</th>' +
    '<th>CPMU</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr ng-repeat="item in vm.cpmu()">' +
    '<td style="width:50%;" ng-show="vm.showQuarterly">{{item["date"]}}</td>' +
    '<td style="width:50%;" ng-hide="vm.showQuarterly">{{item["Value.date"] | myDateFormat}}</td>' +
    '<td style="width:50%;">{{item.cpmu}}</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>',

    controllerAs: "vm",
    controller: function CpmuController() {
        var vm = this;

        vm.$onInit = function() {

            vm.original = vm.data;
            vm.quarterly = [];
            vm.items = vm.data;

            if (vm.data !== undefined) {
                let years = 0;
                let quarter = 1;
                let totalC = 0;
                let totalUS = 0;

                for (let i = 1; i < vm.data.length; i++) {

                    totalC += vm.data[i - 1]['Complaints'];
                    totalUS += vm.data[i - 1]['UnitsSold'];

                    if (i % 3 === 0) {
                        vm.quarterly.push({"date": quarter, "cpmu": ((totalC / totalUS) * 1000000).toPrecision(10)});
                        totalC = 0;
                        totalUS = 0;
                        quarter++;
                    }

                    if (i % 12 === 0) {
                        years++;
                        quarter = 1;
                    }
                }
            }
        };

        vm.quartToggle = function () {
            // switch between original and computed data
            vm.showQuarterly = !vm.showQuarterly;
            if (vm.showQuarterly) {
                vm.items = vm.quarterly;
            } else {
                vm.items = vm.original;
            }
        };

        vm.cpmu = function () {
            if (vm.items !== undefined) {
                return vm.items.map(item => {
                    if (item.hasOwnProperty('Complaints') && item.hasOwnProperty('UnitsSold')) {
                        if (item.Complaints === 0 || item.UnitsSold === 0) {
                            item.cpmu = (0).toFixed(5);
                        } else {
                            item.cpmu = ((item.Complaints / item.UnitsSold) * 1000000).toPrecision(10);
                        }
                    }
                    return item;
                });
            }
        };

    },
});
